
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const DisclaimerPage = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - SonusZen Review</title>
        <meta name="description" content="Disclaimer for our SonusZen review website, including information on affiliate links, medical advice, and content accuracy." />
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
            <h1>Disclaimer</h1>
            <p className="text-sm text-slate-500">Last Updated: November 19, 2025</p>

            <h2>1. Medical Disclaimer</h2>
            <p>The information provided on this website is for informational purposes only and is not intended as a substitute for advice from your physician or other healthcare professional. You should not use the information on this site for diagnosis or treatment of any health problem. The statements on this website have not been evaluated by the Food and Drug Administration (FDA). The product reviewed is not intended to diagnose, treat, cure, or prevent any disease.</p>

            <h2>2. Affiliate Disclaimer</h2>
            <p>This website is a participant in affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to the products we review. When you click on links and make a purchase, we may receive a commission. This does not impact our reviews and comparisons. We try our best to keep things fair and balanced, in order to help you make the best choice for you.</p>

            <h2>3. Accuracy of Information</h2>
            <p>While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>

            <h2>4. Testimonials Disclaimer</h2>
            <p>Testimonials appearing on this site are received via a variety of submission methods. They are individual experiences, reflecting real-life experiences of those who have used the product. However, they are individual results and results do vary. We do not claim that they are typical results that consumers will generally achieve.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisclaimerPage;
