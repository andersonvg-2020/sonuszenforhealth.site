
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take for SonusZen to work?",
      answer: "Many users report a noticeable reduction in tinnitus within the first few weeks of consistent use. For best results, we recommend taking SonusZen for at least 90 days to allow the ingredients to fully support and repair your auditory system."
    },
    {
      question: "Is SonusZen habit-forming or addictive?",
      answer: "No, SonusZen is completely non-habit forming. It is made from natural ingredients that support your body's health without creating chemical dependency. You can take it with confidence for as long as you need."
    },
    {
      question: "Can I take SonusZen with other medications?",
      answer: "While SonusZen is natural, it's always best to consult your doctor before adding any new supplement to your routine, especially if you are taking blood thinners or other prescription medications."
    },
    {
      question: "What's the recommended dosage?",
      answer: "The recommended dosage is two capsules per day with a glass of water. For optimal absorption and results, you can take them in the morning or as advised by your healthcare professional."
    },
    {
      question: "Will SonusZen cure my tinnitus completely?",
      answer: "SonusZen is designed to significantly reduce the volume and frequency of tinnitus, and support overall auditory health. While many users experience a complete silencing, results can vary based on the individual and the underlying cause of their tinnitus. The goal is to make the noise manageable or unnoticeable."
    },
    {
      question: "How is SonusZen different from other tinnitus supplements?",
      answer: "SonusZen uses a unique, comprehensive formula that targets multiple root causes of tinnitus, including inflammation, nerve damage, and poor circulation. It doesn't just provide temporary relief; it nourishes the entire auditory system for long-term health."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! Every order of SonusZen is protected by a 60-day, 100% money-back guarantee. If you are not satisfied with the results, you can return the product for a full refund, no questions asked. This makes it a risk-free investment in your hearing health."
    },
    {
      question: "Where can I buy authentic SonusZen?",
      answer: "To guarantee you're getting the genuine product and are covered by the money-back guarantee, you must purchase SonusZen exclusively from the official website. It is not sold on Amazon, eBay, or in retail stores."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions About <strong>SonusZen</strong>
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to the most common questions about our auditory health supplement.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 last:border-0">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 text-center bg-blue-50 p-6 rounded-xl"
          >
            <p className="text-lg text-slate-700">
              Still have questions? Our customer support team is here to help! Contact us through the official website for personalized assistance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
