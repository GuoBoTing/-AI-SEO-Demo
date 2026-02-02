
import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Image as ImageIcon,
  LogIn,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// --- Helper Components ---

const Placeholder: React.FC<{ height?: string; label?: string; className?: string }> = ({ height = 'h-64', label = '視覺/配圖', className = '' }) => (
  <div className={`w-full ${height} bg-gray-200/50 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-gray-500 font-medium ${className}`}>
    <div className="text-center px-4">
      <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-30" />
      <span className="text-sm">{label}</span>
    </div>
  </div>
);

const Section: React.FC<{ children: React.ReactNode; id?: string; className?: string; noPadding?: boolean }> = ({ children, id, className = '', noPadding = false }) => (
  <section id={id} className={`${noPadding ? '' : 'py-16 md:py-24'} px-6 md:px-12 lg:px-20 ${className}`}>
    <div className="w-full">
      {children}
    </div>
  </section>
);

// --- Navigation Header ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "關於課程", href: "#intro" },
    { name: "授課講師", href: "#instructor" },
    { name: "課程核心", href: "#modules" },
    { name: "完整課綱", href: "#syllabus" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="w-full px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
          <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center text-white text-xs">AI</div>
          <span>秒站 SEO</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-gray-600">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-900 transition-colors">
              {link.name}
            </a>
          ))}
          <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-all">
            <LogIn className="w-4 h-4" /> 登入會員
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-gray-100 p-6 flex flex-col gap-4 font-bold">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600">
              {link.name}
            </a>
          ))}
          <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-bold">
            <LogIn className="w-4 h-4" /> 登入會員
          </button>
        </nav>
      )}
    </header>
  );
};

// --- Sections ---

const Hero: React.FC = () => (
  <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
    {/* Solid Color Background Image Placeholder */}
    <div className="absolute inset-0 z-0">
      {/* Simulation of a background cover image with a solid color */}
      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
         <div className="absolute inset-0 wireframe-pattern opacity-50" />
      </div>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10" />
    </div>

    <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="text-left space-y-8 py-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight whitespace-nowrap">
            AI SEO 速攻學
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-600 font-medium">
            秒站站長們必學的網站成長啟動器
          </p>
        </div>
        
        <div className="p-8 border-2 border-gray-900 rounded-3xl bg-white/90 backdrop-blur shadow-xl max-w-md">
          <h3 className="text-lg font-bold mb-4">您是秒站會員嗎？登入免費上課</h3>
          <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all text-lg w-full">
            <LogIn className="w-5 h-5" /> 會員登入
          </button>
        </div>
      </div>

      {/* Right Portrait Placeholder */}
      <div className="hidden md:block">
        <Placeholder height="h-[600px] lg:h-[700px]" label="講師人像圖 / 課程情境圖" className="shadow-2xl border-none bg-white/20 backdrop-blur-sm" />
      </div>
    </div>
  </section>
);

const Intro: React.FC = () => (
  <Section id="intro" className="bg-white border-b border-gray-100">
    <div className="space-y-10 text-lg md:text-xl text-gray-800 leading-relaxed text-center w-full">
      <p>秒站協助你快速完成網站建置，但「架好站」只是開始。</p>
      <div className="space-y-6">
        <p>這堂課幫助你掌握網站成長的關鍵：</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 bg-yellow-100 inline-block px-6 py-3 rounded-lg rotate-[-1deg]">
          透過 SEO 經營，讓你的網站能被別人看到！
        </h2>
      </div>
      <div className="pt-6 space-y-4">
        <p>SEO 的教學很多，你當然可以選擇自行探索，但這樣太慢了！</p>
        <p className="font-bold text-2xl md:text-3xl text-gray-900">既然都秒速架站了，更要讓專家直接帶你飛，讓網站真正成為你的事業助力</p>
      </div>
    </div>
  </Section>
);

