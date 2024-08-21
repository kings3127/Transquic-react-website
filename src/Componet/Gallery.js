import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const imageDetails = [
    { url: "https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/2837faa4-77b8-4865-a60f-069cabdb3200/w=187,dpr=1.5", name: "Economy Taxi" },
    { url: "https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/572c8b94-838e-4f92-de97-c2a42fab1e00/w=187,dpr=1.5", name: "Standard Class" },
    { url: "https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/34c16f51-a36a-425c-a888-c7d64e97b900/w=187,dpr=1.5", name: "First Class" },
    { url: "https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/d56982a7-35dc-47ff-81d7-a80841319a00/w=187,dpr=1.5", name: "SUV" },
    { url: "https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/d69a50d1-e56e-458b-3dfa-f8a7f30e0f00/w=187,dpr=1.5", name: "Van Standard" },
    { url: "https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/0fb9305d-7262-41b3-9416-03877bd80b00/w=187,dpr=1.5", name: "Van First Class" },
    { url: "https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/835b35f9-c772-474e-8e46-7d2b90d60a00/w=187,dpr=1.5", name: "Minibus" }
  ];

  return (
    <div className="car-container">
      <h1>Maximum comfort and safety for your trip</h1>
      <p>Licensed vehicles, professional drivers</p>
      <div className="image-gallery">
        {imageDetails.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.url} alt={image.name} className="car-image" />
            <p className="car-name">{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
