
import React from 'react';
import { motion } from 'framer-motion';
import { Ear } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Ear className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            SonusZen Review
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#what-is" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
          <a href="#benefits" className="text-slate-700 hover:text-blue-600 transition-colors">Benefits</a>
          <a href="#ingredients" className="text-slate-700 hover:text-blue-600 transition-colors">Ingredients</a>
          <a href="#faq" className="text-slate-700 hover:text-blue-600 transition-colors">FAQ</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
