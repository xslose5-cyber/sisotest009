import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { PartnerSection } from './components/PartnerSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ProductGallerySection } from './components/ProductGallerySection';
import { FeaturesSection } from './components/FeaturesSection';
import { RepairSection } from './components/RepairSection';
import { ContactSection } from './components/ContactSection';
import { PhoneCall, ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
  { label: "제작 납품", href: "#partner" },
  { label: "설비별 제어반", href: "#services" },
  { label: "제작 사례", href: "#cases" },
  { label: "고장·수리", href: "#repair" },
];
import { useState } from 'react';
import logoImg from './assets/logo.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="SISO 로고" className="h-11 w-auto object-contain" />
            <span className="hidden sm:inline-block text-xs text-zinc-400 border border-zinc-200 px-2 py-0.5 ml-1">
              인버터 제어반 전문
            </span>
          </div>

          <nav className="hidden lg:flex gap-7 text-sm text-zinc-500">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-zinc-900 transition-colors">{item.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:010-7135-8901"
              className="hidden sm:flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              010-7135-8901
            </a>
            <a
              href="#contact"
              className="bg-zinc-900 hover:bg-zinc-700 text-white text-sm px-5 py-2 transition-colors"
            >
              견적 문의
            </a>
            <button
              className="lg:hidden p-1.5 text-zinc-500 hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-100 bg-white px-4 py-4 space-y-1">
            {[...navItems, { label: "견적 문의", href: "#contact" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2.5 text-sm text-zinc-600 hover:text-zinc-900 transition-colors border-b border-zinc-50 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:010-7135-8901"
              className="flex items-center gap-2 py-2.5 text-sm font-medium text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PhoneCall className="w-4 h-4" />
              010-7135-8901
            </a>
          </div>
        )}
      </header>

      <main>
        <HeroSection />
        <TrustBar />
        <PartnerSection />
        <ServicesSection />
        <ProcessSection />
        <ProductGallerySection />
        <FeaturesSection />
        <RepairSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <img src={logoImg} alt="SISO 로고" className="h-12 w-auto object-contain brightness-0 invert" />
              </div>
              <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
                공장등록 인버터 제어반 제조사.<br />
                공조기·냉각탑·펌프·FAN용 인버터 제어반을 설계·제작하고 설치·시운전·A/S까지 직접 책임집니다.
              </p>
              <div className="space-y-1.5 text-sm">
                <a href="tel:010-7135-8901" className="flex items-center gap-2 hover:text-white transition-colors">
                  <PhoneCall className="w-3.5 h-3.5" />
                  010-7135-8901
                </a>
                <a href="mailto:mariv_siso@naver.com" className="flex items-center gap-2 hover:text-white transition-colors text-xs">
                  mariv_siso@naver.com
                </a>
              </div>
            </div>

            <div>
              <p className="text-white text-sm font-semibold mb-5">주요 사업분야</p>
              <ul className="space-y-2.5 text-sm">
                {["펌프 인버터 제어반", "공조기(AHU) 제어반", "냉각탑 제어반", "팬·송풍기 제어반"].map((item, i) => (
                  <li key={i}>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3" /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white text-sm font-semibold mb-5">고객 지원</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "이메일 견적 문의", href: "mailto:mariv_siso@naver.com" },
                  { label: "A/S 접수", href: "tel:010-7135-8901" },
                  { label: "긴급 출동 요청", href: "tel:010-7135-8901" },
                ].map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
            <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3">
              <p>&copy; 2026 SISO. All rights reserved.</p>
<span className="hidden md:inline text-zinc-700">|</span>
<p>상호명 : SISO</p>
<span className="hidden md:inline text-zinc-700">|</span>
<p>대표자 : 최한규</p>
<span className="hidden md:inline text-zinc-700">|</span>
<p>사업자등록번호 : 160-41-01357</p>
<span className="hidden md:inline text-zinc-700">|</span>
<p>사업장 주소 : 경기도 수원시 영통구 매영로159번길 19, 803호</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
