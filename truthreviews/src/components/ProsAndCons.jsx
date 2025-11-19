
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const ProsAndCons = () => {
  const pros = [
    "Targets the root cause of tinnitus, not just the symptoms",
    "100% natural ingredients with no synthetic chemicals",
    "Non-habit forming and safe for long-term use",
    "Helps restore mental clarity by reducing brain fog",
    "Supports overall auditory and neurological health",
    "Manufactured in FDA-registered, GMP-certified facilities",
    "60-day money-back guarantee for a risk-free trial",
    "Helps reduce stress and anxiety linked to tinnitus",
    "No prescription required"
  ];

  const cons = [
    "Only available for purchase on the official website",
    "Results can vary depending on the individual's condition",
    "May sell out due to high demand and premium ingredient sourcing",
    "Requires consistent daily use for best results"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
            <strong>SonusZen</strong> Pros and Cons: A Clear Look
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pros */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                <CheckCircle className="w-8 h-8" />
                Pros
              </h3>
              <ul className="space-y-4">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{pro}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Cons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
                <XCircle className="w-8 h-8" />
                Cons
              </h3>
              <ul className="space-y-4">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{con}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600"
          >
            <p className="text-lg text-slate-700">
              <strong>Bottom Line:</strong> The pros of <strong>SonusZen</strong> overwhelmingly favor its use for tinnitus relief. While it requires commitment and is only sold online, its natural, safe formula and comprehensive approach to auditory health—backed by a solid guarantee—make it a highly compelling choice for anyone seeking silence and clarity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProsAndCons;
