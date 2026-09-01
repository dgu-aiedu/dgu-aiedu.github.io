/**
 * 동국대학교 교육대학원 2026 강의자료 포털 애플리케이션
 */

// 현재 선택된 과목 ID 및 필터 상태
let currentCourseId = COURSES_DATA[0].id;
let currentFilter = "all"; // 'all' | 'ready'
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  // 해시 라우팅 처리 (#ai-datascience 등)
  const hash = window.location.hash.replace("#", "");
  const foundCourse = COURSES_DATA.find(c => c.id === hash);
  if (foundCourse) {
    currentCourseId = foundCourse.id;
  }

  // 상단 탭 및 과목 렌더링
  renderCourseTabs();
  renderCurrentCourse();
  setupEventListeners();

  // Lucide 아이콘 초기화
  if (window.lucide) {
    lucide.createIcons();
  }
});

// 해시 변경 감지
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#", "");
  const foundCourse = COURSES_DATA.find(c => c.id === hash);
  if (foundCourse && foundCourse.id !== currentCourseId) {
    switchCourse(foundCourse.id);
  }
});

/**
 * 상단 과목 선택 탭 렌더링
 */
function renderCourseTabs() {
  const tabContainer = document.getElementById("course-tabs");
  if (!tabContainer) return;

  tabContainer.innerHTML = COURSES_DATA.map((course, idx) => {
    const isActive = course.id === currentCourseId;
    return `
      <button 
        onclick="switchCourse('${course.id}')"
        class="flex-1 min-w-[240px] text-left p-4 rounded-xl border transition-all duration-200 ${
          isActive
            ? "bg-white border-orange-500 shadow-md ring-2 ring-orange-500/20"
            : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm"
        }"
      >
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${course.color.badge}">
            <i data-lucide="clock" class="w-3 h-3"></i>
            ${course.schedule}
          </span>
          <span class="text-xs font-medium text-slate-400">과목 0${idx + 1}</span>
        </div>
        <h3 class="font-bold text-slate-900 text-base line-clamp-1 ${isActive ? "text-orange-600" : ""}">
          ${course.name}
        </h3>
        <p class="text-xs text-slate-500 mt-1 line-clamp-1">
          ${course.room}
        </p>
      </button>
    `;
  }).join("");

  if (window.lucide) {
    lucide.createIcons();
  }
}

/**
 * 과목 전환
 */
