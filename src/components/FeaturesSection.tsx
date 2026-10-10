import { Zap, RefreshCw, Settings, Server, ShieldAlert, Clock } from 'lucide-react';

const features = [
  { icon: Zap, title: '정밀 속도 제어', description: '인버터로 모터 속도와 토크를 세밀하게 제어하고, 소프트 스타트로 기동 충격을 줄입니다.' },
  { icon: RefreshCw, title: 'PID 자동 제어', description: '센서 피드백으로 압력·유량·온도를 일정하게 유지합니다. 정압 급수, 냉각수 온도 제어 등에 적용합니다.' },
  { icon: Settings, title: '맞춤 제어 시퀀스', description: '대수·교대 운전, 동파 방지, 화재 연동 등 현장 요구에 맞춘 PLC 연동 시퀀스를 구성합니다.' },
  { icon: Server, title: '상위 시스템 연동', description: 'Modbus·Ethernet 통신으로 BAS/BMS 등 상위 제어 시스템과 연동합니다.' },
  { icon: ShieldAlert, title: '보호·비상 정지', description: '과전압·과전류·단락 보호와 이상 발생 시 전원 차단, 알람 기능을 갖춥니다.' },
  { icon: Clock, title: '스케줄 운전', description: '시간대별·요일별 운전 패턴을 설정해 불필요한 운전과 전력 사용을 줄입니다.' },
];

export function FeaturesSection() {
  return (
    <section id="tech" className="py-24 bg-white border-t border-zinc-100 scroll-mt-16">
      <span id="features" className="block scroll-mt-16" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-4">Technology</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
              기술 역량
            </h2>
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              설비 특성에 맞는 제어 로직을 직접 설계하고, 현장 시운전까지 책임집니다.
            </p>
          </div>
          <div className="w-12 h-px bg-zinc-300 mt-8"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-7 group hover:bg-zinc-50 transition-colors">
              <feature.icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 mb-4 transition-colors" />
              <h3 className="font-semibold text-zinc-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
