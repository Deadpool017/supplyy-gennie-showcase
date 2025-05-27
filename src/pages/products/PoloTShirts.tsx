
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PoloTShirts = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop"
  ];

  const specifications = [
    { label: "Available Sizes", value: "S, M, L, XL, XXL, XXXL" },
    { label: "Color Options", value: "Black, White, Navy, Grey, Royal Blue, Custom" },
    { label: "Minimum Order Quantity", value: "50 Units" },
    { label: "Material", value: "100% Cotton / Cotton Blend" },
    { label: "Weight", value: "180-220 GSM" },
    { label: "Collar Type", value: "Ribbed Polo Collar" },
    { label: "Sleeve Type", value: "Short Sleeve" },
    { label: "Closure", value: "2-3 Button Placket" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
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
            <Link to="/subcategories/t-shirts" className="text-blue-600 hover:text-blue-800">T-Shirts</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Polo T-Shirts</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div>
              <div className="mb-4">
                <img 
                  src={images[selectedImage]} 
                  alt="Premium Corporate Polo T-Shirts"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded cursor-pointer transition-all duration-200 ${
                      selectedImage === index ? 'ring-2 ring-blue-600' : 'hover:opacity-75'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div>
              <div className="mb-4">
                <Badge variant="outline" className="mb-2">Corporate Workwear</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Corporate Polo T-Shirts</h1>
                <p className="text-2xl font-semibold text-blue-600 mb-6">Contact for B2B Pricing</p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Professional polo design perfect for corporate branding</li>
                  <li>• High-quality cotton blend for comfort and durability</li>
                  <li>• Available in multiple colors and custom options</li>
                  <li>• Ideal for uniforms, events, and promotional use</li>
                  <li>• Easy care and wrinkle-resistant</li>
                </ul>
              </div>

              {/* Material */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Material</h3>
                <p className="text-gray-600">
                  Crafted from premium cotton blend (65% Cotton, 35% Polyester) with 200 GSM weight. 
                  The fabric is pre-shrunk, colorfast, and designed to maintain its shape and comfort 
                  even after multiple washes. Perfect for professional environments and corporate branding.
                </p>
              </div>

              {/* Best For */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best For</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Corporate Uniforms</Badge>
                  <Badge variant="secondary">Promotional Events</Badge>
                  <Badge variant="secondary">Team Building</Badge>
                  <Badge variant="secondary">Company Merchandise</Badge>
                  <Badge variant="secondary">Sales Teams</Badge>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">Inquire Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Product Specifications</h2>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={spec.label} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-6 py-4 font-medium text-gray-900 w-1/3">{spec.label}</td>
                        <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "V-Neck T-Shirts", link: "/products/v-neck-t-shirts" },
              { name: "Henley T-Shirts", link: "/products/henley-t-shirts" },
              { name: "Formal Trousers", link: "/products/formal-trousers" }
            ].map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-4">{product.name}</h3>
                  <Button asChild variant="outline" className="w-full">
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

export default PoloTShirts;
