import { ImageWithFallback } from './figma/ImageWithFallback';
import { photo, hasPhoto, slotInfo } from '../siteImages';

// 사진이 올라와 있는 칸만 보여 줍니다. 새 사례는 src/assets/photos 에 case-5.jpg 처럼 올리세요.
const caseSlots = ['case-1', 'case-2', 'case-3', 'case-4', 'case-5', 'case-6', 'case-7', 'case-8'];

export function ProductGallerySection() {
  const cases = caseSlots.filter(hasPhoto);

  return (
    <section id="cases" className="py-20 bg-white border-t border-zinc-100 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
            Cases
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
              제작·시공 사례
            </h2>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              SISO가 직접 제작·설치한 인버터 제어반과 적용 현장입니다.
            </p>
          </div>
          <div className="w-12 h-px bg-zinc-300 mt-8" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-100">
          {cases.map((slot) => {
            const info = slotInfo(slot);
            return (
              <figure key={slot} className="relative overflow-hidden group bg-white">
                <div className="relative h-56 md:h-72 w-full overflow-hidden">
                  <ImageWithFallback
                    {...photo(slot)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/10 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-base leading-tight">{info.label}</p>
                    {info.sub && <p className="text-zinc-300 text-sm mt-0.5">{info.sub}</p>}
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>

        <p className="text-center text-sm text-zinc-400 mt-8">
          더 많은 납품 사례와 시공 사진은 문의해 주시면 보내 드립니다.
        </p>
      </div>
    </section>
  );
}
