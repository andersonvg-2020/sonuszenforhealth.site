
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Shield } from 'lucide-react';

const Conclusion = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Reclaim Your Peace and Quiet?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            You've read the science. You've seen the testimonials. You understand how <strong>SonusZen</strong> can silence the noise and restore your clarity. Now it's time to take action.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
            <p className="text-lg mb-6">
              Every day you live with tinnitus is another day of lost focus, persistent stress, and diminished quality of life. Don't let that noise control you any longer. <strong>SonusZen</strong> offers a safe, natural, and proven solution that thousands trust.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-12 h-12 mb-3" />
                <span className="font-semibold">100% Natural</span>
                <span className="text-sm">No harsh chemicals</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 mb-3" />
                <span className="font-semibold">60-Day Guarantee</span>
                <span className="text-sm">Risk-free trial</span>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-12 h-12 mb-3" />
                <span className="font-semibold">Fast Relief</span>
                <span className="text-sm">Notice results soon</span>
              </div>
            </div>
            
            <p className="text-xl font-bold mb-6">
              With our 60-day money-back guarantee, you have absolutely nothing to lose but the ringing in your ears.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6"
          >
            <a href="https://sonuszenforhealth.online/snz-dtc-cart-aff-f174/?afid=BRxSEncU2L" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                Get SonusZen Now - Special Discount Available
              </Button>
            </a>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>60-Day Guarantee</span>
              </div>
            </div>
            
            <p className="text-lg italic">
              Don't wait for the ringing to get worse. Join the thousands who've rediscovered the joy of silence with <strong>SonusZen</strong>. Your peace of mind is one click away.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6"
          >
            <p className="text-sm">
              <strong>Important:</strong> Due to high demand and limited ingredient availability, <strong>SonusZen</strong> frequently sells out. If you see the "Add to Cart" button available, we recommend securing your supply today before inventory runs out again.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
