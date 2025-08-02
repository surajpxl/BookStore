import React from "react";

const newArrivals = [
  {
    name: "The Psychology of Money",
    image: "https://www.shutterstock.com/image-photo/setif-algeria-october-01-2023-260nw-2370325523.jpg",
    price: 399,
  },
  {
    name: "Ikigai",
    image: "https://np-live-21.slatic.net/kf/S50da1360f2bd4495a6cca39a353f369fI.jpg",
    price: 299,
  },
  {
    name: "Rich Dad Poor Dad",
    image: "https://studentstore.pk/cdn/shop/files/B_1_4.jpg?v=1730545222&width=530",
    price: 350,
  },
  {
    name: "Atomic Habits",
    image: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/61efadc8-8651-4795-9f56-6a9cae7a3e67/atomic-habits-gallery-hi-res-04-a.jpg",
    price: 450,
  },
];

function NewArrivals() {
  return (
    <section className="py-10 max-w-screen-2xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">New Arrivals</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {newArrivals.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-lg shadow hover:scale-105 transition cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-3 text-center">
              <p className="font-semibold">{item.name}</p>
              <p className="text-pink-500">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
