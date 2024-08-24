/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
       
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.pexels.com',
             
            },
            {
              protocol: 'https',
              hostname: 'via.placeholder.com',
             
            },
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
             
            },
            {
                protocol: 'https',
                hostname: 'robohash.org',

            },
          ],
    }
};

export default nextConfig;