const InstructorValue: React.FC = () => (
  <Section id="instructor" className="bg-gray-50">
    <div className="space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-black leading-tight">
          開站後的下一個拼圖——<br />
          專為秒站設計的 AI SEO 速攻學
        </h2>
        <p className="text-xl text-gray-600 font-medium">
          AI 時代下的SEO經營策略 + 秒站後台實際演示，讓你能開完站後馬上接手做
        </p>
      </div>

      <div className="p-10 md:p-16 lg:p-24 bg-white border-2 border-gray-200 rounded-[3rem] shadow-sm">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Placeholder height="h-96 md:h-[500px]" label="講師形象照片" className="rounded-2xl" />
          </div>
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              <p>由台灣 SEO 線上課程熱門講師暨秒站執行長 Frank 親自規劃</p>
              <p>不同於過去在各大課程平台的通用 SEO 課程</p>
              <p>這堂專為秒站所設計的 AI SEO 速攻學</p>
              <p>讓你能直接對照後台，一步步建立網站 SEO 基礎</p>
              <p>就算是網站經營新手，也不怕走偏！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Outcomes: React.FC = () => (
  <Section>
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16">完成課程後，你一定會具備</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          "經營網站內容時，能夠用正確的架構撰文",
          "網站已設定成經營 SEO 所需設定，能夠被搜尋引擎正常索引",
          "理解 AI 搜尋環境下，內容與結構如何調整",
          "不自覺間，搞懂網站後台操作"
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-gray-900 mt-0.5 flex-shrink-0" />
            <span className="text-lg font-bold text-gray-800 leading-tight">{item}</span>
          </div>
        ))}
      </div>
      <div className="text-center p-8 md:p-12 bg-gray-900 text-white rounded-[3rem]">
        <p className="text-xl md:text-2xl lg:text-3xl font-black leading-tight">
          你的網站不再只是漂漂亮亮的靜態展示，<br className="hidden md:block" />還要能被你的讀者、客戶搜尋得到！
        </p>
      </div>
    </div>
  </Section>
);

