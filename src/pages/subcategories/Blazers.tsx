
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blazers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Blazers & Jackets</h1>
          <p className="text-xl text-blue-100">Professional blazers and work jackets</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600">Subcategory page content coming soon...</p>
          <Link to="/categories/corporate-workwear" className="text-blue-600 hover:text-blue-800">← Back to Corporate Workwear</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blazers;
