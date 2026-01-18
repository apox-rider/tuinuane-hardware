import HeroSection from "@/components/Hero/page";
import Navbar from "@/components/Nav/page";

 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <Navbar />

      <main>

        <HeroSection/>
        {/* <FeaturedProducts />
        <WhyChooseUs />
        <HotDeals />
        <HowItWorks />
        <Testimonials />
        <QuoteCTA />
        <Newsletter /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}