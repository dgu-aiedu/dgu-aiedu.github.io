# 동국대학교 교육대학원 강의자료 포털

동국대학교 교육대학원 AI융합교육전공 3개 과목의 공지사항 및 주차별 강의자료를 제공하는 웹사이트입니다.

* **웹사이트 URL**: [https://dgu-aiedu.github.io/edu2026](https://dgu-aiedu.github.io/edu2026)
* **대상 과목 (3개)**:
  1. **AI활용데이터사이언스기초** (화요일 18:30 - 19:50)
  2. **머신러닝을위한수학과파이썬기초** (목요일 18:30 - 19:50)
  3. **피지컬컴퓨팅과AI융합교육실무** (목요일 20:00 - 21:20)

---

## 📁 디렉터리 구조

```text
dgu-aiedu.github.io/
 ├── index.html                   # 루트 접속 시 /edu2026/ 으로 자동 연결
 ├── edu2026/                     # 2026학년도 강의자료 포털
 │    ├── index.html              # 포털 메인 페이지
 │    ├── assets/
 │    │    ├── css/custom.css     # 스타일시트 및 동국대 오렌지 테마
 │    │    └── js/
 │    │         ├── courses-data.js # [★핵심] 과목 정보, 공지사항, 주차별 자료 데이터
 │    │         └── app.js        # 화면 동적 렌더링 및 탭 전환 스크립트
 │    └── materials/              # 실제 업로드할 강의자료 저장소
 │         ├── ai-datascience/    # 1과목 자료 (PDF, 실습파일 등)
 │         ├── math-python/       # 2과목 자료 (PDF, Jupyter Notebook 등)
 │         └── physical-ai/       # 3과목 자료 (PDF, 소스코드, 회로도 등)
 └── README.md
```

---

## 🚀 매주 강의자료 업데이트 방법 (3단계)

강의 시작 전 새로운 강의자료(PDF, 코드 등)를 올리실 때는 **아래 3단계**만 수행하시면 됩니다.

### 1단계: 강의자료 파일 복사
해당 과목의 `edu2026/materials/[과목폴더]/` 경로에 업로드할 파일(PDF, IPYNB, ZIP 등)을 넣습니다.
* 예: `edu2026/materials/ai-datascience/week02_lecture.pdf`

### 2단계: `edu2026/assets/js/courses-data.js` 파일 수정
`edu2026/assets/js/courses-data.js` 파일을 열고, 해당 과목의 해당 주차(`week: 2`) 항목을 찾아 아래와 같이 수정합니다:

```javascript
{
  week: 2,
  date: "2026-09-15",
  topic: "파이썬 데이터 분석 기초 (NumPy & Pandas 입문)",
  summary: "데이터 구조 이해, 시리즈와 데이터프레임 다루기",
  status: "ready", // ★ upcoming을 ready로 변경
  files: [
    {
      name: "02주차_강의안_파이썬데이터분석.pdf",
      path: "./materials/ai-datascience/week02_lecture.pdf",
      size: "3.1 MB",
      type: "pdf"
    }
  ],
  links: [
    {
      title: "실습 Colab 링크",
      url: "https://colab.research.google.com/...",
      type: "colab"
    }
  ]
}
```

### 3단계: Git 커밋 및 Push
수정한 내용을 커밋하고 깃허브에 푸시합니다.
```bash
git add .
git commit -m "2주차 강의자료 업데이트"
git push origin main
```
> 푸시 후 1~2분 내로 `https://dgu-aiedu.github.io/edu2026`에 자동 반영됩니다.
