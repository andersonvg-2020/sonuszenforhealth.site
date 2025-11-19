
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Ear, Brain } from 'lucide-react';
const WhatIsSonuZem = () => {
  const features = [{
    icon: Leaf,
    title: "100% Natural Formula",
    description: "Crafted from premium plant-based ingredients with no synthetic additives."
  }, {
    icon: Ear,
    title: "Auditory Health Support",
    description: "Promotes optimal function of the auditory system and helps reduce tinnitus."
  }, {
    icon: Brain,
    title: "Restores Mental Clarity",
    description: "Helps clear brain fog associated with constant ringing and noise."
  }];
  return <section id="what-is" className="py-20 bg-white">
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
      }} className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
            What Is <strong>SonusZen</strong>?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }}>
              <img class="rounded-2xl shadow-xl w-full" alt="SonusZen product bottle with natural ingredients for auditory health" src="https://horizons-cdn.hostinger.com/1de42db4-5feb-460c-b22d-3e285e0a04e1/sz100-2-1024x747-JO96W.webp" />
            </motion.div>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <p className="text-xl leading-relaxed">
                <strong>SonusZen</strong> is the best option for supporting auditory health, eliminating tinnitus (zombido), and restoring mental clarity in a natural way. It's a revolutionary dietary supplement for people who suffer from the constant ringing, buzzing, or hissing sounds of tinnitus.
              </p>
              
              <p className="text-lg leading-relaxed">
                Try <strong>SonusZen</strong>: a supplement with ingredients and nutrients that promote optimal auditory health. Developed by hearing health experts, its formula targets the root causes of tinnitus, helping to repair auditory pathways and calm the nervous system.
              </p>
              
              <p className="text-lg leading-relaxed">
                Instead of just masking the sound, <strong>SonusZen</strong> nourishes the inner ear and brain, helping to reduce the phantom noise, improve hearing clarity, and restore your sense of peace and quiet.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2,
            duration: 0.6
          }} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default WhatIsSonuZem;
