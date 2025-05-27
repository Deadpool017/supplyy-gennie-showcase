
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CorporateWorkwear = () => {
  const subcategories = [
    {
      title: "T-Shirts",
      description: "Professional t-shirts for corporate and work environments",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      link: "/subcategories/t-shirts",
      productCount: "12 Products"
    },
    {
      title: "Trousers & Pants",
      description: "Formal and casual trousers for professional settings",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      link: "/subcategories/trousers",
      productCount: "6 Products"
    },
    {
      title: "Blazers & Jackets",
      description: "Professional blazers and work jackets",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "/subcategories/blazers",
      productCount: "6 Products"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Corporate & Workwear</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Professional apparel solutions that enhance your team's image and comfort. 
              From everyday workwear to formal business attire.
            </p>
            <Button asChild variant="outline" className="text-blue-600 bg-white hover:bg-blue-50">
              <Link to="/products">View All Products</Link>
            </Button>
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
            <span className="text-gray-700">Corporate & Workwear</span>
          </nav>
        </div>
      </section>

      {/* Category Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Workwear Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our corporate and workwear collection is designed to meet the diverse needs of modern businesses. 
                From comfortable everyday workwear to sophisticated formal attire, we provide high-quality garments 
                that maintain professionalism while ensuring comfort and durability.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Premium quality fabrics and construction</li>
                <li>• Wide range of sizes and custom options</li>
                <li>• Competitive bulk pricing for businesses</li>
                <li>• Fast turnaround times for custom orders</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Professional team in corporate attire"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">
              Choose from our specialized workwear categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subcategories.map((category, index) => (
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

export default CorporateWorkwear;
