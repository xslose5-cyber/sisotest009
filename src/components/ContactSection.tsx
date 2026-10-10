import { PHONE, PHONE_HREF, EMAIL, mailto } from '../contact';
import {
  Phone,
  Mail,
  Clock,
  Truck,
  Calendar,
  Building,
  Wrench,
  CheckCircle,
  ArrowRight,
  FileText,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "전화 상담 · 긴급 A/S",
    details: [`대표전화: ${PHONE}`, "긴급 설비 장애 24시간 상담", "문의 후 30분 내 담당자 연락"],
  },
  {
    icon: Mail,
    title: "이메일 견적",
    details: [EMAIL, "도면·사양서 첨부 시 24시간 내 견적", "견적·기술 문의 모두 가능"],
  },
  {
    icon: Truck,
    title: "서비스 지역",
    details: ["수도권 · 충청권 · 영남권", "호남권 · 강원권 · 제주도", "전국 출장·설치·A/S"],
  },
  {
    icon: Clock,
    title: "영업 시간",
    details: ["평일: 08:00 - 20:00", "토요일: 09:00 - 17:00", "긴급 출동 365일 상시 대기"],
  },
];

const quoteChecklist = [
  "도면 또는 단선결선도",
  "설비 종류(펌프·공조기·냉각탑·팬)와 대수",
  "모터 용량(kW)과 전압",
  "원하는 제어 방식(PID, 대수운전, BAS 연동 등)",
  "희망 납기와 현장 위치",
];

const quickLinks = [
  { icon: Building, label: "회사 소개서 요청", href: mailto("회사 소개서 요청") },
  { icon: Wrench, label: "A/S 접수", href: PHONE_HREF },
  { icon: Calendar, label: "방문 견적 예약", href: PHONE_HREF },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-100 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-4">Contact</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
              견적·상담 문의
            </h2>
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              신규 제어반 제작, 기존 설비 개조(Retrofit), 유지보수, 긴급 A/S 등
              인버터 제어반과 관련된 모든 문의를 받습니다.
            </p>
          </div>
          <div className="w-12 h-px bg-zinc-300 mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact actions */}
          <div className="space-y-6">
            <div className="space-y-3">
              <a
                href={mailto('인버터 제어반 견적 요청')}
                className="flex items-center justify-between w-full bg-zinc-900 text-white hover:bg-zinc-700 transition-colors px-8 py-5 group"
              >
                <div>
                  <p className="text-sm text-zinc-400 mb-0.5">도면·사양서를 첨부해 보내 주세요</p>
                  <p className="font-bold text-lg">이메일로 견적 받기</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-between w-full bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-100 transition-colors px-8 py-5 group"
              >
                <div>
                  <p className="text-sm text-zinc-500 mb-0.5">전화 상담 · 긴급 A/S</p>
                  <p className="font-bold text-lg">{PHONE}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex flex-wrap gap-2 pt-1">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-800 border border-zinc-200 bg-white px-3 py-2 hover:border-zinc-400 transition-colors"
                  >
                    <link.icon className="w-3.5 h-3.5" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-200">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-white p-6">
                  <div className="flex items-center gap-2.5 mb-4">
                    <info.icon className="w-4 h-4 text-zinc-400" />
                    <span className="font-semibold text-zinc-800 text-sm">{info.title}</span>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-sm text-zinc-500 leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote checklist */}
          <div className="bg-white border border-zinc-200 p-8 md:p-10 self-start">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-4 h-4 text-zinc-400" />
              <p className="text-zinc-800 font-semibold">견적 요청 시 보내 주시면 좋은 자료</p>
            </div>
            <ul className="space-y-3 mb-8">
              {quoteChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-600">
                  <CheckCircle className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 pt-6">
              자료가 모두 없어도 괜찮습니다. 현장 사진이나 기존 제어반 명판 사진만 있어도
              전화로 먼저 상담해 드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
