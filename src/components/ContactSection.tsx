import { Button } from './ui/button';
import {
  Phone,
  Mail,
  Clock,
  Truck,
  Calendar,
  Building,
  Wrench,
  CheckCircle,
  MapPin
} from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "고객 문의 및 긴급 A/S",
      details: ["대표전화: 010-7135-8901", "전국 어디든 신속 출동 서비스", "긴급 설비 장애 24시간 상담 가능"]
    },
    {
      icon: Mail,
      title: "이메일 문의",
      details: ["mariv_siso@naver.com", "도면·사양서 첨부 시 당일 견적 제출", "견적·기술 문의 모두 가능"]
    },
    {
      icon: Truck,
      title: "전국 서비스 지역",
      details: ["수도권 · 충청권 · 영남권", "호남권 · 강원권 · 제주도", "전국 어디든 출장 서비스 가능"]
    },
    {
      icon: Clock,
      title: "영업 시간",
      details: ["평일: 08:00 - 20:00", "토요일: 09:00 - 17:00", "긴급 출동 서비스 365일 상시 대기"]
    }
  ];

  const advantages = [
    "문의 접수 후 30분 내 담당자 연결",
    "도면·사양서 접수 시 당일 견적 제출",
    "전국 어디든 최단 시간 현장 출동",
    "설치 후 하자보증 및 지속 A/S 관리",
    "설비별 맞춤 제어 로직 무상 수정",
    "국산·수입 인버터 전 기종 대응 가능",
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-4">Contact</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
              빠른 상담 및<br />견적 요청
            </h2>
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              신규 제어반 제작, 기존 설비 개조(Retrofit), 유지보수, 긴급 A/S 등
              인버터 제어반과 관련된 모든 문의를 환영합니다.
            </p>
          </div>
          <div className="w-12 h-px bg-zinc-300 mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-200">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6">
                  <div className="flex items-center gap-2.5 mb-4">
                    <info.icon className="w-4 h-4 text-zinc-400" />
                    <span className="font-semibold text-zinc-800 text-sm">{info.title}</span>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, di) => (
                      <p key={di} className="text-xs text-zinc-500 leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-white border border-zinc-100 p-6">
              <p className="text-zinc-800 font-semibold text-sm mb-4">바로 연락하기</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <Button
                  size="lg"
                  className="w-full bg-zinc-900 hover:bg-zinc-700 text-white rounded-none h-11 text-sm"
                  asChild
                >
                  <a href="tel:010-7135-8901">
                    <Phone className="w-4 h-4 mr-2" />
                    010-7135-8901
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-zinc-200 text-zinc-700 hover:bg-zinc-50 rounded-none h-11 text-sm"
                  asChild
                >
                  <a href="mailto:mariv_siso@naver.com">
                    <Mail className="w-4 h-4 mr-2" />
                    이메일 문의
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Building, label: "회사 소개서 요청" },
                  { icon: Wrench, label: "A/S 접수" },
                  { icon: Calendar, label: "방문 견적 예약" },
                ].map((btn, i) => (
                  <button
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-800 border border-zinc-200 px-3 py-2 hover:border-zinc-400 transition-colors"
                  >
                    <btn.icon className="w-3.5 h-3.5" />
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Why SISO + Map */}
          <div className="space-y-px">
            {/* Why SISO */}
            <div className="bg-zinc-900 p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-4 h-4 text-zinc-400" />
                <p className="text-zinc-400 text-xs tracking-widest uppercase">SISO를 선택해야 하는 이유</p>
              </div>
              <div className="space-y-3">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3 border-b border-zinc-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-zinc-600 text-xs font-mono mt-0.5 shrink-0">0{i + 1}</span>
                    <p className="text-zinc-300 text-sm leading-relaxed">{adv}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service area */}
            <div className="bg-white border border-zinc-100 p-8">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-4 h-4 text-zinc-400" />
                <p className="text-zinc-800 font-semibold text-sm">전국 서비스 가능</p>
              </div>
              <p className="text-zinc-500 text-xs mb-6 leading-relaxed">
                수도권을 포함한 전국 모든 지역에 출장·설치·A/S 서비스를 제공합니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["서울·경기", "인천", "충청", "전라", "경상", "강원", "제주"].map((region, i) => (
                  <span key={i} className="bg-zinc-900 text-white text-xs px-3 py-1">{region}</span>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <Truck className="w-4 h-4 text-zinc-400" />
                <div>
                  <p className="font-semibold text-zinc-800 text-xs">긴급 출동 서비스 상시 운영</p>
                  <p className="text-zinc-400 text-xs mt-0.5">설비 장애 발생 시 최단 시간 내 현장 도착 보장</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
