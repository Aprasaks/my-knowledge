// src/app/docs/page.tsx
export default function DocsPage() {
    return (
        <main className="min-h-screen flex ">
        {/* 사이드바 */}
        <aside className="w-64 p-6">
        {/* 사이드바 검색 */}
        <input
            className="w-full px-3 py-2 mb-6 rounded border border-zinc-700 bg-zinc-800 text-base outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="문서 검색..."
        />
        {/* 카테고리/목록 */}
        <h2 className="font-bold text-lg mb-4">Sidebar</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            {/* ... */}
        </ul>
        </aside>
        {/* 메인 콘텐츠 */}
        <section className="flex-1 p-10">
          <h1 className="text-4xl font-bold mb-4">문서 제목</h1>
          <p className=" text-lg">
            여기가 문서 본문 영역입니다.<br />
            (나중에 MDX/Markdown 렌더링 등으로 확장)
          </p>
        </section>
        {/* 오른쪽 목차 */}
        <nav className="w-64 p-6 border-l border-zinc-200">
          <h2 className="font-bold text-lg mb-4">목차(TOD)</h2>
          <ul>
            <li>개요</li>
            <li>예시 코드</li>
            <li>참고 자료</li>
          </ul>
        </nav>
      </main>
    );
  }