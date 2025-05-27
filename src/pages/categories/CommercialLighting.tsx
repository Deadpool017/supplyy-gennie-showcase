
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CommercialLighting = () => {
  const subcategories = [
    {
      title: "Indoor Lighting",
      description: "LED panels, track lighting, and indoor commercial solutions",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=300&fit=crop",
      link: "/subcategories/indoor-lighting",
      productCount: "6 Products"
    },
    {
      title: "Outdoor Lighting",
      description: "Floodlights, bollards, and exterior lighting solutions",
      image: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?w=400&h=300&fit=crop",
      link: "/subcategories/outdoor-lighting",
      productCount: "5 Products"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Commercial Lighting</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Professional lighting solutions to illuminate your business spaces with efficiency and style
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/products" className="text-blue-600 hover:text-blue-800">Products</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Commercial Lighting</span>
          </nav>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subcategories.map((category) => (
              <Card 
                key={category.title} 
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {category.productCount}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    variant="outline"
                  >
                    <Link to={category.link}>View Products</Link>
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

export default CommercialLighting;
