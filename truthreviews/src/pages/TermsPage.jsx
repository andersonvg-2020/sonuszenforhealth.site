
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - SonusZen Review</title>
        <meta name="description" content="Read the Terms of Service for our SonusZen review website. Understand the conditions of use, affiliate disclosures, and your responsibilities." />
      </Helmet>
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
          <Link to="/" className="inline-block mb-8">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="prose prose-slate max-w-none">
            <h1>Terms of Service</h1>
            <p className="text-sm text-slate-500">Last Updated: November 19, 2025</p>

            <h2>1. Introduction</h2>
            <p>Welcome to our SonusZen review website. By accessing our website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

            <h2>2. Affiliate Disclosure</h2>
            <p>This website is an affiliate marketing site. We may earn a commission for purchases made through links on this site. Our reviews and recommendations are based on our research and opinion, but the final decision to purchase is yours. The compensation received may influence the advertising content, topics, or posts made on this site.</p>

            <h2>3. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

            <h2>4. Disclaimer</h2>
            <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2>5. Limitations</h2>
            <p>In no event shall this website or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h2>6. Modifications</h2>
            <p>We may revise these Terms of Service for our website at any time without notice. By using this website you are agreeing to be bound by the then-current version of these Terms of Service.</p>

            <h2>7. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
