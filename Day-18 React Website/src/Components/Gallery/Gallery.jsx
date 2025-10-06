import React, { useEffect, useState } from "react";
import images from "../../assets/Gallery.json";

function Gallery() {
  const [filterdImages, setFilteredImages] = useState(images);
  const [category, setCategory] = useState("All");

  const filter = () => {
    if (category === "All") {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter((img) => img.category === category));
    }
  };

  useEffect(() => {
    filter();
  }, [category]);

  return (
    <div className="py-4 px-5">
      <h2 className="text-3xl text-white font-bold text-center py-2">
        Relive the iconic moments, legendary players, and unforgettable innings
        – all in one gallery.
      </h2>
      <div className="category flex justify-around items-center my-4">
        {["All", "Players", "Team Moments", "Trophies", "Fans", "Stadiums"].map(
          (cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-3xl font-bold shadow-lg shadow-black hover:scale-105 transition-all ease-in-out duration-200 ${
                cat === category
                  ? "bg-blue-700 text-white shadow-xl scale-105"
                  : "bg-white"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          )
        )}
      </div>
      <div className="Gallery columns-3 gap-4">
        {filterdImages.map((img, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img
              src={img.imgURL}
              alt={img.description}
              className="w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
