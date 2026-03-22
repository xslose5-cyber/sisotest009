import { ImageWithFallback } from './figma/ImageWithFallback';
import imgInverterDriveUnit from "figma:asset/38891e95c3245421464be9369f81f886b850ea33.png";
import imgKakaoTalk202511122213174292 from "figma:asset/173314cb2674256cd44a2a44764480d37c815e6a.png";
import imgPumpHorizontal from "figma:asset/be46df8ab687b34c53c22ba4fcbb500a24b433a5.png";
import imgPumpVertical from "figma:asset/18fa08a0d35eb725bec2df16633a7dd839c20df7.png";
import imgKakaoTalk202511122036417061 from "figma:asset/a8f7be34a990a03eac2f42134b5100fa394c61b7.png";
import imgKakaoTalk202511122214088331 from "figma:asset/0afb3aac3c5a70dcfe809138495c1cca226c9670.png";
import img71 from "figma:asset/1fc16eb5da7a45c853469b288bed9e6acab45e5d.png";

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
              src={imgInverterDriveUnit}
              alt="인버터 드라이브 유닛"
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
              src={img71}
              alt="인버터 제어반 내부"
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
              src={imgPumpHorizontal}
              alt="가압 펌프 시스템"
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
              src={imgPumpVertical}
              alt="산업용 펌프 모터"
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
              src={imgKakaoTalk202511122036417061}
              alt="현장 기술 서비스"
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
              src={imgKakaoTalk202511122213174292}
              alt="공조기(AHU) 제어"
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
              src="https://images.unsplash.com/photo-1663609476830-8c247515c1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5lcmd5JTIwZWZmaWNpZW5jeSUyMGVsZWN0cmljaXR5JTIwcG93ZXIlMjBtZXRlcnxlbnwxfHx8fDE3NzMzMzE3ODZ8MA&ixlib=rb-4.1.0&q=80&w=800"
              alt="에너지 계측 시스템"
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
              src="https://images.unsplash.com/photo-1761115435501-bebf019aba54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29vbGluZyUyMHRvd2VyJTIwcm9vZnRvcCUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzczMzMxODA2fDA&ixlib=rb-4.1.0&q=80&w=800"
              alt="냉각탑 제어 시스템"
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
              src="https://images.unsplash.com/photo-1764185800646-f75f7e16e465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMFBMQyUyMGNvbnRyb2wlMjBlcXVpcG1lbnQlMjByYWNrfGVufDF8fHx8MTc3MzMzMTgwN3ww&ixlib=rb-4.1.0&q=80&w=800"
              alt="PLC 자동화 제어반"
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
              src={imgKakaoTalk202511122214088331}
              alt="팬·송풍기 제어"
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
