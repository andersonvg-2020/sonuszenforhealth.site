
import React from 'react';
import { motion } from 'framer-motion';
import { VolumeX, Brain, Heart, Zap, Smile, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: VolumeX,
      title: "Reduces Tinnitus Volume",
      description: "Significantly lowers the perceived volume of ringing, buzzing, and hissing, bringing peace and quiet back to your life."
    },
    {
      icon: Brain,
      title: "Enhances Mental Clarity",
      description: "By quieting the noise, SonusZen helps eliminate brain fog, improving focus, memory, and cognitive function."
    },
    {
      icon: Heart,
      title: "Lowers Stress & Anxiety",
      description: "Calms the nervous system, reducing the constant stress and anxiety that often accompany tinnitus."
    },
    {
      icon: Zap,
      title: "Improves Hearing Acuity",
      description: "Nourishes the auditory system, which may lead to improved clarity and sharpness of hearing."
    },
    {
      icon: Smile,
      title: "Boosts Mood & Well-being",
      description: "Regain control from the disruptive noise, leading to better mood, more energy, and an improved quality of life."
    },
    {
      icon: TrendingUp,
      title: "Supports Long-Term Brain Health",
      description: "The ingredients in SonusZen help protect against age-related cognitive decline linked to hearing issues."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Life-Changing Benefits of <strong>SonusZen</strong>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the transformative power of silencing tinnitus and restoring clarity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img class="rounded-2xl shadow-xl w-full h-full object-cover" alt="Person enjoying a moment of peace and quiet in nature" src="https://images.unsplash.com/photo-1552650272-b8a34e21bc4b" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.slice(0, 4).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-700 leading-relaxed text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-10 rounded-2xl shadow-2xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Transform Your Life Starting Today</h3>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Imagine your world without the constant ringing. Imagine thinking clearly and feeling calm. That's not a dream—it's what thousands of <strong>SonusZen</strong> users experience every day.
            </p>
            <p className="text-lg mb-8">
              Don't let tinnitus rob you of your health, happiness, and peace of mind. Take control of your auditory health—and your life—today.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
