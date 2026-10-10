// 홈페이지 사진 목록
//
// 사진 바꾸는 방법: src/assets/photos 폴더에 아래 슬롯 이름 그대로 사진을 올리면
// 다음 배포부터 자동으로 바뀝니다. (예: 첫 화면 배경 -> src/assets/photos/hero.jpg)
// - 확장자는 jpg, jpeg, png, webp 모두 가능하며, 같은 이름의 파일은 하나만 둡니다.
// - 이름이 같은 사진이 없으면 stock(임시 사진)이 대신 보입니다.

const uploaded = import.meta.glob<string>(
  './assets/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
);

const uploadedBySlot: Record<string, string> = {};
for (const [path, url] of Object.entries(uploaded)) {
  const name = path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase();
  uploadedBySlot[name] = url;
}

const siteImages: Record<string, { alt: string; stock?: string }> = {
  // 첫 화면
  'hero': {
    alt: '산업용 인버터 제어반',
    stock: 'https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW5naW5lZXIlMjB3ZWFyaW5nJTIwaGFyZGhhdCUyMGNoZWNraW5nJTIwZWxlY3RyaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQxMTAwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  // 회사소개 사진 4장
  'about-1': { alt: '산업용 펌프 모터 제어 장비' },
  'about-2': { alt: '산업용 전동기 모터' },
  'about-3': { alt: '안전모를 착용하고 전기 제어반을 점검하는 엔지니어' },
  'about-4': { alt: '산업용 자동화 설비' },
  // 회사소개 - 인버터 제어반 적용 시설
  'facility-datacenter': {
    alt: '데이터센터',
    stock: 'https://images.unsplash.com/photo-1763128516808-785e80c1dd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyJTIwcm9vbSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzczMzI3OTY3fDA&ixlib=rb-4.1.0&q=80&w=400',
  },
  'facility-hospital': {
    alt: '종합병원',
    stock: 'https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwbWVkaWNhbCUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MzMzMDQyMXww&ixlib=rb-4.1.0&q=80&w=400',
  },
  'facility-building': {
    alt: '대형 빌딩',
    stock: 'https://images.unsplash.com/photo-1748811371852-b27529c29546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMG9mZmljZSUyMGJ1aWxkaW5nJTIwc2t5c2NyYXBlciUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MzMzMDQyMnww&ixlib=rb-4.1.0&q=80&w=400',
  },
  'facility-logistics': {
    alt: '물류센터',
    stock: 'https://images.unsplash.com/photo-1771530789155-b1f03fbf82b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzMjIxMTd8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  'facility-factory': {
    alt: '공장·플랜트',
    stock: 'https://images.unsplash.com/photo-1599765824376-a87eb981b2ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHBsYW50JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzMyMzE4MzB8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  'facility-apartment': {
    alt: '아파트·주거',
    stock: 'https://images.unsplash.com/photo-1770386751962-d3bb928aeb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY29tcGxleHxlbnwxfHx8fDE3NzMzMTEwMzl8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  // 사업분야 카드
  'service-pump': { alt: '펌프 제어반' },
  'service-ahu': { alt: '공조기 제어반' },
  'service-cooling-tower': {
    alt: '냉각탑 제어반',
    stock: 'https://images.unsplash.com/photo-1761115435501-bebf019aba54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29saW5nJTIwdG93ZXIlMjBpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjByb29mdG9wfGVufDF8fHx8MTc3MzMyNzk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  'service-fan': { alt: '팬·송풍기 제어반' },
  // 제품 및 시공 현장 갤러리
  'gallery-drive-unit': { alt: '인버터 드라이브 유닛' },
  'gallery-panel-inside': { alt: '인버터 제어반 내부' },
  'gallery-booster-pump': { alt: '가압 펌프 시스템' },
  'gallery-pump-motor': { alt: '산업용 펌프 모터' },
  'gallery-field-service': { alt: '현장 기술 서비스' },
  'gallery-ahu': { alt: '공조기(AHU) 제어' },
  'gallery-energy-meter': {
    alt: '에너지 계측 시스템',
    stock: 'https://images.unsplash.com/photo-1663609476830-8c247515c1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5lcmd5JTIwZWZmaWNpZW5jeSUyMGVsZWN0cmljaXR5JTIwcG93ZXIlMjBtZXRlcnxlbnwxfHx8fDE3NzMzMzE3ODZ8MA&ixlib=rb-4.1.0&q=80&w=800',
  },
  'gallery-cooling-tower': {
    alt: '냉각탑 제어 시스템',
    stock: 'https://images.unsplash.com/photo-1761115435501-bebf019aba54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29vbGluZyUyMHRvd2VyJTIwcm9vZnRvcCUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzczMzMxODA2fDA&ixlib=rb-4.1.0&q=80&w=800',
  },
  'gallery-plc-panel': {
    alt: 'PLC 자동화 제어반',
    stock: 'https://images.unsplash.com/photo-1764185800646-f75f7e16e465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMFBMQyUyMGNvbnRyb2wlMjBlcXVpcG1lbnQlMjByYWNrfGVufDF8fHx8MTc3MzMzMTgwN3ww&ixlib=rb-4.1.0&q=80&w=800',
  },
  'gallery-fan': { alt: '팬·송풍기 제어' },
  // 기술특징 - 신속 대응 사진 3장
  'features-1': { alt: '인버터 드라이브 유닛' },
  'features-2': { alt: '전문 기술진 현장 출동' },
  'features-3': {
    alt: 'PLC 자동화 제어반',
    stock: 'https://images.unsplash.com/photo-1764185800646-f75f7e16e465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMFBMQyUyMGNvbnRyb2wlMjBlcXVpcG1lbnQlMjByYWNrfGVufDF8fHx8MTc3MzMzMTgwN3ww&ixlib=rb-4.1.0&q=80&w=600',
  },
};

export function photo(slot: string) {
  const image = siteImages[slot];
  return { src: uploadedBySlot[slot] ?? image.stock, alt: image.alt };
}
