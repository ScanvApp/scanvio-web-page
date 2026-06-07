import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/8">{title}</h2>
      <div className="text-gray-400 text-sm leading-relaxed space-y-4">{children}</div>
    </div>
  )
}

function PermissionRow({ api, permission, dataAccessed, purpose, retention }: {
  api: string
  permission: string
  dataAccessed: string
  purpose: string
  retention: string
}) {
  return (
    <div className="rounded-2xl border border-white/8 overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="px-5 py-3 border-b border-white/6" style={{ background: 'rgba(79,142,247,0.06)' }}>
        <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">{api}</span>
        <span className="ml-3 text-xs font-mono text-white/60">{permission}</span>
      </div>
      <div className="px-5 py-4 grid sm:grid-cols-3 gap-4 text-xs">
        <div>
          <p className="text-white/40 font-bold uppercase tracking-widest mb-1.5">Data accessed</p>
          <p className="text-gray-300 leading-relaxed">{dataAccessed}</p>
        </div>
        <div>
          <p className="text-white/40 font-bold uppercase tracking-widest mb-1.5">Business purpose</p>
          <p className="text-gray-300 leading-relaxed">{purpose}</p>
        </div>
        <div>
          <p className="text-white/40 font-bold uppercase tracking-widest mb-1.5">Retention</p>
          <p className="text-gray-300 leading-relaxed">{retention}</p>
        </div>
      </div>
    </div>
  )
}

