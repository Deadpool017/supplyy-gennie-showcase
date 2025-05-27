
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const VNeckTShirts = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Plain V-Neck T-Shirts</h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600">Product details coming soon...</p>
          <Link to="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Inquire Now</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VNeckTShirts;
