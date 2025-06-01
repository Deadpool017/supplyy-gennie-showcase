
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const VNeckTShirts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specifications = [
    { label: "Material", value: "100% Premium Cotton" },
    { label: "Weight", value: "180 GSM" },
    { label: "Fit", value: "Regular Fit" },
    { label: "Neck Style", value: "V-Neck" },
    { label: "Sleeve Type", value: "Short Sleeve" },
    { label: "Care Instructions", value: "Machine Washable" }
  ];

  const features = [
    "Pre-shrunk fabric for consistent sizing",
    "Reinforced shoulder seams for durability",
    "Soft hand feel with excellent drape",
    "Colorfast dyes that won't fade",
    "Double-needle bottom hem",
    "Side-seamed construction"
  ];

  const colors = ["White", "Black", "Navy Blue", "Charcoal Gray", "Royal Blue", "Forest Green"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link to="/" className="text-brand-orange hover:text-brand-orange-dark">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/products" className="text-brand-orange hover:text-brand-orange-dark">Products</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/categories/corporate-workwear" className="text-brand-orange hover:text-brand-orange-dark">Corporate & Workwear</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/subcategories/t-shirts" className="text-brand-orange hover:text-brand-orange-dark">T-Shirts</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Plain V-Neck T-Shirts</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop" 
                  alt="Plain V-Neck T-Shirt"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop" 
                  alt="V-Neck Front View"
                  className="aspect-square rounded-lg object-cover border-2 border-brand-orange"
                />
                <img 
                  src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=150&h=150&fit=crop" 
                  alt="V-Neck Side View"
                  className="aspect-square rounded-lg object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=150&h=150&fit=crop" 
                  alt="V-Neck Back View"
                  className="aspect-square rounded-lg object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop" 
                  alt="V-Neck Detail"
                  className="aspect-square rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Plain V-Neck T-Shirts</h1>
                <p className="text-xl text-brand-orange font-semibold mb-4">Contact for B2B Pricing</p>
                <p className="text-gray-600 text-lg">
                  Classic v-neck t-shirts perfect for corporate branding and professional casual wear. 
                  Made from premium 100% cotton with superior comfort and durability.
                </p>
              </div>

              {/* Key Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-orange mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <div className="space-y-3">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">{spec.label}:</span>
                        <span className="text-gray-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Available Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Available Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <span key={size} className="border border-gray-300 px-3 py-1 rounded text-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Color Options</h3>
                    <div className="space-y-2">
                      {colors.map((color) => (
                        <div key={color} className="text-sm text-gray-600">• {color}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Information */}
              <Card className="bg-orange-50 border-brand-orange">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-gray-700">Minimum Order Quantity:</span>
                    <span className="text-xl font-bold text-brand-orange">50 Units</span>
                  </div>
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white"
                  >
                    <Link to="/contact">Get Quote & Place Order</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VNeckTShirts;
