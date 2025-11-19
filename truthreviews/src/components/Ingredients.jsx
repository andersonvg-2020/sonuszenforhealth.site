
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Ingredients = () => {
  const ingredients = [
    {
      name: "Himalayan Garlic",
      description: "Known for its powerful anti-inflammatory and antioxidant properties, it helps reduce oxidative stress in the auditory system and supports healthy circulation to the inner ear.",
      alt: "Close-up of Himalayan Garlic cloves, natural and rustic setting"
    },
    {
      name: "Ginkgo Biloba",
      description: "A celebrated herb that improves blood flow to the brain and ears. It helps reduce tinnitus by enhancing neural function and protecting delicate auditory nerves from damage.",
      alt: "Lush green leaves of a Ginkgo Biloba tree, vibrant and serene"
    },
    {
      name: "Rhodiola Rosea",
      description: "A powerful adaptogen that helps the body combat stress, a major trigger for tinnitus. It calms the nervous system and can reduce the perceived loudness of ringing sounds.",
      alt: "Vibrant red flowers of the Rhodiola Rosea plant in a natural, mountainous environment"
    },
    {
      name: "Vitamin C",
      description: "A vital antioxidant that protects the delicate hair cells in the inner ear from damage caused by free radicals and loud noises. It is essential for auditory system maintenance.",
      alt: "Freshly sliced oranges and other citrus fruits, bright and healthy"
    },
    {
      name: "Vitamin B6",
      description: "Crucial for maintaining nerve health and function. It supports the production of neurotransmitters that are essential for clear communication between the ear and brain.",
      alt: "Various foods rich in Vitamin B6 like salmon, chicken, and bananas on a wooden table"
    },
    {
      name: "Hawthorn Berry",
      description: "Packed with antioxidants, it helps improve blood circulation throughout the body, including to the small vessels in the inner ear, promoting overall auditory health.",
      alt: "Bright red Hawthorn berries on a branch with green leaves, natural light"
    }
  ];

  return (
    <section id="ingredients" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Inside Every Capsule of <strong>SonusZen</strong>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A precise blend of premium ingredients to support auditory health and silence tinnitus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {index === 0 && <img class="w-full h-48 object-cover" alt={ingredient.alt} src="https://images.unsplash.com/photo-1620389611548-7201ae8a9b0f" />}
                {index === 1 && <img class="w-full h-48 object-cover" alt={ingredient.alt} src="https://images.unsplash.com/photo-1605206245444-e1c6de0d9062" />}
                {index === 2 && <img class="w-full h-48 object-cover" alt={ingredient.alt} src="https://images.unsplash.com/photo-1700420110030-a309050e9e62" />}
                {index === 3 && <img class="w-full h-48 object-cover" alt={ingredient.alt} src="https://images.unsplash.com/photo-1588084820064-d6963f45a1db" />}
                {index === 4 && <img class="w-full h-48 object-cover" alt={ingredient.alt} src="https://images.unsplash.com/photo-1618133099505-4642bc34b053" />}
                {index === 5 && <img class="w-full h-48 object-cover" alt={ingredient.alt} src="https://images.unsplash.com/photo-1664280634600-21d9b525d0ad" />}
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{ingredient.name}</h3>
                  <p className="text-slate-700 leading-relaxed text-sm flex-grow">{ingredient.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Quality You Can Trust</h3>
            <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              All <strong>SonusZen</strong> ingredients are sourced from premium suppliers, tested for purity and potency, and manufactured in FDA-registered, GMP-certified facilities in the USA. Every batch undergoes rigorous third-party testing to ensure you're getting exactly what's on the label—nothing more, nothing less.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;
