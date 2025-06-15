// src/app/page.tsx
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Spline 배경 */}
      <Spline
        scene="https://prod.spline.design/1R-Re4QqI1zUkFxz/scene.splinecode"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      />
      {/* 메인 내용 */}
      <div className="flex gap-8 relative z-10">
        {/* Frontend Developer */}
        <div className="relative w-80 h-14 rounded-full overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#6D28D9,#E11D48,#F59E42,#6D28D9)] 
                          bg-[length:300%_100%] animate-gradient-move" />
          <div className="absolute inset-1 rounded-full bg-transparent flex items-center justify-center">
            <span className="text-white font-bold text-xl tracking-wide">
              Frontend Developer
            </span>
          </div>
        </div>
        {/* Backend Developer */}
        <div className="relative w-80 h-14 rounded-full overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#16A34A,#22D3EE,#A3E635,#16A34A)] 
                          bg-[length:300%_100%] animate-gradient-move" />
          <div className="absolute inset-1 rounded-full bg-transparent flex items-center justify-center">
            <span className="text-white font-bold text-xl tracking-wide">
              Backend Developer
            </span>
          </div>
        </div>
        {/* FullStack Developer */}
        <div className="relative w-80 h-14 rounded-full overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#2563EB,#D946EF,#0EA5E9,#2563EB)] 
                          bg-[length:300%_100%] animate-gradient-move" />
          <div className="absolute inset-1 rounded-full bg-transparent flex items-center justify-center">
            <span className="text-white font-bold text-xl tracking-wide">
              FullStack Developer
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}