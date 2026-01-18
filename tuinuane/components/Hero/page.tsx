// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-150 flex items-center justify-center text-center text-white">
      <Image
        src="/images/hero-construction-site-tz.jpg" // Use your own real photo
        alt="Construction site using Tuinuane building materials in Tanzania"
        fill
        className="object-cover brightness-[0.65]"
        priority
      />
      <div className="relative z-10 max-w-5xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Quality Building Materials Delivered Fast – Tuinuane
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Cement, Steel, Roofing, Plumbing, Electrical & More – Best Prices in Dar es Salaam & Beyond
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md text-lg font-semibold"
          >
            Browse Products
          </a>
          <a
            href="/get-quote"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md text-lg font-semibold"
          >
            Get Quote Now
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <div>🚚 Fast Delivery</div>
          <div>🛡️ Quality Guarantee</div>
          <div>🏗️ Local Warehouse</div>
        </div>
      </div>
    </section>
  );
}