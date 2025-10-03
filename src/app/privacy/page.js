export default function PrivacyPolicyPage() {
  const effectiveDate = "October 1, 2025";

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-950 via-black to-orange-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Animated gradient orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10">
          <header className="mb-12 text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center transform rotate-6 shadow-2xl shadow-orange-500/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-lg text-orange-200/80">
              Effective date: <span className="text-orange-300 font-semibold">{effectiveDate}</span>
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Left: main content */}
            <article className="md:col-span-2 space-y-10">
              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Introduction</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Bazzar respects your privacy and is committed to protecting your personal data.
                  This Privacy Policy explains what information we collect, how we use it, who we share it with, and
                  the choices you have. By using {"Bazzar's"} mobile apps or website you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 text-orange-400">Information we collect</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold mb-3 text-orange-300">1. Information you provide</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      When you create an account, place an order, contact support, or otherwise interact with the Service,
                      you may provide personal information such as:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Full name, username and profile details</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Email address and phone number</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Shipping and billing addresses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Payment information (tokens or nonce via payment processors — we do not store full card numbers)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Order history and preferences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>User-generated content such as reviews, messages, and support conversations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold mb-3 text-orange-300">2. Automatically collected data</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      We automatically collect certain information when you use the Service:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Device information (model, OS version, device identifiers)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Usage data (pages visited, taps, session length, crash logs)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>IP address, approximate location (city-level) and time zone</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Analytics and performance metrics</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold mb-3 text-orange-300">3. Third-party sources</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We may receive information about you from third parties, such as payment processors, advertising
                      networks, or identity providers. We use that information to improve and operate the Service.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">How we use your information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use personal information for purposes including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>To provide, maintain and improve the Service and features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>To process orders, payments, refunds and shipping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>To send transactional messages such as order confirmations and support replies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>To personalize your experience (recommendations, saved preferences)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>To detect, prevent and address technical issues, fraud, or abuse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>To comply with legal obligations and enforce our terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>With consent, for marketing or promotional messages you opt-in to receive</span>
                  </li>
                </ul>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Payment processing & security</h2>
                <p className="text-gray-300 leading-relaxed">
                  Payments on Bazzar are processed by trusted third-party payment processors (for example, Stripe,
                  Razorpay; the specific provider used appears on checkout). We never store full credit card numbers on
                  our servers. Payment processors manage card data securely and are responsible for PCI compliance.
                  We may store payment tokens or references to facilitate refunds and recurring purchases.
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Cookies & similar technologies</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies, local storage and other tracking technologies for authentication, security, analytics,
                  and personalization. Cookies help us remember your settings, keep you logged in, and measure product
                  usage. You can control cookie preferences in your browser and device settings; disabling certain cookies
                  may affect the Service functionality.
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Third-party services & sharing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may share personal information with:
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Payment processors for billing and refunds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Delivery and logistics partners for shipping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Analytics and monitoring providers (e.g., Google Analytics, Sentry) to measure and improve performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Advertising partners if you opt into promotional communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Law enforcement or regulators if required by law or to protect our rights</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  We require third parties to use reasonable security measures and limit use of your data to the purposes
                  {"we've"} authorized.
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Your choices & rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have rights including:
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong className="text-orange-300">Access:</strong> request a copy of the personal data we hold about you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong className="text-orange-300">Correction:</strong> request correction of inaccurate or incomplete data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong className="text-orange-300">Deletion:</strong> request deletion of your personal data (subject to legal or operational exceptions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong className="text-orange-300">Portability:</strong> request transfer of your data in a common format</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong className="text-orange-300">Objection or restriction:</strong> object to certain processing or request restriction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong className="text-orange-300">Opt-out:</strong> unsubscribe from marketing communications at any time</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  To exercise these rights, contact us at the address below. We may request information to verify your identity
                  before fulfilling requests.
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Children</h2>
                <p className="text-gray-300 leading-relaxed">
                  The Service is not directed at children under 16. We do not knowingly collect personal information from
                  children under 16 without parental consent. If you believe we have collected personal data of a child without
                  appropriate consent, contact us and we will delete it where required by law.
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Data retention & deletion</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain personal data as long as necessary to provide the Service, comply with legal obligations,
                  resolve disputes, and enforce agreements. When data is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement industry-standard technical and organizational measures to protect your personal information,
                  including encryption in transit (HTTPS), access controls, and secure infrastructure. However, no system is
                  100% secure—if you suspect a security issue, contact us immediately.
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">International transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Bazzar operates globally. Personal data may be transferred to and processed in countries outside your
                  residence. When transfers occur, we take steps to ensure adequate protections (standard contractual clauses,
                  privacy shields where applicable, or other lawful bases).
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Changes to this policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. When we make material changes, we will notify users
                  via the Service or by email. The effective date at the top will be updated.
                </p>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Contact us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have questions or requests regarding this Privacy Policy or your data, please contact:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-orange-300">Email:</strong> privacy@bazzar.app</p>
                  <p><strong className="text-orange-300">Address:</strong> Bazzar Inc., 123 Product Road, City, Country</p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Legal disclaimers</h2>
                <p className="text-gray-300 leading-relaxed">
                  This Privacy Policy describes our practices; it does not create contractual rights for users. If you need
                  legal advice about data protection obligations or how this applies to your business, consult qualified counsel.
                </p>
              </section>
            </article>

            {/* Right: summary cards */}
            <aside className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-orange-600/20 to-orange-950/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-6 shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-orange-300">At a glance</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2 mt-1">✓</span>
                      <span>We collect account, order and device data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2 mt-1">✓</span>
                      <span>Payments via third-party processors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2 mt-1">✓</span>
                      <span>Cookies for analytics & preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2 mt-1">✓</span>
                      <span>Data subject rights available on request</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-600/20 to-orange-950/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-6 shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-orange-300">Actions</h3>
                  <p className="text-gray-300 mb-4">
                    To request data access, correction, deletion, or portability, please contact us.
                  </p>
                  <a
                    href="mailto:privacy@bazzar.app"
                    className="inline-block w-full text-center px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact privacy team
                  </a>
                </div>

                <div className="bg-gradient-to-br from-orange-600/20 to-orange-950/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-6 shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold text-orange-300">Effective date</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{effectiveDate}</p>
                </div>

                <div className="bg-gradient-to-br from-orange-600/20 to-orange-950/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-6 shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h3 className="text-xl font-bold text-orange-300">Data Protection Officer</h3>
                  </div>
                  <p className="text-gray-300 mb-2">DPO contact:</p>
                  <a href="mailto:dpo@bazzar.app" className="text-orange-400 hover:text-orange-300 underline transition-colors">
                    dpo@bazzar.app
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <footer className="mt-16 text-gray-400 text-sm bg-gradient-to-br from-orange-950/30 to-black/30 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8">
            <p className="leading-relaxed">
              Bazzar is committed to protecting your privacy. This policy applies to information collected by Bazzar via our
              website and mobile apps. It does not cover third-party websites, apps, or services linked from Bazzar.
            </p>
            <p className="mt-4 leading-relaxed">
              <strong className="text-orange-300">Note:</strong> This Privacy Policy is provided for informational purposes and does not constitute legal advice.
              Please consult legal counsel for advice tailored to your situation.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}