import { ProductGallerySection } from './components/ProductGallerySection';
import { HeroSection } from './components/HeroSection';
import { TroubleSection } from './components/TroubleSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { PhoneCall, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from 'figma:asset/1b568686aa5e990a9ed27fc7c738cbf656a211f7.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="SISO 로고" className="h-12 w-auto object-contain" />
            <span className="hidden sm:inline-block text-xs text-zinc-400 border border-zinc-200 px-2 py-0.5 ml-1">
              인버터 제어반 전문
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 transition-colors">회사소개</a>
            <a href="#services" className="hover:text-zinc-900 transition-colors">사업분야</a>
            <a href="#features" className="hover:text-zinc-900 transition-colors">기술특징</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">고객지원</a>
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
              className="md:hidden p-1.5 text-zinc-500 hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white px-4 py-4 space-y-1">
            {[
              { label: "회사소개", href: "#about" },
              { label: "사업분야", href: "#services" },
              { label: "기술특징", href: "#features" },
              { label: "고객지원", href: "#contact" },
            ].map((item) => (
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
        <TroubleSection />
        <AboutSection />
        <ServicesSection />
        <ProductGallerySection />
        <FeaturesSection />

        {/* CTA Section */}
        <section className="py-24 bg-zinc-900 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mb-5">지금 바로 시작하세요</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                  안정적인 시설 운영과<br />에너지 절감,<br />
                  <span className="text-zinc-400">SISO가 함께합니다</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed text-sm max-w-md">
                  펌프, 공조기, 냉각탑, 팬 — 모든 설비에 최적화된 인버터 제어반을 설계·제작합니다.
                  전국 어디든 신속히 출동하여 귀사의 설비를 책임집니다.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="tel:010-7135-8901"
                  className="flex items-center justify-between w-full bg-white text-zinc-900 hover:bg-zinc-100 transition-colors px-8 py-5 group"
                >
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">전화 문의</p>
                    <p className="font-bold text-lg">010-7135-8901</p>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:mariv_siso@naver.com"
                  className="flex items-center justify-between w-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors px-8 py-5 group"
                >
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">이메일 문의</p>
                    <p className="font-bold">mariv_siso@naver.com</p>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-zinc-600 text-xs text-center pt-2">
                  문의 접수 후 30분 내 담당자가 연락드립니다
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <img src={logoImg} alt="SISO 로고" className="h-14 w-auto object-contain brightness-0 invert" />
              </div>
              <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
                산업용 인버터 제어반 전문 제작 기업.<br />
                시설관리 에너지 절감과 설비의 안정적인 운전을 위해 최적의 제어 솔루션을 제공합니다.
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
                {["온라인 견적 문의", "A/S 접수 및 현황", "긴급 출동 요청", "자주 묻는 질문"].map((item, i) => (
                  <li key={i}>
                    <a href="#contact" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <p>&copy; 2026 SISO. All rights reserved.</p>
              <span className="hidden md:inline text-zinc-700">|</span>
              <p>사업자등록번호 : 160-41-01357</p>
            </div>
            <div className="flex gap-5">
              <a href="#" className="hover:text-zinc-400 transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}