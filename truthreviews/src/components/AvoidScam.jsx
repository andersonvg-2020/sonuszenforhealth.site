
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AvoidScam = () => {
  const tips = [
    {
      title: "Only Buy from the Official Website",
      description: "The ONLY authorized seller is the official SonusZen website. Third-party sellers on Amazon, eBay, or other platforms are selling counterfeit products."
    },
    {
      title: "Verify the Secure Checkout",
      description: "Look for HTTPS in the URL and secure payment badges. The official site uses encrypted, secure payment processing."
    },
    {
      title: "Check for Money-Back Guarantee",
      description: "Authentic SonusZen comes with a 60-day money-back guarantee. If a seller doesn't offer this, it's not legitimate."
    },
    {
      title: "Beware of Unrealistic Discounts",
      description: "If a deal seems too good to be true (like 90% off), it's likely a scam. Official discounts are reasonable and clearly stated."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <ShieldAlert className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How to Avoid the <strong>SonusZen</strong> Scam
            </h2>
            <p className="text-xl text-slate-700">
              Protect yourself from counterfeit products and unauthorized sellers
            </p>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            src="https://horizons-cdn.hostinger.com/1de42db4-5feb-460c-b22d-3e285e0a04e1/b3b3d030756a76cf975838002523d11b.webp"
            alt="SonusZen bottles with a red 'SCAM ALERT' stamp"
            className="w-full max-w-lg mx-auto mb-12 rounded-lg shadow-xl border-4 border-red-500 transform hover:scale-105 transition-all duration-300"
          />
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">Warning: Counterfeit Products Are Everywhere</h3>
                  <p className="text-red-800">
                    Due to <strong>SonusZen's</strong> popularity, scammers have created fake versions that look similar but contain unknown ingredients. These counterfeits can be ineffective or even dangerous to your health.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 bg-green-50 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{tip.title}</h4>
                    <p className="text-slate-700">{tip.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Get Authentic <strong>SonusZen</strong> Here</h3>
              <p className="text-lg mb-6">
                Click below to visit the official website and ensure you're getting the real, high-quality product with full guarantee protection.
              </p>
              <a href="https://sonuszenforhealth.online/snz-dtc-cart-aff-f174/?afid=BRxSEncU2L" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Visit Official SonusZen Website →
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AvoidScam;
