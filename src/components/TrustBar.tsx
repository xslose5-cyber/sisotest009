import { Factory, Wrench, FileText, Cpu } from 'lucide-react';

const facts = [
  { icon: Factory, title: '공장등록 제조사', desc: '제어반을 직접 설계·제작' },
  { icon: Wrench, title: '설계부터 A/S까지 직접', desc: '제작·설치·시운전·사후관리' },
  { icon: FileText, title: '24시간 내 견적', desc: '도면·사양서 접수 기준' },
  { icon: Cpu, title: '전 기종 대응', desc: '국산·수입 인버터' },
];

export function TrustBar() {
  return (
    <section className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
        {facts.map((fact) => (
          <div key={fact.title} className="bg-zinc-900 px-5 py-7 md:px-8 flex items-start gap-3">
            <fact.icon className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm md:text-base">{fact.title}</p>
              <p className="text-zinc-400 text-sm mt-1">{fact.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
