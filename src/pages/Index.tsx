
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge, Star, Shield, Users } from "lucide-react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "Corporate & Workwear",
      description: "Professional apparel for your business team",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      link: "/categories/corporate-workwear"
    },
    {
      title: "Commercial Lighting",
      description: "Illuminate your workspace with premium lighting solutions",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=300&fit=crop",
      link: "/categories/commercial-lighting"
    },
    {
      title: "Business Signage",
      description: "Professional signage to enhance your brand presence",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
      link: "/categories/business-signage"
    },
    {
      title: "Business Accessories",
      description: "Essential accessories for professional environments",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      link: "/categories/business-accessories"
    },
    {
      title: "Beauty & Salon Supplies",
      description: "Professional-grade supplies for beauty businesses",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
      link: "/categories/beauty-salon"
    },
    {
      title: "Office & Facility Supplies",
      description: "Complete solutions for your office and facility needs",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      link: "/categories/office-supplies"
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "We source only the highest quality products that meet professional standards"
    },
    {
      icon: Shield,
      title: "Reliable Supply Chain",
      description: "Consistent, on-time delivery you can count on for your business operations"
    },
    {
      icon: Badge,
      title: "Competitive B2B Pricing",
      description: "Volume pricing and flexible terms designed for business customers"
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work as your strategic partner, not just a supplier"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative bg-gradient-to-br from-brand-orange via-brand-teal to-brand-red text-white min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="block">Supplyy Genniie</span>
            <span className="block text-orange-200 text-xl md:text-3xl mt-2">
              Your Strategic Partner for Business Essentials
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-100 animate-fade-in">
            Premium quality products, reliable supply chain, and competitive B2B pricing 
            for businesses that demand excellence.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-brand-orange hover:bg-orange-50 text-lg px-8 py-4 animate-fade-in hover:scale-105 transition-all duration-300"
          >
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of business essentials designed to meet your professional needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={category.title} 
                className="animate-on-scroll hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Link to={category.link}>Explore Category</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Supplyy Genniie?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just a supplier - we're your strategic partner for business success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.title} 
                  className="text-center animate-on-scroll hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Supplyy Genniie has been instrumental in helping us maintain our professional image. Their quality is unmatched.",
                author: "Sarah Johnson",
                company: "TechCorp Solutions"
              },
              {
                quote: "Reliable delivery and competitive pricing make them our go-to supplier for all business essentials.",
                author: "Michael Chen",
                company: "Global Industries"
              },
              {
                quote: "The customer service is exceptional. They understand our business needs and deliver accordingly.",
                author: "Emily Davis",
                company: "Creative Agency Pro"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="animate-on-scroll hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-brand-teal">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-brand-teal text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Get in touch today and discover how Supplyy Genniie can help your business thrive
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-brand-orange hover:bg-orange-50 text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
