
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users } from 'lucide-react';

const StillWorthIt = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-8">
            Is <strong>SonusZen</strong> Still Worth It in 2025?
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
            <p className="text-xl font-semibold text-green-700 text-center">
              Absolutely YES—and here's why it's more relevant than ever.
            </p>
            
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <p className="text-lg leading-relaxed">
                In 2025, noise pollution and daily stress are at an all-time high, leading to a surge in tinnitus and hearing-related issues. <strong>SonusZen</strong> directly confronts these modern problems with a refined formula based on thousands of success stories and the latest research in auditory health.
              </p>
              
              <p className="text-lg leading-relaxed">
                Recent clinical studies continue to validate the powerful neuroprotective and anti-inflammatory properties of <strong>SonusZen's</strong> core ingredients. While many supplements make empty promises, <strong>SonusZen</strong> maintains its edge with rigorous third-party testing, transparent ingredient sourcing, and a commitment to quality.
              </p>
              
              <p className="text-lg leading-relaxed">
                The 2025 formula has been enhanced to offer even better support for nerve regeneration and reducing the inflammation that contributes to tinnitus. Users are reporting faster relief from ringing, improved hearing clarity, and a significant reduction in the anxiety and brain fog caused by auditory distress.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-2">95%</div>
                <p className="text-slate-600">Reported Tinnitus Reduction</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Award className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-2">#1</div>
                <p className="text-slate-600">Tinnitus Relief Formula 2025</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-2">500K+</div>
                <p className="text-slate-600">Quiet Minds</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StillWorthIt;
