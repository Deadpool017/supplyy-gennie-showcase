
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const CorporateWorkwear = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      title: "Professional T-Shirts",
      description: "High-quality t-shirts perfect for corporate branding and casual workplace environments",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      link: "/subcategories/t-shirts",
      productCount: "12 Products"
    },
    {
      title: "Business Trousers & Pants",
      description: "Formal and casual trousers designed for professional settings and comfort",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      link: "/subcategories/trousers",
      productCount: "8 Products"
    },
    {
      title: "Blazers & Jackets",
      description: "Professional blazers and jackets for executive meetings and formal occasions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "/subcategories/blazers",
      productCount: "6 Products"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Corporate & Workwear</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Professional apparel solutions for modern businesses. From casual workplace attire to formal corporate wear, 
              we provide high-quality clothing that represents your brand with distinction.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link to="/" className="text-brand-orange hover:text-brand-orange-dark">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/products" className="text-brand-orange hover:text-brand-orange-dark">Products</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Corporate & Workwear</span>
          </nav>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Workwear Categories</h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive collection of professional apparel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories.map((subcategory, index) => (
              <Card 
                key={subcategory.title} 
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <Link to={subcategory.link} className="block">
                  <div className="relative overflow-hidden">
                    <img 
                      src={subcategory.image} 
                      alt={subcategory.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-brand-orange text-white px-2 py-1 rounded-full text-xs">
                      {subcategory.productCount}
                    </div>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{subcategory.title}</h3>
                  <p className="text-gray-600 mb-4">{subcategory.description}</p>
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-brand-orange group-hover:text-white transition-colors"
                    variant="outline"
                  >
                    <Link to={subcategory.link}>View Products</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateWorkwear;
