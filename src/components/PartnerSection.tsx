import { ImageWithFallback } from './figma/ImageWithFallback';
import { photo, hasPhoto, slotInfo } from '../siteImages';
import { mailto } from '../contact';
import { BadgePercent, PenTool, Timer, ShieldCheck, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: BadgePercent,
    title: '제조사 직거래 가격',
    desc: '공장등록 제조사와 직접 거래하므로 중간 유통 마진 없이 견적을 드립니다.',
  },
  {
    icon: PenTool,
    title: '설계부터 직접',
    desc: '도면 검토, 회로·시퀀스 설계, 제작까지 한 곳에서 진행합니다. 설비별 맞춤 제어 로직은 무상으로 수정해 드립니다.',
  },
  {
    icon: Timer,
    title: '빠른 견적',
    desc: '도면·사양서를 보내 주시면 24시간 안에 견적서를 드립니다. 문의 후 30분 안에 담당자가 연락드립니다.',
  },
  {
    icon: ShieldCheck,
    title: '납품 후까지 책임',
    desc: '현장 설치·시운전을 직접 하고, 하자보증과 지속 A/S로 관리합니다. 국산·수입 인버터 전 기종에 대응합니다.',
  },
];

const proofSlots = ['partner-team', 'partner-work', 'partner-panel', 'factory-registration'];

export function PartnerSection() {
  const proofs = proofSlots.filter(hasPhoto);

  return (
    <section id="partner" className="py-24 bg-white scroll-mt-16">
      <span id="about" className="block scroll-mt-16" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-4">For Contractors</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
              설비·시공업체를 위한<br />인버터 제어반 제조 파트너
            </h2>
            <p className="text-zinc-500 max-w-md leading-relaxed text-sm">
              SISO는 공장등록을 마친 인버터 제어반 제조사입니다.
              설계부터 제작·설치·시운전·사후관리까지 직접 책임지기 때문에,
              합리적인 가격과 확실한 품질로 납품할 수 있습니다.
            </p>
          </div>
          <div className="w-12 h-px bg-zinc-300 mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Reasons */}
          <div className="grid sm:grid-cols-2 gap-px bg-zinc-200">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-white p-7">
                <reason.icon className="w-5 h-5 text-zinc-500 mb-5" />
                <h3 className="font-bold text-zinc-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

          {/* Real work photos */}
          <div className="grid grid-cols-2 gap-3">
            {proofs.map((slot, i) => (
              <figure
                key={slot}
                className={`relative overflow-hidden ${i === 0 && proofs.length % 2 === 1 ? 'col-span-2' : ''}`}
              >
                <ImageWithFallback
                  {...photo(slot)}
                  className={`w-full object-cover ${i === 0 && proofs.length % 2 === 1 ? 'h-64' : 'h-56'}`}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-zinc-900/70 px-3 py-1.5 text-xs text-zinc-200">
                  {slotInfo(slot).label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Quality statement */}
        <div className="mt-16 bg-zinc-900 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">설비업체에서도 믿고 맡기는 제작 품질</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              정밀하고 깔끔한 배선부터 시퀀스 설계까지, 설치와 공사 모두 전문가가 직접 책임집니다.
            </p>
          </div>
          <a
            href={mailto('인버터 제어반 협력 납품 문의')}
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 px-7 py-4 text-sm font-semibold shrink-0 transition-colors"
          >
            협력 납품 문의하기
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
