import { useState } from "react";
import image1 from "../assets/images/image-1.webp";
import image2 from "../assets/images/image-2.webp";
import image3 from "../assets/images/image-3.webp";
import image4 from "../assets/images/image-4.webp";
import image5 from "../assets/images/image-5.webp";
import image6 from "../assets/images/image-6.webp";
import image7 from "../assets/images/image-7.webp";
import image8 from "../assets/images/image-8.webp";
import image9 from "../assets/images/image-9.webp";
import image10 from "../assets/images/image-10.jpeg";
import image11 from "../assets/images/image-11.jpeg";

const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: image10 },
    { id: 11, src: image11 },
    // Add more images as needed
  ]);

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (imageId) => {
    const selectedIndex = selectedImages.indexOf(imageId);
    if (selectedIndex === -1) {
      setSelectedImages([...selectedImages, imageId]);
    } else {
      const updatedSelection = [...selectedImages];
      updatedSelection.splice(selectedIndex, 1);
      setSelectedImages(updatedSelection);
    }
  };

  return (
    <div className="container mx-auto mt-5 ">
      <div className="grid grid-cols-4 gap-4 px-20">
        <div className="row-span-1 col-span-1">
          <img
            src={images[10].src}
            alt={`Image ${images[0].id}`}
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-2 grid grid-cols-3 gap-4">
          {images.slice(1).map((image) => (
            <div key={image.id} className="relative">
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className={`cursor-pointer ${
                  selectedImages.includes(image.id) ? "border-4 border-blue-500" : ""
                }`}
                onClick={() => handleImageClick(image.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
