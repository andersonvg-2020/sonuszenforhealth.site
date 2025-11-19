
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Ear, Shield, Zap } from 'lucide-react';
const HowItWorks = () => {
  const steps = [{
    icon: Shield,
    title: "Reduces Inflammation",
    description: "Powerful antioxidants combat inflammation in the auditory nerves, a primary contributor to tinnitus and hearing degradation."
  }, {
    icon: Ear,
    title: "Repairs Auditory Nerves",
    description: "Key nutrients nourish and help regenerate damaged hair cells and nerves in the inner ear, improving signal transmission to the brain."
  }, {
    icon: Brain,
    title: "Calms Neural Overactivity",
    description: "Herbal extracts work to soothe the brain's auditory cortex, reducing the phantom ringing, buzzing, and hissing sounds of tinnitus."
  }, {
    icon: Zap,
    title: "Enhances Brain Function",
    description: "By silencing the noise, SonusZen restores mental clarity, improves focus, and protects against the cognitive decline linked to hearing loss."
  }];
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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6">
            How Does <strong>SonusZen</strong> Work?
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            <strong>SonusZen</strong> uses a scientifically-backed, multi-pathway approach to address the root causes of tinnitus and poor auditory health.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="grid md:grid-cols-2 gap-8">
                {steps.map((step, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.15,
              duration: 0.6
            }} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-md">
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-700 leading-relaxed text-sm">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>)}
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
            delay: 0.2,
            duration: 0.6
          }} className="mt-8 md:mt-0">
              <img class="rounded-2xl shadow-xl w-full h-full object-cover" alt="Illustration of brain and ear connection, showing neural pathways" src="https://horizons-cdn.hostinger.com/1de42db4-5feb-460c-b22d-3e285e0a04e1/2polaroid-WyzCI.webp" />
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
        }} className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">The Science Behind the Silence</h3>
            <p className="text-lg leading-relaxed mb-4">
              Tinnitus isn't just an ear problem; it's a brain problem. <strong>SonusZen</strong>'s formula is designed to work on both fronts. The ingredients have been carefully selected for their proven ability to reduce neuro-inflammation and support the delicate structures of the auditory system.
            </p>
            <p className="text-lg leading-relaxed">
              This synergistic blend helps to 'retrain' the brain to ignore phantom noises while repairing the underlying damage, leading to lasting relief and improved cognitive function.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default HowItWorks;
