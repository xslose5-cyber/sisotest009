import { ImageWithFallback } from './figma/ImageWithFallback';
import { photo } from '../siteImages';

export function ProductGallerySection() {
  return (
    <section className="py-20 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
            Product Gallery
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              SISO 제품 및 시공 현장
            </h2>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              실제 납품·설치된 인버터 제어반과 현장 적용 사례를 확인하세요.
            </p>
          </div>
          <div className="w-12 h-px bg-zinc-300 mt-8" />
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-100">

          {/* 1. 인버터 드라이브 유닛 — row-span-2 */}
          <GalleryCard
            className="col-span-1 row-span-2"
            label="인버터 드라이브 유닛"
            sub="VFD / 가변속 제어 드라이브"
          >
            <ImageWithFallback
              {...photo('gallery-drive-unit')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

          {/* 2. 인버터 제어반 내부 — col-span-2 */}
          <GalleryCard
            className="col-span-2"
            label="인버터 제어반 내부"
            sub="전문 배선 및 회로 구성"
          >
            <ImageWithFallback
              {...photo('gallery-panel-inside')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

          {/* 3. 문구 강조 영역 (기존 3, 4번 카드 대체) */}
          <div className="col-span-2 flex flex-col justify-center items-start p-8 bg-zinc-900 text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              설비 업체에서도<br />믿고 맡기는 시공 품질
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              정밀하고 깔끔한 배선부터 완벽한 시퀀스 설계까지.<br />
              SISO의 인버터 제어반은 철저한 품질 관리로 완성되며,<br />
              설치와 공사 모두 전문가가 직접 책임집니다.
            </p>
            <div className="w-12 h-px bg-zinc-700" />
          </div>

          {/* 5. 가압 펌프 시스템 */}
          <GalleryCard
            className="col-span-1"
            label="가압 펌프 시스템"
            sub="PID 정압 인버터 제어"
          >
            <ImageWithFallback
              {...photo('gallery-booster-pump')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

          {/* 6. 산업용 펌프 모터 — row-span-2 */}
          <GalleryCard
            className="col-span-1 row-span-2"
            label="산업용 펌프 모터"
            sub="고효율 인버터 제어 적용"
          >
            <ImageWithFallback
              {...photo('gallery-pump-motor')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

          {/* 7. 현장 기술 서비스 — col-span-2 */}
          <GalleryCard
            className="col-span-2"
            label="현장 기술 서비스"
            sub="전문 기술진 직접 출동"
          >
            <ImageWithFallback
              {...photo('gallery-field-service')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

          {/* 8. 공조기(AHU) 제어 */}
          <GalleryCard
            className="col-span-1"
            label="공조기(AHU) 제어"
            sub="온습도 정밀 인버터 제어"
          >
            <ImageWithFallback
              {...photo('gallery-ahu')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

          {/* 9. 에너지 계측 시스템 */}
          <GalleryCard
            className="col-span-1"
            label="에너지 계측 시스템"
            sub="전력 모니터링 및 절감 분석"
          >
            <ImageWithFallback
              {...photo('gallery-energy-meter')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

          {/* 10. 냉각탑 제어 시스템 */}
          <GalleryCard
            className="col-span-1"
            label="냉각탑 제어 시스템"
            sub="팬 인버터 및 수온 자동 제어"
          >
            <ImageWithFallback
              {...photo('gallery-cooling-tower')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

          {/* 11. PLC 자동화 제어반 — row-span-2 */}
          <GalleryCard
            className="col-span-1 row-span-2"
            label="PLC 자동화 제어반"
            sub="BMS/BAS 연동 스마트 제어"
          >
            <ImageWithFallback
              {...photo('gallery-plc-panel')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

          {/* 12. 팬·송풍기 제어 — col-span-2 */}
          <GalleryCard
            className="col-span-2"
            label="팬·송풍기 제어"
            sub="풍량·정압 정밀 인버터 제어"
          >
            <ImageWithFallback
              {...photo('gallery-fan')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </GalleryCard>

        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-zinc-400 mt-8">
          실제 납품 사례 및 시공 사진은 문의를 통해 추가로 확인하실 수 있습니다.
        </p>
      </div>
    </section>
  );
}

function GalleryCard({
  children,
  className,
  label,
  sub,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
  sub: string;
}) {
  return (
    <div className={`relative overflow-hidden group bg-white cursor-pointer ${className}`}>
      <div className="relative h-44 md:h-52 w-full overflow-hidden">
        {children}
        <div className="absolute inset-0 bg-zinc-900/30 group-hover:bg-zinc-900/60 transition-colors duration-300" />
        {/* Label overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white font-semibold text-sm leading-tight">{label}</p>
          <p className="text-zinc-300 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {sub}
          </p>
        </div>
        {/* Index badge */}
        <div className="absolute top-3 right-3 bg-zinc-900/70 text-white text-[10px] px-2 py-0.5 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          {sub}
        </div>
      </div>
    </div>
  );
}
