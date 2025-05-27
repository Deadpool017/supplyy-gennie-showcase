
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SalonApparel = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Salon Professional Apparel</h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SalonApparel;
