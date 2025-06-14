import Link from "next/link";

const NAV_MENU = [
  { name: "Docs", link: "/docs" },
  { name: "Learn", link: "/learn" },
  { name: "About", link: "/about" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5">
      {/* 왼쪽: DEMIAN */}
      <div className="flex-1">
        <Link href="/">
          <span className="font-bold text-2xl text-zinc-900 hover:opacity-80 transition">
            DEMIAN
          </span>
        </Link>
      </div>

      {/* 중앙: 카테고리 메뉴 (밑줄 슬라이드 애니메이션) */}
      <div className="flex-1 flex justify-center gap-16">
        {NAV_MENU.map(({ name, link }) => (
          <div key={link} className="group relative px-2 py-1">
            <Link
              href={link}
              className="relative text-zinc-900 text-lg font-semibold"
            >
              {name}
              <span
                className="absolute left-0 -bottom-1 w-full h-[3px] bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* 오른쪽: (향후) theme, 로그인 자리 */}
      <div className="flex-1 flex justify-end gap-4">
        {/* ThemeToggle, LoginIcon 등 향후 추가 */}
      </div>
    </nav>
  );
}