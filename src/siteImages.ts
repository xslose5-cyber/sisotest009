// 홈페이지 사진 목록
//
// 사진 바꾸는 방법: src/assets/photos 폴더에 아래 슬롯 이름 그대로 사진을 올리면
// 다음 배포부터 자동으로 바뀝니다. (예: 첫 화면 배경 -> src/assets/photos/hero.jpg)
// - 확장자는 jpg, jpeg, png, webp 모두 가능하며, 같은 이름의 파일은 하나만 둡니다.
// - stock(임시 사진)이 있는 슬롯은 사진이 없으면 임시 사진이 보이고,
//   stock이 없는 슬롯(공장등록증, 제작 사례 등)은 사진을 올려야 화면에 나타납니다.

const uploaded = import.meta.glob<string>(
  './assets/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
);

const uploadedBySlot: Record<string, string> = {};
for (const [path, url] of Object.entries(uploaded)) {
  const name = path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase();
  uploadedBySlot[name] = url;
}

type SlotInfo = { alt: string; label?: string; sub?: string; stock?: string };

const siteImages: Record<string, SlotInfo> = {
  // 첫 화면 배경 (실제 제어반 사진)
  'hero': { alt: 'SISO 인버터 제어반 내부' },

  // 설비업체 협력 납품
  'partner-team': { alt: '제어반 앞에서 시운전 중인 SISO 기술진', label: '현장 시운전' },
  'partner-work': { alt: '인버터 제어반 배선 작업', label: '제어반 배선·조립' },
  'partner-panel': { alt: '인버터 제어반 내부 회로 구성', label: '회로·시퀀스 설계' },
  'factory-registration': { alt: 'SISO 공장등록증', label: '공장등록증' },

  // 설비별 제어반 카드
  'service-pump': { alt: '펌프 설비' },
  'service-ahu': { alt: '공조기(AHU) 설비' },
  // 냉각탑 사진은 AI로 만든 설비 예시 이미지입니다. 실제 시공 사진이 생기면 교체하세요.
  'service-cooling-tower': { alt: '옥상 냉각탑 설비 예시' },
  'service-fan': { alt: '팬·송풍기 설비' },

  // 제작·시공 사례 (사진이 있는 칸만 표시됩니다. 설명 문구는 label/sub에서 바꿉니다)
  'case-1': { alt: 'LS 인버터 제어반', label: 'LS 인버터 제어반', sub: 'VFD 가변속 제어' },
  'case-2': { alt: '인버터 제어반 3면 구성', label: '인버터 제어반 3면 구성', sub: '배선 및 회로 구성' },
  'case-3': { alt: '댄포스 인버터 제어반', label: '댄포스 인버터 제어반', sub: '수입 인버터 대응' },
  'case-4': { alt: '펌프 설비 인버터 적용 현장', label: '펌프 설비 적용 현장', sub: 'PID 정압 제어' },
  'case-5': { alt: '제작·시공 사례', label: '제작·시공 사례' },
  'case-6': { alt: '제작·시공 사례', label: '제작·시공 사례' },
  'case-7': { alt: '제작·시공 사례', label: '제작·시공 사례' },
  'case-8': { alt: '제작·시공 사례', label: '제작·시공 사례' },
};

export function photo(slot: string) {
  const image = siteImages[slot];
  return { src: uploadedBySlot[slot] ?? image.stock, alt: image.alt };
}

export function hasPhoto(slot: string) {
  return Boolean(photo(slot).src);
}

export function slotInfo(slot: string) {
  return siteImages[slot];
}
