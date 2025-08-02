import React from "react";

const categories = [
  { name: "Fiction", image: "https://i.pinimg.com/736x/eb/82/64/eb826431f03d1c1c7e36b068abebdf5f.jpg" },
  { name: "Self-Help", image: "https://imagedelivery.net/mt6ddPFlr8xjCmAix26mMw/41625_9ce59b29-2725-439d-8034-7f12e7bffba9/public" },
  { name: "Education", image: "https://static.vecteezy.com/system/resources/thumbnails/051/739/228/small_2x/backpack-with-books-and-pencils-on-blue-background-photo.jpg" },
  { name: "Comics", image: "https://e0.pxfuel.com/wallpapers/73/153/desktop-wallpaper-comic-strip-comic-book.jpg" },
];

function Categories() {
  return (
    <section
      className="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 dark:from-purple-900 dark:via-gray-900 dark:to-pink-900"
    >
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Explore by Category
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group perspective cursor-pointer"
            >
              <div className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden transition-transform duration-500 group-hover:rotate-y-12 group-hover:-translate-y-2 group-hover:shadow-2xl bg-gradient-to-br from-pink-400 to-purple-500">
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Overlay Name */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <p className="text-white font-semibold text-lg drop-shadow-lg">
                    {cat.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