const Modules: React.FC = () => (
  <Section id="modules" className="bg-gray-100">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">課程核心架構</h2>
      <p className="text-gray-500 text-lg lg:text-xl">本課程涵蓋三個核心模組，帶領你完成基礎建設：</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {[
        { title: "模組一｜秒站後台 × SEO 必要設定", desc: "建立網站可被索引與理解的基本條件" },
        { title: "模組二｜內容與搜尋意圖的基礎做法", desc: "理解搜尋需求，避免方向性錯誤" },
        { title: "模組三｜AI 搜尋時代的 SEO 起步邏輯", desc: "因應 AI 搜尋環境的內容與結構觀念" }
      ].map((m, idx) => (
        <div key={idx} className="p-10 md:p-12 border border-gray-200 rounded-[2rem] bg-white shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center font-black mb-6 group-hover:scale-110 transition-transform">0{idx + 1}</div>
          <h3 className="text-xl font-black mb-4 leading-snug text-gray-900">{m.title}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{m.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Syllabus: React.FC = () => {
  const data = [
    {
      title: "一｜秒站重要欄位與基礎設定",
      intro: "建立網站在搜尋系統中被正確理解的基礎設定",
      items: [
        "網站標題與描述的基本設定",
        "首頁文案與服務介紹的搜尋寫作方式",
        "服務／產品頁的重要內容結構",
        "聯絡資訊頁的清楚呈現原則",
        "全站層級 SEO 欄位的設定方式"
      ]
    },
    {
      title: "二｜全站必要行銷與搜尋設定",
      intro: "確保網站在技術層面完成基本的搜尋準備",
      items: [
        "網站是否正式上線並可被索引",
        "Google Search Console（GSC）申請與設定",
        "Google Analytics（GA）基礎安裝",
        "Meta Pixel、Google Tag 的基本串接概念",
        "XML Sitemap 的提交與檢查方式"
      ]
    },
    {
      title: "三｜文章與內容的 SEO 設定",
      intro: "讓內容結構與搜尋需求對齊，避免流量空轉",
      items: [
        "Title、Description 的撰寫原則",
        "H 標籤的正確結構設定",
        "Focus Keyword 的設定與解讀方式",
        "自訂網址的設定觀念",
        "提升閱讀與完讀率的文章排版方式",
        "FAQ 的撰寫與 AI 協助設定方式",
        "標籤的使用原則與常見錯誤",
        "內部連結的配置方式",
        "圖檔 ALT 與搜尋輔助設定"
      ]
    },
    {
      title: "四｜SEO 必備核心概念",
      intro: "建立正確的 SEO 基礎理解，避免錯誤期待",
      items: [
        "關鍵字與搜尋量的基本概念",
        "SEO 內容是否達到及格標準的判斷方式",
        "搜尋意圖的分析與應用",
        "關鍵字地圖的基本介紹",
        "網站經營成效的時間與投入理解"
      ]
    },
    {
      title: "五｜AI 搜尋時代的 SEO 入門觀念",
      intro: "理解 AI 搜尋環境下，內容與結構需調整的方向",
      items: [
        "AI SEO 的核心操作觀念",
        "Query Fan-out 的主題擴展方式",
        "Grounding 與內容引用結構",
        "首發場對搜尋能見度的影響"
      ]
    }
  ];

  return (
    <Section id="syllabus" className="bg-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-black mb-6">完整課綱</h2>
        <p className="text-gray-600 text-lg lg:text-xl w-full leading-relaxed">
          本課程依照實際網站經營流程設計，從「可被搜尋」的基本條件開始，逐步建立必要的 SEO 結構與觀念。
        </p>
      </div>

      <div className="space-y-24">
        {data.map((section, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className={idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
              <h3 className="text-2xl md:text-3xl font-black mb-4 border-b-8 border-gray-900/5 pb-2 inline-block">
                {section.title}
              </h3>
              <p className="text-gray-500 font-bold mb-8 text-lg lg:text-xl">{section.intro}</p>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800 bg-gray-50 p-3 rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
              <Placeholder height="h-80 md:h-[400px]" label="對應章節視覺" className="rounded-3xl bg-gray-100" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 md:p-20 bg-gray-50 border-2 border-gray-900 rounded-[3rem] text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-relaxed">
          課程內容將分段上線，最晚於 <span className="underline decoration-[6px] decoration-yellow-300 underline-offset-4">2026 年 6 月 30 日前</span> 完成。
        </p>
      </div>
    </Section>
  );
};

const CTA: React.FC = () => (
  <Section className="bg-gray-100">
    <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">適合你的下一步</h2>
    
    <div className="grid md:grid-cols-2 gap-10">
      {/* Existing User */}
      <div className="bg-white p-12 lg:p-16 rounded-[3rem] border-2 border-transparent hover:border-gray-900 transition-all shadow-xl text-center space-y-10 group">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-black">你已經是秒站站長？</h3>
          <div className="h-1 w-12 bg-gray-200 mx-auto group-hover:w-24 transition-all duration-500" />
          <p className="text-lg md:text-xl text-gray-500 font-bold flex items-center justify-center gap-2">
            <ArrowRight className="w-5 h-5" /> 打好經營基礎，讓網站被搜尋到
          </p>
        </div>
        <button className="w-full py-5 px-8 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-all text-xl lg:text-2xl flex items-center justify-center gap-2">
          登入會員，免費上課
        </button>
      </div>

      {/* New User */}
      <div className="bg-white p-12 lg:p-16 rounded-[3rem] border-2 border-transparent hover:border-gray-900 transition-all shadow-xl text-center space-y-10 group">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-black">你尚未使用過秒站？</h3>
          <div className="h-1 w-12 bg-gray-200 mx-auto group-hover:w-24 transition-all duration-500" />
          <p className="text-lg md:text-xl text-gray-500 font-bold flex items-center justify-center gap-2">
            <ArrowRight className="w-5 h-5" /> 只要幾秒，輕鬆擁有品牌網站
          </p>
        </div>
        <button className="w-full py-5 px-8 border-2 border-gray-900 text-gray-900 bg-white rounded-2xl font-black hover:bg-gray-50 transition-all text-xl lg:text-2xl flex items-center justify-center gap-2">
          註冊免費試用
        </button>
      </div>
    </div>
  </Section>
);

const Footer: React.FC = () => (
  <footer className="py-16 bg-white text-center border-t border-gray-100">
    <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2 font-black text-xl lg:text-2xl tracking-tighter">
        <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white text-[10px]">AI</div>
        <span>秒站 SEO</span>
      </div>
      <p className="text-gray-400 text-sm md:text-base font-bold">© 2024 AI SEO 速攻學 | 課程銷售頁 Wireframe Designer</p>
      <div className="flex gap-8 text-sm md:text-base font-bold text-gray-400">
        <a href="#" className="hover:text-gray-900 transition-colors">服務條款</a>
        <a href="#" className="hover:text-gray-900 transition-colors">隱私權政策</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  React.useEffect(() => {
    // Basic smooth scroll implementation for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offset = 80; // Header height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = targetElement.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-gray-900 selection:text-white">
      <Header />
      <Hero />
      <Intro />
      <InstructorValue />
      <Outcomes />
      <Modules />
      <Syllabus />
      <CTA />
      <Footer />
    </div>
  );
}
