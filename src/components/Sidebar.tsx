// src/components/Sidebar.tsx

import Link from "next/link";

// 카테고리 + 소분류 (최소 예시)
const DOCS_MENU = [
  {
    category: "HTML",
    items: [
      { name: "HTML 개요", path: "/docs/html/intro" },
      { name: "Form 요소", path: "/docs/html/form" },
      { name: "시맨틱 태그", path: "/docs/html/semantic" },
    ]
  },
  {
    category: "CSS",
    items: [
      { name: "CSS 선택자", path: "/docs/css/selectors" },
      { name: "Flexbox", path: "/docs/css/flexbox" },
      { name: "Grid", path: "/docs/css/grid" },
    ]
  },
  {
    category: "JavaScript",
    items: [
      { name: "배열 메서드", path: "/docs/javascript/array" },
      { name: "비동기 처리", path: "/docs/javascript/async" },
    ]
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 p-8 pt-36 min-h-screen ">
      <nav>
        {DOCS_MENU.map(({ category, items }) => (
          <div key={category} className="mb-7">
            <h3 className="text-xl font-extrabold mb-2">{category}</h3>
            <ul className="ml-2">
              {items.map(({ name, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="block py-2 pl-3 rounded hover:text-blue-400 transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}