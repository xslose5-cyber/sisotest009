const steps = [
  { title: '문의·도면 접수', desc: '전화·이메일로 도면, 설비 종류, 모터 용량을 받고 담당자를 배정합니다.', time: '30분 내 연락' },
  { title: '현장 진단·설계 검토', desc: '설비 조건과 제어 방식(PID, 대수운전 등)을 검토해 최적안을 제안합니다.', time: '당일' },
  { title: '견적 제출', desc: '도면·사양을 기준으로 정확한 견적서를 보내 드립니다.', time: '24시간 내' },
  { title: '제작', desc: '회로·시퀀스 설계를 마친 뒤 제어반을 직접 제작합니다.', time: '납기 협의' },
  { title: '설치·시운전', desc: '전문 기술진이 현장에 설치하고 시운전까지 마칩니다.', time: '현장 직접 수행' },
  { title: '사후관리', desc: '하자보증과 지속 A/S로 관리하고, 제어 로직은 무상으로 수정해 드립니다.', time: '하자보증' },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-zinc-900 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-14">
          <p className="text-zinc-500 text-xs tracking-widest uppercase mb-4">Process</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              제작·납품 과정
            </h2>
            <p className="text-zinc-400 max-w-sm leading-relaxed text-sm">
              도면 접수부터 사후관리까지 한 회사가 끝까지 맡습니다.
            </p>
          </div>
          <div className="w-12 h-px bg-zinc-700 mt-8"></div>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-700">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-zinc-800 p-7">
              <div className="text-zinc-500 text-xs font-mono mb-3">STEP 0{i + 1}</div>
              <div className="text-white font-semibold text-lg mb-2">{step.title}</div>
              <p className="text-zinc-400 text-sm mb-5 leading-relaxed">{step.desc}</p>
              <span className="text-xs font-semibold text-zinc-300 border border-zinc-600 inline-block px-2 py-1">
                {step.time}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
