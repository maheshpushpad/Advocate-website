import React from 'react';

import a1 from '../assets/Images/Gallery/a1.jpeg';
import a2 from '../assets/Images/Gallery/a2.jpeg';
import a3 from '../assets/Images/Gallery/a3.jpg';
import a4 from '../assets/Images/Gallery/a4.jpg';
import a5 from '../assets/Images/Gallery/a5.jpg';
import a6 from '../assets/Images/Gallery/a6.webp';
import a7 from '../assets/Images/Gallery/a7.jpeg';
import a8 from '../assets/Images/Gallery/a8.jpg';
import a9 from '../assets/Images/Gallery/a9.webp';
import a10 from '../assets/Images/Gallery/a10.webp';
import a11 from '../assets/Images/Gallery/a11.png';
import a12 from '../assets/Images/Gallery/a12.jpg';


const GallerySection = () => {
  // Define photos array directly
  const photos = [
    {
      id: 1,
      name: "Photo 1",
      url: a1
    },
    {
      id: 2,
      name: "Photo 2",
      url: a2
    },
    {
      id: 3,
      name: "Photo 3",
      url: a3
    },
    {
      id: 4,
      name: "Photo 4",
      url: a4
    },
    {
      id: 5,
      name: "Photo 5",
      url: a5
    },
    {
      id: 6,
      name: "Photo 6",
      url: a6
    },
    {
      id: 7,
      name: "Photo 7",
      url: a7
    },
    {
      id: 8,
      name: "Photo 8",
      url: a8
    },
    {
      id: 9,
      name: "Photo 9",
      url: a9
    },
    {
      id: 10,
      name: "Photo 10",
      url: a10
    },
    {
      id: 11,
      name: "Photo 11",
      url: a11
    },
    {
      id: 12,
      name: "Photo 12",
      url: a12
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
           <h1 className="text-3xl font-bold text-center text-black border-2 mx-auto bg-white w-[60%] border-black rounded-xl py-2 mb-8">GALLERY</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="border rounded-lg mb-3 overflow-hidden shadow-xl border-gray-50 hover:shadow-2xl hover:scale-95 duration-300" >
            <img src={photo.url} alt={photo.name} className="w-full h-48 object-cover object-center" />
            {/* <div className="p-4 bg-sky-200">
              <h2 className="text-lg text-center font-semibold">{photo.name}</h2>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