function switchCourse(courseId) {
  if (currentCourseId === courseId) return;
  currentCourseId = courseId;
  window.location.hash = courseId;
  currentFilter = "all";
  searchQuery = "";
  
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  renderCourseTabs();
  renderCurrentCourse();

  // 상단 스크롤 부드럽게 이동
  const mainContent = document.getElementById("main-course-view");
  if (mainContent) {
    mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * 현재 선택된 과목 전체 렌더링
 */
function renderCurrentCourse() {
  const course = COURSES_DATA.find(c => c.id === currentCourseId);
  if (!course) return;

  // 1. 과목 헤더 정보 렌더링
  renderCourseHeader(course);

  // 2. 공지사항 렌더링
  renderNotices(course);

  // 3. 주차별 강의자료 렌더링
  renderWeeklyMaterials(course);

  if (window.lucide) {
    lucide.createIcons();
  }
}

/**
 * 과목 헤더 렌더링
 */
function renderCourseHeader(course) {
  const headerContainer = document.getElementById("course-header-info");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="px-3 py-1 text-xs font-bold rounded-full ${course.color.badge}">
            2026학년도 2학기
          </span>
          <span class="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
            <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-500"></i>
            ${course.schedule}
          </span>
        </div>
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          ${course.name}
        </h2>
        <p class="text-sm md:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          ${course.description}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row md:flex-col gap-2 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 shrink-0">
        <div class="flex items-center gap-2">
          <i data-lucide="map-pin" class="w-4 h-4 text-orange-500"></i>
          <span><strong>강의실:</strong> ${course.room}</span>
        </div>
        <div class="flex items-center gap-2">
          <i data-lucide="user" class="w-4 h-4 text-orange-500"></i>
          <span><strong>담당:</strong> ${course.professor}</span>
        </div>
        <div class="flex items-center gap-2">
          <i data-lucide="mail" class="w-4 h-4 text-orange-500"></i>
          <span><strong>문의:</strong> ${course.email}</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * 공지사항 섹션 렌더링
 */
function renderNotices(course) {
  const noticesContainer = document.getElementById("course-notices-list");
  if (!noticesContainer) return;

  if (!course.notices || course.notices.length === 0) {
    noticesContainer.innerHTML = `
      <div class="p-6 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
        <i data-lucide="bell-off" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
        <p class="text-sm">등록된 과목 공지사항이 없습니다.</p>
      </div>
    `;
    return;
  }

  noticesContainer.innerHTML = course.notices.map(notice => {
    return `
      <div class="p-4 rounded-xl border ${
        notice.isPinned 
          ? "bg-amber-50/50 border-amber-200 shadow-sm" 
          : "bg-white border-slate-200 shadow-sm"
      }">
        <div class="flex flex-wrap items-center gap-2 mb-1.5">
          ${
            notice.isPinned
              ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-red-500 text-white">
                  <i data-lucide="pin" class="w-3 h-3"></i> 중요 공지
                 </span>`
              : `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600">
                  <i data-lucide="info" class="w-3 h-3"></i> 일반
                 </span>`
          }
          <span class="text-xs text-slate-400">${notice.date}</span>
        </div>
        <h4 class="text-sm md:text-base font-bold text-slate-900 mb-1">
          ${notice.title}
        </h4>
        <p class="text-xs md:text-sm text-slate-600 leading-relaxed">
          ${notice.content}
        </p>
      </div>
    `;
  }).join("");
}

/**
 * 주차별 강의자료 섹션 렌더링
 */
function renderWeeklyMaterials(course) {
  const materialsContainer = document.getElementById("weekly-materials-list");
  if (!materialsContainer) return;

  // 필터 및 검색 적용
  let filteredWeeks = course.weeks.filter(w => {
    // 1. 상태 필터
    if (currentFilter === "ready" && w.status !== "ready") return false;
    
    // 2. 검색어 필터
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchTopic = w.topic.toLowerCase().includes(q);
      const matchSummary = w.summary.toLowerCase().includes(q);
      const matchWeek = `${w.week}주차`.includes(q) || `${w.week}주`.includes(q);
      return matchTopic || matchSummary || matchWeek;
    }
    return true;
  });

  if (filteredWeeks.length === 0) {
    materialsContainer.innerHTML = `
      <div class="p-8 text-center text-slate-400 bg-white rounded-xl border border-slate-200">
        <i data-lucide="search-x" class="w-10 h-10 mx-auto mb-2 text-slate-300"></i>
        <p class="text-sm font-medium text-slate-600">조건에 맞는 강의자료가 없습니다.</p>
        <p class="text-xs text-slate-400 mt-1">검색어를 변경하거나 필터를 초기화해 보세요.</p>
      </div>
    `;
    return;
  }

  materialsContainer.innerHTML = filteredWeeks.map(w => {
    const isReady = w.status === "ready";
    const hasFiles = w.files && w.files.length > 0;
    const hasLinks = w.links && w.links.length > 0;

    return `
      <div class="week-card bg-white rounded-xl border ${isReady ? 'border-slate-300 shadow-sm' : 'border-slate-200/80 bg-slate-50/40'} p-5 transition-all">
        <!-- 주차 상단 헤더 -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <span class="inline-flex items-center justify-center w-12 h-7 rounded-lg text-xs font-bold ${
              isReady 
                ? "bg-orange-600 text-white shadow-sm" 
                : "bg-slate-200 text-slate-600"
            }">
              ${w.week}주차
            </span>
            <span class="text-xs font-medium text-slate-400 flex items-center gap-1">
              <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
              ${w.date}
            </span>
          </div>

          <div>
            ${
              isReady
                ? `<span class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i> 자료 다운로드 가능
                   </span>`
                : `<span class="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                    <i data-lucide="clock-3" class="w-3.5 h-3.5"></i> 강의 전 업로드 예정
                   </span>`
            }
          </div>
        </div>

        <!-- 주차 주제 및 내용 -->
        <div class="my-3">
          <h4 class="text-base font-bold text-slate-900 flex items-center gap-2">
            ${w.topic}
          </h4>
          <p class="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
            ${w.summary}
          </p>
        </div>

        <!-- 첨부파일 및 외부링크 영역 -->
        ${
          isReady && (hasFiles || hasLinks)
            ? `
              <div class="mt-4 pt-3 border-t border-slate-100">
                <p class="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1.5">
                  <i data-lucide="download-cloud" class="w-3.5 h-3.5 text-orange-500"></i>
                  강의자료 & 실습 링크
                </p>
                <div class="flex flex-wrap gap-2.5">
                  ${
                    hasFiles
                      ? w.files.map(file => `
                          <a 
                            href="${file.path}" 
                            download 
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 hover:bg-orange-50 hover:border-orange-200 border border-slate-200 text-xs font-medium text-slate-700 hover:text-orange-600 transition-colors group shadow-2xs"
                          >
                            <i data-lucide="${getFileIcon(file.type)}" class="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform"></i>
                            <span class="truncate max-w-[200px] sm:max-w-[280px]">${file.name}</span>
                            <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 group-hover:bg-orange-200 group-hover:text-orange-800 font-mono">${file.size || 'FILE'}</span>
                          </a>
                        `).join("")
                      : ""
                  }
                  ${
                    hasLinks
                      ? w.links.map(link => `
                          <a 
                            href="${link.url}" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-medium text-blue-700 transition-colors shadow-2xs"
                          >
                            <i data-lucide="${getLinkIcon(link.type)}" class="w-4 h-4 text-blue-600"></i>
                            <span>${link.title}</span>
                            <i data-lucide="external-link" class="w-3 h-3 text-blue-400"></i>
                          </a>
                        `).join("")
                      : ""
                  }
                </div>
              </div>
            `
            : `
              <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span class="flex items-center gap-1.5">
                  <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                  강의 시작 전 첨부파일이 등록됩니다.
                </span>
                <span class="text-[11px] font-mono text-slate-400">Week ${w.week}</span>
              </div>
            `
        }
      </div>
    `;
  }).join("");
}

/**
 * 파일 확장자/타입에 따른 아이콘 이름 반환
 */
function getFileIcon(type) {
  switch (type) {
    case "pdf": return "file-text";
    case "code":
    case "ipynb":
    case "py": return "file-code-2";
    case "zip":
    case "data": return "archive";
    case "ppt":
    case "pptx": return "presentation";
    default: return "file-down";
  }
}

/**
 * 링크 타입에 따른 아이콘 이름 반환
 */
function getLinkIcon(type) {
  switch (type) {
    case "colab": return "play-circle";
    case "docs": return "book-open";
    case "github": return "github";
    default: return "link";
  }
}

/**
 * 검색 및 필터 이벤트 바인딩
 */
function setupEventListeners() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      const course = COURSES_DATA.find(c => c.id === currentCourseId);
      if (course) {
        renderWeeklyMaterials(course);
        if (window.lucide) lucide.createIcons();
      }
    });
  }

  // 필터 버튼 (전체 / 다운로드 가능)
  const filterBtns = document.querySelectorAll(".status-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active-filter", "bg-slate-900", "text-white"));
      filterBtns.forEach(b => b.classList.add("bg-white", "text-slate-600", "border-slate-200"));
      
      btn.classList.remove("bg-white", "text-slate-600", "border-slate-200");
      btn.classList.add("active-filter", "bg-slate-900", "text-white");
      
      currentFilter = btn.dataset.filter;
      const course = COURSES_DATA.find(c => c.id === currentCourseId);
      if (course) {
        renderWeeklyMaterials(course);
        if (window.lucide) lucide.createIcons();
      }
    });
  });
}
