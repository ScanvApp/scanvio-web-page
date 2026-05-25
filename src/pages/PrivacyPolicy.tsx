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

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-3">Legal</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Effective Date: <span className="text-gray-400">July 1, 2025</span></p>
          <div className="mt-6 h-px bg-white/8" />
        </div>

        {/* Intro */}
        <div className="mb-10 p-5 rounded-2xl border border-white/8 bg-white/[0.025] text-sm text-gray-400 leading-relaxed">
          Scanvio ("Company," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use the Scanvio mobile application and website (collectively, the "Service"). Please read this Privacy Policy carefully. If you do not agree with its terms, please discontinue use of the Service immediately.
        </div>

        <Section title="1. Information We Collect">
          <p><span className="text-white font-semibold">Information You Provide Directly:</span></p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Contact information</span> — email address when joining the waitlist, creating an account, or contacting support.</li>
            <li><span className="text-white font-semibold">Profile information</span> — name and any optional details you provide during account setup.</li>
            <li><span className="text-white font-semibold">Payment information</span> — processed securely by Stripe, Inc., our third-party payment processor. We do not store your full card number or payment credentials. Stripe's Privacy Policy governs the handling of your payment data.</li>
          </ul>
          <p className="mt-3"><span className="text-white font-semibold">Information Collected Automatically:</span></p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Scan history</span> — barcodes and book covers you scan, and the products identified.</li>
            <li><span className="text-white font-semibold">Device information</span> — device type, operating system version, app version, and unique device identifiers.</li>
            <li><span className="text-white font-semibold">Usage data</span> — features accessed, screens viewed, time spent in the app, and in-app actions.</li>
            <li><span className="text-white font-semibold">Log data</span> — IP address, browser type, referring URLs, and access timestamps.</li>
            <li><span className="text-white font-semibold">General location</span> — country or region inferred from IP address, used to display relevant pricing and store availability.</li>
            <li><span className="text-white font-semibold">Crash reports and diagnostics</span> — automatically collected to help us identify and resolve technical issues.</li>
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
          <p>We do not sell your personal information. In the preceding 12 months, we have not sold any personal information to third parties, and we do not intend to do so. We may disclose your information in the following limited circumstances:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Service Providers</span> — we engage trusted third-party vendors for cloud hosting, analytics, payment processing (Stripe), and customer support, each bound by confidentiality and data processing agreements.</li>
            <li><span className="text-white font-semibold">Retail API Partners</span> — limited, non-identifying product-query data is transmitted to Amazon and other retailers solely to retrieve live price and availability data.</li>
            <li><span className="text-white font-semibold">Legal Requirements</span> — when required by applicable law, regulation, subpoena, court order, or to protect the rights, property, or safety of Scanvio, its users, or others.</li>
            <li><span className="text-white font-semibold">Business Transfers</span> — in connection with a merger, acquisition, reorganization, or sale of assets, your information may be transferred to a successor entity, which will be bound by this Privacy Policy.</li>
          </ul>
        </Section>

        <Section title="4. Cookies and Tracking Technologies">
          <p>Our website uses cookies and similar tracking technologies to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Maintain your session and keep you signed in.</li>
            <li>Remember your preferences and settings.</li>
            <li>Analyze site traffic and usage through aggregated, anonymized analytics tools.</li>
          </ul>
          <p>You may control or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the website. We do not currently respond to "Do Not Track" signals, as no uniform industry standard has been adopted.</p>
        </Section>

        <Section title="5. Data Retention">
          <p>We retain your personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Account data</span> — retained while your account is active and for 30 days following account deletion or closure, after which it is purged from our systems.</li>
            <li><span className="text-white font-semibold">Scan history and wishlists</span> — retained until you delete them or close your account.</li>
            <li><span className="text-white font-semibold">Transaction records</span> — retained for up to 7 years to comply with financial and tax recordkeeping obligations.</li>
            <li><span className="text-white font-semibold">Anonymized analytics</span> — aggregated, non-identifiable data may be retained indefinitely for product improvement purposes.</li>
          </ul>
        </Section>

        <Section title="6. Your Privacy Rights">
          <p>Depending on your state of residence, you may have certain rights regarding your personal information. California residents have the following rights under the California Consumer Privacy Act (CCPA), as amended by the CPRA:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Right to Know</span> — request disclosure of the categories and specific pieces of personal information we have collected about you in the preceding 12 months, including the purposes for collection and categories of third parties with whom it is shared.</li>
            <li><span className="text-white font-semibold">Right to Delete</span> — request deletion of personal information we have collected, subject to certain statutory exceptions.</li>
            <li><span className="text-white font-semibold">Right to Correct</span> — request correction of inaccurate personal information we maintain about you.</li>
            <li><span className="text-white font-semibold">Right to Opt Out of Sale or Sharing</span> — we do not sell or share personal information for cross-context behavioral advertising. No action is required, but you may contact us to confirm this practice.</li>
            <li><span className="text-white font-semibold">Right to Limit Use of Sensitive Personal Information</span> — we do not use sensitive personal information for purposes beyond those permitted under the CPRA.</li>
            <li><span className="text-white font-semibold">Right to Non-Discrimination</span> — we will not discriminate against you for exercising any of your CCPA rights.</li>
          </ul>
          <p className="mt-3">To submit a verifiable privacy request, contact us at <span className="text-brand-blue">privacy@scanv.io</span> with the subject line "Privacy Request." We will verify your identity and respond within 45 days. We may extend this period by an additional 45 days where reasonably necessary, with prior notice.</p>
          <p className="mt-3">Other state privacy laws may grant you similar rights. We will honor verifiable requests from residents of all US states to the extent required by applicable law.</p>
        </Section>

        <Section title="7. Data Security">
          <p>We implement commercially reasonable technical and organizational measures designed to protect your personal information against unauthorized access, loss, misuse, alteration, or destruction. These measures include:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>TLS/SSL encryption for all data transmitted between your device and our servers.</li>
            <li>Encryption at rest for sensitive stored data.</li>
            <li>Role-based access controls limiting internal access to personal data.</li>
            <li>Regular security assessments and vulnerability reviews.</li>
          </ul>
          <p>No method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of your information. In the event of a data breach that creates a risk to your rights, we will notify you in accordance with applicable law.</p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>The Scanvio Service is intended for users who are 16 years of age or older. Because Scanvio is designed primarily for commercial activities — including product sourcing and reselling — it is not directed at children under the age of 16. We do not knowingly collect personal information from anyone under 16. If we become aware that we have collected personal information from a child under 16 without verifiable parental consent, we will take steps to delete that information promptly. If you believe a child has submitted personal information to us, please contact us at <span className="text-brand-blue">privacy@scanv.io</span>.</p>
        </Section>

        <Section title="9. Data Storage and Processing">
          <p>Scanvio is headquartered in the United States, and all data is stored and processed in the United States. The Service is intended for use by US residents only. If you access the Service from outside the United States, you do so at your own risk and are responsible for compliance with local laws.</p>
        </Section>

        <Section title="10. Amazon SP-API Data Use and Compliance">
          <p>Scanvio accesses data through Amazon's Selling Partner API ("Amazon SP-API") in accordance with Amazon's Developer Agreement, Acceptable Use Policy, and Data Protection Policy ("Amazon DPP"). The following terms govern all data we receive from Amazon:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><span className="text-white font-semibold">Data Accessed:</span> We retrieve only publicly-available product catalog data, including product titles, descriptions, images, pricing, sales rank, and availability information. We do not access, request, store, or process any Amazon customer data, buyer information, order details, personally identifiable information of Amazon users, or any other data class beyond what is strictly necessary to deliver the price-comparison features of the Service.</li>
            <li><span className="text-white font-semibold">Purpose Limitation:</span> Amazon-sourced data is used solely to display live product pricing and availability to authenticated Scanvio users within the Service. We do not use Amazon-sourced data for advertising, behavioral profiling, data brokering, or any purpose not expressly authorized by Amazon's Developer Agreement.</li>
            <li><span className="text-white font-semibold">Prohibition on Re-Disclosure:</span> We do not sell, license, share, or otherwise disclose Amazon-sourced data to any third party, except to our infrastructure providers (e.g., cloud hosting) strictly as necessary to operate the Service and under confidentiality obligations consistent with the Amazon DPP.</li>
            <li><span className="text-white font-semibold">Data Retention:</span> Amazon-sourced pricing and availability data is fetched in real time at the point of scan and is not permanently stored in our databases. Any cached product data is automatically purged within 24 hours of retrieval. Scan history entries referencing Amazon data are retained only as described in Section 5 and may be deleted by you at any time.</li>
            <li><span className="text-white font-semibold">Data Security:</span> All data received from Amazon's SP-API is transmitted exclusively over TLS/HTTPS and is subject to the security controls described in Section 7 of this Privacy Policy.</li>
            <li><span className="text-white font-semibold">Compliance Priority:</span> Our use of Amazon's SP-API is governed by Amazon's Developer Agreement and associated policies. In the event of any conflict between this Privacy Policy and Amazon's Data Protection Policy with respect to Amazon-sourced data, Amazon's Data Protection Policy shall control.</li>
            <li><span className="text-white font-semibold">Data Disposal:</span> Upon termination of our access to Amazon's SP-API for any reason, we will promptly delete or destroy all Amazon-sourced data in our possession in accordance with the Amazon DPP and applicable law.</li>
          </ul>
          <p>If you have questions specifically about how we handle Amazon-sourced data, contact us at <span className="text-brand-blue">privacy@scanv.io</span>.</p>
        </Section>

        <Section title="11. Third-Party Links and Services">
          <p>The Service may contain links to third-party websites, services, or applications (such as Amazon, eBay, or Goodreads). This Privacy Policy does not apply to those third-party services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services you visit.</p>
        </Section>

        <Section title="12. Changes to This Privacy Policy">
          <p>We reserve the right to update this Privacy Policy at any time. When we make material changes, we will update the Effective Date at the top of this page and notify you through the app or via email where required by applicable law. Your continued use of the Service after the effective date of any revised Privacy Policy constitutes your acceptance of the changes.</p>
        </Section>

        <Section title="13. Contact Us">
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          <div className="mt-3 p-4 rounded-xl border border-white/8 bg-white/[0.02]">
            <p className="text-white font-semibold mb-1">Scanvio</p>
            <p>Privacy inquiries: <span className="text-brand-blue">privacy@scanv.io</span></p>
            <p>General inquiries: <span className="text-brand-blue">info@scanv.io</span></p>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  )
}
