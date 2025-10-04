"use client"

import { useState } from 'react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.category || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      category: '',
      subject: '',
      message: ''
    });
  };

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'Orders' section. You'll find real-time tracking information and delivery updates for all your orders."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be unused and in original packaging. To initiate a return, go to your order history and click 'Return Item'. Refunds are processed within 5-7 business days."
    },
    {
      question: "How can I change my shipping address?",
      answer: "If your order hasn't been shipped yet, you can update the shipping address in your order details. Once shipped, please contact our support team immediately and we'll coordinate with the courier."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can see the exact shipping cost and estimated delivery date at checkout."
    },
    {
      question: "How do I cancel my order?",
      answer: "You can cancel your order within 1 hour of placing it through your order history. After that, please contact our support team and we'll do our best to help before the order ships."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. All payments are processed securely through encrypted payment gateways."
    }
  ];

  const supportChannels = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Support",
      description: "Get help via email",
      contact: "support@bazzar.app",
      time: "Response within 24 hours",
      link: "mailto:support@bazzar.app"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Support",
      description: "Talk to our team",
      contact: "+91 1800-123-4567",
      time: "Mon-Sat, 9 AM - 6 PM IST",
      link: "tel:+911800123456"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Live Chat",
      description: "Instant help available",
      contact: "Chat with us now",
      time: "Available 24/7",
      link: "#"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "WhatsApp",
      description: "Message us anytime",
      contact: "+91 98765-43210",
      time: "Quick responses",
      link: "https://wa.me/919876543210"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-950 via-black to-orange-900 text-white py-16">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-700/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl flex items-center justify-center transform -rotate-6 shadow-2xl shadow-orange-500/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
            How can we help you?
          </h1>
          <p className="text-xl text-orange-200/80 max-w-2xl mx-auto">
            {"We're"} here to assist you 24/7. Choose your preferred way to reach us or browse our FAQs below.
          </p>
        </header>

        {/* Support Channels Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-orange-400">Get in Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.link}
                className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 transform group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-white">{channel.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-300">{channel.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{channel.description}</p>
                <p className="text-white font-semibold mb-1">{channel.contact}</p>
                <p className="text-orange-400 text-sm">{channel.time}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Form & Quick Links */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Send us a Message</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-orange-300">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-orange-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-orange-300">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="order">Order Issues</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="returns">Returns & Refunds</option>
                    <option value="payment">Payment Issues</option>
                    <option value="account">Account & Login</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-orange-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-orange-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-600/20 to-orange-950/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-orange-300">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                    <span className="text-orange-500 mr-2">→</span>
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                    <span className="text-orange-500 mr-2">→</span>
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                    <span className="text-orange-500 mr-2">→</span>
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                    <span className="text-orange-500 mr-2">→</span>
                    Refund Status
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                    <span className="text-orange-500 mr-2">→</span>
                    Account Settings
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-orange-950/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-orange-300">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-orange-400">9 AM - 6 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-orange-400">10 AM - 4 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-orange-400">Closed</span>
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Email and chat support available 24/7
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-orange-950/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-orange-300">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-orange-500/20 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500/20 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500/20 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-orange-400">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-950/50 to-black/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-orange-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-orange-600/20 to-orange-950/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-orange-300">Still need help?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Our support team is always ready to assist you.{" Don't"} hesitate to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@bazzar.app"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Email Us
            </a>
            <button
              onClick={() => alert('Live chat feature coming soon!')}
              className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 transform hover:scale-105"
            >
              Start Live Chat
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}