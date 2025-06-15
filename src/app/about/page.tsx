import Spline from '@splinetool/react-spline/next';
// 아래 라인 추가 (아이콘용)
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <main className="relative min-h-screen flex items-start justify-start">
      {/* Spline 배경 */}
      <Spline
        scene="https://prod.spline.design/tZM9wsV-jktMKeMb/scene.splinecode"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      />
      {/* 왼쪽 중상단 About 텍스트 */}
      <section className="relative z-10 mt-32 ml-16 text-left">
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl text-gray-200 font-semibold max-w-xl drop-shadow leading-relaxed">
            Hello! <br />
            This is an open platform for sharing what I’ve learned<br />
            on my journey to become a developer.
          </p>
          {/* 아이콘 영역 */}
          <div className="flex items-center gap-6 mt-6">
            <a href="https://github.com/Aprasaks" target="_blank" rel="noopener noreferrer">
              <FaGithub size={34} className="text-white hover:text-gray-400 transition" />
            </a>
            <a href="https://instagram.com/aprasaks30" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={34} className="text-white hover:text-pink-400 transition" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}