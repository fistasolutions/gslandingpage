'use client';

import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const faqs = [
    { q: "Does Rexona track customer interactions?", a: "Yes, Rexona provides comprehensive customer interaction tracking across all touchpoints." },
    { q: "Can Rexona manage multiple pipelines?", a: "Absolutely! Rexona supports unlimited pipelines for different sales processes." },
    { q: "Is Rexona easy to use?", a: "Yes, Rexona is designed with simplicity in mind, featuring an intuitive interface." },
    { q: "How does Rexona manage tasks?", a: "Rexona offers automated task management with reminders and prioritization." },
    { q: "Does Rexona support team collaboration?", a: "Yes, Rexona includes real-time collaboration features for your entire team." },
    { q: "Can I automate tasks in Rexona?", a: "Yes, Rexona provides powerful automation tools to streamline your workflow." },
    { q: "Can I integrate Rexona with other tools?", a: "Rexona offers integrations with popular business tools and APIs." },
    { q: "Is my data safe with Rexona?", a: "Yes, we use enterprise-grade security and encryption to protect your data." },
    { q: "How does Rexona help with sales reporting?", a: "Rexona provides real-time analytics and customizable reports for sales insights." },
    { q: "Can I customize Rexona for my business?", a: "Yes, Rexona is highly customizable to fit your specific business needs." },
  ];

  const testimonials = [
    {
      quote: "This CRM changed the way I handle leads. My follow-up rate increased and I never miss an opportunity now.",
      name: "Ryan Brooks",
      title: "Marketing Director, Rexona",
      icon: "LinkedIn"
    },
    {
      quote: "Our sales grew by 30% in just three months. The automation features saved us hours each week.",
      name: "James Grant",
      title: "Product Lead",
      icon: "Twitter"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-1">
                <div className="w-6 h-0.5 bg-[#1a4d3a]"></div>
                <div className="w-6 h-0.5 bg-[#1a4d3a]"></div>
                <div className="w-6 h-0.5 bg-[#1a4d3a]"></div>
              </div>
              <span className="text-2xl font-bold text-[#1a4d3a]">Rexona</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-[#1a4d3a] transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#1a4d3a] transition">About Us</a>
              <a href="#pricing" className="text-gray-700 hover:text-[#1a4d3a] transition">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1a4d3a] transition">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-700 hover:text-[#1a4d3a] transition">Sign In</button>
              <button className="px-6 py-2 bg-[#1a4d3a] text-white rounded-full hover:bg-[#153d2e] transition">Sign Up</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-[#1a4d3a] to-[#0f3d2a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#4ade80] rounded-full text-sm font-medium text-[#1a4d3a] mb-6">
              <span>Rexona Plus</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering You to Save and Spend Wisely
          </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Perfect for reach of consumer finance platforms aiming to simplify complex financial tasks for everyday users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#4ade80] text-[#1a4d3a] rounded-full font-semibold hover:bg-[#22c55e] transition transform hover:scale-105">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
                Watch Demo
              </button>
            </div>
          </div>
          {/* Dashboard Preview */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-white/70 text-sm">Total Users</div>
                <div className="text-2xl font-bold text-white">12,485</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-white/70 text-sm">Revenue</div>
                <div className="text-2xl font-bold text-white">$68,837</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-white/70 text-sm">Profit</div>
                <div className="text-2xl font-bold text-white">$98,843</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-white/70 text-sm">Success Rate</div>
                <div className="text-2xl font-bold text-white">72.5%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome, Sophia!</h2>
              <p className="text-gray-600">A valuable insights, performance and analytics.</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-[#1a4d3a] text-white rounded-lg hover:bg-[#153d2e] transition">
              Report Report
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-gray-600 text-sm mb-2">Total Users</div>
              <div className="text-3xl font-bold text-gray-900">12,485</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-gray-600 text-sm mb-2">Total Revenue</div>
              <div className="text-3xl font-bold text-gray-900">$68,837</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-gray-600 text-sm mb-2">Total Profit</div>
              <div className="text-3xl font-bold text-gray-900">$98,843</div>
              <div className="flex items-center gap-1 text-green-600 text-sm mt-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
                <span>+12.5%</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-gray-600 text-sm mb-2">Success Rate</div>
              <div className="relative w-24 h-24 mx-auto">
                <svg className="transform -rotate-90 w-24 h-24">
                  <circle cx="48" cy="48" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none"/>
                  <circle cx="48" cy="48" r="40" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray={`${2 * Math.PI * 40 * 0.725} ${2 * Math.PI * 40}`} strokeDashoffset="0"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">72.5%</span>
                </div>
              </div>
              <div className="text-center mt-2">
                <div className="text-lg font-semibold text-gray-900">1,943</div>
                <div className="text-sm text-gray-600">$31.4K</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-gray-600 text-sm mb-2">Active Customers</div>
              <div className="text-3xl font-bold text-gray-900">4,263</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-gray-600 text-sm mb-2">Refund Requests</div>
              <div className="text-3xl font-bold text-gray-900">187</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-lg mb-8">Trusted by 104+ Businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['CoreOS', 'Goodwill', 'EasyTax', 'Foresight', 'Leapyear'].map((company) => (
              <div key={company} className="text-2xl font-semibold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">E-commerce</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Control Your E-Commerce Smarter</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#4ade80]/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Invoicing</h3>
              <p className="text-gray-600 mb-4">Intelligent Solutions for Every Business Need</p>
              <a href="#" className="text-[#22c55e] font-semibold hover:underline">Learn more →</a>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#1a4d3a]/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1a4d3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 mb-4">Gain insights with Advanced Reporting Tools</p>
              <a href="#" className="text-[#22c55e] font-semibold hover:underline">Learn more →</a>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#4ade80]/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support Chatbot</h3>
              <p className="text-gray-600 mb-4">24/7 Assistance for Your Customers</p>
              <a href="#" className="text-[#22c55e] font-semibold hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Sales Tracking */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">Smart Insights</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Real-Time Sales Tracking Made Easy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track every sale, customer, and performance metric in one place with flexible data and extended reporting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sales Overview</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Original</span>
                    <span className="font-semibold">46.78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#22c55e] h-3 rounded-full" style={{width: '46.78%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Referral</span>
                    <span className="font-semibold">26.24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#4ade80] h-3 rounded-full" style={{width: '26.24%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Client</span>
                    <span className="font-semibold">21.19%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#1a4d3a] h-3 rounded-full" style={{width: '21.19%'}}></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                <div>
                  <div className="text-gray-600 text-sm">Annual Income</div>
                  <div className="text-xl font-bold text-gray-900">$420K</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Social Media Rank</div>
                  <div className="text-xl font-bold text-gray-900">#12</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">SEO Reviews</div>
                  <div className="text-xl font-bold text-gray-900">4.8/5</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Customer Churn</div>
                  <div className="text-xl font-bold text-gray-900">2.3%</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-Time Revenue Tracking</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-600 text-sm mb-1">Total Sales</div>
                  <div className="text-2xl font-bold text-gray-900">12,485</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-600 text-sm mb-1">Active Customers</div>
                  <div className="text-2xl font-bold text-gray-900">4,263</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-600 text-sm mb-1">Total Revenue</div>
                  <div className="text-2xl font-bold text-gray-900">$90K</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-end justify-between gap-2">
                {[60, 75, 55, 85, 70, 90, 65, 80].map((height, i) => (
                  <div key={i} className="flex-1 bg-[#22c55e] rounded-t" style={{height: `${height}%`}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Growth Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">Why Rexona</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Power Your Growth with Smart, Effortless CRM</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All the tools you need to make your eCommerce brand incredibly successful and easy to use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Drive Revenue With Confidence</h3>
                  <p className="text-gray-600">Get real-time insights into your sales operations with advanced analytics. Track sales, profit insights, and product performance to make confident, growth-driven decisions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">All-in-One, Yet Exceptionally Simple</h3>
                  <p className="text-gray-600">Keep competition with the Mercado sales intelligence. Analyze emerging trends, sales benchmarks, and in demand and scale your career path effortlessly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable, Secure, And Future-Ready</h3>
                  <p className="text-gray-600">Discover opportunities that fit for you. Our AI-powered recommendation system delivers personalized job matches based on your profile and goals, helping you take the next step in your career with confidence.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="mb-8">
                <div className="text-gray-600 text-sm mb-2">Success Rate</div>
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="12" fill="none"/>
                    <circle cx="64" cy="64" r="56" stroke="#22c55e" strokeWidth="12" fill="none" strokeDasharray={`${2 * Math.PI * 56 * 0.725} ${2 * Math.PI * 56}`} strokeDashoffset="0"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">72.5%</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-gray-600 text-sm mb-2">Total Revenue</div>
                <div className="text-4xl font-bold text-gray-900">$68,837</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Smart Features for Modern Sales Teams</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access real-time performance and manage customers effectively in one powerful CRM platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Simplify Your Sales Operations</h3>
              <div className="flex gap-2 mb-6 border-b">
                {['Deals & Opportunity', 'Overview', 'Members', 'Tasks', 'Community'].map((tab) => (
                  <button key={tab} className="px-4 py-2 text-sm text-gray-600 hover:text-[#1a4d3a] border-b-2 border-transparent hover:border-[#1a4d3a]">
                    {tab}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {['Sarah Johnson - Sales Manager - $45K', 'Michael Chen - Account Executive - $32K', 'Emily Davis - Sales Rep - $28K'].map((contact) => (
                  <div key={contact} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{contact.split(' - ')[0]}</div>
                      <div className="text-sm text-gray-600">{contact.split(' - ').slice(1).join(' - ')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Sales Analytics</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="text-gray-600 text-sm mb-2">Total Profit Overview</div>
                <div className="text-3xl font-bold text-gray-900 mb-4">$98,843.24</div>
                <div className="bg-white rounded p-2 h-32 flex items-end justify-between gap-1">
                  {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#22c55e] rounded-t" style={{height: `${h}%`}}></div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">Stay on top of revenue trends with powerful analytics that show your team's real-time performance.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitor Sales Growth in Real Time</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="text-gray-600 text-sm mb-2">Customer History</div>
                <div className="text-5xl font-bold text-gray-900 mb-4">45,637</div>
                <div className="h-32 flex items-end justify-between gap-2">
                  {[30, 45, 35, 50, 40, 55, 45, 60, 50, 65].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[#1a4d3a] to-[#22c55e] rounded-t" style={{height: `${h}%`}}></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">View customer orders, activity, and growth metrics in one simple and intuitive dashboard.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Know Your Best-Performing Region</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="text-gray-600 text-sm mb-4">Sales by Location</div>
                <div className="bg-white rounded-lg p-4 h-48 flex items-center justify-center mb-4 relative">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-[#22c55e]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#1a4d3a] font-bold">$420K</span>
                  </div>
                  <div className="absolute top-20 right-8 w-12 h-12 bg-[#4ade80]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#1a4d3a] font-bold text-sm">$210K</span>
                  </div>
                  <div className="absolute bottom-8 left-1/2 w-10 h-10 bg-[#1a4d3a]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#1a4d3a] font-bold text-xs">$105K</span>
                  </div>
                  <div className="text-gray-400 text-sm">World Map Visualization</div>
                </div>
              </div>
              <p className="text-gray-600">Analyze sales performance across countries to identify high-performing regions and new opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">More Stats</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Smarter Sales, Happier Teams with Salezy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepare your team to manage deals, clients, and pipelines in one place.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#1a4d3a] mb-2">90%</div>
              <div className="text-gray-600 text-lg">Probability Boost</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#1a4d3a] mb-2">270+</div>
              <div className="text-gray-600 text-lg">Team ROI Boost</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#1a4d3a] mb-2">80%</div>
              <div className="text-gray-600 text-lg">Boost in Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#1a4d3a] mb-2">12K+</div>
              <div className="text-gray-600 text-lg">Deals Managed/Weekly</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#4ade80] text-[#1a4d3a] rounded-full font-semibold hover:bg-[#22c55e] transition transform hover:scale-105">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-[#1a4d3a] hover:text-[#1a4d3a] transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">Client Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Success Stories from Happy Customers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="text-6xl text-[#22c55e] opacity-20 absolute top-4 left-4">"</div>
              <p className="text-gray-700 text-lg mb-6 relative z-10 pt-8">
                {testimonials[testimonialIndex].quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a4d3a] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[testimonialIndex].name[0]}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[testimonialIndex].name}</div>
                  <div className="text-gray-600 text-sm">{testimonials[testimonialIndex].title}</div>
                </div>
                <div className="ml-auto">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a4d3a] to-[#0f3d2a] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our CRM helps businesses</h3>
              <p className="text-gray-200 mb-6">build stronger relationships and close deals faster.</p>
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2">
            <button 
              onClick={() => setTestimonialIndex(0)}
              className={`w-3 h-3 rounded-full ${testimonialIndex === 0 ? 'bg-[#22c55e]' : 'bg-gray-300'}`}
            ></button>
            <button 
              onClick={() => setTestimonialIndex(1)}
              className={`w-3 h-3 rounded-full ${testimonialIndex === 1 ? 'bg-[#22c55e]' : 'bg-gray-300'}`}
            ></button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              We can help you track your expenses and incomes. Here are answers to the most common questions.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-600 transition-transform ${openFaq === index ? 'rotate-45' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-gradient-to-br from-[#1a4d3a] to-[#0f3d2a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">You have different questions?</h2>
              <p className="text-gray-200 text-lg">Our team will answer all your questions. We promise a quick response.</p>
            </div>
            <button className="px-8 py-4 bg-[#4ade80] text-[#1a4d3a] rounded-full font-semibold hover:bg-[#22c55e] transition transform hover:scale-105 whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Simplify Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d3a] to-[#0f3d2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simplify, Automate, and Accelerate</h2>
              <p className="text-xl text-gray-200 mb-8">
                Boost productivity and close deals faster with a simpler, more efficient sales process. Automate tasks, track performance.
              </p>
              <ul className="space-y-3 mb-8">
                {['Automation', 'Reports', 'Teamwork'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5 text-[#4ade80]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-[#4ade80] text-[#1a4d3a] rounded-full font-semibold hover:bg-[#22c55e] transition transform hover:scale-105">
                Get Started Free
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-white rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded p-3">
                    <div className="text-gray-600 text-sm">Sales</div>
                    <div className="text-2xl font-bold text-gray-900">12,485</div>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <div className="text-gray-600 text-sm">Revenue</div>
                    <div className="text-2xl font-bold text-gray-900">$90K</div>
                  </div>
                </div>
                <div className="h-32 bg-gray-50 rounded flex items-end justify-between gap-1 p-2">
                  {[50, 65, 45, 75, 60, 80, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#22c55e] rounded-t" style={{height: `${h}%`}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">Sales Growth</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Ready to turn leads into growth?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Organize your team and boost productivity. Try Rexona free for 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#4ade80] text-[#1a4d3a] rounded-full font-semibold hover:bg-[#22c55e] transition transform hover:scale-105">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-[#1a4d3a] hover:text-[#1a4d3a] transition flex items-center justify-center gap-2">
              Learn more
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a4d3a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex flex-col gap-1">
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                </div>
                <span className="text-2xl font-bold">Rexona</span>
              </div>
              <p className="text-gray-300 text-sm">
                Rexona is a powerful CRM designed to help businesses manage leads, track sales, and improve team collaboration.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['Home', 'About Us', 'Features', 'Pricing', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['Blog', 'Web App', 'Mobile App', 'Benefits'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['Careers', 'Terms & Conditions', 'Privacy Policy', 'Cookie Preferences'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">© 2023 Rexona. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
