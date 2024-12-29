// components/CardItem.js
import Image from "next/image";

const CardItem = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{product.code}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-gray-400 line-through text-sm">
            {product.originalPrice}
          </span>
          <span className="text-red-500 font-bold">{product.discountPrice}</span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CardItem;
