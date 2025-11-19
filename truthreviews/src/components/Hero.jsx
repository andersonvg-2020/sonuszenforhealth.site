
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle } from 'lucide-react';
const Hero = () => {
  return <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-6">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Finally Silence the Ringing and Reclaim Your Mental Clarity
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Discover how <strong>SonusZen</strong> is helping thousands of Americans support auditory health, eliminate tinnitus, and restore mental clarity naturally.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Supports Auditory Health</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Eliminates Tinnitus</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Restores Mental Clarity</span>
            </div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }} className="pt-8">
            <a href="https://sonuszenforhealth.online/snz-dtc-cart-aff-f174/?afid=BRxSEncU2L" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Try SonusZen Now - Limited Time Offer
              </Button>
            </a>
            <p className="text-sm text-slate-500 mt-4">✓ 60-Day Money-Back Guarantee</p>
          </motion.div>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6,
        duration: 0.8
      }} className="mt-16">
          <img alt="Person feeling relieved and calm, indicating relief from tinnitus" className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto" src="https://horizons-cdn.hostinger.com/1de42db4-5feb-460c-b22d-3e285e0a04e1/20250715_1254_frascos_com_nuvens_remix_01k07chemkfssssq9g97b1jd5t-WJ1y3.webp" />
        </motion.div>
      </div>
    </section>;
};
export default Hero;
