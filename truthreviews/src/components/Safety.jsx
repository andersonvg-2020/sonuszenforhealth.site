
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';
const Safety = () => {
  const safetyPoints = ["100% natural ingredients with no synthetic chemicals or harmful additives", "Non-habit forming formula—safe for long-term use without dependency", "No known serious side effects when taken as directed", "Manufactured in FDA-registered, GMP-certified facilities", "Third-party tested for purity, potency, and safety"];
  const considerations = ["Pregnant or nursing women should consult their healthcare provider before use", "If you're taking prescription medications (especially blood thinners), consult your doctor first", "Not recommended for children under 18 without medical supervision"];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Is <strong>SonusZen</strong> Safe? Side Effects Explained
            </h2>
            <p className="text-xl text-slate-600">
              Your health and safety are our top priorities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.6
            }} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                    <CheckCircle className="w-8 h-8" />
                    Safety Profile
                  </h3>
                  <ul className="space-y-3">
                    {safetyPoints.map((point, index) => <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-700">{point}</span>
                      </li>)}
                  </ul>
                </motion.div>
                
                <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
                    <AlertCircle className="w-8 h-8" />
                    Important Considerations
                  </h3>
                  <ul className="space-y-3">
                    {considerations.map((consideration, index) => <li key={index} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-700">{consideration}</span>
                      </li>)}
                  </ul>
                </motion.div>
             </div>
             <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }}>
                <img class="rounded-2xl shadow-xl w-full h-full object-cover" alt="Scientist in a lab coat examining plants, ensuring quality and safety" src="https://horizons-cdn.hostinger.com/1de42db4-5feb-460c-b22d-3e285e0a04e1/20250715_1350_medico_com_produto_alterado_remix_01k07ftmrafynsbbvzqb5ezfs8-683x1024-EBp1m.webp" />
             </motion.div>
          </div>
           <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="mt-16 bg-white border-2 border-green-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">The Bottom Line on Safety</h3>
              <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
                <strong>SonusZen</strong> has an excellent safety profile with thousands of satisfied users reporting no serious adverse effects. The natural, carefully-balanced formula is designed to work gently with your body's systems to restore auditory health.
              </p>
            </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Safety;
