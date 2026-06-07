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

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-24">

        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-3">Legal</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Effective Date: <span className="text-gray-400">July 1, 2025</span></p>
          <div className="mt-6 h-px bg-white/8" />
        </div>

        <div className="mb-10 p-5 rounded-2xl border border-white/8 bg-white/[0.025] text-sm text-gray-400 leading-relaxed">
          This Privacy Policy describes what data Scanvio ("Company," "we," "our," or "us") collects, why, and how it is handled when you use the Scanvio mobile application and website (collectively, the "Service"). Use of the Service constitutes acceptance of this policy.
        </div>

        <Section title="1. Information We Collect">
          <p><span className="text-white font-semibold">Information You Provide Directly:</span></p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Contact information:</span> email address when joining the waitlist, creating an account, or contacting support.</li>
            <li><span className="text-white font-semibold">Profile information:</span> name and any optional details you provide during account setup.</li>
            <li><span className="text-white font-semibold">Payment information:</span> processed securely by Stripe, Inc. We do not store your card number or payment credentials. Stripe's Privacy Policy governs the handling of your payment data.</li>
          </ul>
          <p className="mt-3"><span className="text-white font-semibold">Information Collected Automatically:</span></p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Scan history:</span> barcodes and book covers you scan, and the products identified.</li>
            <li><span className="text-white font-semibold">Device information:</span> device type, operating system version, app version, and unique device identifiers.</li>
            <li><span className="text-white font-semibold">Usage data:</span> features accessed, screens viewed, time spent in the app, and in-app actions.</li>
            <li><span className="text-white font-semibold">Log data:</span> IP address, browser type, referring URLs, and access timestamps.</li>
            <li><span className="text-white font-semibold">General location:</span> country or region inferred from IP address, used to display relevant pricing and store availability.</li>
            <li><span className="text-white font-semibold">Crash reports and diagnostics:</span> automatically collected to help us identify and resolve technical issues.</li>
          </ul>
          <p className="mt-3"><span className="text-white font-semibold">Information From Third Parties:</span></p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Product data (titles, prices, availability) sourced from Amazon via the SP-API, eBay, and other retail partners.</li>
            <li>Aggregated review data from publicly available sources including Goodreads and Amazon.</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>To provide, operate, and maintain the Scanvio Service.</li>
            <li>To deliver live price comparisons, product details, and aggregated reviews.</li>
            <li>To power AI-driven product recommendations personalized to your scan history (Pro plan).</li>
            <li>To process subscription payments and manage your account.</li>
            <li>To send transactional communications (account confirmation, receipts) and, with your consent, marketing and product updates.</li>
            <li>To analyze usage trends and improve app features, performance, and user experience.</li>
            <li>To detect, prevent, and investigate fraud, abuse, and security incidents.</li>
            <li>To comply with applicable legal obligations and enforce our Terms of Use.</li>
          </ul>
        </Section>

        <Section title="3. Disclosure of Your Information">
          <p>We do not sell your personal information. We may disclose your information in the following limited circumstances:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Service Providers:</span> trusted third-party vendors for cloud hosting, analytics, payment processing (Stripe), and customer support, each bound by confidentiality and data processing agreements.</li>
            <li><span className="text-white font-semibold">Retail API Partners:</span> limited, non-identifying product-query data transmitted to Amazon and other retailers solely to retrieve live price and availability data.</li>
            <li><span className="text-white font-semibold">Legal Requirements:</span> when required by applicable law, regulation, subpoena, or court order.</li>
            <li><span className="text-white font-semibold">Business Transfers:</span> in connection with a merger, acquisition, or sale of assets, your information may be transferred to a successor entity bound by this Privacy Policy.</li>
          </ul>
        </Section>

        <Section title="4. Cookies and Tracking Technologies">
          <p>Our website uses cookies and similar tracking technologies to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Maintain your session and keep you signed in.</li>
            <li>Remember your preferences and settings.</li>
            <li>Analyze site traffic and usage through aggregated, anonymized analytics tools.</li>
          </ul>
          <p>You may control or disable cookies through your browser settings. Disabling certain cookies may affect website functionality. We do not currently respond to "Do Not Track" signals.</p>
        </Section>

        <Section title="5. Data Retention">
          <p>We retain your personal information only as long as necessary to fulfill the purposes described in this policy, unless a longer period is required by law:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Account data:</span> retained while your account is active and for 30 days after closure, then purged.</li>
            <li><span className="text-white font-semibold">Scan history and wishlists:</span> retained until you delete them or close your account.</li>
            <li><span className="text-white font-semibold">Transaction records:</span> retained for up to 7 years to comply with financial and tax recordkeeping obligations.</li>
            <li><span className="text-white font-semibold">Anonymized analytics:</span> aggregated, non-identifiable data may be retained indefinitely for product improvement.</li>
          </ul>
        </Section>

        <Section title="6. Your Privacy Rights">
          <p>California residents have the following rights under the CCPA as amended by the CPRA:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Right to Know:</span> request disclosure of the categories and specific pieces of personal information collected about you in the preceding 12 months.</li>
            <li><span className="text-white font-semibold">Right to Delete:</span> request deletion of personal information we have collected, subject to certain statutory exceptions.</li>
            <li><span className="text-white font-semibold">Right to Correct:</span> request correction of inaccurate personal information we maintain about you.</li>
            <li><span className="text-white font-semibold">Right to Opt Out of Sale or Sharing:</span> we do not sell or share personal information for cross-context behavioral advertising.</li>
            <li><span className="text-white font-semibold">Right to Limit Use of Sensitive Personal Information:</span> we do not use sensitive personal information beyond the purposes permitted under the CPRA.</li>
            <li><span className="text-white font-semibold">Right to Non-Discrimination:</span> we will not discriminate against you for exercising any of your CCPA rights.</li>
          </ul>
          <p className="mt-3">To submit a verifiable privacy request, contact us at <span className="text-brand-blue">privacy@scanv.io</span> with the subject line "Privacy Request." We will respond within 45 days.</p>
          <p className="mt-3">Other state privacy laws may grant you similar rights. We will honor verifiable requests from residents of all US states to the extent required by applicable law.</p>
        </Section>

        <Section title="7. Data Security">
          <p>We use the following controls to protect your data:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>TLS/SSL encryption for all data transmitted between your device and our servers.</li>
            <li>Encryption at rest for sensitive stored data.</li>
            <li>Role-based access controls limiting internal access to personal data.</li>
            <li>Regular security assessments and vulnerability reviews.</li>
          </ul>
          <p>No method of electronic transmission or storage is 100% secure. In the event of a data breach that creates a risk to your rights, we will notify you in accordance with applicable law.</p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>The Scanvio Service is intended for users who are 16 years of age or older. Scanvio is designed for commercial product sourcing and reselling and is not directed at children under 16. We do not knowingly collect personal information from anyone under 16. If you believe a child has submitted personal information to us, contact us at <span className="text-brand-blue">privacy@scanv.io</span>.</p>
        </Section>

        <Section title="9. Data Storage and Processing">
          <p>Scanvio is based in the United States, and all data is stored and processed in the United States. The Service is intended for US residents only.</p>
        </Section>

        <Section title="10. Amazon SP-API Data Use and Compliance">
          <p>Scanvio accesses data through the Amazon Selling Partner API ("Amazon SP-API") in accordance with Amazon's Developer Agreement, Acceptable Use Policy, and Data Protection Policy ("Amazon DPP"). The following terms govern all data we receive from Amazon:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Data Accessed:</span> We retrieve only product catalog data including titles, descriptions, images, pricing, sales rank, and availability. We do not access Amazon customer data, buyer information, or any data class beyond what is strictly necessary to deliver the scouting features of the Service.</li>
            <li><span className="text-white font-semibold">Purpose Limitation:</span> Amazon-sourced data is used solely to display live product pricing and availability to authenticated Scanvio users. We do not use Amazon-sourced data for advertising, behavioral profiling, or data brokering.</li>
            <li><span className="text-white font-semibold">Prohibition on Re-Disclosure:</span> We do not sell, license, or share Amazon-sourced data with any third party, except to infrastructure providers strictly as necessary to operate the Service.</li>
            <li><span className="text-white font-semibold">Data Retention:</span> Amazon-sourced pricing data is fetched in real time and is not permanently stored. Cached product data is purged within 24 hours. Scan history entries referencing Amazon data may be deleted by you at any time.</li>
            <li><span className="text-white font-semibold">Data Security:</span> All data received from the SP-API is transmitted over TLS/HTTPS and subject to the security controls described in Section 7.</li>
            <li><span className="text-white font-semibold">Compliance Priority:</span> In the event of any conflict between this Privacy Policy and Amazon's Data Protection Policy with respect to Amazon-sourced data, Amazon's Data Protection Policy shall control.</li>
            <li><span className="text-white font-semibold">Data Disposal:</span> Upon termination of our SP-API access for any reason, all Amazon-sourced data will be purged within 30 days in accordance with the Amazon DPP.</li>
          </ul>
          <p>For questions about Amazon-sourced data specifically, contact <span className="text-brand-blue">privacy@scanv.io</span>.</p>
        </Section>

        <Section title="11. Third-Party Links and Services">
          <p>The Service links to third-party websites and services (Amazon, eBay, Goodreads). This Privacy Policy does not apply to those services; check each one's own policy directly. We are not responsible for their data practices.</p>
        </Section>

        <Section title="12. Changes to This Privacy Policy">
          <p>We may update this Privacy Policy at any time. When we make material changes, we will update the Effective Date and notify you through the app or via email where required by law. Continued use of the Service after the effective date constitutes acceptance of the changes.</p>
        </Section>

        <Section title="13. Contact Us">
          <p>Questions or data requests:</p>
          <div className="mt-3 p-4 rounded-xl border border-white/8 bg-white/[0.02]">
            <p className="text-white font-semibold mb-1">Scanvio</p>
            <p className="text-gray-500 text-xs mb-2">Developed and operated by <a href="https://tsntesch.org" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">tsntesch.org</a></p>
            <p>Privacy inquiries: <span className="text-brand-blue">privacy@scanv.io</span></p>
            <p>General inquiries: <span className="text-brand-blue">info@scanv.io</span></p>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  )
}
