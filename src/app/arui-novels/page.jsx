"use client";
import React, { useState } from "react";

function MainComponent() {
  const [works] = useState([
    {
      title: "うたかたの色彩",
      url: "https://kakuyomu.jp/works/16818622175678776054",
      description:
        "「その孤独（いろ）に触れるまで、世界はモノクロだった。」\n感情を押し殺し、モノクロームの世界に生きる水無月澪と東雲晶の、繊細な心のひだを描く青春百合グラフィティ。",
      image: "うたかたの色彩.png",
    },
    {
      title: "霞の向こうの、わたし",
      url: "https://kakuyomu.jp/works/16818622175956402503",
      description:
        "「優しさも、温もりも、きっと期間限定。だから今日も『良い子』を演じる。」\n仮面の下の本当の自分を探す、不器用で切ない心の物語。",
      image: "霞の向こう.png",
    },
    {
      title: "梅雨の夜、螢は光る",
      url: "https://kakuyomu.jp/works/16818622175749029469",
      description:
        "「深夜のチャット、優しい幻。失われた繋がりと、現実への小さな一歩。」\nデジタルの海で出会った束の間の繋がりと、そこから踏み出す勇気の物語。",
      image: "螢は光る.png",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#4a4a4a] font-crimson-text">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl text-[#6d6d6d] text-center font-hannari">
            夢泡アーカイブ
          </h1>
          <p className="text-center text-[#888] mt-2">或るいの家</p>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-16">
        <section className="bg-white/60 rounded-lg p-8 shadow-sm mb-8">
          <h2 className="text-2xl mb-4 text-[#5d5d5d]">ごあいさつ</h2>
          <div className="leading-relaxed space-y-4">
            <p>或るいと申します。</p>
            <p>
              日常に潜む「何か」を、物語として掬いあげるように書いています。
            </p>
            <p>私の目に映る世界は、いつも少し曖昧で、不完全です。</p>
            <p>
              笑顔の裏の翳りや、綺麗事の奥にある本音に触れると、時折息苦しくなることもあります。
            </p>
            <p>
              それでも、心の奥で静かに灯る感情の火を、大切にしていたいと思っています。
            </p>
            <p>あなたの中の「或る」感情に、そっと寄り添えますように。</p>
            <p>どうぞ、ごゆっくりお過ごしください。</p>
          </div>
        </section>

        <section className="bg-white/60 rounded-lg p-8 shadow-sm mb-16">
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <a
              href="https://kakuyomu.jp/users/aru_rui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#5ba5a5]/10 rounded-lg hover:bg-[#5ba5a5]/20 transition-colors"
            >
              <i className="fas fa-book text-[#5ba5a5]"></i>
              <span className="text-[#5ba5a5]">カクヨム</span>
            </a>
            <a
              href="https://www.pixiv.net/users/116543496"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#0096fa]/10 rounded-lg hover:bg-[#0096fa]/20 transition-colors"
            >
              <i className="fas fa-paint-brush text-[#0096fa]"></i>
              <span className="text-[#0096fa]">pixiv</span>
            </a>
            <a
              href="https://mypage.syosetu.com/2905538/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#367b9d]/10 rounded-lg hover:bg-[#367b9d]/20 transition-colors"
            >
              <i className="fas fa-feather-alt text-[#367b9d]"></i>
              <span className="text-[#367b9d]">小説家になろう</span>
            </a>
            <a
              href="https://tales.note.com/aru_rui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#41c9b4]/10 rounded-lg hover:bg-[#41c9b4]/20 transition-colors"
            >
              <i className="fas fa-bookmark text-[#41c9b4]"></i>
              <span className="text-[#41c9b4]">tales</span>
            </a>
            <a
              href="https://x.com/_aru_rui_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1da1f2]/10 rounded-lg hover:bg-[#1da1f2]/20 transition-colors"
            >
              <i className="fab fa-x-twitter text-[#1da1f2]"></i>
              <span className="text-[#1da1f2]">X（Twitter）</span>
            </a>
            <a
              href="https://potofu.me/aru-rui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#4a4a4a]/10 rounded-lg hover:bg-[#4a4a4a]/20 transition-colors"
            >
              <img src="https://potofu.me/favicon.ico" alt="Potofu" className="w-4 h-4" />
              <span className="text-[#4a4a4a]">Potofu</span>
            </a>
            <div className="w-full flex justify-center mt-4">
              <div data-ofuse-widget-button href="https://ofuse.me/o?uid=99983" data-ofuse-id="99983" data-ofuse-color="blue-invert" data-ofuse-text=""或 るい" に応援を送る"></div>
            </div>
          </div>
          <p className="text-sm text-[#888] mt-6 text-center">
            メインはカクヨムでの投稿となります。コンテストなどの都合により、プラットフォームを使い分けることがあります。
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <article key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-lg blur-[40px] group-hover:blur-[50px] transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#fffdfa]/30 to-white/20 rounded-lg blur-[25px] group-hover:blur-[35px] transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-bl from-white/30 via-[#fff8f5]/20 to-transparent rounded-lg blur-[20px] group-hover:scale-105 transition-all duration-700" />

              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-6 rounded-lg bg-white/50 backdrop-blur-[2px] hover:bg-white/60 transition-colors duration-700"
              >
                <h3 className="text-xl mb-3 text-[#4d4d4d]">{work.title}</h3>
                <p className="text-sm text-[#666] whitespace-pre-line">
                  {work.description}
                </p>
              </a>
            </article>
          ))}
        </section>
      </main>

      <style jsx global>{`
        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-2px) scale(1.005);
          }
        }

        .group {
          animation: softFloat 8s ease-in-out infinite;
        }

        .group:nth-child(2) {
          animation-delay: -2.7s;
        }

        .group:nth-child(3) {
          animation-delay: -5.3s;
        }

        .font-hannari {
          font-family: "Hannari", serif;
        }
      `}</style>

      <footer className="bg-white/80 py-6 text-center text-[#888]">
        <p>© 2025 或るい</p>
      </footer>

      <script async src="https://ofuse.me/assets/platform/widget.js" charSet="utf-8"></script>
    </div>
  );
}

export default MainComponent;