# my-knowledge

MDN 스타일의 오픈 개발 지식 저장소

---

## 🏆 목표
- 세상의 모든 개발 지식을 정리/검색/학습할 수 있는 오픈 플랫폼 구축

---

## 🛠️ 기술 스택
- **Next.js (TypeScript)**
- **Tailwind CSS**
- **Supabase** (로그인/로그아웃)
- **Prism.js** (코드 하이라이트)
- **Fuse.js** (검색)
- **react-live** (코드 실행기)
- **GitHub Actions** (CI/CD)

--- 

## 🗂️ 폴더 구조
src/
app/          # 페이지/라우팅
components/   # UI 컴포넌트
content/      # MDX/문서 데이터
public/         # 정적 파일, 이미지

---

## 🌲 브랜치 전략
- `main` : 배포/최종 반영
- `dev` : 개발/테스트 통합
- `feature/*` : 기능 개발
- `fix/*` : 버그 수정

---

## 🚩 TODO (1차 구현 목표)
- [ ] **상단바**
  - 카테고리(Docs, Learn, About)
  - 다크모드 토글(theme)
  - 로그인 토글(login: 모달창)
- [ ] **MDX 렌더링**
- [ ] **사이드바**
- [ ] **검색 (Fuse.js)**
- [ ] **코드 하이라이트 (Prism.js)**
- [ ] **코드 실행기 (react-live)**
- [ ] **Footer**
- [ ] **CI/CD (GitHub Actions)**

### 💡 **기타 구현 아이디어/노트**
- 모바일/반응형 지원
- 유저별 즐겨찾기/저장 기능(확장 목표)
- 문서 기여/에디터 오픈(PR 목표)