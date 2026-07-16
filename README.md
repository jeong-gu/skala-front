[🚀 GitHub Pages에서 프로젝트 보기](https://jeong-gu.github.io/skala-front/)

# 나의 유니버스

HTML, CSS, JavaScript 학습 내용을 하나의 개인 포털로 구성한 정적 웹 프로젝트입니다. 수업 시간표, 휴일 일과, 프로필, 여행 앨범과 회원가입 화면을 제공하며, 실시간 날씨와 간단한 JavaScript 실습 기능을 함께 담고 있습니다.

## 주요 기능

- Space 콘셉트의 공통 페이지 디자인
- Flexbox와 Grid를 활용한 다중 열 레이아웃
- 반응형 디자인
- 내비게이션, 버튼, 시간표와 여행 카드의 hover 효과
- 페이지 제목 fade-in 애니메이션
- 도시별 실시간 온도·습도 조회
- JavaScript 기초 실습

## 페이지 구성

| 페이지 | 내용 |
| --- | --- |
| `html/index.html` | 개인 포털 메인, 실시간 날씨, JavaScript 실습 |
| `html/myClass.html` | 강의 시간표와 과목별 레퍼런스 링크 |
| `html/holiday.html` | 휴일 일과 |
| `html/myProfile.html` | 개인 프로필 |
| `html/myTrip.html` | 4열 Grid 여행 앨범과 미디어 |
| `html/signUp.html` | 회원가입 양식 |
| `html/signUpResult.html` | 회원가입 결과|

## JavaScript 실습

- Up-Down 숫자 맞추기
- 가위바위보 게임
- 성적 계산기
- 실행할 때마다 내용이 바뀌는 내 가방 보기
- 도시 선택과 DOM 이벤트 처리
- 실시간 날씨 조회

## 프로젝트 구조

```text
.
├── .github/workflows/    # GitHub Pages 배포 자동화
├── css/                  # 공통 스타일
├── html/                 # 페이지와 페이지 전용 리소스
├── media/                # 이미지, 오디오, 동영상
└── script/               # JavaScript 실습과 날씨 모듈
```

## 배포

`main` 브랜치에 변경 사항을 푸시하면 GitHub Actions가 정적 파일을 빌드하고 GitHub Pages에 자동 배포합니다. 저장소 루트에는 진입용 `index.html`을 두지 않으며, 배포 과정에서만 임시 진입 페이지를 생성해 `html/index.html`로 연결합니다.
