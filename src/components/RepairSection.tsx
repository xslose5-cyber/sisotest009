import { ArrowRight, PhoneCall } from 'lucide-react';
import { PHONE, PHONE_HREF } from '../contact';

const troubles = [
  {
    q: "인버터가 갑자기 멈췄는데,\n빨리 고쳐줄 업체가 있나?",
    tag: "긴급 수리",
    desc: "설비 정지는 곧 손실입니다. 당일 긴급출동으로 현장을 직접 확인하고 즉시 복구합니다.",
  },
  {
    q: "인버터 오류코드가 떴는데\n해결해줄 업체가 필요해.",
    tag: "오류 코드 해결",
    desc: "OC·OV·UV·OH 등 인버터 오류코드의 원인을 분석하고 신속하게 처치합니다.",
  },
  {
    q: "인버터에서 이상한 소리가 나는데\n원인이 뭘까?",
    tag: "소음 진단",
    desc: "팬 불량·냉각 이상·전기적 결함 등 소음의 원인을 정밀 진단하고 재발을 방지합니다.",
  },
  {
    q: "오래된 인버터를 교체하고 싶은데\n어떻게 시작하면 되지?",
    tag: "교체 업그레이드",
    desc: "노후 인버터의 단종·부품 수급 문제를 해결하고 최신 사양으로 안전하게 교체해 드립니다.",
  },
  {
    q: "우리 건물 인버터가 필요한데,\n어디로 연락해야 하지?",
    tag: "신규 설치",
    desc: "데이터센터·병원·빌딩·물류센터 등 시설에 맞는 인버터 제어반을 설계·제작해 설치합니다.",
  },
  {
    q: "인버터로 전기요금을 줄이고 싶은데\n어디서 상담받지?",
    tag: "에너지 절감",
    desc: "부하에 맞춰 모터 회전수를 조절해 전력 사용을 줄입니다. 시설 맞춤 에너지 절감 상담은 무료입니다.",
  },
];

export function RepairSection() {
  return (
    <section id="repair" className="bg-zinc-50 py-20 border-t border-zinc-100 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
            Repair &amp; A/S
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight mb-4">
                인버터 고장·긴급 수리
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                시설 담당자분이라면, 설비가 멈췄을 때 바로 전화 주세요.
                긴급 장애는 24시간 상담하고, 전국 어디든 무료로 방문 출장합니다.
              </p>
            </div>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-700 text-white text-sm px-6 py-3 transition-colors self-start md:self-auto shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              긴급 출동 요청 {PHONE}
            </a>
          </div>
        </div>

        {/* Trouble Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200">
          {troubles.map((item) => (
            <a
              key={item.tag}
              href={PHONE_HREF}
              className="bg-white p-8 group hover:bg-zinc-900 transition-colors duration-300"
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-400 group-hover:text-zinc-500 border border-zinc-200 group-hover:border-zinc-700 px-2.5 py-1 mb-6 transition-colors">
                {item.tag}
              </span>

              <p className="text-zinc-800 group-hover:text-white font-semibold leading-snug mb-4 whitespace-pre-line transition-colors text-base">
                "{item.q}"
              </p>

              <div className="w-8 h-px bg-zinc-200 group-hover:bg-zinc-700 mb-4 transition-colors" />

              <p className="text-zinc-400 group-hover:text-zinc-400 text-sm leading-relaxed transition-colors">
                {item.desc}
              </p>

              <div className="mt-6 flex items-center gap-1.5 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                <span>전화로 상담하기</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-px bg-zinc-900 text-white px-8 py-5">
          <p className="text-sm text-zinc-300 text-center sm:text-left">
            <span className="text-white font-semibold">30분 내 응답</span> &nbsp;·&nbsp;
            <span className="text-white font-semibold">당일 긴급출동</span> &nbsp;·&nbsp;
            <span className="text-white font-semibold">긴급 장애 24시간 상담</span>
          </p>
        </div>
      </div>
    </section>
  );
}
