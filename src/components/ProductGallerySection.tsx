import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1570086625762-7c1396540ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaW52ZXJ0ZXIlMjBWRkQlMjBkcml2ZSUyMHVuaXQlMjBlbGVjdHJpY2FsfGVufDF8fHx8MTc3MzMzMTc4MHww&ixlib=rb-4.1.0&q=80&w=800",
    label: "인버터 드라이브 유닛",
    sub: "VFD / 가변속 제어 드라이브",
    size: "tall", // col-span or row-span
  },
  {
    src: "https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsJTIwY2FiaW5ldCUyMGludGVyaW9yJTIwd2lyaW5nfGVufDF8fHx8MTc3MzMzMTc4MXww&ixlib=rb-4.1.0&q=80&w=800",
    label: "인버터 제어반 내부",
    sub: "전문 배선 및 회로 구성",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1769148023257-02df7ec903be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGVsZWN0cm9uaWNzJTIwaW5kdXN0cmlhbCUyMGF1dG9tYXRpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzczMzMxNzgyfDA&ixlib=rb-4.1.0&q=80&w=800",
    label: "전력 전자 자동화 장비",
    sub: "산업용 자동화 제어 시스템",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1762329406809-e46415e6974e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMHdpcmluZyUyMGNpcmN1aXQlMjBib2FyZCUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzczMzMxNzg0fDA&ixlib=rb-4.1.0&q=80&w=800",
    label: "제어 회로 기판",
    sub: "정밀 배선 및 시퀀스 설계",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHVtcCUyMG1vdG9yJTIwbWFjaGluZXJ5JTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzMzMzE3ODN8MA&ixlib=rb-4.1.0&q=80&w=800",
    label: "산업용 펌프 모터",
    sub: "고효율 인버터 제어 적용",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1641471350928-9e30615cebe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwZW5naW5lZXIlMjBpbmR1c3RyaWFsJTIwbWFpbnRlbmFuY2UlMjB3b3JrfGVufDF8fHx8MTc3MzMzMTc4NHww&ixlib=rb-4.1.0&q=80&w=800",
    label: "현장 기술 서비스",
    sub: "전문 기술진 직접 출동",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFjaGluZSUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnQlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3MzMzMTc4NXww&ixlib=rb-4.1.0&q=80&w=800",
    label: "공장 생산 설비",
    sub: "공정 자동화 인버터 제어",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1663609476830-8c247515c1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5lcmd5JTIwZWZmaWNpZW5jeSUyMGVsZWN0cmljaXR5JTIwcG93ZXIlMjBtZXRlcnxlbnwxfHx8fDE3NzMzMzE3ODZ8MA&ixlib=rb-4.1.0&q=80&w=800",
    label: "에너지 계측 시스템",
    sub: "전력 모니터링 및 절감 분석",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1761115435501-bebf019aba54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29vbGluZyUyMHRvd2VyJTIwcm9vZnRvcCUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzczMzMxODA2fDA&ixlib=rb-4.1.0&q=80&w=800",
    label: "냉각탑 제어 시스템",
    sub: "팬 인버터 및 수온 자동 제어",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1764185800646-f75f7e16e465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMFBMQyUyMGNvbnRyb2wlMjBlcXVpcG1lbnQlMjByYWNrfGVufDF8fHx8MTc3MzMzMTgwN3ww&ixlib=rb-4.1.0&q=80&w=800",
    label: "PLC 자동화 제어반",
    sub: "BMS/BAS 연동 스마트 제어",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1738918922725-d70c666ddccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHB1bXAlMjBpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzczMzI3OTY4fDA&ixlib=rb-4.1.0&q=80&w=800",
    label: "가압 펌프 시스템",
    sub: "PID 정압 인버터 제어",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1679303777007-c6c4522beb02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFuJTIwdmVudGlsYXRpb24lMjBibG93ZXIlMjBmYWN0b3J5fGVufDF8fHx8MTc3MzMyNzk3MXww&ixlib=rb-4.1.0&q=80&w=800",
    label: "팬·송풍기 제어",
    sub: "풍량·정압 정밀 인버터 제어",
    size: "normal",
  },
];

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
          {/* Row 1: wide + normal + normal */}
          <GalleryCard item={galleryItems[0]} className="col-span-1 row-span-2" />
          <GalleryCard item={galleryItems[1]} className="col-span-2" />
          <GalleryCard item={galleryItems[2]} className="col-span-1" />
          <GalleryCard item={galleryItems[3]} className="col-span-1" />
          <GalleryCard item={galleryItems[10]} className="col-span-1" />

          {/* Row 2 */}
          <GalleryCard item={galleryItems[4]} className="col-span-1 row-span-2" />
          <GalleryCard item={galleryItems[5]} className="col-span-2" />
          <GalleryCard item={galleryItems[6]} className="col-span-1" />
          <GalleryCard item={galleryItems[7]} className="col-span-1" />
          <GalleryCard item={galleryItems[8]} className="col-span-1" />

          {/* Row 3 */}
          <GalleryCard item={galleryItems[9]} className="col-span-1 row-span-2" />
          <GalleryCard item={galleryItems[11]} className="col-span-2" />
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-zinc-400 mt-8">
          실제 납품 사례 및 시공 사진은 문의를 통해 추가로 확인하실 수 있습니다.
        </p>
      </div>
    </section>
  );
}

function GalleryCard({ item, className }: { item: typeof galleryItems[0]; className?: string }) {
  return (
    <div className={`relative overflow-hidden group bg-white cursor-pointer ${className}`}>
      <div className="relative h-44 md:h-52 w-full overflow-hidden">
        <ImageWithFallback
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-zinc-900/30 group-hover:bg-zinc-900/60 transition-colors duration-300" />
        {/* Label overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white font-semibold text-sm leading-tight">{item.label}</p>
          <p className="text-zinc-300 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.sub}
          </p>
        </div>
        {/* Index badge */}
        <div className="absolute top-3 right-3 bg-zinc-900/70 text-white text-[10px] px-2 py-0.5 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          {item.sub}
        </div>
      </div>
    </div>
  );
}
