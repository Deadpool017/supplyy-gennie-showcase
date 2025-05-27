
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Users, Badge } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Star,
      title: "Quality Excellence",
      description: "We are committed to providing only the highest quality products that meet and exceed professional standards."
    },
    {
      icon: Users,
      title: "Partnership Focus",
      description: "We believe in building long-term partnerships with our clients, understanding their unique needs and growing together."
    },
    {
      icon: Shield,
      title: "Reliability & Trust",
      description: "Our clients can depend on us for consistent quality, timely delivery, and transparent business practices."
    },
    {
      icon: Badge,
      title: "Innovation & Growth",
      description: "We continuously evolve our product offerings and services to meet the changing needs of modern businesses."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Supplyy Genniie</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in providing premium business essentials that drive success and growth
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Supplyy Genniie, our mission is to be the most reliable, one-stop source for high-quality 
                products that businesses need to succeed. We understand that every business, regardless of size, 
                deserves access to premium products that enhance their professional image and operational efficiency.
              </p>
              <p className="text-lg text-gray-600">
                We strive to build lasting partnerships with our clients by providing exceptional products, 
                competitive pricing, and outstanding customer service that goes beyond expectations.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Business team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                alt="Business growth and innovation"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to revolutionize B2B product sourcing, Supplyy Genniie emerged from 
                recognizing the challenges businesses face in finding reliable suppliers for their essential needs. 
                Our founders, with extensive experience in supply chain management and business operations, 
                identified the gap between quality expectations and market availability.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a commitment to solve sourcing challenges for a few local businesses has grown 
                into a comprehensive platform serving companies across various industries. Our focus has always 
                remained on quality, reliability, and building genuine partnerships with our clients.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to evolve and expand our offerings while maintaining the core values that 
                defined our beginning: excellence, integrity, and customer-centricity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define how we serve our business partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Our dedicated team of professionals is committed to serving your business needs with expertise and passion
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="text-gray-500 mb-4">
              <Users className="h-24 w-24 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Team Profiles Coming Soon</h3>
            <p className="text-gray-600">
              We're excited to introduce you to the amazing people behind Supplyy Genniie. 
              Team member profiles and bios will be available here soon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
