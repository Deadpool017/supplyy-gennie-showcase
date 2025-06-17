
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/5037847e-8110-4042-8ea6-f691e41bb4fd.png" 
                alt="Supplyy Genniie Logo" 
                className="h-8 w-auto mr-3 bg-white p-1 rounded"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your strategic partner for premium business essentials. We provide high-quality products 
              that help businesses succeed and grow.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-teal" />
                <span>9830708205</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-teal" />
                <span>supplyygenniie@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-brand-teal transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brand-teal transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-brand-teal transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/categories/corporate-workwear" className="text-gray-300 hover:text-brand-teal transition-colors">Corporate Workwear</Link></li>
              <li><Link to="/categories/commercial-lighting" className="text-gray-300 hover:text-brand-teal transition-colors">Commercial Lighting</Link></li>
              <li><Link to="/categories/business-signage" className="text-gray-300 hover:text-brand-teal transition-colors">Business Signage</Link></li>
              <li><Link to="/categories/office-supplies" className="text-gray-300 hover:text-brand-teal transition-colors">Office Supplies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2024 Supplyy Genniie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
