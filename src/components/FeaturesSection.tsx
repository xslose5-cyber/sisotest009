import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgKakaoTalk202507082313405481 from "figma:asset/78c48d576df4b004df724719d71ca39ddebc1a07.png";
import imgKakaoTalk202511122036417061 from "figma:asset/a8f7be34a990a03eac2f42134b5100fa394c61b7.png";
import {
  Zap,
  Settings,
  Activity,
  TrendingDown,
  RefreshCw,
  Power,
  Clock,
  Server,
  Wrench,
  ShieldAlert,
  Truck,
  PhoneCall
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "정밀 속도 제어",
      description: "고정밀 인버터를 통한 모터 속도 및 토크의 세밀한 제어"
    },
    {
      icon: TrendingDown,
      title: "에너지 최대 40% 절감",
      description: "부하에 따른 최적화 운전으로 전력 소비 최소화 및 전기료 절감"
    },
    {
      icon: ShieldAlert,
      title: "과부하 보호 장치",
      description: "과전압·과전류·단락으로부터 모터와 설비를 완벽히 보호"
    },
    {
      icon: Activity,
      title: "부드러운 기동·정지",
      description: "소프트 스타트 기능으로 기계적 충격 및 설비 피로도 대폭 감소"
    },
    {
      icon: RefreshCw,
      title: "PID 자동 제어",
      description: "센서 피드백 활용으로 압력·유량·온도를 자동으로 일정하게 제어"
    },
    {
      icon: Settings,
      title: "커스텀 로직 프로그래밍",
      description: "현장 요구에 맞춘 PLC 연동 및 맞춤형 제어 시퀀스 구축"
    },
    {
      icon: Server,
      title: "통신 인터페이스 연동",
      description: "Modbus·Ethernet 활용 상위 제어 시스템(BAS/BMS)과 완벽 연동"
    },
    {
      icon: Clock,
      title: "스케줄 운전 기능",
      description: "시간대별·요일별 다양한 운전 패턴 프로그래밍 지원"
    },
    {
      icon: Power,
      title: "비상 정지 시스템",
      description: "이상 발생 시 즉각적인 전원 차단 및 알람 자동 발생"
    },
    {
      icon: Wrench,
      title: "손쉬운 유지보수",
      description: "직관적 조작 패널과 모듈화 설계로 신속한 점검 및 관리 가능"
    }
  ];

  const responseSteps = [
    { step: "01", title: "문의 접수", desc: "전화·이메일 접수 즉시 담당자 배정", time: "즉시" },
    { step: "02", title: "현장 진단", desc: "설비 현황 파악 및 최적 솔루션 제안", time: "당일" },
    { step: "03", title: "견적 제출", desc: "도면·사양 기반 정확한 견적서 제출", time: "24시간 내" },
    { step: "04", title: "제작·설치", desc: "전문 기술진 현장 설치 및 시운전", time: "최단 납기" },
  ];

  return (
    <section id="features" className="py-24 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-4">Technology</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
              산업 설비를 위한<br />스마트 제어 기술
            </h2>
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              인버터 기반 정밀 제어 시스템으로 귀사의 산업 설비가
              최고의 성능과 에너지 효율을 발휘하도록 지원합니다.
            </p>
          </div>
          <div className="w-12 h-px bg-zinc-300 mt-8"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-zinc-100 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 group hover:bg-zinc-50 transition-colors">
              <feature.icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 mb-4 transition-colors" />
              <h4 className="font-semibold text-zinc-800 text-sm mb-2">{feature.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fast Response Section */}
        <div className="bg-zinc-900 p-10 md:p-14">
          {/* Product image strip above the steps */}
          <div className="grid grid-cols-3 gap-px mb-10">
            {[
              {
                src: imgKakaoTalk202507082313405481,
                cap: "인버터 드라이브 유닛"
              },
              {
                src: imgKakaoTalk202511122036417061,
                cap: "전문 기술진 현장 출동"
              },
              {
                src: "https://images.unsplash.com/photo-1764185800646-f75f7e16e465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMFBMQyUyMGNvbnRyb2wlMjBlcXVpcG1lbnQlMjByYWNrfGVufDF8fHx8MTc3MzMzMTgwN3ww&ixlib=rb-4.1.0&q=80&w=600",
                cap: "PLC 자동화 제어반"
              },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden">
                <ImageWithFallback
                  src={img.src}
                  alt={img.cap}
                  className="w-full h-32 object-cover opacity-60 hover:opacity-80 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/70 px-3 py-1.5">
                  <p className="text-zinc-300 text-[10px] font-medium">{img.cap}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <Truck className="w-4 h-4 text-zinc-400" />
              <span className="text-zinc-400 text-xs tracking-widest uppercase">전국 신속 대응 서비스</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              설비 트러블, 지체 없이 해결합니다
            </h3>
            <p className="text-zinc-400 max-w-lg leading-relaxed text-sm">
              전국 어디든 출동 가능한 기술 서비스팀을 운영합니다.
              긴급 상황 발생 시 최단 시간 내 현장 도착을 약속드립니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-700">
            {responseSteps.map((s, i) => (
              <div key={i} className="bg-zinc-800 p-6">
                <div className="text-zinc-600 text-xs font-mono mb-3">STEP {s.step}</div>
                <div className="text-white font-semibold mb-2">{s.title}</div>
                <div className="text-zinc-400 text-xs mb-4 leading-relaxed">{s.desc}</div>
                <div className="text-xs font-semibold text-zinc-300 border border-zinc-600 inline-block px-2 py-1">{s.time}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="tel:010-7135-8901"
              className="inline-flex items-center gap-3 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors px-8 py-4 font-semibold text-sm tracking-wide"
            >
              <PhoneCall className="w-4 h-4" />
              긴급 출동 요청: 010-7135-8901
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}