export default function DeveloperDataUse() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 pt-36 pb-24">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-3">Developer &amp; Compliance</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Amazon SP-API Data Use
          </h1>
          <p className="text-sm text-gray-500">Last updated: <span className="text-gray-400">June 7, 2026</span></p>
          <div className="mt-6 h-px bg-white/8" />
        </div>

        {/* Developer attribution */}
        <div className="mb-6 p-4 rounded-xl border border-white/8 text-sm text-gray-400"
          style={{ background: 'rgba(255,255,255,0.02)' }}>
          <p className="text-white font-semibold mb-1">Developer</p>
          <p>Scanvio is designed and built by <a href="https://tsntesch.org" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-medium">tsntesch.org</a>. All SP-API integration, data handling, and compliance responsibilities described in this document are the responsibility of tsntesch.org.</p>
        </div>

        {/* Sandbox note */}
        <div className="mb-10 p-5 rounded-2xl border border-amber-500/20 text-sm text-gray-400 leading-relaxed"
          style={{ background: 'rgba(245,158,11,0.05)' }}>
          <p className="text-amber-400 font-semibold mb-2">Current Status: SP-API Sandbox</p>
          <p>Scanvio currently operates against the <strong className="text-white">Amazon SP-API Sandbox</strong> environment while our production access application is under review. Certain dashboard widgets (Min &amp; Max Report, Buy Box Report, Repricing Report) display "Pending Amazon SP-API app approval" in sandbox mode — this is expected sandbox behavior and does not reflect a functional gap in the integration. All core scouting features (product lookup, pricing, BSR, competition, restriction flags) function correctly against the sandbox. Full widget data will populate automatically upon production approval.</p>
        </div>

        {/* Summary box */}
        <div className="mb-12 p-5 rounded-2xl border border-brand-blue/20 text-sm text-gray-400 leading-relaxed"
          style={{ background: 'rgba(79,142,247,0.05)' }}>
          <p className="text-white font-semibold mb-2">Summary</p>
          Scanvio is an Amazon FBA book-scouting application. We connect to the Amazon Selling Partner API (SP-API) using Login with Amazon (LWA) OAuth so that authenticated sellers can retrieve live product, pricing, sales rank, competition, and restriction data at the point of sourcing. This page documents every API module we access, the exact data fields retrieved, the business justification for each permission, and how data is handled and disposed of.
        </div>

        <Section title="1. Application Overview">
          <p><span className="text-white font-semibold">Application name:</span> Scanvio</p>
          <p><span className="text-white font-semibold">Application type:</span> Mobile (iOS &amp; Android) with web dashboard</p>
          <p><span className="text-white font-semibold">Primary use case:</span> FBA book sellers scan a barcode or ISBN at a book sale, thrift store, or library sale. Scanvio returns a ScanvEscore™ (0–100 profit viability score), GoSignal (BUY / PASS recommendation), Amazon sales rank, active FBA seller count, restriction flags, and net profit estimate. All derived from live SP-API data, in under one second.</p>
          <p><span className="text-white font-semibold">Who uses Scanvio:</span> Individual Amazon FBA sellers and small reselling businesses who source used books for resale on Amazon.com. Each user authenticates via their own Amazon Seller Central account through LWA.</p>
          <p><span className="text-white font-semibold">Data direction:</span> Scanvio only reads data from SP-API. We do not write, create, update, or delete any data in a seller's Amazon account.</p>
        </Section>

        <Section title="2. SP-API Permissions Requested">
          <p className="mb-6">The following table lists every SP-API role and permission Scanvio requests, along with the precise data accessed and the business justification for each.</p>

          <div className="flex flex-col gap-4">
            <PermissionRow
              api="Catalog Items API"
              permission="catalogItems:read"
              dataAccessed="Product title, author, publisher, edition, ASIN, ISBN-10/13, product images, item dimensions, product type."
              purpose="Identify the scanned book and display it to the seller so they can confirm the correct product before acting on the profit data."
              retention="Fetched live at scan time. Not stored in Scanvio databases. Displayed in-session only. Purged from memory when the seller navigates away."
            />
            <PermissionRow
              api="Product Pricing API"
              permission="pricing:read"
              dataAccessed="Buy Box price, lowest FBA offer price, lowest MFN offer price, list price, offer condition (New / Used / Collectible), fulfillment channel (FBA / MFN)."
              purpose="Calculate net profit and margin for the seller. The ScanvEscore™ and GoSignal BUY/PASS signal both depend on current FBA pricing. Without live pricing, the core feature of the app cannot function."
              retention="Fetched live at scan time. Cached for a maximum of 1 hour to avoid redundant API calls for the same ASIN within a single scouting session. Automatically purged after 1 hour. Not written to permanent storage."
            />
            <PermissionRow
              api="Product Pricing API"
              permission="competitivePricing:read"
              dataAccessed="Competitive price including shipping, number of offer listings by condition and fulfillment channel, Buy Box eligibility."
              purpose="Power the Used Price Distribution chart, a histogram showing the full spread of used FBA listings by price tier. Sellers use this to identify whether a book's market is crowded or thin before buying."
              retention="Same as above: 1-hour session cache, then purged. Not stored permanently."
            />
            <PermissionRow
              api="Listings Items API"
              permission="listingsItems:read"
              dataAccessed="Number of active FBA offers, offer-level condition, seller feedback rating of active FBA sellers."
              purpose="Populate the 'FBA Sellers' count and Competition Analysis feature. Sellers need to know how many active FBA copies are available to assess how quickly their copy would sell and at what price."
              retention="Fetched live. Not stored. Displayed in-session only."
            />
            <PermissionRow
              api="Sales Rank API (via Catalog Items)"
              permission="catalogItems:read"
              dataAccessed="Primary sales rank (Books category BSR), sub-category rank where available."
              purpose="Sales rank (BSR) is a primary input to the ScanvEscore™ formula. A low BSR indicates fast-moving inventory; a high BSR indicates slow turnover. Without BSR, the scoring system cannot produce accurate buy signals."
              retention="Fetched live at scan time. Stored in the seller's scan history record alongside the other scan metadata. The seller can delete their own scan history at any time from within the app."
            />
            <PermissionRow
              api="Restrictions API"
              permission="listingsRestrictions:read"
              dataAccessed="ASIN-level selling restrictions: gated brands, IP complaints, hazmat flags, adult content flags, approval-required categories."
              purpose="The ASIN Restriction Alert feature (Pro plan) flags books the seller cannot list before they buy them. Buying restricted inventory is a common FBA loss. One unsellable book can cost $5-$15 in stranded fees."
              retention="Fetched live at scan time. Cached alongside BSR in scan history record. Seller can delete."
            />
            <PermissionRow
              api="Reports API (Inventory)"
              permission="reportsAndAnalytics:read"
              dataAccessed="GET_MERCHANT_LISTINGS_DATA: ASIN, SKU, condition, quantity, price for the authenticated seller's own active FBA inventory."
              purpose="Populate the My Inventory dashboard view, showing the seller their own current FBA stock, estimated revenue, and profit. This data belongs to the authenticated seller and is displayed only to them."
              retention="Fetched on dashboard load. Displayed to the authenticated seller only. Not shared with any other user or third party. Stored in the seller's account record. Purged upon account deletion."
            />
            <PermissionRow
              api="Orders API"
              permission="orders:read"
              dataAccessed="Order count, order revenue, order status for the authenticated seller's own FBA orders (last 30 days)."
              purpose="Populate the dashboard revenue and order count metrics shown in the seller's personal dashboard ($380.09 revenue, 20 orders in the live dashboard). Sellers use this to track sourcing ROI over time."
              retention="Fetched on dashboard load. Displayed to the authenticated seller only. Revenue totals stored in seller's account record. Raw order details are not stored; only aggregated metrics are kept. Purged upon account deletion."
            />
          </div>
        </Section>

        <Section title="3. Authentication and Authorization">
          <ul className="list-disc pl-5 space-y-2">
            <li>Scanvio uses <span className="text-white font-semibold">Login with Amazon (LWA)</span>, Amazon's official OAuth 2.0 authorization flow, to request access tokens.</li>
            <li>Sellers authorize Scanvio once via the in-app "Connect Amazon Account" flow. They are redirected to Amazon's authorization page and grant only the permissions listed above.</li>
            <li>We store the LWA refresh token in encrypted form in our database (AES-256 at rest). Access tokens are short-lived (1 hour) and generated on demand.</li>
            <li>Sellers can revoke Scanvio's access at any time from <strong>Amazon Seller Central → Apps &amp; Services → Manage Your Apps</strong>.</li>
            <li>We never store a seller's Amazon username, password, or any credential other than the LWA refresh token.</li>
          </ul>
        </Section>

        <Section title="4. Data Security Controls">
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="text-white font-semibold">Encryption in transit:</span> All API calls and data transfers use TLS 1.2+ (HTTPS). No SP-API data is ever transmitted over an unencrypted channel.</li>
            <li><span className="text-white font-semibold">Encryption at rest:</span> All seller data stored in our databases is encrypted at rest using AES-256. LWA tokens are stored in an isolated secrets store with additional encryption.</li>
            <li><span className="text-white font-semibold">Access control:</span> Role-based access controls restrict internal team access to production seller data. Only engineers with a business need can access production systems, and all access is logged and audited.</li>
            <li><span className="text-white font-semibold">Data minimization:</span> We request only the SP-API permissions listed in Section 2. We do not request customer data, buyer data, financial disbursement data, or any other data class beyond what is strictly necessary for the scouting features described.</li>
            <li><span className="text-white font-semibold">No bulk data export:</span> We do not export, aggregate, or resell Amazon-sourced data in bulk. Data is used solely to generate per-scan responses for the individual authenticated seller.</li>
            <li><span className="text-white font-semibold">Third-party processing:</span> Our infrastructure runs on AWS (US East region). Database: Supabase (PostgreSQL, US region). Payments: Stripe, Inc. No Amazon-sourced data is shared with any of these providers beyond what is strictly necessary to operate the described features.</li>
          </ul>
        </Section>

        <Section title="5. Data Retention and Disposal">
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="text-white font-semibold">Live pricing data:</span> Not stored permanently. Cached in memory for up to 1 hour per ASIN to reduce redundant API calls, then automatically purged.</li>
            <li><span className="text-white font-semibold">Scan history (BSR, score, restriction flag):</span> Stored in the seller's account record until the seller deletes it or closes their account. Sellers can delete individual scans or their entire history at any time from within the app.</li>
            <li><span className="text-white font-semibold">Revenue and order metrics:</span> Aggregated totals stored in the seller's account record. Raw order details are not stored. Purged 30 days after account closure.</li>
            <li><span className="text-white font-semibold">LWA refresh token:</span> Stored encrypted. Immediately deleted from our system when the seller disconnects their Amazon account or closes their Scanvio account.</li>
            <li><span className="text-white font-semibold">Upon SP-API access revocation:</span> If Amazon revokes our SP-API access or our developer agreement is terminated, all Amazon-sourced data is purged from our systems within 30 days, consistent with Amazon's Data Protection Policy.</li>
          </ul>
        </Section>

        <Section title="6. Prohibited Uses">
          <p>We do not and will not use Amazon SP-API data for any of the following:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Training machine learning models on Amazon data</li>
            <li>Building competing pricing databases or data products</li>
            <li>Selling, licensing, or sharing Amazon data with third parties</li>
            <li>Behavioral profiling or advertising targeting</li>
            <li>Any purpose not expressly described in this document and Amazon's Developer Agreement</li>
          </ul>
        </Section>

        <Section title="7. Contact">
          <p>For questions about our SP-API data practices, Amazon compliance, or to request a data audit:</p>
          <div className="mt-3 p-4 rounded-xl border border-white/8" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <p className="text-white font-semibold mb-1">Scanvio</p>
            <p>Developer / compliance inquiries: <a href="mailto:developer@scanv.io" className="text-brand-blue hover:underline">developer@scanv.io</a></p>
            <p>Privacy inquiries: <a href="mailto:privacy@scanv.io" className="text-brand-blue hover:underline">privacy@scanv.io</a></p>
            <p>General: <a href="mailto:info@scanv.io" className="text-brand-blue hover:underline">info@scanv.io</a></p>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  )
}
