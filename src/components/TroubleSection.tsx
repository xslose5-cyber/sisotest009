import { ArrowRight, PhoneCall } from 'lucide-react';

const troubles = [
  {
    q: "우리 건물 인버터가 필요한데,\n어디로 연락해야 하지?",
    tag: "신규 설치",
    desc: "데이터센터·병원·빌딩·물류센터 등 모든 시설의 인버터 제어반 신규 설계·제작을 지원합니다.",
  },
  {
    q: "인버터가 갑자기 멈췄는데,\n빨리 고쳐줄 업체가 있나?",
    tag: "긴급 수리",
    desc: "설비 정지는 곧 손실입니다. 당일 긴급출동으로 현장을 직접 확인하고 즉시 복구합니다.",
  },
  {
    q: "인버터에서 이상한 소리가 나는데\n원인이 뭘까?",
    tag: "소음 진단",
    desc: "팬 불량·냉각 이상·전기적 결함 등 소음의 원인을 정밀 진단하고 재발을 방지합니다.",
  },
  {
    q: "인버터 오류코드가 떴는데\n해결해줄 업체가 필요해.",
    tag: "오류 코드 해결",
    desc: "OC·OV·UV·OH 등 모든 인버터 오류코드에 대한 원인 분석과 신속한 처치를 제공합니다.",
  },
  {
    q: "인버터로 전기요금을 줄이고 싶은데\n어디서 상담받지?",
    tag: "에너지 절감",
    desc: "인버터 도입 시 최대 40% 전력 절감 효과. 시설 맞춤 에너지 절감 컨설팅을 무료로 제공합니다.",
  },
  {
    q: "오래된 인버터를 교체하고 싶은데\n어떻게 시작하면 되지?",
    tag: "교체 업그레이드",
    desc: "노후 인버터의 단종·부품 수급 문제를 해결하고 최신 사양으로 안전하게 교체해 드립니다.",
  },
];

export function TroubleSection() {
  return (
    <section className="bg-zinc-50 py-20 border-b border-zinc-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
            SISO가 해결합니다
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              혹시 이런 고민,<br className="sm:hidden" /> 갖고 계신가요?
            </h2>
            <a
              href="tel:010-7135-8901"
              className="inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-700 text-white text-sm px-6 py-3 transition-colors self-start md:self-auto shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              지금 바로 상담 — 010-7135-8901
            </a>
          </div>
        </div>

        {/* Trouble Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200">
          {troubles.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 group hover:bg-zinc-900 transition-colors duration-300 cursor-pointer"
            >
              {/* Tag */}
              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-zinc-400 group-hover:text-zinc-500 border border-zinc-200 group-hover:border-zinc-700 px-2.5 py-1 mb-6 transition-colors">
                {item.tag}
              </span>

              {/* Question */}
              <p className="text-zinc-800 group-hover:text-white font-semibold leading-snug mb-4 whitespace-pre-line transition-colors text-[15px]">
                "{item.q}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-zinc-200 group-hover:bg-zinc-700 mb-4 transition-colors" />

              {/* Answer */}
              <p className="text-zinc-400 group-hover:text-zinc-400 text-xs leading-relaxed transition-colors">
                {item.desc}
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-1.5 text-xs text-zinc-300 group-hover:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>문의하기</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-px bg-zinc-900 text-white px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-zinc-300">
            <span className="text-white font-semibold">30분 내 응답</span> &nbsp;·&nbsp;
            <span className="text-white font-semibold">당일 긴급출동</span> &nbsp;·&nbsp;
            <span className="text-white font-semibold">24시간 내 견적</span>
          </p>
          <a
            href="mailto:mariv_siso@naver.com"
            className="text-xs text-zinc-400 hover:text-white transition-colors"
          >
            mariv_siso@naver.com
          </a>
        </div>
      </div>
    </section>
  );
}
