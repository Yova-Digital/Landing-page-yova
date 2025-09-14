'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showWaitlistDialog, setShowWaitlistDialog] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send to your backend/email service
      console.log('Waitlist signup:', email);
      setShowWaitlistDialog(false);
      setEmail('');
      setShowToast(true);
      // Hide toast after 4 seconds
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-purple-950/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
            <span className="text-white font-bold text-xl">ي</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">يوفا</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 font-medium" onClick={() => scrollToSection('features')}>المميزات</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-all duration-300 font-medium" onClick={() => scrollToSection('pricing')}>الأسعار</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-all duration-300 font-medium" onClick={() => scrollToSection('faq')}>الأسئلة</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-8">
              🚧 قريباً - تحت التطوير | الوصول المبكر متاح الآن
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              إدارة العمل الحر
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              بالذكاء الاصطناعي
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            منصة يوفا تجمع بين <span className="text-blue-400 font-semibold">إدارة الأعمال المتقدمة</span> و
            <span className="text-blue-400 font-semibold"> الذكاء الاصطناعي</span> لتوفير تجربة فريدة ومتكاملة 
            لإدارة العمل الحر بكفاءة استثنائية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="group bg-gradient-to-r from-orange-600 to-orange-700 px-10 py-5 rounded-2xl text-xl font-bold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-2xl shadow-orange-600/30 hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-1"
              onClick={() => setShowWaitlistDialog(true)}
            >
              <span className="flex items-center gap-3">
                انضم لقائمة الانتظار
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-blue-500/30 px-10 py-5 rounded-2xl text-xl font-semibold hover:border-blue-400 hover:bg-blue-500/5 transition-all duration-300"
              onClick={() => setShowDemo(true)}
            >
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 110 5H9V10z" />
                </svg>
                شاهد العرض التوضيحي
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%+</div>
              <div className="text-gray-400">دقة التوقعات</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-400">زيادة الإنتاجية</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">منصة متكاملة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400">دعم متواصل</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                كيف تعمل المنصة؟
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              اكتشف كيف تحول يوفا طريقة إدارة أعمالك من خلال التقنيات المتقدمة والذكاء الاصطناعي
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div className="group bg-gradient-to-br from-slate-900/50 to-blue-950/30 p-10 rounded-3xl backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                إدارة شاملة للأعمال
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                لوحة تحكم ذكية مع تحليلات فورية، إدارة المشاريع والعملاء، نظام المهام المتقدم، 
                وإدارة العروض والعقود بقوالب احترافية
              </p>
              <div className="flex items-center gap-3 text-blue-400">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">تتبع متقدم للمشاريع والمواعيد النهائية</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 p-10 rounded-3xl backdrop-blur-sm border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
                الذكاء الاصطناعي المتخصص
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                مساعد ذكي مدرب خصيصاً على سوق العمل الحر العربي، كتابة التقارير تلقائياً، 
                تحليل البيانات، وتوقعات دقيقة للإيرادات المستقبلية
              </p>
              <div className="flex items-center gap-3 text-purple-400">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">توقعات بدقة 95%+ للإيرادات والنمو</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: "📊", title: "تحليلات متقدمة", desc: "تحليل شامل للأداء المالي والإنتاجية مع رؤى قابلة للتنفيذ", color: "from-green-500 to-emerald-600" },
              { icon: "🔗", title: "تكامل شامل", desc: "ربط مع جميع منصات العمل الحر وأدوات التطوير والتصميم", color: "from-blue-500 to-cyan-600" },
              { icon: "⚡", title: "أتمتة ذكية", desc: "أتمتة المهام الإدارية والرسائل التلقائية والمتابعات", color: "from-orange-500 to-red-600" }
            ].map((feature, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Showcase Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                شاهد المنصة في العمل
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              مميزات ثورية فريدة لا توجد في أي منصة عربية أخرى - تجربة متقدمة بالذكاء الاصطناعي
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* AI Arabic Specialized */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-slate-900/50 to-blue-950/30 p-6 rounded-3xl backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl mb-6 overflow-hidden border border-white/10">
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-slate-900/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="text-blue-400 font-semibold mb-2">ذكاء اصطناعي عربي متخصص</div>
                      <div className="text-gray-400 text-sm">فهم السياق الثقافي والتجاري العربي</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  ذكاء اصطناعي مدرب 100% على السوق العربي
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  أول ذكاء اصطناعي متخصص في العمل الحر العربي مع معالجة لغة عربية متقدمة وفهم السياق الثقافي
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>توقعات بدقة 95%+ للإيرادات</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>تعلم مستمر من سلوك المستخدمين العرب</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & File Management */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-slate-900/50 to-green-950/30 p-6 rounded-3xl backdrop-blur-sm border border-white/5 hover:border-green-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl mb-6 overflow-hidden border border-white/10">
                  <div className="w-full h-full bg-gradient-to-br from-green-900/20 to-slate-900/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                      </div>
                      <div className="text-green-400 font-semibold mb-2">إدارة المحتوى والملفات</div>
                      <div className="text-gray-400 text-sm">تنظيم ذكي لجميع ملفات المشاريع</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                  إدارة المحتوى والملفات
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  نظام متقدم لإدارة وتنظيم جميع ملفات المشاريع مع إمكانيات البحث الذكي والمشاركة الآمنة
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>تخزين آمن وغير محدود للملفات</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>بحث ذكي ومعاينة فورية للملفات</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>مشاركة آمنة ومتابعة الملفات</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Client Communication */}
            <div className="group relative">
             
              <div className="bg-gradient-to-br from-slate-900/50 to-purple-950/30 p-6 rounded-3xl backdrop-blur-sm border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl mb-6 overflow-hidden border border-white/10">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-slate-900/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="text-purple-400 font-semibold mb-2">التواصل الذكي مع العملاء</div>
                      <div className="text-gray-400 text-sm">رسائل ذكية ومتابعة تلقائية</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                  التواصل الذكي مع العملاء
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  نظام تواصل متطور مع جدولة الرسائل وقوالب ذكية تتكيف مع السياق ومتابعة تلقائية للعملاء
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>جدولة الرسائل مع العملاء</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>قوالب رسائل ذكية تتكيف مع السياق</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>متابعة تلقائية للعملاء المحتملين</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Unique Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-900/30 to-orange-950/20 p-8 rounded-3xl backdrop-blur-sm border border-orange-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">دعم مخصص 24/7</h3>
              </div>
              <p className="text-gray-400 text-lg">
                فريق دعم مخصص لكل عميل مع خطط دعم متدرجة واستشارات متخصصة لضمان أفضل تجربة استخدام
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-orange-400 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>فريق دعم مخصص لكل عميل</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>خطط دعم متدرجة</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>استشارات متخصصة</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/30 to-cyan-950/20 p-8 rounded-3xl backdrop-blur-sm border border-cyan-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">تحليلات الوقت الفعلي</h3>
              </div>
              <p className="text-gray-400 text-lg">
                تحليل سلوك العملاء العرب بدقة استثنائية مع تحديثات كل ثانية وتحليل تنافسية فوري مع استراتيجيات التفوق
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span>تحديثات مباشرة كل ثانية</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>تحليل تنافسي فوري مع استراتيجيات التفوق</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>رؤى ذكية لتحسين الأداء والإنتاجية</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-4 text-white">
                جاهز لتجربة التقنيات الثورية؟
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                كن من أوائل المستقلين العرب الذين يستفيدون من هذه المميزات الفريدة التي لا توجد في أي مكان آخر
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-2xl text-lg font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:scale-105"
                  onClick={() => setShowWaitlistDialog(true)}
                >
                  ابدأ تجربتك المجانية الآن
                </button>
                <button className="border-2 border-blue-500/30 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-blue-400 hover:bg-blue-500/5 transition-all duration-300"
                  onClick={() => setShowDemo(true)}
                >
                  احجز عرض توضيحي مخصص
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                خطط مرنة للجميع
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              اختر الخطة التي تناسب احتياجاتك ونمو أعمالك مع ضمان استرداد المبلغ خلال 30 يوم
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                name: "الأساسية",
                nameEn: "Starter",
                price: "300 ج.م",
                priceAr: "300 جنيه مصري",
                popular: false,
                target: "للمستقلين الجدد والمبتدئين",
                features: [
                  "لوحة تحكم ذكية للمؤشرات الأساسية",
                  "إدارة المشاريع والمهام الأساسية", 
                  "إدارة العملاء مع قاعدة بيانات بسيطة",
                  "إنشاء فواتير وعروض احترافية",
                  "تتبع الوقت الذكي (Pomodoro)",
                  "تذكيرات ذكية للمهام والمواعيد",
                  "دعم عربي كامل + دردشة فورية 24/7",
                  "تخزين ملفات أساسي (5GB)"
                ],
                color: "from-slate-800 to-slate-700",
                border: "border-white/10",
                highlight: "واجهة عربية بالكامل وتجربة مستخدم محلية"
              },
              {
                name: "المتقدمة",
                nameEn: "Professional", 
                price: "700 ج.م",
                priceAr: "700 جنيه مصري",
                popular: true,
                target: "للمستقلين المحترفين والفرق الصغيرة",
                features: [
                  "كل مميزات الباقة الأساسية",
                  "إدارة فريق صغير (حتى 5 أعضاء)",
                  "أتمتة سير العمل للمهام المتكررة",
                  "تقارير مالية وتحليلات الأداء المتقدمة",
                  "تنبيهات ذكية للعملاء والمهام",
                  "تكامل مع منصات العمل الحر (Upwork، خمسات)",
                  "تخزين ملفات أكبر (20GB)",
                  "لوحة تحكم عملاء منفصلة لمتابعة المشاريع"
                ],
                color: "from-blue-900/50 to-blue-800/50",
                border: "border-blue-500/50",
                highlight: "ذكاء اصطناعي لتحليل الأداء والتوقعات المالية"
              },
              {
                name: "الشاملة",
                nameEn: "Enterprise",
                price: "1200 ج.م",
                priceAr: "1200 جنيه مصري",
                popular: false,
                target: "للفرق الكبيرة والوكالات والمؤسسات",
                features: [
                  "كل مميزات الباقة المتقدمة",
                  "إدارة فريق كبير غير محدود",
                  "أتمتة كاملة للمهام والرسائل والمتابعة",
                  "تحليلات سوق ومنافسين بالذكاء الاصطناعي",
                  "تكامل شامل مع جميع المنصات",
                  "سوق المواهب الداخلي للفرق الكبيرة",
                  "أكاديمية يوفا مع دورات وشهادات",
                  "تخزين ملفات غير محدود + دعم مخصص"
                ],
                color: "from-purple-900/50 to-purple-800/50",
                border: "border-purple-500/50",
                highlight: "تجربة SaaS كاملة مع أتمتة وذكاء اصطناعي"
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br ${plan.color} p-8 rounded-3xl backdrop-blur-sm border ${plan.border} hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500/50 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    الأكثر شعبية
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{plan.target}</p>
                  <div className="text-4xl font-bold mb-2 text-white">
                    {plan.price} <span className="text-lg text-gray-400 font-normal">/شهر</span>
                  </div>
                </div>
                
                <div className="mb-6 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <div className="text-xs text-blue-400 font-semibold mb-1">💡 ميزة تنافسية:</div>
                  <div className="text-xs text-gray-300">{plan.highlight}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-600/25' 
                    : 'border-2 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 text-white'
                }`}>
                  {plan.name === "الشاملة" ? "تواصل معنا" : "ابدأ الآن"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                الأسئلة الشائعة
              </span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "ما هي منصة يوفا؟",
                a: "منصة يوفا هي حل SaaS شامل مصمم خصيصاً للمستقلين والفرق الصغيرة في العالم العربي، تجمع بين إدارة الأعمال والذكاء الاصطناعي المتقدم."
              },
              {
                q: "هل يمكنني تجربة المنصة مجاناً؟",
                a: "نعم، نوفر تجربة مجانية لمدة 14 يوم لجميع الخطط مع إمكانية الوصول لجميع المميزات بدون قيود."
              },
              {
                q: "كيف يعمل الذكاء الاصطناعي في المنصة؟",
                a: "الذكاء الاصطناعي في يوفا مدرب خصيصاً على سوق العمل الحر العربي ويساعد في كتابة التقارير، تحليل البيانات، وتوقع الإيرادات بدقة عالية."
              },
              {
                q: "هل تدعم المنصة التكامل مع منصات العمل الحر الأخرى؟",
                a: "نعم، تدعم يوفا التكامل مع أكثر من 15 منصة عمل حر عربية وعالمية مثل أب ووك وفريلانسر وفايفر وخمسات."
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">{faq.q}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <span className="text-white font-bold text-2xl">ي</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">يوفا</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                منصة إدارة العمل الحر الذكية للمستقلين العرب
              </p>
            </div>

            {[
              {
                title: "المنتج",
                links: ["المميزات", "الأسعار", "الأمان", "التحديثات"]
              },
              {
                title: "الشركة", 
                links: ["عن يوفا", "المدونة", "الوظائف", "الشراكات"]
              },
              {
                title: "الدعم",
                links: ["مركز المساعدة", "تواصل معنا", "الحالة", "المجتمع"]
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-bold mb-6 text-xl text-white">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg" onClick={() => scrollToSection(link.toLowerCase())}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-lg">٢٠٢٤ يوفا. جميع الحقوق محفوظة.</p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Dialog */}
      {showWaitlistDialog && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6 animate-fadeIn">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-orange-500/20 rounded-3xl p-10 max-w-lg w-full shadow-2xl shadow-orange-500/10 transform animate-slideUp">
            {/* Header with gradient */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-3 text-white bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                انضم لقائمة الانتظار
              </h2>
              <p className="text-gray-400 text-lg">
                كن من أوائل المستفيدين من منصة يوفا الثورية
              </p>
            </div>
            
            <form onSubmit={handleWaitlistSignup} className="space-y-6">
              <div className="relative">
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm" 
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-4 rounded-2xl text-white font-bold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-orange-600/25 hover:shadow-orange-500/40 hover:scale-105 transform"
                >
                  <span className="flex items-center justify-center gap-2">
                    انضم الآن
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button 
                  type="button"
                  onClick={() => setShowWaitlistDialog(false)}
                  className="px-8 py-4 border-2 border-white/20 rounded-2xl text-gray-300 hover:bg-white/5 hover:border-white/30 transition-all duration-300 font-semibold"
                >
                  إلغاء
                </button>
              </div>
            </form>

            {/* Benefits */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-orange-400">🎁</span>
                مميزات الأعضاء الأوائل
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>خصم 50% على الاشتراك السنوي</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>وصول مبكر لجميع المميزات الجديدة</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>دعم مخصص ومباشر من الفريق</span>
                </li>
              </ul>
            </div>

            {/* Close button */}
            <button 
              onClick={() => setShowWaitlistDialog(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Demo Dialog */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6 animate-fadeIn">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-blue-500/20 rounded-3xl p-10 max-w-lg w-full shadow-2xl shadow-blue-500/10 transform animate-slideUp">
            {/* Header with gradient */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-3 text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                احجز عرض توضيحي
              </h2>
              <p className="text-gray-400 text-lg">
                شاهد كيف تعمل منصة يوفا مع خبير متخصص
              </p>
            </div>
            
            <form className="space-y-5">
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm" 
                  placeholder="الاسم الكامل"
                  required
                />
              </div>
              <div className="relative">
                <input 
                  type="tel" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm" 
                  placeholder="رقم الهاتف"
                  required
                />
              </div>
              
              <div className="flex gap-4">
                <button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-2xl text-white font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105 transform"
                >
                  <span className="flex items-center justify-center gap-2">
                    احجز الآن
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
                <button 
                  type="button"
                  onClick={() => setShowDemo(false)}
                  className="px-8 py-4 border-2 border-white/20 rounded-2xl text-gray-300 hover:bg-white/5 hover:border-white/30 transition-all duration-300 font-semibold"
                >
                  إلغاء
                </button>
              </div>
            </form>

            {/* Demo Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-blue-400">📅</span>
                ما ستحصل عليه
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>عرض مخصص لاحتياجاتك (30 دقيقة)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>استشارة مجانية مع خبير المنصة</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>خطة مخصصة لتطوير أعمالك</span>
                </li>
              </ul>
            </div>

            {/* Close button */}
            <button 
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-blue-500/50 p-4 rounded-lg shadow-lg shadow-blue-500/20">
          <p className="text-white font-bold">شكراً على الانضمام لقائمة الانتظار!</p>
        </div>
      )}
    </div>
  );
}