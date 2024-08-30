// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory store for request counts
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

const RATE_LIMIT = 100; // Limit each IP to 100 requests
const WINDOW_SIZE_IN_MINUTES = 15; // 15 minutes

export function middleware(req: NextRequest) {
  const ip = req.ip || req.headers.get('x-forwarded-for') || '127.0.0.1';
  const currentTime = Date.now();

  // Check if the IP is already in the map
  if (rateLimitMap.has(ip)) {
    const { count, timestamp } = rateLimitMap.get(ip)!;

    // Check if the request is within the rate limit window
    if (currentTime - timestamp < WINDOW_SIZE_IN_MINUTES * 60 * 1000) {
      if (count >= RATE_LIMIT) {
        return new NextResponse('Too many requests, please try again later.', { status: 429 });
      } else {
        // Increment the count
        rateLimitMap.set(ip, { count: count + 1, timestamp });
      }
    } else {
      // Reset the count and timestamp if outside the window
      rateLimitMap.set(ip, { count: 1, timestamp: currentTime });
    }
  } else {
    // Add the IP to the map if it's not already there
    rateLimitMap.set(ip, { count: 1, timestamp: currentTime });
  }

  return NextResponse.next();
}

// Apply to all API routes
export const config = {
    matcher: '/api/(.*)', // Matches all routes under /api, including nested and dynamic routes
  }