import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { PhoneCall, ArrowRight, ArrowUpRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: "펌프 제어반",
      titleEn: "Pump Inverter Panel",
      spec: "상하수도 / 가압장 / 순환 펌프 / 소방 펌프",
      image: "https://images.unsplash.com/photo-1738918922725-d70c666ddccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHB1bXAlMjBpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzczMzI3OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      items: [
        { name: "PID 정압 제어", desc: "급수 배관 압력을 일정하게 유지하여 배관 보호 및 에너지 절약" },
        { name: "대수·교대 운전", desc: "복수 펌프 순차 운전으로 펌프 수명 연장 및 과부하 방지" },
        { name: "수위 연동 자동 제어", desc: "저수조·고가수조 수위에 따른 자동 기동·정지 시스템" }
      ]
    },
    {
      title: "공조기 제어반",
      titleEn: "AHU Inverter Panel",
      spec: "클린룸 / 병원 / 데이터센터 / 상업용 공조기",
      image: "https://images.unsplash.com/photo-1611077017686-bcf05c556838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwbWVjaGFuaWNhbCUyMHZlbnRpbGF0aW9uJTIwZHVjdHdvcmt8ZW58MXx8fHwxNzczMzI3OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      items: [
        { name: "송풍기 인버터 제어", desc: "실내 온·습도·CO2 농도에 따른 급기·배기 모터 회전수 자동 조절" },
        { name: "공조 온도 정밀 제어", desc: "냉·온수 코일 밸브 및 댐퍼 연동 비례 제어 알고리즘 적용" },
        { name: "에너지 절약 운전", desc: "외기 냉방(Free Cooling) 연동 및 최소 외기량 자동 제어" }
      ]
    },
    {
      title: "냉각탑 제어반",
      titleEn: "Cooling Tower Panel",
      spec: "밀폐형 / 개방형 / 산업 공정 냉각탑",
      image: "https://images.unsplash.com/photo-1761115435501-bebf019aba54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29saW5nJTIwdG93ZXIlMjBpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjByb29mdG9wfGVufDF8fHx8MTc3MzMyNzk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      items: [
        { name: "냉각수 온도 제어", desc: "설정 온도에 따른 냉각팬 인버터 속도 자동 제어로 에너지 절감" },
        { name: "겨울철 동파 방지", desc: "수온 저하 시 히터 가동 및 바이패스 밸브 연동 자동 제어" },
        { name: "살수 펌프 연동 제어", desc: "냉각탑 팬 동작에 연동된 살수 펌프 순차 기동·정지" }
      ]
    },
    {
      title: "팬·송풍기 제어반",
      titleEn: "Fan / Blower Panel",
      spec: "배기팬 / 환기팬 / 집진기 / 산업용 블로워",
      image: "https://images.unsplash.com/photo-1679303777007-c6c4522beb02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFuJTIwdmVudGlsYXRpb24lMjBibG93ZXIlMjBmYWN0b3J5fGVufDF8fHx8MTc3MzMyNzk3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      items: [
        { name: "풍량·정압 정밀 제어", desc: "덕트 내 압력 및 요구 풍량에 맞춘 블로워 모터 정밀 회전수 제어" },
        { name: "소프트 스타트 기동", desc: "대형 팬 기동 시 과도한 기동 전류 제한 및 기계적 충격 완화" },
        { name: "화재 연동 비상 제어", desc: "화재 신호 수신 시 비상 정지 또는 제연 모드 즉각 전환" }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-4">Services</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
              설비별 맞춤형<br />인버터 제어반
            </h2>
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              각종 모터로 구동되는 산업 설비의 특성을 정밀 분석하여,
              각 설비에 꼭 맞는 전문적인 인버터 제어 솔루션을 설계·제작합니다.
            </p>
          </div>
          <div className="w-12 h-px bg-zinc-300 mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-zinc-200">
          {services.map((service, index) => (
            <div key={index} className="bg-white group overflow-hidden">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-zinc-900/40 group-hover:bg-zinc-900/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div className="absolute bottom-4 left-5">
                  <p className="text-white/50 text-xs tracking-widest uppercase mb-1">{service.titleEn}</p>
                  <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-zinc-400 text-xs mb-5 border-b border-zinc-100 pb-4">{service.spec}</p>
                <div className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-4">
                      <span className="text-zinc-300 text-xs font-mono mt-0.5 shrink-0">0{itemIndex + 1}</span>
                      <div>
                        <h4 className="font-semibold text-zinc-800 text-sm mb-0.5">{item.name}</h4>
                        <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-zinc-900 hover:bg-zinc-700 text-white rounded-none h-12 px-8 text-sm tracking-wide"
            asChild
          >
            <a href="tel:010-7135-8901">
              <PhoneCall className="mr-2 w-4 h-4" />
              지금 바로 문의하기
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 rounded-none h-12 px-8 text-sm"
            asChild
          >
            <a href="mailto:mariv_siso@naver.com">
              이메일로 견적 문의
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
        <p className="text-center mt-4 text-xs text-zinc-400">
          도면 및 사양서를 첨부하시면 더욱 빠르고 정확한 견적을 받아보실 수 있습니다.
        </p>
      </div>
    </section>
  );
}