
  # 인버터 전문 기업 SISO

  This is a code bundle for 인버터 전문 기업 SISO. The original project is available at https://www.figma.com/design/R5AbBQ2RZ7mLbrWdB9mimw/%EC%9D%B8%EB%B2%84%ED%84%B0-%EC%A0%84%EB%AC%B8-%EA%B8%B0%EC%97%85-SISO.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## 사진 바꾸는 방법

  `src/assets/photos` 폴더에 아래 **파일 이름** 그대로 사진을 올리면, 다음 배포 때 홈페이지 사진이 자동으로 바뀝니다.

  1. GitHub에서 `src/assets/photos` 폴더로 이동 → **Add file → Upload files**
  2. 파일 이름을 아래 표의 이름으로 맞춰서 업로드 (예: 공장등록증은 `factory-registration.jpg`)
  3. 같은 이름의 파일이 있으면 덮어써집니다. 확장자는 jpg, jpeg, png, webp 모두 가능하지만, 같은 이름은 한 개만 두세요.
  4. 사진 한 장은 **가로·세로 1600px 이하, 500KB 이하**를 권장합니다. 휴대폰 원본(3~10MB)을 그대로 올리면 페이지가 느려집니다.

  - 공장등록증(`factory-registration`)과 제작 사례(`case-1`~`case-8`)는 사진을 올린 칸만 화면에 나타납니다.
  - 제작 사례의 제목·설명 문구는 `src/siteImages.ts`의 `label`, `sub`에서 바꿉니다.
  - `service-cooling-tower`는 실제 사진이 없어 AI로 만든 설비 예시 이미지입니다. 실제 시공 사진이 생기면 교체하세요.

  | 위치 | 파일 이름 | 내용 | 현재 |
  |---|---|---|---|
  | 첫 화면 배경 | `hero` | 실제 제어반 사진 | 있음 |
  | 제작 납품 섹션 | `partner-team` | 현장 시운전 | 있음 |
  | 제작 납품 섹션 | `partner-work` | 제어반 배선·조립 | 있음 |
  | 제작 납품 섹션 | `partner-panel` | 회로·시퀀스 설계 | 있음 |
  | 제작 납품 섹션 | `factory-registration` | 공장등록증 (올리면 표시) | 없음 (올리면 표시) |
  | 설비별 제어반 | `service-pump` | 펌프 | 있음 |
  | 설비별 제어반 | `service-ahu` | 공조기 | 있음 |
  | 설비별 제어반 | `service-cooling-tower` | 냉각탑 (AI 설비 예시 이미지) | 있음 |
  | 설비별 제어반 | `service-fan` | 팬·송풍기 | 있음 |
  | 제작 사례 | `case-1` | LS 인버터 제어반 | 있음 |
  | 제작 사례 | `case-2` | 인버터 제어반 3면 구성 | 있음 |
  | 제작 사례 | `case-3` | 댄포스 인버터 제어반 | 있음 |
  | 제작 사례 | `case-4` | 펌프 설비 적용 현장 | 있음 |
  | 제작 사례 | `case-5` | 새 사례 | 없음 (올리면 표시) |
  | 제작 사례 | `case-6` | 새 사례 | 없음 (올리면 표시) |
  | 제작 사례 | `case-7` | 새 사례 | 없음 (올리면 표시) |
  | 제작 사례 | `case-8` | 새 사례 | 없음 (올리면 표시) |
