//@ts-nocheck
import * as Vibrant from 'node-vibrant'; // Using namespace import

const getColorFromImage = async (imageUrl: string) => {
  try {
    const palette = await Vibrant.from(imageUrl).getPalette();
    // Accessing the dominant color

    const rgb = palette.Vibrant?.hex;
    console.log(rgb); // Access the RGB values
    return rgb; // Access the RGB values
    
  } catch (error) {
    console.error('Error extracting color:', error);
  }
};
export default getColorFromImage