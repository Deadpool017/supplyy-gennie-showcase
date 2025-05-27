
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TShirts = () => {
  const products = [
    {
      title: "Plain V-Neck T-Shirts",
      description: "Classic v-neck design perfect for casual professional settings",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      link: "/products/v-neck-t-shirts",
      price: "Contact for B2B Pricing",
      moq: "50 Units"
    },
    {
      title: "Polo T-Shirts",
      description: "Professional polo shirts ideal for corporate branding",
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop",
      link: "/products/polo-t-shirts",
      price: "Contact for B2B Pricing",
      moq: "50 Units"
    },
    {
      title: "Henley T-Shirts",
      description: "Stylish henley design with button placket for modern workplaces",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&h=300&fit=crop",
      link: "/products/henley-t-shirts",
      price: "Contact for B2B Pricing",
      moq: "50 Units"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Professional T-Shirts</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              High-quality t-shirts perfect for corporate branding, uniforms, and professional casual wear
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/products" className="text-blue-600 hover:text-blue-800">Products</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/categories/corporate-workwear" className="text-blue-600 hover:text-blue-800">Corporate & Workwear</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">T-Shirts</span>
          </nav>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">T-Shirt Collection</h2>
            <p className="text-xl text-gray-600">
              Choose from our range of professional t-shirts suitable for various business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.title} 
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">MOQ:</span>
                      <span className="text-sm font-medium">{product.moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Price:</span>
                      <span className="text-sm font-medium text-blue-600">{product.price}</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    <Link to={product.link}>View Details</Link>
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

export default TShirts;
