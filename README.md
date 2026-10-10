
  # 인버터 전문 기업 SISO

  This is a code bundle for 인버터 전문 기업 SISO. The original project is available at https://www.figma.com/design/R5AbBQ2RZ7mLbrWdB9mimw/%EC%9D%B8%EB%B2%84%ED%84%B0-%EC%A0%84%EB%AC%B8-%EA%B8%B0%EC%97%85-SISO.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## 사진 바꾸는 방법

  `src/assets/photos` 폴더에 아래 **파일 이름** 그대로 사진을 올리면, 다음 배포 때 홈페이지 사진이 자동으로 바뀝니다.

  1. GitHub에서 `src/assets/photos` 폴더로 이동 → **Add file → Upload files**
  2. 파일 이름을 아래 표의 이름으로 맞춰서 업로드 (예: 첫 화면 배경은 `hero.jpg`)
  3. 같은 이름의 파일이 있으면 덮어써집니다. 확장자는 jpg, jpeg, png, webp 모두 가능하지만, 같은 이름은 한 개만 두세요.
  4. 사진 한 장은 **가로·세로 1600px 이하, 500KB 이하**를 권장합니다. 휴대폰 원본(3~10MB)을 그대로 올리면 페이지가 느려집니다.

  이름이 같은 사진이 없으면 임시 사진(무료 이미지)이 대신 보입니다. 사진 목록과 설명은 `src/siteImages.ts`에 있습니다.

  | 위치 | 내용 | 파일 이름 | 현재 |
  |---|---|---|---|
  | 첫 화면 | 산업용 인버터 제어반 | `hero` | 임시 사진(교체 필요) |
  | 회사소개 사진 4장 | 산업용 펌프 모터 제어 장비 | `about-1` | 실제 사진 |
  | 회사소개 사진 4장 | 산업용 전동기 모터 | `about-2` | 실제 사진 |
  | 회사소개 사진 4장 | 안전모를 착용하고 전기 제어반을 점검하는 엔지니어 | `about-3` | 실제 사진 |
  | 회사소개 사진 4장 | 산업용 자동화 설비 | `about-4` | 실제 사진 |
  | 회사소개 - 인버터 제어반 적용 시설 | 데이터센터 | `facility-datacenter` | 임시 사진(교체 필요) |
  | 회사소개 - 인버터 제어반 적용 시설 | 종합병원 | `facility-hospital` | 임시 사진(교체 필요) |
  | 회사소개 - 인버터 제어반 적용 시설 | 대형 빌딩 | `facility-building` | 임시 사진(교체 필요) |
  | 회사소개 - 인버터 제어반 적용 시설 | 물류센터 | `facility-logistics` | 임시 사진(교체 필요) |
  | 회사소개 - 인버터 제어반 적용 시설 | 공장·플랜트 | `facility-factory` | 임시 사진(교체 필요) |
  | 회사소개 - 인버터 제어반 적용 시설 | 아파트·주거 | `facility-apartment` | 임시 사진(교체 필요) |
  | 사업분야 카드 | 펌프 제어반 | `service-pump` | 실제 사진 |
  | 사업분야 카드 | 공조기 제어반 | `service-ahu` | 실제 사진 |
  | 사업분야 카드 | 냉각탑 제어반 | `service-cooling-tower` | 임시 사진(교체 필요) |
  | 사업분야 카드 | 팬·송풍기 제어반 | `service-fan` | 실제 사진 |
  | 제품 및 시공 현장 갤러리 | 인버터 드라이브 유닛 | `gallery-drive-unit` | 실제 사진 |
  | 제품 및 시공 현장 갤러리 | 인버터 제어반 내부 | `gallery-panel-inside` | 실제 사진 |
  | 제품 및 시공 현장 갤러리 | 가압 펌프 시스템 | `gallery-booster-pump` | 실제 사진 |
  | 제품 및 시공 현장 갤러리 | 산업용 펌프 모터 | `gallery-pump-motor` | 실제 사진 |
  | 제품 및 시공 현장 갤러리 | 현장 기술 서비스 | `gallery-field-service` | 실제 사진 |
  | 제품 및 시공 현장 갤러리 | 공조기(AHU) 제어 | `gallery-ahu` | 실제 사진 |
  | 제품 및 시공 현장 갤러리 | 에너지 계측 시스템 | `gallery-energy-meter` | 임시 사진(교체 필요) |
  | 제품 및 시공 현장 갤러리 | 냉각탑 제어 시스템 | `gallery-cooling-tower` | 임시 사진(교체 필요) |
  | 제품 및 시공 현장 갤러리 | PLC 자동화 제어반 | `gallery-plc-panel` | 임시 사진(교체 필요) |
  | 제품 및 시공 현장 갤러리 | 팬·송풍기 제어 | `gallery-fan` | 실제 사진 |
  | 기술특징 - 신속 대응 사진 3장 | 인버터 드라이브 유닛 | `features-1` | 실제 사진 |
  | 기술특징 - 신속 대응 사진 3장 | 전문 기술진 현장 출동 | `features-2` | 실제 사진 |
  | 기술특징 - 신속 대응 사진 3장 | PLC 자동화 제어반 | `features-3` | 임시 사진(교체 필요) |
