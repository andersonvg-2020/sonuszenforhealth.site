
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    text: "After struggling with tinnitus for over 10 years, I finally found something that works! SonusZen quieted the ringing and I can finally enjoy silence again. I feel like a new person.",
    imageAlt: "Happy senior woman in her 60s smiling at camera, natural lighting in a garden"
  }, {
    name: "Michael R.",
    location: "Denver, CO",
    rating: 5,
    text: "I was skeptical, but SonusZen exceeded all expectations. No more maddening buzz at 3 AM. The noise has faded into the background, and my concentration at work has improved dramatically!",
    imageAlt: "Professional senior man in his 70s looking confident and well-rested in his study"
  }, {
    name: "Jennifer L.",
    location: "Miami, FL",
    rating: 5,
    text: "As a musician, tinnitus was a nightmare. SonusZen has been a career-saver. It helps me focus on the music instead of the noise in my head. Highly recommend to anyone suffering from this.",
    imageAlt: "Retired healthcare professional woman in her late 60s smiling warmly on her porch"
  }, {
    name: "David K.",
    location: "Seattle, WA",
    rating: 5,
    text: "I've tried everything for my tinnitus, and SonusZen is the only supplement that made a real difference. It's natural, effective, and has no side effects. Worth every single penny!",
    imageAlt: "Athletic senior man in his 60s looking energetic and healthy after a morning walk"
  }, {
    name: "Lisa T.",
    location: "Chicago, IL",
    rating: 5,
    text: "My anxiety was through the roof because of the constant ringing. Since starting SonusZen, I feel so much calmer and can think clearly again. This product gave me my life back!",
    imageAlt: "Cheerful senior woman in her early 70s with a bright smile, in a cozy living room"
  }, {
    name: "Robert P.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "At 62, I thought the ringing in my ears was permanent. SonusZen proved me wrong! It's not completely gone, but it's so quiet now I barely notice it. Amazing product!",
    imageAlt: "Senior man in his 60s looking vibrant and well-rested while reading a book outdoors"
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Real People, Real Results with <strong>SonusZen</strong>
            </h2>
            <p className="text-xl text-slate-600">
              Join thousands of satisfied customers who reclaimed their peace and quiet
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.6
          }} className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                    {index === 0 && <img class="w-16 h-16 rounded-full object-cover shadow-md" alt={testimonial.imageAlt} src="https://horizons-cdn.hostinger.com/1de42db4-5feb-460c-b22d-3e285e0a04e1/20250711_0950_senhora_sorridente_no_jardim_simple_compose_01jzwrjjqbfscbtrhnwk66rgz6-1-puySv.webp" />}
                    {index === 1 && <img class="w-16 h-16 rounded-full object-cover shadow-md" alt={testimonial.imageAlt} src="https://images.unsplash.com/photo-1610971099797-facc64e6b0bb" />}
                    {index === 2 && <img class="w-16 h-16 rounded-full object-cover shadow-md" alt={testimonial.imageAlt} src="https://images.unsplash.com/photo-1640562614259-78cc6cc2c5f8" />}
                    {index === 3 && <img class="w-16 h-16 rounded-full object-cover shadow-md" alt={testimonial.imageAlt} src="https://horizons-cdn.hostinger.com/1de42db4-5feb-460c-b22d-3e285e0a04e1/hi2z1puuivrd-NgsKl.webp" />}
                    {index === 4 && <img class="w-16 h-16 rounded-full object-cover shadow-md" alt={testimonial.imageAlt} src="https://horizons-cdn.hostinger.com/1de42db4-5feb-460c-b22d-3e285e0a04e1/senhora-1-1536x1536-8uznE.webp" />}
                    {index === 5 && <img class="w-16 h-16 rounded-full object-cover shadow-md" alt={testimonial.imageAlt} src="https://horizons-cdn.hostinger.com/1de42db4-5feb-460c-b22d-3e285e0a04e1/20250711_1000_senhor_sorridente_simple_compose_01jzws4vyxffja1nfs3kg9pv67-1-adVEM.webp" />}
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                
                <Quote className="w-8 h-8 text-blue-300 mb-2" />
                <p className="text-slate-700 leading-relaxed italic">"{testimonial.text}"</p>
              </motion.div>)}
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
        }} className="mt-12 text-center bg-blue-50 p-8 rounded-xl">
            <p className="text-lg text-slate-700 mb-4">
              <strong>Over 500,000 satisfied customers</strong> have found relief with <strong>SonusZen</strong>
            </p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
              <span className="ml-2 text-lg font-semibold text-slate-900">4.9/5.0 Average Rating</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Testimonials;
