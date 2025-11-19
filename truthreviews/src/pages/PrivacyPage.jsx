
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - SonusZen Review</title>
        <meta name="description" content="Our Privacy Policy explains how we collect, use, and protect your information when you visit our SonusZen review website." />
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
            <h1>Privacy Policy</h1>
            <p className="text-sm text-slate-500">Last Updated: November 19, 2025</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us, such as your name and email address when you contact us. We may also collect non-personal information, such as browser type, operating system, and website usage data through cookies and other tracking technologies.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to operate and maintain our website, respond to your inquiries, and improve our user experience. If you click on an affiliate link, the third-party merchant may collect information about your visit to their site.</p>

            <h2>3. Cookies</h2>
            <p>Our website may use "cookies" to enhance user experience. You can set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.</p>

            <h2>4. Third-Party Links</h2>
            <p>This website contains links to other sites (such as the official SonusZen website). Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

            <h2>5. Data Security</h2>
            <p>We take reasonable measures to protect the information we collect from loss, theft, misuse, and unauthorized access. However, no internet transmission is ever completely secure or error-free.</p>

            <h2>6. Children's Privacy</h2>
            <p>Our website is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13.</p>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
