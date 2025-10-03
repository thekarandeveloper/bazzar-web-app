// app/privacy/page.js
// Next.js App Router page (server component). Uses Tailwind for styling.
// Place this file at /app/privacy/page.js (or adapt to your routes).

export const metadata = {
  title: "Privacy Policy — Bazzar",
  description: "Privacy Policy for Bazzar — what we collect, why, and how we protect it.",
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "October 1, 2025";

  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">Privacy Policy</h1>
          <p className="text-sm text-gray-300">
            Effective date: <span className="text-white">{effectiveDate}</span>
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Left: main content */}
          <article className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-medium mb-3">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Bazzar  respects your privacy and is committed to protecting your personal data.
                This Privacy Policy explains what information we collect, how we use it, who we share it with, and
                the choices you have. By using Bazzar’s mobile apps or website you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Information we collect</h2>

              <h3 className="text-lg font-medium mt-3">1. Information you provide</h3>
              <p className="text-gray-300 leading-relaxed">
                When you create an account, place an order, contact support, or otherwise interact with the Service,
                you may provide personal information such as:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>Full name, username and profile details</li>
                <li>Email address and phone number</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (tokens or nonce via payment processors — we do not store full card numbers)</li>
                <li>Order history and preferences</li>
                <li>User-generated content such as reviews, messages, and support conversations</li>
              </ul>

              <h3 className="text-lg font-medium mt-4">2. Automatically collected data</h3>
              <p className="text-gray-300 leading-relaxed">
                We automatically collect certain information when you use the Service:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>Device information (model, OS version, device identifiers)</li>
                <li>Usage data (pages visited, taps, session length, crash logs)</li>
                <li>IP address, approximate location (city-level) and time zone</li>
                <li>Analytics and performance metrics</li>
              </ul>

              <h3 className="text-lg font-medium mt-4">3. Third-party sources</h3>
              <p className="text-gray-300 leading-relaxed">
                We may receive information about you from third parties, such as payment processors, advertising
                networks, or identity providers . We use that information to
                improve and operate the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">How we use your information</h2>
              <p className="text-gray-300 leading-relaxed">
                We use personal information for purposes including:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>To provide, maintain and improve the Service and features</li>
                <li>To process orders, payments, refunds and shipping</li>
                <li>To send transactional messages such as order confirmations and support replies</li>
                <li>To personalize your experience (recommendations, saved preferences)</li>
                <li>To detect, prevent and address technical issues, fraud, or abuse</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>With consent, for marketing or promotional messages you opt-in to receive</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Payment processing & security</h2>
              <p className="text-gray-300 leading-relaxed">
                Payments on Bazzar are processed by trusted third-party payment processors (for example, Stripe,
                Razorpay; the specific provider used appears on checkout). We never store full credit card numbers on
                our servers. Payment processors manage card data securely and are responsible for PCI compliance.
                We may store payment tokens or references to facilitate refunds and recurring purchases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Cookies & similar technologies</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies, local storage and other tracking technologies for authentication, security, analytics,
                and personalization. Cookies help us remember your settings, keep you logged in, and measure product
                usage. You can control cookie preferences in your browser and device settings; disabling certain cookies
                may affect the Service functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Third-party services & sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                We may share personal information with:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>Payment processors for billing and refunds</li>
                <li>Delivery and logistics partners for shipping</li>
                <li>Analytics and monitoring providers (e.g., Google Analytics, Sentry) to measure and improve performance</li>
                <li>Advertising partners if you opt into promotional communications</li>
                <li>Law enforcement or regulators if required by law or to protect our rights</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                We require third parties to use reasonable security measures and limit use of your data to the purposes
                we’ve authorized.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Your choices & rights</h2>
              <p className="text-gray-300 leading-relaxed">
                Depending on your jurisdiction, you may have rights including:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>Access: request a copy of the personal data we hold about you</li>
                <li>Correction: request correction of inaccurate or incomplete data</li>
                <li>Deletion: request deletion of your personal data (subject to legal or operational exceptions)</li>
                <li>Portability: request transfer of your data in a common format</li>
                <li>Objection or restriction: object to certain processing or request restriction</li>
                <li>Opt-out: unsubscribe from marketing communications at any time</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                To exercise these rights, contact us at the address below. We may request information to verify your identity
                before fulfilling requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Children</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service is not directed at children under 16. We do not knowingly collect personal information from
                children under 16 without parental consent. If you believe we have collected personal data of a child without
                appropriate consent, contact us and we will delete it where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Data retention & deletion</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain personal data as long as necessary to provide the Service, comply with legal obligations,
                resolve disputes, and enforce agreements. When data is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement industry-standard technical and organizational measures to protect your personal information,
                including encryption in transit (HTTPS), access controls, and secure infrastructure. However, no system is
                100% secure—if you suspect a security issue, contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">International transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Bazzar operates globally. Personal data may be transferred to and processed in countries outside your
                residence. When transfers occur, we take steps to ensure adequate protections (standard contractual clauses,
                privacy shields where applicable, or other lawful bases).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Changes to this policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. When we make material changes, we will notify users
                via the Service or by email. The at the top will be updated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Contact us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions or requests regarding this Privacy Policy or your data, please contact:
              </p>
              <ul className="list-none ml-0 mt-2 text-gray-300">
                <li><strong>Email:</strong> privacy@bazzar.app</li>
                <li><strong>Address:</strong> Bazzar Inc., 123 Product Road, City, Country</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-3">Legal disclaimers</h2>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy describes our practices; it does not create contractual rights for users. If you need
                legal advice about data protection obligations or how this applies to your business, consult qualified counsel.
              </p>
            </section>
          </article>

          {/* Right: summary card / quick actions */}
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#0F1720] border border-white/6 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">At a glance</h3>
                <ul className="text-gray-300 list-disc ml-5 space-y-2">
                  <li>We collect account, order and device data</li>
                  <li>Payments via third-party processors</li>
                  <li>Cookies for analytics & preferences</li>
                  <li>Data subject rights available on request</li>
                </ul>
              </div>

              <div className="bg-[#0F1720] border border-white/6 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">Actions</h3>
                <p className="text-gray-300 mb-4">
                  To request data access, correction, deletion, or portability, please contact us.
                </p>
                <a
                  href="mailto:privacy@bazzar.app"
                  className="inline-block w-full text-center px-4 py-2 rounded-3xl bg-white text-black font-medium"
                >
                  Contact privacy team
                </a>
              </div>

              <div className="bg-[#0F1720] border border-white/6 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">Effective date</h3>
                <p className="text-gray-300">{effectiveDate}</p>
              </div>

              <div className="bg-[#0F1720] border border-white/6 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">Data Protection Officer</h3>
                <p className="text-gray-300 mb-2">
                  DPO contact: <br />
                  <a href="mailto:dpo@bazzar.app" className="text-white underline">dpo@bazzar.app</a>
                </p>
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-12 text-gray-400 text-sm">
          <p>
            Bazzar is committed to protecting your privacy. This policy applies to information collected by Bazzar via our
            website and mobile apps. It does not cover third-party websites, apps, or services linked from Bazzar.
          </p>
          <p className="mt-4">
            <strong>Note:</strong> This Privacy Policy is provided for informational purposes and does not constitute legal advice.
            Please consult legal counsel for advice tailored to your situation.
          </p>
        </footer>
      </div>
    </main>
  );
}