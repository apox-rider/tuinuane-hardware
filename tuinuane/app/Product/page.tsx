 import Image from "next/image";

type Product = {
  name: string;
  image: string;
  price: string;
  badge?: "hot" | "stock";
};

export default function ProductCard({ name, image, price, badge }: Product) {
  return (
    <div className="group bg-card border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-square">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        {badge === "hot" && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">Hot Deal</span>
        )}
        {badge === "stock" && (
          <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded">In Stock</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-medium mb-2 line-clamp-2">{name}</h3>
        <p className="text-primary font-bold text-lg">{price}</p>
        <div className="mt-4 flex gap-3">
          <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded text-sm">Add to Cart</button>
          <button className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary py-2 rounded text-sm">Quote</button>
        </div>
      </div>
    </div>
  );
}