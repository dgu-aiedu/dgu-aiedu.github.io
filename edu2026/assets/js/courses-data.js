/**
 * 동국대학교 교육대학원 2026학년도 강의자료 데이터
 * 
 * [자료 올리는 방법]
 * 1. 올릴 파일(PDF, ipynb, zip 등)을 materials 폴더 아래 해당 과목 폴더에 복사
 * 2. 아래에서 해당 과목과 해당 강의(예: 1강, 2강)를 찾아서 files: [ ... ] 에 파일 정보 입력
 * 3. 저장 후 git add . -> git commit -m "자료 업데이트" -> git push
 */

const COURSES_DATA = [
  // ==========================================
  // 과목 1: AI활용데이터사이언스기초 (화요일)
  // ==========================================
  {
    id: "ai-datascience",
    name: "AI활용데이터사이언스기초",
    schedule: "화요일 18:30 - 19:50",
    day: "화",
    time: "18:30 - 19:50",
    room: "교육대학원 세미나실",
    professor: "담당교수",
    email: "contact@dongguk.edu",
    description: "동국대학교 교육대학원 AI융합교육전공 2026학년도 강의자료실입니다.",
    color: {
      primary: "from-amber-500 to-orange-600",
      badge: "bg-orange-100 text-orange-800 border-orange-200",
      accent: "#D9531E",
      border: "border-orange-500"
    },
    notices: [
      {
        id: "n1",
        date: "",
        isPinned: true,
        title: "2026학년도 강의 안내",
        content: "매주 강의 시작 전 본 사이트에 강의자료가 업로드됩니다."
      }
    ],
    weeks: [
      {
        week: 1,
        topic: "1강",
        date: "",
        summary: "",
        files: [
          {
            name: "01강_탐색적데이터분석.pdf",
            path: "./materials/ai-datascience/AI활용데이터사이언스기초-탐색적데이터분석-20260901.pdf"
          }
        ],
        links: []
      },
      { week: 2, topic: "2강", date: "", summary: "", files: [], links: [] },
      { week: 3, topic: "3강", date: "", summary: "", files: [], links: [] },
      { week: 4, topic: "4강", date: "", summary: "", files: [], links: [] },
      { week: 5, topic: "5강", date: "", summary: "", files: [], links: [] },
      { week: 6, topic: "6강", date: "", summary: "", files: [], links: [] },
      { week: 7, topic: "7강", date: "", summary: "", files: [], links: [] },
      { week: 8, topic: "8강", date: "", summary: "", files: [], links: [] },
      { week: 9, topic: "9강", date: "", summary: "", files: [], links: [] },
      { week: 10, topic: "10강", date: "", summary: "", files: [], links: [] },
      { week: 11, topic: "11강", date: "", summary: "", files: [], links: [] },
      { week: 12, topic: "12강", date: "", summary: "", files: [], links: [] },
      { week: 13, topic: "13강", date: "", summary: "", files: [], links: [] },
      { week: 14, topic: "14강", date: "", summary: "", files: [], links: [] },
      { week: 15, topic: "15강", date: "", summary: "", files: [], links: [] }
    ]
  },

  // ==========================================
  // 과목 2: 머신러닝을위한수학과파이썬기초 (목요일)
  // ==========================================
  {
    id: "math-python",
    name: "머신러닝을위한수학과파이썬기초",
    schedule: "목요일 18:30 - 19:50",
    day: "목",
    time: "18:30 - 19:50",
    room: "교육대학원 세미나실",
    professor: "담당교수",
    email: "contact@dongguk.edu",
    description: "동국대학교 교육대학원 AI융합교육전공 2026학년도 강의자료실입니다.",
    color: {
      primary: "from-blue-600 to-indigo-700",
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      accent: "#2563EB",
      border: "border-blue-600"
    },
    notices: [
      {
        id: "n1",
        date: "",
        isPinned: true,
        title: "2026학년도 강의 안내",
        content: "매주 강의 시작 전 본 사이트에 강의자료가 업로드됩니다."
      }
    ],
    weeks: [
      {
        week: 1,
        topic: "1강",
        date: "",
        summary: "",
        files: [
          {
            name: "01강_강의자료.pdf",
            path: "./materials/math-python/week01_lecture.pdf"
          }
        ],
        links: []
      },
      { week: 2, topic: "2강", date: "", summary: "", files: [], links: [] },
      { week: 3, topic: "3강", date: "", summary: "", files: [], links: [] },
      { week: 4, topic: "4강", date: "", summary: "", files: [], links: [] },
      { week: 5, topic: "5강", date: "", summary: "", files: [], links: [] },
      { week: 6, topic: "6강", date: "", summary: "", files: [], links: [] },
      { week: 7, topic: "7강", date: "", summary: "", files: [], links: [] },
      { week: 8, topic: "8강", date: "", summary: "", files: [], links: [] },
      { week: 9, topic: "9강", date: "", summary: "", files: [], links: [] },
      { week: 10, topic: "10강", date: "", summary: "", files: [], links: [] },
      { week: 11, topic: "11강", date: "", summary: "", files: [], links: [] },
      { week: 12, topic: "12강", date: "", summary: "", files: [], links: [] },
      { week: 13, topic: "13강", date: "", summary: "", files: [], links: [] },
      { week: 14, topic: "14강", date: "", summary: "", files: [], links: [] },
      { week: 15, topic: "15강", date: "", summary: "", files: [], links: [] }
    ]
  },

  // ==========================================
  // 과목 3: 피지컬컴퓨팅과AI융합교육실무 (목요일)
  // ==========================================
  {
    id: "physical-ai",
    name: "피지컬컴퓨팅과AI융합교육실무",
    schedule: "목요일 20:00 - 21:20",
    day: "목",
    time: "20:00 - 21:20",
    room: "교육대학원 세미나실",
    professor: "담당교수",
    email: "contact@dongguk.edu",
    description: "동국대학교 교육대학원 AI융합교육전공 2026학년도 강의자료실입니다.",
    color: {
      primary: "from-emerald-600 to-teal-700",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      accent: "#059669",
      border: "border-emerald-600"
    },
    notices: [
      {
        id: "n1",
        date: "",
        isPinned: true,
        title: "2026학년도 강의 안내",
        content: "매주 강의 시작 전 본 사이트에 강의자료가 업로드됩니다."
      }
    ],
    weeks: [
      {
        week: 1,
        topic: "1강",
        date: "",
        summary: "",
        files: [
          {
            name: "01강_강의자료.pdf",
            path: "./materials/physical-ai/week01_lecture.pdf"
          }
        ],
        links: []
      },
      { week: 2, topic: "2강", date: "", summary: "", files: [], links: [] },
      { week: 3, topic: "3강", date: "", summary: "", files: [], links: [] },
      { week: 4, topic: "4강", date: "", summary: "", files: [], links: [] },
      { week: 5, topic: "5강", date: "", summary: "", files: [], links: [] },
      { week: 6, topic: "6강", date: "", summary: "", files: [], links: [] },
      { week: 7, topic: "7강", date: "", summary: "", files: [], links: [] },
      { week: 8, topic: "8강", date: "", summary: "", files: [], links: [] },
      { week: 9, topic: "9강", date: "", summary: "", files: [], links: [] },
      { week: 10, topic: "10강", date: "", summary: "", files: [], links: [] },
      { week: 11, topic: "11강", date: "", summary: "", files: [], links: [] },
      { week: 12, topic: "12강", date: "", summary: "", files: [], links: [] },
      { week: 13, topic: "13강", date: "", summary: "", files: [], links: [] },
      { week: 14, topic: "14강", date: "", summary: "", files: [], links: [] },
      { week: 15, topic: "15강", date: "", summary: "", files: [], links: [] }
    ]
  }
];
