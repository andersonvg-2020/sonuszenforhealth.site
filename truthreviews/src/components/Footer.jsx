
import React from 'react';
import { Link } from 'react-router-dom';
import { Ear } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Ear className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">SonusZen</span>
          </div>
          
          <p className="text-slate-400 max-w-2xl mx-auto">
            <strong>SonusZen</strong> is the best option for supporting auditory health, eliminating tinnitus, and restoring mental clarity in a natural way.
          </p>

          <div className="flex justify-center gap-6 text-slate-300">
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
          
          <div className="border-t border-slate-800 pt-6">
            <p className="text-sm text-slate-500">
              <strong>Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your healthcare provider before starting any new supplement regimen.
            </p>
          </div>
          
          <div className="text-sm text-slate-500">
            <p>Copyright© 2025 . All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
