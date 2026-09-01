/**
 * 동국대학교 교육대학원 2026학년도 강의자료 데이터
 * 
 * [자료 업데이트 방법]
 * 1. 공지사항 추가/수정: notices 배열에 항목 추가
 * 2. 주차별 자료 추가/수정: weeks 배열의 해당 주차 항목에서 files 및 links 추가
 * 3. 실제 파일은 ./materials/[과목폴더]/ 아래에 저장
 */

const COURSES_DATA = [
  {
    id: "ai-datascience",
    name: "AI활용데이터사이언스기초",
    schedule: "화요일 18:30 - 19:50",
    day: "화",
    time: "18:30 - 19:50",
    room: "교육대학원 세미나실 / 온라인 병행",
    professor: "담당교수",
    email: "contact@dongguk.edu",
    description: "인공지능과 데이터 사이언스의 기초 개념을 이해하고, 교육 및 다양한 실무 분야에서 데이터를 수집·가공·분석·시각화하는 역량을 기릅니다.",
    color: {
      primary: "from-amber-500 to-orange-600",
      badge: "bg-orange-100 text-orange-800 border-orange-200",
      accent: "#D9531E",
      border: "border-orange-500"
    },
    notices: [
      {
        id: "n1",
        date: "2026-09-01",
        isPinned: true,
        title: "2026학년도 2학기 개강 및 수강 안내",
        content: "개강 첫 주(9월 8일)는 오리엔테이션 및 실습 환경(Google Colab, Python) 설정이 진행됩니다. 개인 노트북을 지참해 주시기 바랍니다."
      },
      {
        id: "n2",
        date: "2026-09-01",
        isPinned: false,
        title: "강의자료 및 실습 데이터 다운로드 안내",
        content: "매주 화요일 강의 시작 전 본 사이트에 강의안(PDF)과 실습 예제 파일이 업로드됩니다."
      }
    ],
    weeks: [
      {
        week: 1,
        date: "2026-09-08",
        topic: "강의 오리엔테이션 및 데이터 사이언스 개요",
        summary: "교과목 소개, 인공지능과 데이터 사이언스 트렌드, 교육에서의 활용 사례, Google Colab 실습 환경 구축",
        status: "ready", // ready | upcoming
        files: [
          {
            name: "01주차_강의안_데이터사이언스개요.pdf",
            path: "./materials/ai-datascience/week01_lecture.pdf",
            size: "2.5 MB",
            type: "pdf"
          },
          {
            name: "01주차_실습_환경설정가이드.pdf",
            path: "./materials/ai-datascience/week01_setup_guide.pdf",
            size: "1.1 MB",
            type: "pdf"
          }
        ],
        links: [
          {
            title: "Google Colab 시작하기",
            url: "https://colab.research.google.com/",
            type: "colab"
          }
        ]
      },
      {
        week: 2,
        date: "2026-09-15",
        topic: "파이썬 데이터 분석 기초 (NumPy & Pandas 입문)",
        summary: "데이터 구조 이해, 시리즈와 데이터프레임 다루기, 결측치 처리 및 기초 통계 분석",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 3,
        date: "2026-09-22",
        topic: "탐색적 데이터 분석(EDA) 및 시각화",
        summary: "Matplotlib, Seaborn을 활용한 데이터 시각화 기법과 인사이트 도출",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 4,
        date: "2026-09-29",
        topic: "공공 데이터 수집 및 전처리 실습",
        summary: "공공데이터포털 API 및 CSV 데이터 수집, 데이터 정제와 가공 실무",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 5,
        date: "2026-10-06",
        topic: "정형 데이터 머신러닝 모델링 기초",
        summary: "Scikit-Learn 라이브러리를 활용한 분류 및 회귀 분석",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 6,
        date: "2026-10-13",
        topic: "AI 기반 데이터 분석 자동화 도구 활용",
        summary: "AutoML 및 생성형 AI를 활용한 데이터 분석 보고서 작성 기법",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 7,
        date: "2026-10-20",
        topic: "중간 프로젝트 기획 및 데이터 탐색",
        summary: "교육 현장 적용을 위한 데이터셋 선정 및 분석 계획 수립",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 8,
        date: "2026-10-27",
        topic: "중간고사 / 중간 점검",
        summary: "개인별 데이터 분석 기획서 발표 및 피드백",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 9,
        date: "2026-11-03",
        topic: "자연어 처리(NLP)와 텍스트 데이터 분석",
        summary: "텍스트 마이닝, 워드클라우드, 감성 분석 실습",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 10,
        date: "2026-11-10",
        topic: "컴퓨터 비전과 이미지 데이터 다루기",
        summary: "이미지 데이터 구조, OpenCV 기초 및 사전학습 모델 활용",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 11,
        date: "2026-11-17",
        topic: "LLM과 프롬프트 엔지니어링을 활용한 데이터 추출",
        summary: "대형 언어 모델을 활용한 비정형 데이터 구조화 및 인사이트 도출",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 12,
        date: "2026-11-24",
        topic: "인터랙티브 대시보드 제작 (Streamlit)",
        summary: "분석 결과를 웹 기반 인터랙티브 대시보드로 배포하기",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 13,
        date: "2026-12-01",
        topic: "교육 데이터 사이언스 사례 연구",
        summary: "학습자 로그 데이터 분석, 학업 성취도 예측 모델 사례 고찰",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 14,
        date: "2026-12-08",
        topic: "최종 프로젝트 멘토링 및 고도화",
        summary: "팀/개인 프로젝트 결과물 완성 및 시각화 최종 점검",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 15,
        date: "2026-12-15",
        topic: "기말 프로젝트 성과 발표회",
        summary: "AI 활용 데이터 사이언스 프로젝트 최종 결과 발표 및 종합 평가",
        status: "upcoming",
        files: [],
        links: []
      }
    ]
  },
  {
    id: "math-python",
    name: "머신러닝을위한수학과파이썬기초",
    schedule: "목요일 18:30 - 19:50",
    day: "목",
    time: "18:30 - 19:50",
    room: "교육대학원 세미나실 / 온라인 병행",
    professor: "담당교수",
    email: "contact@dongguk.edu",
    description: "머신러닝 알고리즘의 뼈대가 되는 선형대수학, 미적분학, 확률과 통계의 핵심 수학 원리를 직관적으로 이해하고 파이썬 코드로 구현합니다.",
    color: {
      primary: "from-blue-600 to-indigo-700",
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      accent: "#2563EB",
      border: "border-blue-600"
    },
    notices: [
      {
        id: "n1",
        date: "2026-09-01",
        isPinned: true,
        title: "2026학년도 2학기 개강 안내",
        content: "수학적 수식에 대한 부담 없이 직관적인 시각화와 파이썬 실습 위주로 진행됩니다. 첫 주(9월 10일) 수업을 준비해 주세요."
      },
      {
        id: "n2",
        date: "2026-09-01",
        isPinned: false,
        title: "수업 보조 실습 자료 안내",
        content: "매주 실습용 Jupyter Notebook(.ipynb) 파일과 강의 슬라이드가 본 페이지에 게시됩니다."
      }
    ],
    weeks: [
      {
        week: 1,
        date: "2026-09-10",
        topic: "오리엔테이션: 머신러닝과 수학의 연결고리",
        summary: "왜 머신러닝에 수학이 필요한가? 파이썬 기본 문법 및 과학 계산 생태계(NumPy, SymPy) 소개",
        status: "ready",
        files: [
          {
            name: "01주차_강의안_머신러닝수학개요.pdf",
            path: "./materials/math-python/week01_lecture.pdf",
            size: "2.8 MB",
            type: "pdf"
          },
          {
            name: "01주차_실습_파이썬수학기초.ipynb",
            path: "./materials/math-python/week01_python_math.ipynb",
            size: "45 KB",
            type: "code"
          }
        ],
        links: [
          {
            title: "NumPy 공식 퀵스타트 튜토리얼",
            url: "https://numpy.org/doc/stable/user/quickstart.html",
            type: "docs"
          }
        ]
      },
      {
        week: 2,
        date: "2026-09-17",
        topic: "선형대수학 기초 ① : 벡터(Vector)와 공간",
        summary: "벡터의 기하학적 의미, 벡터 연산, 내적(Dot Product)과 코사인 유사도 구현",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 3,
        date: "2026-09-24",
        topic: "선형대수학 기초 ② : 행렬(Matrix)과 선형변환",
        summary: "행렬 곱셈, 역행렬, 행렬식, 공간 변환의 시각화와 파이썬 구현",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 4,
        date: "2026-10-01",
        topic: "선형대수학 응용 : 주성분 분석(PCA)과 차원 축소",
        summary: "고유값(Eigenvalue)과 고유벡터(Eigenvector)의 의미, 고차원 데이터 축소",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 5,
        date: "2026-10-08",
        topic: "미적분학 기초 ① : 도함수와 순간 변화율",
        summary: "함수의 극한과 미분, 파이썬을 이용한 수치 미분 및 기호 미분(SymPy)",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 6,
        date: "2026-10-15",
        topic: "미적분학 기초 ② : 편미분과 연쇄 법칙(Chain Rule)",
        summary: "다변수 함수의 기울기(Gradient), 신경망 오차역전파(Backpropagation)의 기초 수학",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 7,
        date: "2026-10-22",
        topic: "최적화 기법 : 경사하강법(Gradient Descent)",
        summary: "비용 함수(Cost Function) 최소화, 학습률(Learning Rate)과 최적화 알고리즘 파이썬 구현",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 8,
        date: "2026-10-29",
        topic: "중간고사 / 전반부 정리",
        summary: "선형대수 및 미적분 기초 복습과 프로그래밍 과제 점검",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 9,
        date: "2026-11-05",
        topic: "확률과 통계 ① : 확률 변수와 기본 분포",
        summary: "이산 및 연속 확률변수, 정규분포, 중심극한정리, Scipy 통계 패키지 활용",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 10,
        date: "2026-11-12",
        topic: "확률과 통계 ② : 조건부 확률과 베이즈 정리",
        summary: "사전확률과 사후확률, 나이브 베이즈 분류기(Naive Bayes Classifier) 구현",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 11,
        date: "2026-11-19",
        topic: "최대우도추정(MLE)과 손실 함수",
        summary: "MSE(평균제곱오차), Cross-Entropy 손실 함수의 확률론적 유도 및 해석",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 12,
        date: "2026-11-26",
        topic: "선형 회귀와 로지스틱 회귀의 수학적 구조",
        summary: "행렬 방정식 풀이와 Sigmoid 함수를 이용한 이진 분류 모델 밑바닥부터 구현",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 13,
        date: "2026-12-03",
        topic: "인공신경망의 수학적 모델링",
        summary: "퍼셉트론, 활성화 함수, 순전파 및 역전파 계산 과정 완전 분석",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 14,
        date: "2026-12-10",
        topic: "수학-파이썬 융합 교육 프로그래밍 실습",
        summary: "중고등학교 수학/정보 교과와 연계 가능한 머신러닝 수업 콘텐츠 설계",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 15,
        date: "2026-12-17",
        topic: "기말 프로젝트 발표 및 총평",
        summary: "머신러닝 수학 알고리즘 시각화 및 교육용 모듈 프로젝트 발표",
        status: "upcoming",
        files: [],
        links: []
      }
    ]
  },
  {
    id: "physical-ai",
    name: "피지컬컴퓨팅과AI융합교육실무",
    schedule: "목요일 20:00 - 21:20",
    day: "목",
    time: "20:00 - 21:20",
    room: "AI 메이커스페이스 / 온라인 병행",
    professor: "담당교수",
    email: "contact@dongguk.edu",
    description: "센서와 마이크로컨트롤러(마이크로비트, 아두이노, 라즈베리파이 등)를 활용한 피지컬 컴퓨팅과 인공지능 기술을 융합하여 실제 교육 현장에 적용 가능한 실습형 프로젝트를 수행합니다.",
    color: {
      primary: "from-emerald-600 to-teal-700",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      accent: "#059669",
      border: "border-emerald-600"
    },
    notices: [
      {
        id: "n1",
        date: "2026-09-01",
        isPinned: true,
        title: "2026학년도 2학기 개강 및 교구 안내",
        content: "실습에 필요한 피지컬 컴퓨팅 키트는 수업 시간에 대여 및 배부됩니다. 첫 주(9월 10일) 수업에 참석해 주시기 바랍니다."
      },
      {
        id: "n2",
        date: "2026-09-01",
        isPinned: false,
        title: "프로젝트 회로도 및 소스코드 제공 안내",
        content: "매주 실습에 필요한 회로 구성도, 펌웨어 소스코드, 3D 모델링 파일이 본 사이트에 업로드됩니다."
      }
    ],
    weeks: [
      {
        week: 1,
        date: "2026-09-10",
        topic: "오리엔테이션 및 피지컬 컴퓨팅과 AI 융합 교육 개요",
        summary: "피지컬 컴퓨팅의 교육적 가치, 마이크로컨트롤러 생태계, AI 비전/음성인식 융합 사례 소개",
        status: "ready",
        files: [
          {
            name: "01주차_강의안_피지컬컴퓨팅_AI융합개요.pdf",
            path: "./materials/physical-ai/week01_lecture.pdf",
            size: "3.2 MB",
            type: "pdf"
          },
          {
            name: "01주차_실습키트_목록_및_소프트웨어설치.pdf",
            path: "./materials/physical-ai/week01_kit_guide.pdf",
            size: "1.5 MB",
            type: "pdf"
          }
        ],
        links: [
          {
            title: "Teachable Machine 공식 사이트",
            url: "https://teachablemachine.withgoogle.com/",
            type: "external"
          },
          {
            title: "Micro:bit MakeCode 에디터",
            url: "https://makecode.microbit.org/",
            type: "external"
          }
        ]
      },
      {
        week: 2,
        date: "2026-09-17",
        topic: "마이크로컨트롤러 기초와 디지털/아날로그 센서 제어",
        summary: "입출력 핀 제어, 버튼, LED, 온습도/초음파 센서 데이터 수집 및 인터페이스 구현",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 3,
        date: "2026-09-24",
        topic: "액추에이터 제어 (모터, 서보모터, 디스플레이)",
        summary: "모터 드라이버 제어, OLED 디스플레이 출력 및 피지컬 인터랙션 설계",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 4,
        date: "2026-10-01",
        topic: "시리얼 통신과 파이썬 연동",
        summary: "PySerial을 활용한 PC-마이크로컨트롤러 간 양방향 데이터 통신 프로토콜 설계",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 5,
        date: "2026-10-08",
        topic: "티처블 머신(Teachable Machine) 연동 AI 피지컬 컴퓨팅",
        summary: "이미지/음성/포즈 인식 모델 학습 및 브라우저 기반 하드웨어 제어 프로젝트",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 6,
        date: "2026-10-15",
        topic: "OpenCV와 파이썬 기반 비전 AI 하드웨어 제어",
        summary: "웹캠 얼굴/손 제스처 인식(MediaPipe)과 서보모터 트래킹 장치 제작",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 7,
        date: "2026-10-22",
        topic: "음성인식(STT) 및 생성형 AI 음성 비서 디바이스 구현",
        summary: "OpenAI Whisper/TTS API와 연동된 스마트 스피커 시제품 제작",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 8,
        date: "2026-10-29",
        topic: "중간 프로젝트 기획 및 프로토타입 제작",
        summary: "학교 현장 적용을 위한 AI 융합 교구 및 교재 프로토타입 발표",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 9,
        date: "2026-11-05",
        topic: "TinyML 기초 : 온디바이스 AI(Edge AI) 프로그래밍",
        summary: "저전력 마이크로컨트롤러 상에서 동작하는 경량 머신러닝 모델(Edge Impulse) 학습 및 배포",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 10,
        date: "2026-11-12",
        topic: "IoT와 클라우드 데이터 로깅",
        summary: "MQTT 프로토콜, Thingspeak/Firebase 연동 실시간 환경 모니터링 시스템 구축",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 11,
        date: "2026-11-19",
        topic: "스마트 팜 / 스마트 홈 AI 융합 프로젝트",
        summary: "센서 데이터 기반 자동 환경 제어 및 AI 예측 기반 자동화 실습",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 12,
        date: "2026-11-26",
        topic: "AI 로보틱스 기초 : 자율주행 RC카 구현",
        summary: "라인 트레이싱, 장애물 회피, 비전 기반 차선 및 표지판 인식 자율주행",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 13,
        date: "2026-12-03",
        topic: "교육과정 연계 수업지도안 및 교구 개발 워크숍",
        summary: "2022 개정 교육과정 정보/과학 연계 AI 융합 수업 설계 및 피드백",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 14,
        date: "2026-12-10",
        topic: "최종 프로젝트 멘토링 및 하드웨어 트러블슈팅",
        summary: "작품 완성도 향상, 외형 제작(3D 프린팅/레이저 커팅), 코드 최적화",
        status: "upcoming",
        files: [],
        links: []
      },
      {
        week: 15,
        date: "2026-12-17",
        topic: "최종 AI 융합 프로젝트 시연회 및 평가",
        summary: "개발 교구 및 프로젝트 라이브 데모 시연, 수업 적용 사례 발표",
        status: "upcoming",
        files: [],
        links: []
      }
    ]
  }
];
