import { ImageWithFallback } from './figma/ImageWithFallback';
import { photo } from '../siteImages';
import { Card, CardContent } from './ui/card';
import { Settings, Zap, ShieldCheck, Clock } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Zap,
      title: "에너지 비용 절감",
      description: "인버터 적용으로 모터 전력 소비 최대 40% 감소, 전기료 절감 즉시 실현"
    },
    {
      icon: ShieldCheck,
      title: "설비 수명 연장",
      description: "소프트 스타트·정지로 기계적 충격 제거, 펌프·팬·모터 수명을 획기적으로 연장"
    },
    {
      icon: Settings,
      title: "시설관리 필수 솔루션",
      description: "빌딩·공장·병원·물류센터 시설 담당자가 반드시 도입해야 할 에너지 관리 핵심 장비"
    },
    {
      icon: Clock,
      title: "전국 최단 시간 출동",
      description: "전국 어디든 긴급 출동 서비스 운영, 설비 트러블 발생 즉시 현장 대응"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-zinc-400 text-xs tracking-widest uppercase mb-5">About SISO</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-zinc-900">
              시설관리와 에너지 절감,<br />
              인버터 제어반이 핵심입니다
            </h2>
            <div className="w-12 h-px bg-zinc-300 mb-8"></div>
            <p className="text-zinc-500 mb-6 leading-relaxed">
              데이터센터, 종합병원, 대형 빌딩, 공장, 물류센터, 아파트 기계실 — 모터로 구동되는 모든 설비에
              인버터 제어반은 선택이 아닌 필수입니다. SISO는 현장 경험을 바탕으로 최적화된 제어 솔루션을 제공합니다.
            </p>
            <p className="text-zinc-500 mb-12 leading-relaxed">
              설계부터 제작·설치·시운전·사후관리까지 원스톱으로 책임지며,
              전국 어디든 신속하게 출동하여 귀사의 설비를 최상의 상태로 유지합니다.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="border border-zinc-100 p-5 hover:border-zinc-300 transition-colors">
                  <highlight.icon className="w-5 h-5 text-zinc-400 mb-3" />
                  <h4 className="font-semibold text-zinc-900 mb-1.5 text-sm">{highlight.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <ImageWithFallback
                  {...photo('about-1')}
                  className="w-full h-72 object-cover hover:scale-105 transition-all duration-500"
                />
                <ImageWithFallback
                  {...photo('about-2')}
                  className="w-full h-52 object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="space-y-3 mt-10">
                <ImageWithFallback
                  {...photo('about-3')}
                  className="w-full h-52 object-cover hover:scale-105 transition-all duration-500"
                />
                <ImageWithFallback
                  {...photo('about-4')}
                  className="w-full h-72 object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Stat overlay */}
            <div className="absolute -bottom-14 left-3 bg-zinc-900 text-white px-5 py-4">
              <p className="text-zinc-400 text-xs mb-0.5">전력 절감 효과</p>
              <p className="text-3xl font-bold tracking-tight">최대 40%</p>
              <p className="text-zinc-500 text-xs mt-0.5">인버터 도입 후 전기료 절감</p>
            </div>
          </div>
        </div>

        {/* Applicable facilities */}
        <div className="mt-20 border-t border-zinc-100 pt-16">
          <p className="text-center text-zinc-400 text-xs font-medium uppercase tracking-widest mb-10">인버터 제어반 적용 시설</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-zinc-100">
            {[
              { name: "데이터센터", sub: "항온·항습 팬 제어", slot: "facility-datacenter" },
              { name: "종합병원", sub: "클린룸 공조 제어", slot: "facility-hospital" },
              { name: "대형 빌딩", sub: "냉각탑·AHU 제어", slot: "facility-building" },
              { name: "물류센터", sub: "환기·펌프 제어", slot: "facility-logistics" },
              { name: "공장·플랜트", sub: "공정 모터 제어", slot: "facility-factory" },
              { name: "아파트·주거", sub: "가압·순환 펌프", slot: "facility-apartment" },
            ].map((facility, i) => (
              <div key={i} className="bg-white text-center overflow-hidden group">
                <div className="relative h-28 overflow-hidden">
                  <img
                    {...photo(facility.slot)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-zinc-900/30 group-hover:bg-zinc-900/10 transition-colors duration-300" />
                </div>
                <div className="px-3 py-4">
                  <p className="font-semibold text-zinc-800 text-sm mb-1">{facility.name}</p>
                  <p className="text-xs text-zinc-400">{facility.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}