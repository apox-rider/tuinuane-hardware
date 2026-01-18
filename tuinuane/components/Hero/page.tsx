 import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/hero/construction-dark.jpg"  // Use darker, moody construction photo
          alt="Construction site at dusk"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
          Quality Building Materials<br />Delivered Fast – Tuinuane
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Cement • Steel • Roofing • Plumbing • Electrical • Tools – Best Prices in Dar es Salaam
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Browse Products
          </Link>
          <Link
            href="/quote"
            className="bg-gray-700 hover:bg-gray-600 border border-gray-600 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Get Quote Now
          </Link>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">●</span> In Stock
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">🚚</span> Same-Day Delivery
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✓</span> Genuine Quality
          </div>
        </div>
      </div>
    </section>
  );
}