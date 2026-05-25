import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-gray-400 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export default function TermsOfUse() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-24">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-3">Legal</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-gray-500">Effective Date: <span className="text-gray-400">July 1, 2025</span></p>
          <div className="mt-6 h-px bg-white/8" />
        </div>

        {/* Intro */}
        <div className="mb-10 p-5 rounded-2xl border border-white/8 bg-white/[0.025] text-sm text-gray-400 leading-relaxed">
          PLEASE READ THESE TERMS OF USE ("TERMS") CAREFULLY BEFORE USING THE SCANVIO SERVICE. These Terms constitute a legally binding agreement between you and Scanvio ("Company," "we," "us," or "our") governing your access to and use of the Scanvio mobile application and website (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not access or use the Service.
        </div>

        <Section title="1. Eligibility">
          <p>You must be at least 16 years of age to use the Service. Because Scanvio is designed primarily for commercial activities — including product sourcing, price comparison, and reselling — it is not appropriate for or directed at users under 16. By using the Service, you represent and warrant that:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>You are at least 16 years of age;</li>
            <li>You have the legal capacity to enter into a binding agreement; and</li>
            <li>Your use of the Service does not violate any applicable law or regulation.</li>
          </ul>
          <p>The Service is intended for use within the United States. If you are accessing the Service on behalf of a company, organization, or other legal entity, you represent that you have authority to bind that entity to these Terms, in which case "you" refers to that entity.</p>
        </Section>

        <Section title="2. Description of Service">
          <p>Scanvio is a mobile and web-based application that enables users to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Scan product barcodes and book covers using their device camera.</li>
            <li>Access live price comparisons across 50+ US retailers.</li>
            <li>View aggregated product reviews and ratings from multiple sources.</li>
            <li>Receive a proprietary ScanvEscore™ profit viability rating.</li>
            <li>Maintain scan history, wishlists, and buy lists.</li>
            <li>Access AI-powered product recommendations (Pro plan only).</li>
          </ul>
          <p>The Service is intended for personal use, consumer research, and product reselling purposes. We reserve the right to modify, suspend, or discontinue any feature or aspect of the Service at any time, with or without notice.</p>
        </Section>

        <Section title="3. Account Registration">
          <p>Certain features of the Service require you to register for an account. You agree to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Provide accurate, current, and complete information during registration.</li>
            <li>Maintain and promptly update your account information to keep it accurate.</li>
            <li>Maintain the confidentiality of your login credentials and restrict access to your account.</li>
            <li>Notify us immediately of any unauthorized use of your account or suspected security breach at <span className="text-brand-blue">info@scanv.io</span>.</li>
            <li>Accept responsibility for all activity that occurs under your account, whether or not authorized by you.</li>
          </ul>
          <p>We reserve the right to suspend or terminate accounts that contain false information, violate these Terms, or are inactive for an extended period.</p>
        </Section>

        <Section title="4. Subscription Plans and Billing">
          <p><span className="text-white font-semibold">Free Plan:</span> Available at no cost, with no credit card required. Includes unlimited barcode scanning, price comparison across 3 stores (Amazon, eBay, and ThriftBooks), scan history, and aggregated reviews. The Free plan has no expiration date.</p>

          <p><span className="text-white font-semibold">Pro Plan:</span> Billed at $4.99 per month. Pro plan features include:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>AI-powered product recommendations.</li>
            <li>Price drop alerts and notifications.</li>
            <li>CSV export of scan history.</li>
            <li>Offline database mode (upon availability).</li>
            <li>Priority customer support.</li>
          </ul>

          <p><span className="text-white font-semibold">Billing and Payment:</span> Pro subscriptions are billed on a recurring monthly basis beginning on your subscription start date. All payments are processed securely by <span className="text-white font-semibold">Stripe, Inc.</span> By subscribing, you authorize Scanvio and Stripe to charge your designated payment method monthly until you cancel. Stripe's Terms of Service and Privacy Policy govern the handling of your payment data.</p>

          <p><span className="text-white font-semibold">Cancellation:</span> You may cancel your Pro subscription at any time from within the app settings. Cancellation takes effect at the end of your current billing period. You will retain Pro access through the end of that period and will not be charged for subsequent periods.</p>

          <p><span className="text-white font-semibold">Refunds:</span> All subscription fees are non-refundable except as required by applicable law. If you believe you have been charged in error, contact <span className="text-brand-blue">billing@scanv.io</span> within 14 days of the charge.</p>

          <p><span className="text-white font-semibold">Price Changes:</span> We reserve the right to adjust subscription pricing. We will provide at least 30 days' prior notice of any price increase. Your continued use of the Pro plan after the effective date constitutes your acceptance of the new pricing.</p>

          <p><span className="text-white font-semibold">Taxes:</span> Subscription prices are exclusive of applicable taxes. You are responsible for all taxes, levies, or duties imposed by your taxing authority.</p>
        </Section>

        <Section title="5. Acceptable Use">
          <p>By using the Service, you agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Violate any applicable federal, state, local, or international law or regulation.</li>
            <li><span className="text-white font-semibold">Scrape or extract data</span> — use web scraping, crawling, data mining, screen scraping, or any automated means to systematically access, copy, or aggregate data from the Service — including but not limited to price data, ScanvEscore™ results, product data, or reviews — without our prior written consent.</li>
            <li><span className="text-white font-semibold">Use automated tools</span> — interact with the Service using bots, scripts, spiders, browser automation tools, or any mechanism other than through our official application or any APIs we expressly make available.</li>
            <li>Attempt to reverse engineer, decompile, disassemble, or otherwise derive the source code of any part of the Service.</li>
            <li>Resell, sublicense, redistribute, or otherwise commercialize access to the Service or its data output.</li>
            <li>Interfere with or disrupt the Service, its servers, networks, or infrastructure, including through denial-of-service attacks.</li>
            <li>Attempt to gain unauthorized access to any portion of the Service, other accounts, or any related systems.</li>
            <li>Upload, transmit, or distribute viruses, malware, ransomware, or any other malicious or harmful code.</li>
            <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
            <li>Harass, threaten, defame, or harm any other user or Scanvio personnel.</li>
          </ul>
          <p>Violation of this section may result in immediate account suspension or termination without notice. We reserve all rights to seek civil and criminal remedies for violations that affect the integrity or security of our systems or data.</p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>All content, features, and functionality of the Service — including but not limited to the Scanvio name, logo, ScanvEscore™ scoring methodology, application design, software, text, graphics, and data compilations — are owned by Scanvio or its licensors and are protected by United States and international intellectual property laws.</p>
          <p><span className="text-white font-semibold">ScanvEscore™</span> is a proprietary trademark of Scanvio. Any unauthorized use of this mark is strictly prohibited.</p>
          <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service for your personal and commercial reselling purposes. No other rights are granted. You acquire no ownership interest in the Service or its underlying intellectual property.</p>
        </Section>

        <Section title="7. Third-Party Data and Price Accuracy">
          <p>Prices, product availability, sales rank data, and ratings displayed in the Service are sourced from third-party retailers and data providers, including Amazon and eBay. While we strive to display timely and accurate information:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>We make no representations or warranties regarding the accuracy, completeness, or timeliness of third-party data.</li>
            <li>Prices and availability may change between the time of scanning and the time of purchase.</li>
            <li>The ScanvEscore™ is an informational tool only and does not constitute financial, investment, or business advice.</li>
          </ul>
          <p>You are solely responsible for independently verifying current prices and availability before making any purchase or resale decision. We disclaim all liability for any losses arising from reliance on data displayed in the Service.</p>
        </Section>

        <Section title="8. Amazon SP-API Compliance">
          <p>Scanvio uses Amazon's Selling Partner API ("Amazon SP-API") to retrieve product, pricing, and availability data. Your use of any features powered by Amazon data is subject to the following restrictions:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Permitted Use:</span> Amazon-sourced data displayed in the Service — including pricing, sales rank, and product information — is provided solely for your individual product research and reselling decisions. You may not export, reproduce, redistribute, sublicense, or commercially exploit Amazon-sourced data in bulk.</li>
            <li><span className="text-white font-semibold">Prohibited Use:</span> You may not use Amazon-sourced data to train machine learning models, build competing price databases, aggregate data for any commercial purpose other than individual product research, or circumvent or attempt to bypass Amazon's own systems through the Service.</li>
            <li><span className="text-white font-semibold">No Amazon Affiliation:</span> Scanvio is an independent third-party application and is not affiliated with, endorsed by, sponsored by, or in any way officially connected with Amazon.com, Inc. "Amazon," "Kindle," and all related marks are registered trademarks of Amazon.com, Inc.</li>
            <li><span className="text-white font-semibold">Amazon Developer Agreement:</span> Our access to the SP-API is governed by Amazon's Developer Agreement, Acceptable Use Policy, and Data Protection Policy, which impose additional obligations on how Amazon data is handled. In the event of conflict between these Terms and Amazon's Developer Agreement with respect to Amazon-sourced data, Amazon's Developer Agreement shall control.</li>
            <li><span className="text-white font-semibold">API Availability:</span> Amazon may restrict, suspend, or terminate our SP-API access at any time and without liability to you. We make no guarantee of continuous Amazon data availability. If SP-API access is interrupted, affected features may be temporarily unavailable.</li>
          </ul>
        </Section>

        <Section title="10. Disclaimer of Warranties">
          <p>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SCANVIO EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
          <p>WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT ANY DEFECTS WILL BE CORRECTED. WE DO NOT WARRANT THAT THE RESULTS OBTAINED FROM USE OF THE SERVICE WILL BE ACCURATE, RELIABLE, OR MEET YOUR REQUIREMENTS.</p>
        </Section>

        <Section title="11. Limitation of Liability">
          <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SCANVIO, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITIES — ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF (OR INABILITY TO USE) THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p>IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING UNDER OR RELATED TO THESE TERMS EXCEED THE GREATER OF: (A) THE TOTAL AMOUNTS PAID BY YOU TO SCANVIO IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE CLAIM; OR (B) TWENTY-FIVE DOLLARS ($25.00).</p>
          <p>Some states do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you in full.</p>
        </Section>

        <Section title="12. Indemnification">
          <p>You agree to defend, indemnify, and hold harmless Scanvio and its officers, directors, employees, contractors, agents, licensors, and successors from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to: (a) your use of or access to the Service; (b) your violation of these Terms; (c) your violation of any third-party right, including any intellectual property or privacy right; or (d) any content or data you submit to or through the Service.</p>
        </Section>

        <Section title="13. Termination">
          <p>We may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice, including for breach of these Terms. Upon termination:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Your license to use the Service ceases immediately.</li>
            <li>You may request deletion of your personal data pursuant to our Privacy Policy.</li>
            <li>All provisions of these Terms that by their nature should survive termination — including ownership, warranty disclaimers, indemnification, and limitation of liability — will remain in full force and effect.</li>
          </ul>
          <p>You may terminate your account at any time by contacting us at <span className="text-brand-blue">info@scanv.io</span>.</p>
        </Section>

        <Section title="14. Governing Law and Dispute Resolution">
          <p>These Terms are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. You agree that any legal action or proceeding arising under or relating to these Terms or your use of the Service shall be brought exclusively in the state or federal courts located in Texas, and you hereby irrevocably consent to personal jurisdiction and venue in such courts.</p>
          <p>The Service is intended for use within the United States. We make no representation that the Service is appropriate or available for use outside the United States.</p>
        </Section>

        <Section title="15. Changes to These Terms">
          <p>We reserve the right to modify these Terms at any time. When we make material changes, we will update the Effective Date and notify you via email or in-app notification where practicable. Your continued use of the Service after any changes become effective constitutes your binding acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Service.</p>
        </Section>

        <Section title="16. Miscellaneous">
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Entire Agreement:</span> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Scanvio with respect to the Service and supersede all prior agreements and understandings.</li>
            <li><span className="text-white font-semibold">Severability:</span> If any provision of these Terms is held invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.</li>
            <li><span className="text-white font-semibold">Waiver:</span> Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.</li>
            <li><span className="text-white font-semibold">Assignment:</span> You may not assign or transfer any rights under these Terms without our prior written consent. We may assign our rights and obligations freely without restriction.</li>
            <li><span className="text-white font-semibold">No Third-Party Beneficiaries:</span> These Terms do not confer any rights or remedies on any third party.</li>
          </ul>
        </Section>

        <Section title="17. Contact Us">
          <p>If you have any questions about these Terms of Use, please contact us:</p>
          <div className="mt-3 p-4 rounded-xl border border-white/8 bg-white/[0.02]">
            <p className="text-white font-semibold mb-1">Scanvio</p>
            <p>Legal inquiries: <span className="text-brand-blue">legal@scanv.io</span></p>
            <p>General inquiries: <span className="text-brand-blue">info@scanv.io</span></p>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  )
}
