import os
from PIL import Image

image_path = r"c:\Users\user\Documents\Portfolio\Portfolio Website\frontend\src\assets\professional image.png"
output_path = r"c:\Users\user\Documents\Portfolio\Portfolio Website\frontend\src\assets\professional-image.webp"

def optimize_image():
    if os.path.exists(image_path):
        with Image.open(image_path) as img:
            # Resize if very large, maintaining aspect ratio
            img.thumbnail((800, 800), Image.Resampling.LANCZOS)
            
            # Save as WebP with optimized settings
            img.save(output_path, "WEBP", quality=80, optimize=True)
            
            original_size = os.path.getsize(image_path)
            new_size = os.path.getsize(output_path)
            print(f"Optimized image from {original_size/1024:.2f} KB to {new_size/1024:.2f} KB")
            
            # Optionally delete the original if we don't need it, but let's keep it safe and just update the import
            # os.remove(image_path)
    else:
        print(f"Image not found at {image_path}")

if __name__ == "__main__":
    optimize_image()
