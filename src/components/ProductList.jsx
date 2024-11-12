// src/components/Products.js
import React from 'react';

const productsData = [
  {
    id: 1,
    name: "Watch Nike Series 7",
    brand: "Nike",
    stock: 100,
    sales: 1234,
    price: "$399.00",
    imageUrl: "https://placehold.co/40x40", // mock up
  },
  {
    id: 2,
    name: "iPhone 13 Pro",
    brand: "Apple",
    stock: 2,
    sales: 500,
    price: "$2,999.00",
    imageUrl: "https://placehold.co/40x40", // mock up image
  },
  {
    id: 3,
    name: "iPhone 12 Mini",
    brand: "Apple",
    stock: 110,
    sales: 789,
    price: "$2,699.00",
    imageUrl: "https://placehold.co/40x40", // mock up image
  },
];

const Products = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2">Product Name</th>
            <th className="py-2">Brand</th>
            <th className="py-2">Stock</th>
            <th className="py-2">Sales</th>
            <th className="py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr key={product.id} className="border-t hover:bg-gray-100 transition-colors duration-200">
              <td className="py-2 flex items-center">
                <img src={product.imageUrl} alt={product.name} className="w-10 h-10 rounded-full mr-2" />
                {product.name}
              </td>
              <td className="py-2">{product.brand}</td>
              <td className="py-2">{product.stock}</td>
              <td className="py-2">{product.sales}</td>
              <td className="py-2">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
