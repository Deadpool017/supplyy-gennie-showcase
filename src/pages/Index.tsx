import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge, Star, Shield, Users, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const highlights = [
    "Premium Quality Products",
    "B2B Pricing & Terms",
    "Reliable Supply Chain",
    "Custom Branding Available"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef} 
        className="relative bg-gradient-to-br from-brand-orange via-brand-teal to-brand-red text-white min-h-screen flex items-center overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Your Strategic Business Partner
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white">Supplyy Genniie</span>
              <span className="block text-orange-200 text-2xl md:text-3xl mt-2 font-medium">
                Premium Business Essentials
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Transform your business with premium quality products, reliable supply chains, 
              and competitive B2B pricing designed for excellence.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 mr-2 text-orange-200" />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-brand-orange hover:bg-orange-50 text-lg px-8 py-4 hover:scale-105 transition-all duration-300 group"
              >
                <Link to="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-orange text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats/Visual */}
          <div className="lg:text-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">1000+</div>
                    <div className="text-orange-200 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50K+</div>
                    <div className="text-orange-200 text-sm">Products Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">99.8%</div>
                    <div className="text-orange-200 text-sm">On-Time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-orange-200 text-sm">Customer Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
