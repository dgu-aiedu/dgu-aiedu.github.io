/**
 * 동국대학교 교육대학원 2026학년도 강의자료 데이터
 * 
 * [자료 업데이트 방법]
 * 1. 공지사항: notices 배열에 항목 추가/수정
 * 2. 주차별 강의자료: weeks 배열의 해당 강(1강~15강) 항목에 files / links 추가
 * 3. 실제 파일은 ./materials/[과목폴더]/ 아래에 저장
 */

function generateBlankWeeks(folderName, sampleFileName) {
  const weeks = [];
  for (let i = 1; i <= 15; i++) {
    const isFirst = i === 1;
    weeks.push({
      week: i,
      topic: `${i}강`,
      date: "",
      summary: "",
      status: isFirst ? "ready" : "upcoming",
      files: isFirst ? [
        {
          name: `01강_강의자료.pdf`,
          path: `./materials/${folderName}/${sampleFileName}`,
          size: "PDF",
          type: "pdf"
        }
      ] : [],
      links: []
    });
  }
  return weeks;
}

const COURSES_DATA = [
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
    weeks: generateBlankWeeks("ai-datascience", "week01_lecture.pdf")
  },
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
    weeks: generateBlankWeeks("math-python", "week01_lecture.pdf")
  },
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
    weeks: generateBlankWeeks("physical-ai", "week01_lecture.pdf")
  }
];
