import { ImageWithFallback } from './figma/ImageWithFallback';
import { photo } from '../siteImages';
import { PHONE, PHONE_HREF, mailto } from '../contact';
import { PhoneCall, FileText, Factory, ArrowRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          {...photo('hero')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-900/80 to-zinc-950/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 max-w-5xl mx-auto w-full pt-16 pb-16">
        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-zinc-800/80 border border-zinc-700/50 mb-8 backdrop-blur-sm">
          <Factory className="w-4 h-4 text-zinc-300" />
          <span className="text-zinc-200 text-sm md:text-base font-semibold tracking-wide">
            공장등록 제조사<span className="hidden sm:inline"> · </span><br className="sm:hidden" />
            <span className="whitespace-nowrap">설계부터 제작·시운전·A/S까지 직접</span>
          </span>
        </div>

        <h1 className="text-[2rem] md:text-5xl lg:text-6xl font-bold mb-10 text-white leading-tight tracking-tight">
          공조기·냉각탑·<br className="sm:hidden" />펌프·FAN<br />
          인버터 제어반,<br />
          <span className="text-white/50">제조사에서 직접<br className="md:hidden" /> 만듭니다</span>
        </h1>

        <div className="w-16 h-px bg-white/30 mb-10"></div>

        <p className="text-base md:text-lg mb-12 text-white/70 max-w-2xl font-light leading-relaxed">
          설비·시공업체 납품 전문.<br />
          도면이나 사양서를 보내 주시면 24시간 안에 견적을 드립니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={mailto('인버터 제어반 견적 요청')}
            className="inline-flex items-center justify-center bg-white text-zinc-900 hover:bg-zinc-100 h-13 px-8 text-sm tracking-wide font-semibold transition-colors"
          >
            <FileText className="w-4 h-4 mr-2" />
            도면 보내고 견적 받기
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center border border-white/40 text-white hover:bg-white/10 h-13 px-8 text-sm tracking-wide font-semibold transition-colors"
          >
            <PhoneCall className="w-4 h-4 mr-2" />
            전화 상담 {PHONE}
          </a>
        </div>

        <a
          href="#repair"
          className="mt-10 inline-flex items-center gap-2 text-white/60 hover:text-white text-sm md:text-base transition-colors"
        >
          인버터 고장·긴급 수리가 필요하신가요?
          <span className="underline underline-offset-4">긴급 수리 안내</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/30">
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
