import { ImageWithFallback } from './figma/ImageWithFallback';
import { Settings, PhoneCall, Clock, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW5naW5lZXIlMjB3ZWFyaW5nJTIwaGFyZGhhdCUyMGNoZWNraW5nJTIwZWxlY3RyaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQxMTAwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="산업용 인버터 제어반"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-900/80 to-zinc-950/95"></div>
      </div>

      {/* Top label */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 pt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 text-white/70 text-sm tracking-[0.2em] uppercase">
            <Clock className="w-4 h-4" />
            전국 어디든 신속 출동 · 당일 서비스 가능
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 max-w-5xl mx-auto w-full pt-16 pb-16">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 text-white leading-tight tracking-tight">
          인버터,<br />
          설비 관리의<br />
          <span className="text-white/50">핵심 파트너</span><br />
          <span className="text-white/50">전국 24시<br />무료 방문 출장</span>
        </h1>

        <div className="w-16 h-px bg-white/30 mb-10"></div>

        <p className="text-base md:text-lg mb-12 text-white/70 max-w-2xl font-light leading-relaxed">
          데이터센터, 병원, 공장, 빌딩, 물류센터 등 모든 산업시설의<br className="hidden md:block" />
          펌프·공조기·냉각탑·팬 제어에 최적화된 인버터 제어반을 설계·제작·설치합니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:010-7135-8901"
            className="inline-flex items-center justify-center bg-white text-zinc-900 hover:bg-zinc-100 h-13 px-8 text-sm tracking-wide font-semibold transition-colors"
          >
            <PhoneCall className="w-4 h-4 mr-2" />
            지금 바로 문의: 010-7135-8901
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-zinc-400 text-zinc-900 bg-white/90 hover:bg-white h-13 px-8 text-sm tracking-wide font-semibold transition-colors"
          >
            <Settings className="w-4 h-4 mr-2" />
            서비스 분야 보기
          </a>
        </div>

        {/* Live indicator */}
        <div className="mt-12 flex items-center gap-3 text-white/40 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          현재 문의 상담 가능 · 평균 응답 시간 30분 이내
        </div>
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