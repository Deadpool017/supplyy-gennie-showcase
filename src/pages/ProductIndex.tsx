
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductIndex = () => {
  const categories = [
    {
      title: "Corporate & Workwear",
      description: "Professional apparel including t-shirts, trousers, blazers and jackets for your business team",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      link: "/categories/corporate-workwear",
      subcategories: ["T-Shirts", "Trousers & Pants", "Blazers & Jackets"]
    },
    {
      title: "Business Accessories",
      description: "Essential business accessories including bags, backpacks, and professional headwear",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      link: "/categories/business-accessories",
      subcategories: ["Bags & Backpacks", "Headwear"]
    },
    {
      title: "Commercial Lighting",
      description: "Premium lighting solutions for both indoor and outdoor commercial applications",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=300&fit=crop",
      link: "/categories/commercial-lighting",
      subcategories: ["Indoor Lighting", "Outdoor Lighting"]
    },
    {
      title: "Business Signage",
      description: "Professional signage solutions for interior and exterior business applications",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
      link: "/categories/business-signage",
      subcategories: ["Interior Signs", "Exterior Signs"]
    },
    {
      title: "Beauty & Salon Supplies",
      description: "Professional-grade supplies and apparel for beauty and salon businesses",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
      link: "/categories/beauty-salon",
      subcategories: ["Professional Apparel", "Salon Essentials"]
    },
    {
      title: "Office & Facility Supplies",
      description: "Complete office furniture and facility supplies for modern workspaces",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      link: "/categories/office-supplies",
      subcategories: ["Desk & Office Furniture", "Breakroom & Janitorial"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-orange to-brand-teal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">All Product Categories</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Explore our comprehensive range of business essentials organized by category. 
            Find exactly what your business needs to succeed and grow.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={category.title} 
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden h-full"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{category.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Subcategories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.map((sub) => (
                        <span 
                          key={sub}
                          className="text-xs bg-orange-100 text-brand-orange px-2 py-1 rounded-full"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-brand-orange group-hover:text-white transition-colors mt-auto"
                    variant="outline"
                  >
                    <Link to={category.link}>Explore Category</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-orange text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Products?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Our team is here to help you find the perfect solutions for your business needs
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-brand-orange hover:bg-orange-50 text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductIndex;
