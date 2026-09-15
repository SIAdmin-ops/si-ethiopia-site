import svgPaths from "./svg-phi3k3n75t";
import imgFeaturedIllustration from "./ae4b4a87e8682f101baddd746516f602ee2ab71e.png";
import imgServicesIllustration from "./479757653f6b57c724bbbb1ab01ce578964ebe0d.png";
import imgBgIllustration from "./4bcd8393eccbac1539198b5b8920a222e7d841b4.png";
import imgCaseStudiesIllustration from "./8d0c45aba682ccdfbe89aa7041872bdb90197c7d.png";
import imgImageCard from "./fa2bc319ac4b397f563d736605a84dbf1c9b3506.png";
import imgMarketIllustration from "./4fe7e28c7725f9897c7c177d35c187b569590e22.png";
import imgMarketImage from "./8cbee0b9199460c6fef8ff037f35f74671c3584e.png";
import imgCtaVisual from "./70be4b25dcebfd4846e66006b3560d34dc84f79d.png";
import imgCtaVisual1 from "./b18796c9c69c1d4ef7aa598dd8fbcfe0459f6af0.png";

function ArrowUpRightSquare() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="arrow-up-right-square">
      <div className="relative shrink-0 size-[36px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 36 36" width="36">
          <path d={svgPaths.p29c8800} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function LogomarkContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[36px]" data-name="logomark-container">
      <ArrowUpRightSquare />
    </div>
  );
}

function WordmarkContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-none relative shrink-0 uppercase whitespace-nowrap" data-name="wordmark-container">
      <p className="font-['Outfit:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[20px]">Strategy</p>
      <p className="font-['Outfit:Light',sans-serif] font-light relative shrink-0 text-[#4f46e5] text-[14px]">Innovation</p>
    </div>
  );
}

function LogoLockup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="logo-lockup">
      <LogomarkContainer />
      <WordmarkContainer />
      <div className="bg-[#e2e8f0] h-[28px] relative shrink-0 w-px" data-name="separator" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#64748b] text-[12px] tracking-[1px] uppercase whitespace-nowrap">Capital Markets</p>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="About">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">About</p>
    </div>
  );
}

function Services() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Services">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Services</p>
    </div>
  );
}

function Approach() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Approach">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Approach</p>
    </div>
  );
}

function Focus() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Focus">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Focus</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Contact">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Nav Links">
      <About />
      <Services />
      <Approach />
      <Focus />
      <Contact />
    </div>
  );
}

function LanguageSwitcher() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="Language Switcher">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[12px] whitespace-nowrap">EN</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">|</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">AM</p>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="bg-[#6366f1] content-stretch flex items-start overflow-clip px-[20px] py-[10px] relative rounded-[8px] shadow-[0px_8px_20px_-8px_rgba(79,70,229,0.2)] shrink-0" data-name="CTA Button">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap">Start A Conversation</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0" data-name="Navigation">
      <NavLinks />
      <LanguageSwitcher />
      <CtaButton />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex h-[72px] items-center justify-between px-[80px] relative shrink-0 w-[1440px]" data-name="Header">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <LogoLockup />
      <Navigation />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="shield-check">
          <path d={svgPaths.pabb3e00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]" data-name="icon">
      <ShieldCheck />
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="text">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[12px] text-white">Trusted partner</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.8)]">15+ institutions advised</p>
    </div>
  );
}

function TrustIndicator() {
  return (
    <div className="absolute backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[10px] items-center px-[14px] py-[10px] right-[80px] rounded-[999px] top-[504px]" data-name="trust-indicator">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Icon />
      <Text />
    </div>
  );
}

function StatCard() {
  return (
    <div className="absolute backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] bottom-[132px] content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] right-[-126px] rounded-[16px]" data-name="stat-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.8)] tracking-[0.66px] uppercase whitespace-nowrap">Delivery</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">End-to-end</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] w-[min-content]">Licensing, operations, and strategy - one partner.</p>
    </div>
  );
}

function Eyebrow() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-center px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="eyebrow">
      <div aria-hidden className="absolute border border-[#4f46e5] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">CAPITAL MARKETS · INSTITUTIONS · ADVISORY</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="chip">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Check />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Licensed 2025</p>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="users">
          <path d={svgPaths.p15db900} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="chip">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Users />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">15+ Institutions Advised</p>
    </div>
  );
}

function Layers() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="layers">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_103)" id="layers">
          <path d={svgPaths.p4fb03f0} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_103">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="chip">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Layers />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">End-to-end Delivery</p>
    </div>
  );
}

function ValueProps() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="value-props">
      <Chip />
      <Chip1 />
      <Chip2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_113)" id="Frame">
          <path d="M0 7H14M7 14L14 7L7 0" id="Vector" stroke="#F8FAFC" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_113">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimaryCta() {
  return (
    <div className="bg-[#4f46e5] content-stretch drop-shadow-[0px_10px_12px_rgba(79,70,229,0.2)] flex gap-[10px] items-center px-[28px] py-[14px] relative rounded-[8px] shrink-0" data-name="primary-cta">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[16px] tracking-[0.5px] uppercase whitespace-nowrap">{`Start a conversation `}</p>
      <Frame />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SecondaryCta() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[10px] items-center px-[28px] py-[14px] relative rounded-[8px] shrink-0" data-name="secondary-cta">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white tracking-[0.5px] uppercase whitespace-nowrap">See Our Approach</p>
      <ArrowRight />
    </div>
  );
}

function HeroCtas() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="hero-ctas">
      <PrimaryCta />
      <SecondaryCta />
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[920px]" data-name="hero-copy">
      <Eyebrow />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[0] min-w-full relative shrink-0 text-[72px] text-white tracking-[-1.44px] w-[min-content]">
        <span className="leading-[1.05]">{`Your investment bank. `}</span>
        <span className="leading-[1.05] text-[#4f46e5]">We help you build it.</span>
      </p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[18px] text-[rgba(255,255,255,0.8)] w-[min-content]">{`Building a financial institution in an emerging market is one of the hardest things you can do. Regulatory complexity, talent gaps, unproven technology - we've navigated it all. We help you build your institution, train your team for licensing, and consult on the strategy that makes it sustainable.`}</p>
      <ValueProps />
      <HeroCtas />
    </div>
  );
}

function HeroMain() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="hero-main">
      <HeroCopy />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="hero-section">
      <div className="content-stretch flex flex-col gap-[56px] items-start overflow-clip px-[80px] py-[120px] relative rounded-[inherit] size-full">
        <TrustIndicator />
        <StatCard />
        <HeroMain />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Eyebrow1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Eyebrow">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="white" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[0.96px] uppercase whitespace-nowrap">OUR PURPOSE</p>
    </div>
  );
}

function PurposeHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="purpose-header">
      <Eyebrow1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.15] min-w-full relative shrink-0 text-[44px] text-white tracking-[-0.88px] w-[min-content]">What drives everything we do.</p>
    </div>
  );
}

function Accent() {
  return <div className="bg-[#4f46e5] h-[4px] relative rounded-[999px] shrink-0 w-full" data-name="accent" />;
}

function QuoteMark() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="quote-mark">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] opacity-12 relative shrink-0 text-[28px] text-white whitespace-nowrap">{`"`}</p>
    </div>
  );
}

function LabelRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="label-row">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[30px] text-white tracking-[-0.3px] whitespace-nowrap">Vision</p>
      <QuoteMark />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <LabelRow />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] w-full">An Ethiopia where capital is allocated efficiently to the companies that create jobs, drive growth, and build a transparent economy.</p>
    </div>
  );
}

function VisionCard() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.08)] content-stretch flex flex-[1_0_82px] flex-col gap-[20px] items-start min-w-px p-[40px] relative rounded-[16px] self-stretch" data-name="vision-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_18px_40px_0px_rgba(0,0,0,0.15)]" />
      <Accent />
      <Content />
    </div>
  );
}

function SeparatorLine() {
  return <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] min-h-px relative rounded-[999px] w-[2px]" data-name="separator-line" />;
}

function SeparatorDot() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#4f46e5] left-1/2 rounded-[999px] size-[10px] top-[calc(50%+0.5px)]" data-name="separator-dot">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function CardsSeparator() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0 w-[56px]" data-name="cards-separator">
      <SeparatorLine />
      <SeparatorDot />
    </div>
  );
}

function Accent1() {
  return <div className="bg-[#4f46e5] h-[4px] relative rounded-[999px] shrink-0 w-full" data-name="accent" />;
}

function QuoteMark1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="quote-mark">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] opacity-12 relative shrink-0 text-[28px] text-white whitespace-nowrap">{`"`}</p>
    </div>
  );
}

function LabelRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="label-row">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[30px] text-white tracking-[-0.3px] whitespace-nowrap">Mission</p>
      <QuoteMark1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <LabelRow1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] w-full">To deliver the advisory, training, technology, and consulting that emerging market institutions need to launch, operate, and grow sustainably - while building the broader market alongside them.</p>
    </div>
  );
}

function MissionCard() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.08)] content-stretch flex flex-[1_0_82px] flex-col gap-[20px] items-start min-w-px p-[40px] relative rounded-[16px] self-stretch" data-name="mission-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_18px_40px_0px_rgba(0,0,0,0.15)]" />
      <Accent1 />
      <Content1 />
    </div>
  );
}

function PurposeCards() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="purpose-cards">
      <VisionCard />
      <CardsSeparator />
      <MissionCard />
    </div>
  );
}

function ShieldCheck1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="shield-check">
          <path d={svgPaths.pabb3e00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ValueBadge() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[10px] items-center px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="value-badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <ShieldCheck1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Integrity</p>
    </div>
  );
}

function Award() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="award">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="award">
          <path d={svgPaths.p2cfff930} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ValueBadge1() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[10px] items-center px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="value-badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Award />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Professional Excellence</p>
    </div>
  );
}

function Zap() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="zap">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_73)" id="zap">
          <path d={svgPaths.p35fffc00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_73">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ValueBadge2() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[10px] items-center px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="value-badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Zap />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Innovation</p>
    </div>
  );
}

function Users1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="users">
          <path d={svgPaths.p15db900} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ValueBadge3() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[10px] items-center px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="value-badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Users1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Partnership</p>
    </div>
  );
}

function ClipboardCheck() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="clipboard-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="clipboard-check">
          <path d={svgPaths.pfe85f00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ValueBadge4() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[10px] items-center px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="value-badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <ClipboardCheck />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Accountability</p>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="heart">
          <path d={svgPaths.p3692f680} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ValueBadge5() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[10px] items-center px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="value-badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Heart />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Client Focus</p>
    </div>
  );
}

function BookOpen() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="book-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="book-open">
          <path d={svgPaths.p169b6b80} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ValueBadge6() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[10px] items-center px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="value-badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <BookOpen />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Knowledge Sharing</p>
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trending-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="trending-up">
          <path d={svgPaths.p2d3ae2e0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ValueBadge7() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[10px] items-center px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="value-badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <TrendingUp />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Sustainable Growth</p>
    </div>
  );
}

function ValuesBadges() {
  return (
    <div className="content-center flex flex-wrap gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="values-badges">
      <ValueBadge />
      <ValueBadge1 />
      <ValueBadge2 />
      <ValueBadge3 />
      <ValueBadge4 />
      <ValueBadge5 />
      <ValueBadge6 />
      <ValueBadge7 />
    </div>
  );
}

function ValuesDivider() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[2px] relative rounded-[999px] shrink-0 w-[120px]" data-name="values-divider" />;
}

function ValuesRow() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pt-[8px] relative shrink-0 w-full" data-name="values-row">
      <ValuesBadges />
      <ValuesDivider />
    </div>
  );
}

function VisionMissionSection() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 733' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.18000000715255737'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(25.92 13.194 0 13.194 1180.8 601.06)'><stop stop-color='rgba(255,255,255,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\"), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 733' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.2199999988079071'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(103.68 52.776 0 52.776 259.2 131.94)'><stop stop-color='rgba(255,255,255,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(49, 46, 129) 0%, rgb(79, 70, 229) 100%)" }} data-name="vision-mission-section">
      <div className="content-stretch flex flex-col gap-[56px] items-start overflow-clip px-[80px] py-[120px] relative rounded-[inherit] size-full">
        <PurposeHeader />
        <PurposeCards />
        <ValuesRow />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Eyebrow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Eyebrow">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#4F46E5" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">THREE PILLARS</p>
    </div>
  );
}

function PillarsHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="pillars-header">
      <Eyebrow2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.25] min-w-full relative shrink-0 text-[#0f172a] text-[36px] tracking-[-0.72px] w-[min-content]">Three ways we help you succeed.</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#475569] text-[18px] w-[min-content]">Every engagement starts with a clear understanding of where you need training, consulting, and execution support. We combine these pillars to match your stage, your team, and your market.</p>
    </div>
  );
}

function AccentBar() {
  return <div className="bg-[#4f46e5] h-[4px] relative shrink-0 w-full" data-name="accent-bar" />;
}

function Number() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="number">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#4f46e5] text-[16px] whitespace-nowrap">01</p>
    </div>
  );
}

function TitleBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="title-block">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.2] relative shrink-0 text-[#0f172a] text-[22px] w-full">We Train</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Structured programmes that build real capability - not just certificates.</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="header">
      <Number />
      <TitleBlock />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">Technical Skills</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">{`Capital Markets & Finance`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">Sector Training</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">Soft Skills</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="tags">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function SubServices() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="sub-services">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap">Key sub-services</p>
      <Tags />
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="cta">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[16px] underline whitespace-nowrap">What does your team need to learn? →</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px p-[24px] relative w-full" data-name="content">
      <Header1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[15px] w-full">The talent gap is the biggest barrier to growth in emerging markets. We close it - with structured programmes that build real capability, not just certificates. We develop online training and certification with Continuing Professional Education (CPE).</p>
      <SubServices />
      <Cta />
    </div>
  );
}

function PillarTrain() {
  return (
    <div className="bg-white flex-[1_0_2px] h-full min-w-px relative rounded-[16px]" data-name="pillar-train">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] size-full">
        <AccentBar />
        <Content2 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_6px_16px_-8px_rgba(79,70,229,0.08),0px_10px_24px_-12px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function AccentBar1() {
  return <div className="bg-[#10b981] h-[4px] relative shrink-0 w-full" data-name="accent-bar" />;
}

function Number1() {
  return (
    <div className="bg-[#ccfbf1] content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="number">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#0f766e] text-[16px] whitespace-nowrap">02</p>
    </div>
  );
}

function TitleBlock1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="title-block">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.2] relative shrink-0 text-[#0f172a] text-[22px] w-full">We Consult</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Clarity on regulation, markets, and the decisions that matter.</p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="header">
      <Number1 />
      <TitleBlock1 />
    </div>
  );
}

function Frame5() {
  return <div className="bg-[#10b981] relative rounded-[4px] shrink-0 size-[8px]" data-name="Frame" />;
}

function SubCard() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="sub-card">
      <div aria-hidden className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame5 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">{`Capital Market & Investment Bank`}</p>
    </div>
  );
}

function Frame6() {
  return <div className="bg-[#10b981] relative rounded-[4px] shrink-0 size-[8px]" data-name="Frame" />;
}

function SubCard1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="sub-card">
      <div aria-hidden className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">Technology</p>
    </div>
  );
}

function Frame7() {
  return <div className="bg-[#10b981] relative rounded-[4px] shrink-0 size-[8px]" data-name="Frame" />;
}

function SubCard2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="sub-card">
      <div aria-hidden className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame7 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">Tax</p>
    </div>
  );
}

function SubCards() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="sub-cards">
      <SubCard />
      <SubCard1 />
      <SubCard2 />
    </div>
  );
}

function SubServices1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="sub-services">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap">Key sub-services</p>
      <SubCards />
    </div>
  );
}

function Cta1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="cta">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#10b981] text-[16px] underline whitespace-nowrap">What challenge are you facing? →</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px p-[24px] relative w-full" data-name="content">
      <Header2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[15px] w-full">Regulation is complex, markets are uncharted, and the wrong decision costs years. We bring clarity - telling you what you need to hear, not what you want to hear.</p>
      <SubServices1 />
      <Cta1 />
    </div>
  );
}

function PillarConsult() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_2px] from-[#ccfbf1] h-full min-w-px relative rounded-[16px] to-[#ecfdf5]" data-name="pillar-consult">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] size-full">
        <AccentBar1 />
        <Content3 />
      </div>
      <div aria-hidden className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_6px_16px_-8px_rgba(16,185,129,0.1),0px_10px_24px_-12px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function AccentBar2() {
  return <div className="bg-[#f59e0b] h-[4px] relative shrink-0 w-full" data-name="accent-bar" />;
}

function Number2() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="number">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#92400e] text-[16px] whitespace-nowrap">03</p>
    </div>
  );
}

function TitleBlock2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="title-block">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.2] relative shrink-0 text-[#0f172a] text-[22px] w-full">We Help You Build</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Systems, platforms, and infrastructure that actually work in emerging markets.</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="header">
      <Number2 />
      <TitleBlock2 />
    </div>
  );
}

function Frame8() {
  return <div className="bg-[#f59e0b] relative rounded-[4px] shrink-0 size-[8px]" data-name="Frame" />;
}

function SubCard3() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="sub-card">
      <div aria-hidden className="absolute border border-[#fde68a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame8 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">Institutional Setup</p>
    </div>
  );
}

function Frame9() {
  return <div className="bg-[#f59e0b] relative rounded-[4px] shrink-0 size-[8px]" data-name="Frame" />;
}

function SubCard4() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="sub-card">
      <div aria-hidden className="absolute border border-[#fde68a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame9 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">Technology Platforms</p>
    </div>
  );
}

function Frame10() {
  return <div className="bg-[#f59e0b] relative rounded-[4px] shrink-0 size-[8px]" data-name="Frame" />;
}

function SubCard5() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="sub-card">
      <div aria-hidden className="absolute border border-[#fde68a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame10 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">Technology Division</p>
    </div>
  );
}

function SubCards1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="sub-cards">
      <SubCard3 />
      <SubCard4 />
      <SubCard5 />
    </div>
  );
}

function SubServices2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="sub-services">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap">Key sub-services</p>
      <SubCards1 />
    </div>
  );
}

function Cta2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="cta">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f59e0b] text-[16px] underline whitespace-nowrap">What are you building? →</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px p-[24px] relative w-full" data-name="content">
      <Header3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[15px] w-full">{`Technology is the tool, but knowing the problem is the skill. We understand the operational reality of emerging market institutions - and we build the systems, platforms, and infrastructure that actually work in that context. We understand the power of AI and its risk, and we deliver its advantage where it's appropriate.`}</p>
      <SubServices2 />
      <Cta2 />
    </div>
  );
}

function PillarBuild() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_2px] from-[#fffbeb] h-full min-w-px relative rounded-[16px] to-[#fef3c7]" data-name="pillar-build">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] size-full">
        <AccentBar2 />
        <Content4 />
      </div>
      <div aria-hidden className="absolute border border-[#fde68a] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_6px_16px_-8px_rgba(245,158,11,0.1),0px_10px_24px_-12px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PillarsRow() {
  return (
    <div className="content-stretch flex gap-[24px] h-[889px] items-start relative shrink-0 w-full" data-name="pillars-row">
      <PillarTrain />
      <PillarConsult />
      <PillarBuild />
    </div>
  );
}

function ThreePillarsOverview() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="three-pillars-overview">
      <div className="content-stretch flex flex-col gap-[64px] items-start overflow-clip px-[80px] py-[120px] relative rounded-[inherit] size-full">
        <PillarsHeader />
        <PillarsRow />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Eyebrow3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Eyebrow">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#4F46E5" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">{`TRAINING & CAPACITY BUILDING`}</p>
    </div>
  );
}

function TrainingHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="training-header">
      <Eyebrow3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[#0f172a] text-[36px] tracking-[-0.72px] w-[min-content]">We prepare your team to run the institution.</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#475569] text-[18px] w-[min-content]">Licensing is only the beginning. We deliver structured training programmes covering securities regulation, market operations, compliance frameworks, risk management, and institutional governance. Our approach is hands-on - your team learns by doing, alongside our experts.</p>
    </div>
  );
}

function FeaturedIllustration() {
  return (
    <div className="h-[220px] relative rounded-[12px] shrink-0 w-[360px]" data-name="featured-illustration">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFeaturedIllustration} />
    </div>
  );
}

function GraduationCap() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="graduation-cap">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="graduation-cap">
          <path d={svgPaths.p2c3f6600} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <GraduationCap />
    </div>
  );
}

function FeaturedBadge() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] content-stretch flex items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="featured-badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-white tracking-[0.66px] uppercase whitespace-nowrap">Featured</p>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="header">
      <Frame11 />
      <FeaturedBadge />
    </div>
  );
}

function FeaturedTop() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="featured-top">
      <Header4 />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_80)" id="clock">
          <path d={svgPaths.p3da783c0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_80">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MetaChip() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="meta-chip">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Clock />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Self-paced</p>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_68)" id="check-circle">
          <path d={svgPaths.p124a78c0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_68">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MetaChip1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="meta-chip">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <CheckCircle />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">CPE credits</p>
    </div>
  );
}

function FeaturedMeta() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="featured-meta">
      <MetaChip />
      <MetaChip1 />
    </div>
  );
}

function FeaturedContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="featured-content">
      <FeaturedTop />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[28px] text-white whitespace-nowrap">Licensing Exam Preparation</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Online training and Continuing Professional Education (CPE)</p>
      <FeaturedMeta />
    </div>
  );
}

function FeaturedCard() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex gap-[24px] items-start overflow-clip p-[32px] relative rounded-[16px] shadow-[0px_2px_8px_-4px_rgba(79,70,229,0.08),0px_10px_28px_-10px_rgba(79,70,229,0.1)] shrink-0 w-full" data-name="featured-card">
      <FeaturedIllustration />
      <FeaturedContent />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Explore training areas</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[#475569] text-[14px] w-[min-content]">Browse by category and discover the right programme for your team.</p>
    </div>
  );
}

function Sliders() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="sliders">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="sliders">
          <path d={svgPaths.p3673b280} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FilterChip() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="filter-chip">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Sliders />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Filter</p>
    </div>
  );
}

function CatalogHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="catalog-header">
      <Frame12 />
      <FilterChip />
    </div>
  );
}

function Shield() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield">
          <path d={svgPaths.p6147300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <Shield />
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_58)" id="star">
          <path d={svgPaths.p2145d0f0} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_58">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Star />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] whitespace-nowrap">Popular</p>
    </div>
  );
}

function CardTop() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-top">
      <Frame13 />
      <Badge />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardFooter() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight />
    </div>
  );
}

function TrainingCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_8px_rgba(15,23,42,0.05)] flex flex-[1_0_42px] flex-col gap-[12px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="training-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardTop />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Regulatory Compliance</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] w-full">Deep training on securities law, AML/KYC, and reporting obligations</p>
      <CardFooter />
    </div>
  );
}

function Briefcase() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="briefcase">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="briefcase">
          <path d={svgPaths.pe01e900} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <Briefcase />
    </div>
  );
}

function Sparkles() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="sparkles">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_50)" id="sparkles">
          <path d={svgPaths.p17c90100} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_50">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Sparkles />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] whitespace-nowrap">New</p>
    </div>
  );
}

function CardTop1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-top">
      <Frame14 />
      <Badge1 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardFooter1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight1 />
    </div>
  );
}

function TrainingCard1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_8px_rgba(15,23,42,0.05)] flex flex-[1_0_42px] flex-col gap-[12px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="training-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardTop1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Market Operations</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] w-full">Trading systems, settlement, custody, and back-office operations</p>
      <CardFooter1 />
    </div>
  );
}

function TrainingRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="training-row-1">
      <TrainingCard />
      <TrainingCard1 />
    </div>
  );
}

function AlertTriangle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="alert-triangle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="alert-triangle">
          <path d={svgPaths.p29d83900} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <AlertTriangle />
    </div>
  );
}

function ShieldCheck2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="shield-check">
          <path d={svgPaths.p35cb9570} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <ShieldCheck2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] whitespace-nowrap">Core</p>
    </div>
  );
}

function CardTop2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-top">
      <Frame15 />
      <Badge2 />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardFooter2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight2 />
    </div>
  );
}

function TrainingCard2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_8px_rgba(15,23,42,0.05)] flex flex-[1_0_42px] flex-col gap-[12px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="training-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardTop2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Risk Management</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] w-full">Enterprise risk frameworks, market risk, credit risk, and operational risk</p>
      <CardFooter2 />
    </div>
  );
}

function Users2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="users">
          <path d={svgPaths.p1165c980} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <Users2 />
    </div>
  );
}

function Users3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_99)" id="users">
          <path d={svgPaths.p2277bd00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_99">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Users3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] whitespace-nowrap">Governance</p>
    </div>
  );
}

function CardTop3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-top">
      <Frame16 />
      <Badge3 />
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardFooter3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight3 />
    </div>
  );
}

function TrainingCard3() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_8px_rgba(15,23,42,0.05)] flex flex-[1_0_42px] flex-col gap-[12px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="training-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardTop3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Institutional Governance</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] w-full">Board structures, committee frameworks, and oversight protocols</p>
      <CardFooter3 />
    </div>
  );
}

function Row2Bg() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-[1_0_0] gap-[24px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="row-2-bg">
      <TrainingCard2 />
      <TrainingCard3 />
    </div>
  );
}

function TrainingRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="training-row-2">
      <Row2Bg />
    </div>
  );
}

function Cpu() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cpu">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_111)" id="cpu">
          <path d={svgPaths.p1ab27600} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_111">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <Cpu />
    </div>
  );
}

function Cpu1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="cpu">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_60)" id="cpu">
          <path d={svgPaths.p188e8800} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_60">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Cpu1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] whitespace-nowrap">Tech</p>
    </div>
  );
}

function CardTop4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-top">
      <Frame17 />
      <Badge4 />
    </div>
  );
}

function ChevronRight4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardFooter4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight4 />
    </div>
  );
}

function TrainingCard4() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_8px_rgba(15,23,42,0.05)] flex flex-[1_0_42px] flex-col gap-[12px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="training-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardTop4 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Technology Systems</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] w-full">Training on core banking, trading platforms, and data infrastructure</p>
      <CardFooter4 />
    </div>
  );
}

function Users4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="users">
          <path d={svgPaths.p1165c980} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <Users4 />
    </div>
  );
}

function Users5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_99)" id="users">
          <path d={svgPaths.p2277bd00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_99">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Users5 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] whitespace-nowrap">Governance</p>
    </div>
  );
}

function CardTop5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-top">
      <Frame18 />
      <Badge5 />
    </div>
  );
}

function ChevronRight5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardFooter5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight5 />
    </div>
  );
}

function TrainingCard5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_8px_rgba(15,23,42,0.05)] flex flex-[1_0_42px] flex-col gap-[12px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="training-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardTop5 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Institutional Governance</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#475569] text-[14px] w-full">Board structures, committee frameworks, and oversight protocols</p>
      <CardFooter5 />
    </div>
  );
}

function TrainingRow2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="training-row-3">
      <TrainingCard4 />
      <TrainingCard5 />
    </div>
  );
}

function CtaText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="cta-text">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Tell us about your team</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[#475569] text-[14px] w-[min-content]">{`We'll design a custom programme that fits your needs and timeline.`}</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CtaButton1() {
  return (
    <div className="bg-[#4f46e5] content-stretch drop-shadow-[0px_10px_11px_rgba(79,70,229,0.2)] flex gap-[10px] items-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="cta-button">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Get a programme plan</p>
      <ArrowRight1 />
    </div>
  );
}

function TrainingCta() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_8px_10px_rgba(15,23,42,0.05)] flex items-center justify-between p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="training-cta">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CtaText />
      <CtaButton1 />
    </div>
  );
}

function TrainingSection() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[56px] items-start overflow-clip px-[80px] py-[96px] relative shrink-0 w-full" data-name="training-section">
      <TrainingHeader />
      <FeaturedCard />
      <CatalogHeader />
      <TrainingRow />
      <TrainingRow1 />
      <TrainingRow2 />
      <TrainingCta />
    </div>
  );
}

function Eyebrow4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Eyebrow">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#4F46E5" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#93c5fd] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">STRATEGIC CONSULTING</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="section-header">
      <Eyebrow4 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.15] min-w-full relative shrink-0 text-[#f8fafc] text-[44px] tracking-[-0.88px] w-[min-content]">We navigate the complexity so you can focus on the vision.</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#cbd5e1] text-[18px] w-[min-content]">Comprehensive regulatory and risk advisory services to navigate complex compliance landscapes.</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#4f46e5] items-center justify-center relative rounded-[10px] shrink-0 size-[32px] to-[#6366f1]" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">01</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left">
      <Badge6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">{`Licence Approval Requirements & Impact - ECMA`}</p>
    </div>
  );
}

function ChevronRight6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left />
      <ChevronRight6 />
    </div>
  );
}

function ConsultingCard() {
  return (
    <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_6px_8px_rgba(0,0,0,0.2),0px_18px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[14px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[416px]" data-name="consulting-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Mapping requirements, submission readiness, and impact assessment for ECMA licensing.</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#10b981] items-center justify-center relative rounded-[10px] shrink-0 size-[32px] to-[#14b8a6]" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">02</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left">
      <Badge7 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">{`Licence Approval Requirements & Impact - ESX`}</p>
    </div>
  );
}

function ChevronRight7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left1 />
      <ChevronRight7 />
    </div>
  );
}

function ConsultingCard1() {
  return (
    <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_6px_8px_rgba(0,0,0,0.2),0px_18px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[14px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[416px]" data-name="consulting-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Requirements mapping and submission planning tailored to ESX licensing and operational readiness.</p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#f59e0b] items-center justify-center relative rounded-[10px] shrink-0 size-[32px] to-[#f97316]" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">03</p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left">
      <Badge8 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">{`Membership & Requirements - CSD (NBE)`}</p>
    </div>
  );
}

function ChevronRight8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left2 />
      <ChevronRight8 />
    </div>
  );
}

function ConsultingCard2() {
  return (
    <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_6px_8px_rgba(0,0,0,0.2),0px_18px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[14px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[416px]" data-name="consulting-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">CSD membership requirements, onboarding, and operational setup for NBE compliance.</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-1">
      <ConsultingCard />
      <ConsultingCard1 />
      <ConsultingCard2 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#6366f1] items-center justify-center relative rounded-[10px] shrink-0 size-[32px] to-[#8b5cf6]" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">04</p>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left">
      <Badge9 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Risk Management</p>
    </div>
  );
}

function ChevronRight9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left3 />
      <ChevronRight9 />
    </div>
  );
}

function ConsultingCard3() {
  return (
    <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_6px_8px_rgba(0,0,0,0.2),0px_18px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[14px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[416px]" data-name="consulting-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Frameworks, risk taxonomy, monitoring, and reporting aligned to regulatory expectations.</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#06b6d4] items-center justify-center relative rounded-[10px] shrink-0 size-[32px] to-[#0ea5e9]" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">05</p>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left">
      <Badge10 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Liquidity / Collateral / Capital Requirement Management</p>
    </div>
  );
}

function ChevronRight10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left4 />
      <ChevronRight10 />
    </div>
  );
}

function ConsultingCard4() {
  return (
    <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_6px_8px_rgba(0,0,0,0.2),0px_18px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[14px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[416px]" data-name="consulting-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader4 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Liquidity buffers, collateral optimization, and capital planning to meet regulatory thresholds.</p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#f97316] items-center justify-center relative rounded-[10px] shrink-0 size-[32px] to-[#f59e0b]" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">06</p>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left">
      <Badge11 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Operational Risk Management</p>
    </div>
  );
}

function ChevronRight11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left5 />
      <ChevronRight11 />
    </div>
  );
}

function ConsultingCard5() {
  return (
    <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_6px_8px_rgba(0,0,0,0.2),0px_18px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[14px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[416px]" data-name="consulting-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader5 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Controls, incident response, vendor risk, and operational resilience programs.</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-2">
      <ConsultingCard3 />
      <ConsultingCard4 />
      <ConsultingCard5 />
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#8b5cf6] items-center justify-center relative rounded-[10px] shrink-0 size-[32px] to-[#ec4899]" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">07</p>
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left">
      <Badge12 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Internal Controls / Audit</p>
    </div>
  );
}

function ChevronRight12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left6 />
      <ChevronRight12 />
    </div>
  );
}

function ConsultingCard6() {
  return (
    <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_6px_8px_rgba(0,0,0,0.2),0px_18px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[14px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[416px]" data-name="consulting-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader6 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Control design, testing, audit readiness, and remediation plans for regulatory confidence.</p>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#0ea5e9] items-center justify-center relative rounded-[10px] shrink-0 size-[32px] to-[#06b6d4]" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">08</p>
    </div>
  );
}

function Left7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left">
      <Badge13 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">{`Credit & Counterparty Risk`}</p>
    </div>
  );
}

function ChevronRight13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left7 />
      <ChevronRight13 />
    </div>
  );
}

function ConsultingCard7() {
  return (
    <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_6px_8px_rgba(0,0,0,0.2),0px_18px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[14px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[416px]" data-name="consulting-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader7 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Counterparty assessment, credit limits, and exposure monitoring frameworks.</p>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#14b8a6] items-center justify-center relative rounded-[10px] shrink-0 size-[32px] to-[#10b981]" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">09</p>
    </div>
  );
}

function Left8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left">
      <Badge14 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Effective Corporate Governance</p>
    </div>
  );
}

function ChevronRight14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#93C5FD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left8 />
      <ChevronRight14 />
    </div>
  );
}

function ConsultingCard8() {
  return (
    <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_6px_8px_rgba(0,0,0,0.2),0px_18px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[14px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[416px]" data-name="consulting-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader8 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Board oversight, policies, roles, and accountability structures for regulated entities.</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-3">
      <ConsultingCard6 />
      <ConsultingCard7 />
      <ConsultingCard8 />
    </div>
  );
}

function ConsultingGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="consulting-grid">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function ConsultingCta() {
  return (
    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full" data-name="consulting-cta">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#93c5fd] text-[16px] underline whitespace-nowrap">What decision are you trying to make? Let us help you think it through →</p>
    </div>
  );
}

function ConsultingSection() {
  return (
    <div className="bg-gradient-to-r from-[#0b1020] relative shrink-0 to-[#0f172a] w-full" data-name="consulting-section">
      <div className="content-stretch flex flex-col gap-[56px] items-start overflow-clip px-[80px] py-[96px] relative rounded-[inherit] size-full">
        <div className="absolute right-[-120px] size-[360px] top-[-120px]" data-name="bg-glow-1">
          <div className="absolute inset-[-33.33%]">
            <svg className="block size-full" fill="none" height="600" preserveAspectRatio="none" viewBox="0 0 600 600" width="600">
              <g filter="url(#filter0_f_0_121)" id="bg-glow-1" opacity="0.08">
                <circle cx="300" cy="300" fill="#4F46E5" r="180" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="600" id="filter0_f_0_121" width="600" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_0_121" stdDeviation="60" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[-140px] left-[-140px] size-[320px]" data-name="bg-glow-2">
          <div className="absolute inset-[-34.38%]">
            <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
              <g filter="url(#filter0_f_0_45)" id="bg-glow-2" opacity="0.06">
                <circle cx="270" cy="270" fill="#10B981" r="160" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="filter0_f_0_45" width="540" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_0_45" stdDeviation="55" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <SectionHeader />
        <ConsultingGrid />
        <ConsultingCta />
      </div>
      <div aria-hidden className="absolute border-[#1e293b] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Eyebrow5() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Eyebrow">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#4F46E5" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">WE HELP YOU BUILD</p>
    </div>
  );
}

function BuildingHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="building-header">
      <Eyebrow5 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.15] min-w-full relative shrink-0 text-[#0f172a] text-[44px] tracking-[-0.88px] w-[min-content]">From blank page to operating institution.</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#475569] text-[18px] w-[min-content]">This is what makes us different. We do not just advise - we execute. We work as your embedded team through every phase: feasibility, licensing, technology build, operational setup, talent recruitment, and programme management. When we leave, you have a fully functioning institution and a team that knows how to run it.</p>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="search">
          <path d={svgPaths.p3222100} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Search />
    </div>
  );
}

function Meta() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold gap-[6px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="meta">
      <p className="relative shrink-0 text-[#4f46e5] text-[14px]">01</p>
      <p className="relative shrink-0 text-[#0f172a] text-[18px]">Assess</p>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="top">
      <Icon1 />
      <Meta />
    </div>
  );
}

function ChevronRight15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cta3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0" data-name="cta">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight15 />
    </div>
  );
}

function Step() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.05)] flex flex-[1_0_50px] flex-col from-white gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px] to-[#eef2ff]" data-name="step-01">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Top />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[#475569] text-[13px] w-[min-content]">Feasibility study, market demand analysis, go/no-go decision</p>
      <Cta3 />
    </div>
  );
}

function Connector() {
  return (
    <div className="h-px relative shrink-0 w-[56px]" data-name="connector-1">
      <div className="absolute inset-[0_0_-2700%_0]">
        <svg className="block size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 56 28" width="56">
          <g id="connector-1">
            <line id="line" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="2" x1="1" x2="55" y1="23" y2="23" />
            <circle cx="5" cy="23" fill="#4F46E5" id="dot" r="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="layout">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="layout">
          <path d={svgPaths.p2196f500} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#e0e7ff] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Layout />
    </div>
  );
}

function Meta1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold gap-[6px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="meta">
      <p className="relative shrink-0 text-[#4f46e5] text-[14px]">02</p>
      <p className="relative shrink-0 text-[#0f172a] text-[18px]">Design</p>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="top">
      <Icon2 />
      <Meta1 />
    </div>
  );
}

function ChevronRight16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cta4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0" data-name="cta">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight16 />
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.05)] flex flex-[1_0_50px] flex-col from-white gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px] to-[#e0e7ff]" data-name="step-02">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Top1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[#475569] text-[13px] w-[min-content]">Business model, product strategy, capital structure, governance framework</p>
      <Cta4 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-1">
      <Step />
      <Connector />
      <Step1 />
    </div>
  );
}

function Connector1() {
  return (
    <div className="h-px relative shrink-0 w-[56px]" data-name="connector-2">
      <div className="absolute inset-[0_0_-2700%_0]">
        <svg className="block size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 56 28" width="56">
          <g id="connector-1">
            <line id="line" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="2" x1="1" x2="55" y1="23" y2="23" />
            <circle cx="5" cy="23" fill="#4F46E5" id="dot" r="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BadgeCheck() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="badge-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g clipPath="url(#clip0_0_32)" id="badge-check">
          <path d={svgPaths.p32e5fc00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_32">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <BadgeCheck />
    </div>
  );
}

function Meta2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold gap-[6px] items-start leading-[normal] min-w-px relative text-white whitespace-nowrap" data-name="meta">
      <p className="relative shrink-0 text-[14px]">03</p>
      <p className="relative shrink-0 text-[18px]">License</p>
    </div>
  );
}

function Top2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="top">
      <Icon3 />
      <Meta2 />
    </div>
  );
}

function ChevronRight17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cta5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0" data-name="cta">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight17 />
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_50px] flex-col from-[#312e81] gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px] to-[#4f46e5]" data-name="step-03">
      <div aria-hidden className="absolute border border-[#4f46e5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(0,0,0,0.08),0px_18px_40px_0px_rgba(79,70,229,0.2)]" />
      <Top2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[#e2e8f0] text-[13px] w-[min-content]">Regulatory submissions, ECMA engagement, licensing milestones</p>
      <Cta5 />
    </div>
  );
}

function Connector2() {
  return (
    <div className="h-px relative shrink-0 w-[56px]" data-name="connector-3">
      <div className="absolute inset-[0_0_-2700%_0]">
        <svg className="block size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 56 28" width="56">
          <g id="connector-1">
            <line id="line" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="2" x1="1" x2="55" y1="23" y2="23" />
            <circle cx="5" cy="23" fill="#4F46E5" id="dot" r="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hammer() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="hammer">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="hammer">
          <path d={svgPaths.p33192740} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#ffe4e6] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Hammer />
    </div>
  );
}

function Meta3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold gap-[6px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="meta">
      <p className="relative shrink-0 text-[#4f46e5] text-[14px]">04</p>
      <p className="relative shrink-0 text-[#0f172a] text-[18px]">Build</p>
    </div>
  );
}

function Top3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="top">
      <Icon4 />
      <Meta3 />
    </div>
  );
}

function ChevronRight18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cta6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0" data-name="cta">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight18 />
    </div>
  );
}

function Step3() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.05)] flex flex-[1_0_50px] flex-col from-white gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px] to-[#ffe4e6]" data-name="step-04">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Top3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[#475569] text-[13px] w-[min-content]">Technology platform, operations setup, team recruitment and training</p>
      <Cta6 />
    </div>
  );
}

function Connector3() {
  return (
    <div className="h-px relative shrink-0 w-[56px]" data-name="connector-4">
      <div className="absolute inset-[0_0_-2700%_0]">
        <svg className="block size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 56 28" width="56">
          <g id="connector-1">
            <line id="line" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="2" x1="1" x2="55" y1="23" y2="23" />
            <circle cx="5" cy="23" fill="#4F46E5" id="dot" r="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Rocket() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="rocket">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="rocket">
          <path d={svgPaths.p2c50e700} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#ffedd5] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Rocket />
    </div>
  );
}

function Meta4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold gap-[6px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="meta">
      <p className="relative shrink-0 text-[#4f46e5] text-[14px]">05</p>
      <p className="relative shrink-0 text-[#0f172a] text-[18px]">Launch</p>
    </div>
  );
}

function Top4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="top">
      <Icon5 />
      <Meta4 />
    </div>
  );
}

function ChevronRight19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cta7() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0" data-name="cta">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[13px] whitespace-nowrap">View details</p>
      <ChevronRight19 />
    </div>
  );
}

function Step4() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.05)] flex flex-[1_0_50px] flex-col from-white gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px] to-[#ffedd5]" data-name="step-05">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Top4 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[#475569] text-[13px] w-[min-content]">Go-live preparation, market entry, first day of trading</p>
      <Cta7 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-2">
      <Connector1 />
      <Step2 />
      <Connector2 />
      <Step3 />
      <Connector3 />
      <Step4 />
    </div>
  );
}

function BuildProcess() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[8px] relative shrink-0 w-full" data-name="build-process">
      <Row3 />
      <Row4 />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CtaButton2() {
  return (
    <div className="bg-[#4f46e5] content-stretch drop-shadow-[0px_12px_14px_rgba(79,70,229,0.2)] flex gap-[10px] items-center px-[18px] py-[14px] relative rounded-[12px] shrink-0" data-name="cta-button">
      <ArrowRight2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Identify your starting point</p>
    </div>
  );
}

function BuildPrompt() {
  return (
    <div className="content-stretch flex items-center pt-[8px] relative shrink-0 w-full" data-name="build-prompt">
      <CtaButton2 />
    </div>
  );
}

function BuildingSection() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(79, 70, 229, 0.12) 0%, rgba(79, 70, 229, 0.12) 100%), linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%)" }} data-name="building-section">
      <div className="content-stretch flex flex-col gap-[56px] items-start overflow-clip px-[80px] py-[96px] relative rounded-[inherit] size-full">
        <div className="absolute right-[-120px] size-[420px] top-[-140px]" data-name="bg-illustration-1">
          <div className="absolute inset-[-19.05%]">
            <svg className="block size-full" fill="none" height="580" preserveAspectRatio="none" viewBox="0 0 580 580" width="580">
              <g filter="url(#filter0_f_0_72)" id="bg-illustration-1">
                <circle cx="290" cy="290" fill="#4F46E5" fillOpacity="0.0784314" r="210" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="580" id="filter0_f_0_72" width="580" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_0_72" stdDeviation="40" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[-160px] left-[-120px] size-[360px]" data-name="bg-illustration-2">
          <div className="absolute inset-[-19.44%]">
            <svg className="block size-full" fill="none" height="500" preserveAspectRatio="none" viewBox="0 0 500 500" width="500">
              <g filter="url(#filter0_f_0_39)" id="bg-illustration-2">
                <circle cx="250" cy="250" fill="#4F46E5" fillOpacity="0.0509804" r="180" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="500" id="filter0_f_0_39" width="500" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_0_39" stdDeviation="35" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <BuildingHeader />
        <BuildProcess />
        <BuildPrompt />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ServicesIllustration() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[800px] left-1/2 opacity-8 top-[calc(50%-0.5px)] w-[1400px]" data-name="services-illustration">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgServicesIllustration} />
    </div>
  );
}

function BgIllustration() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1200px] left-1/2 opacity-6 top-1/2 w-[1600px]" data-name="bg-illustration">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBgIllustration} />
    </div>
  );
}

function Eyebrow6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Eyebrow">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#4F46E5" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">SERVICES</p>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="section-header">
      <Eyebrow6 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.25] min-w-full relative shrink-0 text-[#0f172a] text-[36px] tracking-[-0.72px] w-[min-content]">Choose the support you need.</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#475569] text-[18px] w-[min-content]">Advisory. Consulting. Training. Technology. Every institution is different - pick the capabilities that match where you are in your journey.</p>
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section-header">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">Our Services</p>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.15] min-w-full relative shrink-0 text-[40px] text-white w-[min-content]">Everything you need to launch, grow, and stay compliant.</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#cbd5e1] text-[16px] w-[min-content]">{`From advisory and consulting to training and technology a comprehensive suite of capabilities tailored to your institution's journey.`}</p>
    </div>
  );
}

function ServicesPrompt() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="services-prompt">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[16px] underline whitespace-nowrap">Not sure which service fits your venture? A 15-minute call will clarify everything. →</p>
    </div>
  );
}

function ChartBar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chart-bar">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chart-bar">
          <path d={svgPaths.p2df0d300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <ChartBar />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Advisory</p>
    </div>
  );
}

function CardHeader9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg />
      <Tag />
    </div>
  );
}

function ServiceCard() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader9 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">{`Feasibility & Demand Assessment`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Deep quantitative assessment of market appetite, institutional constraints, and transactional demand.</p>
    </div>
  );
}

function Scale() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="scale">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="scale">
          <path d={svgPaths.p37806800} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg1() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Scale />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Strategy</p>
    </div>
  );
}

function CardHeader10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg1 />
      <Tag1 />
    </div>
  );
}

function ServiceCard1() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader10 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">{`Business Model & Capital Structure`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Structuring capital requirements, balance sheet models, and robust institutional pricing models.</p>
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="file-text">
          <path d={svgPaths.p27efcb00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg2() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <FileText />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Licensing</p>
    </div>
  );
}

function CardHeader11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg2 />
      <Tag2 />
    </div>
  );
}

function ServiceCard2() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader11 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">{`Regulatory Licensing & Compliance`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">End-to-end management of regulatory applications, ECMA filings, and policy alignment.</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-1">
      <ServiceCard />
      <ServiceCard1 />
      <ServiceCard2 />
    </div>
  );
}

function FileText1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="file-text">
          <path d={svgPaths.p27efcb00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg3() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <FileText1 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Licensing</p>
    </div>
  );
}

function CardHeader12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg3 />
      <Tag3 />
    </div>
  );
}

function ServiceCard3() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader12 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Licence approval requirements and impact ECMA</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Mapping approval conditions, readiness checks, and operational implications for ECMA compliance.</p>
    </div>
  );
}

function FileText2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="file-text">
          <path d={svgPaths.p27efcb00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg4() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <FileText2 />
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Licensing</p>
    </div>
  );
}

function CardHeader13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg4 />
      <Tag4 />
    </div>
  );
}

function ServiceCard4() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader13 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Licence approval requirement and impact ESX</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Aligning approval requirements with ESX rules, membership, and ongoing operational obligations.</p>
    </div>
  );
}

function FileText3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="file-text">
          <path d={svgPaths.p27efcb00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg5() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <FileText3 />
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Licensing</p>
    </div>
  );
}

function CardHeader14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg5 />
      <Tag5 />
    </div>
  );
}

function ServiceCard5() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader14 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Membership and requirements CSD (NBE)</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">CSD membership requirements, settlement readiness, and operational integration with NBE frameworks.</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-2">
      <ServiceCard3 />
      <ServiceCard4 />
      <ServiceCard5 />
    </div>
  );
}

function Shield1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield">
          <path d={svgPaths.p6147300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg6() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Shield1 />
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Governance</p>
    </div>
  );
}

function CardHeader15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg6 />
      <Tag6 />
    </div>
  );
}

function ServiceCard6() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader15 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">{`Governance & Risk Frameworks`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Designing board charters, operational risk manuals, and comprehensive compliance controls.</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="settings">
          <path d={svgPaths.pc965540} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg7() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Settings />
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Operations</p>
    </div>
  );
}

function CardHeader16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg7 />
      <Tag7 />
    </div>
  );
}

function ServiceCard7() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader16 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Programme Management</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Rigorous execution templates from feasibility sign-off down to first-day transaction settlement.</p>
    </div>
  );
}

function GraduationCap1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="graduation-cap">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="graduation-cap">
          <path d={svgPaths.p2c3f6600} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg8() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <GraduationCap1 />
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Training</p>
    </div>
  );
}

function CardHeader17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg8 />
      <Tag8 />
    </div>
  );
}

function ServiceCard8() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader17 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">{`Knowledge Transfer & Handover`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Building customized client academies, handbooks, and operational playbooks for self-sufficiency.</p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-3">
      <ServiceCard6 />
      <ServiceCard7 />
      <ServiceCard8 />
    </div>
  );
}

function Shield2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield">
          <path d={svgPaths.p6147300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg9() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Shield2 />
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Risk</p>
    </div>
  );
}

function CardHeader18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg9 />
      <Tag9 />
    </div>
  );
}

function ServiceCard9() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader18 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Risk Management</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Integrated risk frameworks covering operational, credit, counterparty, and liquidity/capital requirements.</p>
    </div>
  );
}

function Scale1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="scale">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="scale">
          <path d={svgPaths.p37806800} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg10() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Scale1 />
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Capital</p>
    </div>
  );
}

function CardHeader19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg10 />
      <Tag10 />
    </div>
  );
}

function ServiceCard10() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader19 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Liquidity / Collateral / Capital Requirement Management</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Monitoring and managing liquidity buffers, collateral pools, and capital adequacy requirements.</p>
    </div>
  );
}

function Settings1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="settings">
          <path d={svgPaths.pc965540} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg11() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Settings1 />
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Operations</p>
    </div>
  );
}

function CardHeader20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg11 />
      <Tag11 />
    </div>
  );
}

function ServiceCard11() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader20 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Operational Risk Management</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Identifying, mitigating, and monitoring operational risks across people, process, and technology.</p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-4">
      <ServiceCard9 />
      <ServiceCard10 />
      <ServiceCard11 />
    </div>
  );
}

function FileText4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="file-text">
          <path d={svgPaths.p27efcb00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg12() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <FileText4 />
    </div>
  );
}

function Tag12() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Compliance</p>
    </div>
  );
}

function CardHeader21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg12 />
      <Tag12 />
    </div>
  );
}

function ServiceCard12() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader21 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Internal Controls / Audit</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Designing and testing internal controls, audit trails, and evidence-based compliance reporting.</p>
    </div>
  );
}

function Shield3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield">
          <path d={svgPaths.p6147300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg13() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Shield3 />
    </div>
  );
}

function Tag13() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Risk</p>
    </div>
  );
}

function CardHeader22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg13 />
      <Tag13 />
    </div>
  );
}

function ServiceCard13() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader22 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Credit and Counterparty Risk</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Counterparty due diligence, credit limits, and ongoing monitoring frameworks for market operations.</p>
    </div>
  );
}

function Shield4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield">
          <path d={svgPaths.p6147300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBg14() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Shield4 />
    </div>
  );
}

function Tag14() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e2e8f0] text-[11px] whitespace-nowrap">Governance</p>
    </div>
  );
}

function CardHeader23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <IconBg14 />
      <Tag14 />
    </div>
  );
}

function ServiceCard14() {
  return (
    <div className="bg-[#111827] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[426.67px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader23 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Effective Corporate Governance</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Board composition, decision-making protocols, and accountability structures for regulated entities.</p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-5">
      <ServiceCard12 />
      <ServiceCard13 />
      <ServiceCard14 />
    </div>
  );
}

function ServicesGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="services-grid">
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="bg-[#0f172a] relative shrink-0 w-full" data-name="services-section">
      <div className="content-stretch flex flex-col gap-[56px] items-start overflow-clip px-[80px] py-[96px] relative rounded-[inherit] size-full">
        <ServicesIllustration />
        <BgIllustration />
        <SectionHeader1 />
        <SectionHeader2 />
        <ServicesPrompt />
        <ServicesGrid />
      </div>
      <div aria-hidden className="absolute border-[#1e293b] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CaseStudiesIllustration() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[800px] left-1/2 opacity-6 top-1/2 w-[1400px]" data-name="case-studies-illustration">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaseStudiesIllustration} />
    </div>
  );
}

function Eyebrow7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Eyebrow">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#4F46E5" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">CASE STUDY</p>
    </div>
  );
}

function SectionHeader3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="section-header">
      <Eyebrow7 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.25] min-w-full relative shrink-0 text-[#0f172a] text-[36px] tracking-[-0.72px] w-[min-content]">{`How we helped build Ethiopia's first licensed investment bank.`}</p>
    </div>
  );
}

function Tag15() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex items-start px-[14px] py-[8px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#4f46e5] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_6px_16px_0px_rgba(79,70,229,0.2)]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">CAPITAL MARKETS</p>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="bg-[rgba(13,148,136,0.1)] content-stretch flex items-start px-[14px] py-[8px] relative rounded-[100px] shrink-0" data-name="status-badge">
      <div aria-hidden className="absolute border border-[#0d9488] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_6px_16px_0px_rgba(13,148,136,0.2)]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0d9488] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">Licensed 2025</p>
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="tags">
      <Tag15 />
      <StatusBadge />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="icon">
          <rect fill="#4F46E5" fillOpacity="0.101961" height="32" rx="10" width="32" />
          <path d="M23 9L13.375 23L9 16.6364" id="Vector" stroke="#14B8A6" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AchievementCard() {
  return (
    <div className="bg-[#0b1220] content-stretch flex gap-[12px] items-center p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="achievement-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#e2e8f0] text-[15px]">First-generation licensed intermediaries in Ethiopia</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="icon">
          <rect fill="#4F46E5" fillOpacity="0.101961" height="32" rx="10" width="32" />
          <path d="M23 9L13.375 23L9 16.6364" id="Vector" stroke="#14B8A6" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AchievementCard1() {
  return (
    <div className="bg-[#0b1220] content-stretch flex gap-[12px] items-center p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="achievement-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon7 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#e2e8f0] text-[15px]">Aligned directly under the Capital Market Proclamation 2021</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="icon">
          <rect fill="#4F46E5" fillOpacity="0.101961" height="32" rx="10" width="32" />
          <path d="M23 9L13.375 23L9 16.6364" id="Vector" stroke="#14B8A6" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AchievementCard2() {
  return (
    <div className="bg-[#0b1220] content-stretch flex gap-[12px] items-center p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="achievement-card">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon8 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#e2e8f0] text-[15px]">Positioned to coordinate primary issues on the ESX launched January 2025</p>
    </div>
  );
}

function FactsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="facts-grid">
      <AchievementCard />
      <AchievementCard1 />
      <AchievementCard2 />
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CaseStudyPrompt() {
  return (
    <div className="content-stretch flex gap-[10px] items-center py-[8px] relative shrink-0 w-full" data-name="case-study-prompt">
      <ArrowRight3 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[16px] underline whitespace-nowrap">See how a similar engagement would work for your venture →</p>
    </div>
  );
}

function CaseStudyDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="case-study-details">
      <Tags1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#cbd5e1] text-[18px] w-[min-content]">We delivered full-scope advisory, starting from initial economic feasibility through drafting ECMA submissions to help secure one of the pioneering investment banking licenses in East Africa. Our delivery ensured absolute alignment with local capital requirements and operational governance boards.</p>
      <FactsGrid />
      <CaseStudyPrompt />
    </div>
  );
}

function ImageOverlay() {
  return <div className="absolute bg-gradient-to-b from-[rgba(15,23,42,0.8)] h-[72px] left-0 right-0 to-[rgba(15,23,42,0)] top-0" data-name="image-overlay" />;
}

function ImageCard() {
  return (
    <div className="h-[360px] relative rounded-[12px] shrink-0 w-full" data-name="image-card">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImageCard} />
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageOverlay />
      </div>
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ClientLogo() {
  return (
    <div className="pointer-events-none relative rounded-[14px] shrink-0 size-[64px]" data-name="client-logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[14px] size-full" src={imgImageCard} />
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 rounded-[14px]" />
    </div>
  );
}

function OutcomeMetric() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative" data-name="outcome-metric">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4f46e5] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap">Outcome</p>
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#e2e8f0] text-[18px] whitespace-nowrap">Licensed in 2025</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#cbd5e1] text-[13px] w-[min-content]">First-generation license secured with full regulatory alignment.</p>
    </div>
  );
}

function CredibilityRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="credibility-row">
      <ClientLogo />
      <OutcomeMetric />
    </div>
  );
}

function CaseStudyImage() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[520px]" data-name="case-study-image">
      <ImageCard />
      <CredibilityRow />
    </div>
  );
}

function CaseStudyShowcase() {
  return (
    <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-full" data-name="case-study-showcase">
      <div className="content-stretch flex gap-[48px] items-start overflow-clip p-[48px] relative rounded-[inherit] size-full">
        <CaseStudyDetails />
        <CaseStudyImage />
      </div>
      <div aria-hidden className="absolute border border-[#4f46e5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_24px_-12px_rgba(79,70,229,0.2),0px_18px_48px_-16px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function CaseStudiesSection() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="case-studies-section">
      <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip px-[80px] py-[120px] relative rounded-[inherit] size-full">
        <CaseStudiesIllustration />
        <SectionHeader3 />
        <CaseStudyShowcase />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Eyebrow8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Eyebrow">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#4F46E5" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">MARKET DATA</p>
    </div>
  );
}

function SectionHeader4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section-header">
      <Eyebrow8 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.25] min-w-full relative shrink-0 text-[#0f172a] text-[36px] tracking-[-0.72px] w-[min-content]">ESX Daily Market Prices</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#475569] text-[18px] w-[min-content]">The market your institution will operate in.</p>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-left">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Prev() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="prev">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ChevronLeft />
    </div>
  );
}

function ChevronRight20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Next() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="next">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ChevronRight20 />
    </div>
  );
}

function DateSelector() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="date-selector">
      <Prev />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">August 10, 2026</p>
      <Next />
    </div>
  );
}

function TabAll() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab-all">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">All Securities</p>
    </div>
  );
}

function TabEquities() {
  return (
    <div className="bg-white content-stretch flex items-center px-[14px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab-equities">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Equities</p>
    </div>
  );
}

function TabBonds() {
  return (
    <div className="bg-white content-stretch flex items-center px-[14px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab-bonds">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Bonds</p>
    </div>
  );
}

function TabEtfs() {
  return (
    <div className="bg-white content-stretch flex items-center px-[14px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab-etfs">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">ETFs</p>
    </div>
  );
}

function FilterTabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="filter-tabs">
      <TabAll />
      <TabEquities />
      <TabBonds />
      <TabEtfs />
    </div>
  );
}

function TopBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="top-bar">
      <DateSelector />
      <FilterTabs />
    </div>
  );
}

function TrendingUp1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="trending-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="trending-up">
          <path d={svgPaths.p1074dd00} id="Vector" stroke="#059669" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Badge15() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="badge">
      <TrendingUp1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#059669] text-[12px] whitespace-nowrap">+2.4%</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">1,247.83</p>
      <Badge15 />
    </div>
  );
}

function StatEsxIndex() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[8px]" data-name="stat-esx-index">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.24px] uppercase whitespace-nowrap">ESX Index</p>
      <Frame19 />
    </div>
  );
}

function StatVolume() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[8px]" data-name="stat-volume">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.24px] uppercase whitespace-nowrap">Volume</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">3.2M</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">shares traded</p>
    </div>
  );
}

function StatValue() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[8px]" data-name="stat-value">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.24px] uppercase whitespace-nowrap">Value</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">ETB 148.7M</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">total value</p>
    </div>
  );
}

function StatMarketCap() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[8px]" data-name="stat-market-cap">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.24px] uppercase whitespace-nowrap">Market Cap</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">ETB 12.4B</p>
    </div>
  );
}

function MarketSummary() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="market-summary">
      <StatEsxIndex />
      <StatVolume />
      <StatValue />
      <StatMarketCap />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] tracking-[0.26px] uppercase w-[80px]">Symbol</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#64748b] text-[13px] tracking-[0.26px] uppercase">Company</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] tracking-[0.26px] uppercase w-[110px]">Last Price</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] tracking-[0.26px] uppercase w-[80px]">Change</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] tracking-[0.26px] uppercase w-[80px]">% Change</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] tracking-[0.26px] uppercase w-[100px]">Volume</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] tracking-[0.26px] uppercase w-[64px]">Chart</p>
    </div>
  );
}

function Sparkline() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="sparkline">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 64 24" width="64">
        <g clipPath="url(#clip0_0_82)" id="sparkline">
          <path d={svgPaths.p3273fd80} id="Vector" stroke="#059669" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_82">
            <rect fill="white" height="24" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Row10() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[14px] relative shrink-0 w-full" data-name="row-1">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[80px]">COMB</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">Commercial Bank of Ethiopia</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[110px]">245.00</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#059669] text-[14px] w-[80px]">+8.50</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#059669] text-[14px] w-[80px]">+3.6%</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#475569] text-[14px] w-[100px]">450K</p>
      <Sparkline />
    </div>
  );
}

function Sparkline1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="sparkline">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 64 24" width="64">
        <g clipPath="url(#clip0_0_70)" id="sparkline">
          <path d={svgPaths.p31cc7e00} id="Vector" stroke="#059669" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_70">
            <rect fill="white" height="24" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Row11() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center px-[16px] py-[14px] relative shrink-0 w-full" data-name="row-2">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[80px]">EABL</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">East Africa Bottling</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[110px]">182.50</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#059669] text-[14px] w-[80px]">+3.25</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#059669] text-[14px] w-[80px]">+1.8%</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#475569] text-[14px] w-[100px]">220K</p>
      <Sparkline1 />
    </div>
  );
}

function Sparkline2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="sparkline">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 64 24" width="64">
        <g clipPath="url(#clip0_0_14)" id="sparkline">
          <path d={svgPaths.p2763e900} id="Vector" stroke="#DC2626" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="24" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Row12() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[14px] relative shrink-0 w-full" data-name="row-3">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[80px]">ETLT</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">Ethio Telecom</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[110px]">520.00</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#dc2626] text-[14px] w-[80px]">-5.00</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#dc2626] text-[14px] w-[80px]">-1.0%</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#475569] text-[14px] w-[100px]">180K</p>
      <Sparkline2 />
    </div>
  );
}

function Sparkline3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="sparkline">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 64 24" width="64">
        <g clipPath="url(#clip0_0_70)" id="sparkline">
          <path d={svgPaths.p31cc7e00} id="Vector" stroke="#059669" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_70">
            <rect fill="white" height="24" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Row13() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[12px] items-center px-[16px] py-[14px] relative shrink-0 w-full" data-name="row-4">
      <div aria-hidden className="absolute border-[#c7d2fe] border-b border-l-4 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[80px]">AWIB</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">Awash International Bank</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[110px]">312.75</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#059669] text-[14px] w-[80px]">+12.00</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#059669] text-[14px] w-[80px]">+4.0%</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#475569] text-[14px] w-[100px]">380K</p>
      <Sparkline3 />
    </div>
  );
}

function Sparkline4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="sparkline">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 64 24" width="64">
        <g clipPath="url(#clip0_0_70)" id="sparkline">
          <path d={svgPaths.p31cc7e00} id="Vector" stroke="#059669" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_70">
            <rect fill="white" height="24" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Row14() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[14px] relative shrink-0 w-full" data-name="row-5">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[80px]">UNTD</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">United Insurance</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[110px]">95.50</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#059669] text-[14px] w-[80px]">+1.75</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#059669] text-[14px] w-[80px]">+1.9%</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#475569] text-[14px] w-[100px]">85K</p>
      <Sparkline4 />
    </div>
  );
}

function Sparkline5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="sparkline">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 64 24" width="64">
        <g clipPath="url(#clip0_0_14)" id="sparkline">
          <path d={svgPaths.p2763e900} id="Vector" stroke="#DC2626" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="24" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Row15() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center px-[16px] py-[14px] relative shrink-0 w-full" data-name="row-6">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[80px]">ABYS</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#0f172a] text-[14px]">Abyssinia Bank</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-[110px]">278.00</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#dc2626] text-[14px] w-[80px]">-2.50</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#dc2626] text-[14px] w-[80px]">-0.9%</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#475569] text-[14px] w-[100px]">290K</p>
      <Sparkline5 />
    </div>
  );
}

function PriceTable() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="price-table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <Row10 />
        <Row11 />
        <Row12 />
        <Row13 />
        <Row14 />
        <Row15 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Bottom() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="bottom">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#4f46e5] text-[14px]">View full market data →</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[12px]">Data delayed 15 min. Source: Ethiopian Securities Exchange.</p>
    </div>
  );
}

function EsxPrompt() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="esx-prompt">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[16px] underline whitespace-nowrap">{`Building for this market? Let's talk about your venture →`}</p>
    </div>
  );
}

function EsxDashboardCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="esx-dashboard-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <TopBar />
      <MarketSummary />
      <PriceTable />
      <Bottom />
      <EsxPrompt />
    </div>
  );
}

function EsxMarketPricesSection() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[32px] items-start px-[80px] py-[120px] relative shrink-0 w-full" data-name="esx-market-prices-section">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <SectionHeader4 />
      <EsxDashboardCard />
    </div>
  );
}

function MarketIllustration() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[800px] left-1/2 opacity-6 top-[calc(50%-0.5px)] w-[1400px]" data-name="market-illustration">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMarketIllustration} />
    </div>
  );
}

function Eyebrow9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Eyebrow">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#4F46E5" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">WHERE WE FOCUS</p>
    </div>
  );
}

function MarketHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="market-header">
      <Eyebrow9 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.25] min-w-full relative shrink-0 text-[#0f172a] text-[36px] tracking-[-0.72px] w-[min-content]">{`The opportunity you're building for.`}</p>
    </div>
  );
}

function FileText5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="file-text">
          <path d={svgPaths.p26ce0680} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="icon">
      <FileText5 />
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] whitespace-nowrap">2021</p>
    </div>
  );
}

function StatTop() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="stat-top">
      <Icon9 />
      <Badge16 />
    </div>
  );
}

function StatCard1() {
  return (
    <div className="bg-[#f8fafc] content-stretch drop-shadow-[0px_6px_8px_rgba(15,23,42,0.04)] flex flex-[1_0_34px] flex-col gap-[10px] items-start min-w-px p-[16px] relative rounded-[12px]" data-name="stat-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StatTop />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0d9488] text-[14px] w-full">Capital Market Proclamation</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475569] text-[13px] w-full">A foundational framework setting the stage for modern market infrastructure.</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="calendar">
          <path d={svgPaths.p16e2f00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="icon">
      <Calendar />
    </div>
  );
}

function Badge17() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] whitespace-nowrap">2025</p>
    </div>
  );
}

function StatTop1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="stat-top">
      <Icon10 />
      <Badge17 />
    </div>
  );
}

function StatCard2() {
  return (
    <div className="bg-[#f8fafc] content-stretch drop-shadow-[0px_6px_8px_rgba(15,23,42,0.04)] flex flex-[1_0_34px] flex-col gap-[10px] items-start min-w-px p-[16px] relative rounded-[12px]" data-name="stat-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StatTop1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0d9488] text-[14px] w-full">ESX Launched</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475569] text-[13px] w-full">A major milestone marking the beginning of a new era for capital markets.</p>
    </div>
  );
}

function Users6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="users">
          <path d={svgPaths.p4264400} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="icon">
      <Users6 />
    </div>
  );
}

function Badge18() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4f46e5] text-[11px] whitespace-nowrap">GEN 1</p>
    </div>
  );
}

function StatTop2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="stat-top">
      <Icon11 />
      <Badge18 />
    </div>
  );
}

function StatCard3() {
  return (
    <div className="bg-[#f8fafc] content-stretch drop-shadow-[0px_6px_8px_rgba(15,23,42,0.04)] flex flex-[1_0_34px] flex-col gap-[10px] items-start min-w-px p-[16px] relative rounded-[12px]" data-name="stat-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StatTop2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0d9488] text-[14px] w-full">First Generation Intermediaries</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475569] text-[13px] w-full">Early movers define the ecosystem, set standards, and capture market share.</p>
    </div>
  );
}

function MarketStats() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="market-stats">
      <StatCard1 />
      <StatCard2 />
      <StatCard3 />
    </div>
  );
}

function TimelineHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#64748b] text-[12px] w-full whitespace-nowrap" data-name="timeline-header">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 tracking-[0.72px] uppercase">Milestones</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0">Opportunity unfolding</p>
    </div>
  );
}

function TrackLine() {
  return <div className="bg-[#e2e8f0] relative self-stretch shrink-0 w-[2px]" data-name="track-line" />;
}

function Dot() {
  return <div className="bg-[#4f46e5] relative rounded-[5px] shrink-0 size-[10px]" data-name="dot" />;
}

function ItemText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="item-text">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#0f172a] text-[13px]">Capital Market Proclamation</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[12px]">2021 • Regulatory foundation</p>
    </div>
  );
}

function TimelineItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="timeline-item">
      <Dot />
      <ItemText />
    </div>
  );
}

function Dot1() {
  return <div className="bg-[#4f46e5] relative rounded-[5px] shrink-0 size-[10px]" data-name="dot" />;
}

function ItemText1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="item-text">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#0f172a] text-[13px]">ESX Launched</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[12px]">Jan 2025 • Market activation</p>
    </div>
  );
}

function TimelineItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="timeline-item">
      <Dot1 />
      <ItemText1 />
    </div>
  );
}

function Dot2() {
  return <div className="bg-[#4f46e5] relative rounded-[5px] shrink-0 size-[10px]" data-name="dot" />;
}

function ItemText2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="item-text">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#0f172a] text-[13px]">First Generation Intermediaries</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[12px]">2025+ • Early mover advantage</p>
    </div>
  );
}

function TimelineItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="timeline-item">
      <Dot2 />
      <ItemText2 />
    </div>
  );
}

function TimelineItems() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="timeline-items">
      <TimelineItem />
      <TimelineItem1 />
      <TimelineItem2 />
    </div>
  );
}

function TimelineTrack() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="timeline-track">
      <TrackLine />
      <TimelineItems />
    </div>
  );
}

function MarketTimeline() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="market-timeline">
      <TimelineHeader />
      <TimelineTrack />
    </div>
  );
}

function MarketPrompt() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="market-prompt">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f46e5] text-[16px] underline whitespace-nowrap">{`Planning to enter the Ethiopian market? Let's talk about your venture →`}</p>
    </div>
  );
}

function ArrowRight4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CtaButton3() {
  return (
    <div className="bg-[#4f46e5] content-stretch drop-shadow-[0px_10px_12px_rgba(79,70,229,0.2)] flex gap-[10px] h-[48px] items-center justify-center px-[18px] relative rounded-[12px] shrink-0" data-name="cta-button">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Talk to us</p>
      <ArrowRight4 />
    </div>
  );
}

function MarketCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_5px_rgba(15,23,42,0.03),0px_10px_15px_rgba(15,23,42,0.04)] flex flex-col gap-[32px] items-start max-w-[1280px] p-[48px] relative rounded-[16px] shrink-0 w-full" data-name="market-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <MarketHeader />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#475569] text-[18px] w-[min-content]">{`Ethiopia's capital market is being built from the ground up. We don't just help you enter this market - we help you shape it. Institutions designed now will set the standards the market inherits. Your timing is exceptional, and we're here to make sure you're ready - trained, licensed, and strategically positioned.`}</p>
      <MarketStats />
      <MarketTimeline />
      <MarketPrompt />
      <CtaButton3 />
    </div>
  );
}

function MarketImageContainer() {
  return (
    <div className="-translate-y-1/2 absolute drop-shadow-[0px_6px_9px_rgba(15,23,42,0.04),0px_18px_20px_rgba(15,23,42,0.07)] h-[420px] right-[-120px] rounded-[16px] top-1/2 w-[560px]" data-name="market-image-container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="market-image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMarketImage} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Green() {
  return <div className="bg-[#078930] h-full opacity-28 relative shrink-0 w-[54px]" data-name="green" />;
}

function Gold() {
  return <div className="bg-[#fcdd09] h-full opacity-28 relative shrink-0 w-[52px]" data-name="gold" />;
}

function Red() {
  return <div className="bg-[#da121a] h-full opacity-28 relative shrink-0 w-[54px]" data-name="red" />;
}

function EthioFlagAccent() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex h-[6px] items-start overflow-clip right-[24px] rounded-[3px] w-[160px]" data-name="ethio-flag-accent">
      <Green />
      <Gold />
      <Red />
    </div>
  );
}

function MarketFocusSection() {
  return (
    <div className="bg-gradient-to-b from-white relative shrink-0 to-[#f8fafc] w-full" data-name="market-focus-section">
      <div className="content-stretch flex flex-col gap-[56px] items-center overflow-clip px-[80px] py-[96px] relative rounded-[inherit] size-full">
        <MarketIllustration />
        <MarketCard />
        <MarketImageContainer />
        <EthioFlagAccent />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Users7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="users">
          <path d={svgPaths.p4264400} id="Vector" stroke="#F8FAFC" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SocialProof() {
  return (
    <div className="absolute backdrop-blur-[9px] bg-[rgba(255,255,255,0.08)] bottom-[24px] content-stretch flex gap-[10px] items-center left-[24px] px-[14px] py-[10px] rounded-[999px]" data-name="social-proof">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Users7 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[13px] tracking-[0.2px] whitespace-nowrap">{`Join 15+ institutions we've advised`}</p>
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_4)" id="clock">
          <path d={svgPaths.p8765900} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UrgencyBadge() {
  return (
    <div className="absolute bg-[#4f46e5] content-stretch drop-shadow-[0px_10px_12px_rgba(79,70,229,0.2)] flex gap-[8px] items-center px-[12px] py-[8px] right-[24px] rounded-[999px] top-[24px]" data-name="urgency-badge">
      <Clock1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap">Limited capacity</p>
    </div>
  );
}

function CtaVisual() {
  return (
    <div className="content-stretch flex flex-col h-[520px] items-start overflow-clip relative rounded-[24px] shrink-0 w-[560px]" data-name="cta-visual">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgCtaVisual} />
        <div className="absolute bg-gradient-to-b from-[rgba(15,23,42,0.8)] inset-0 rounded-[24px] to-[rgba(15,23,42,0.9)] via-[55%] via-[rgba(15,23,42,0)]" />
      </div>
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-8 pointer-events-none size-full" src={imgCtaVisual1} />
      <SocialProof />
      <UrgencyBadge />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_97)" id="Frame">
          <path d="M0 7H14M7 14L14 7L7 0" id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_97">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BtnPrimary() {
  return (
    <div className="bg-[#4f46e5] content-stretch drop-shadow-[0px_12px_14px_rgba(79,70,229,0.2)] flex gap-[10px] items-center px-[28px] py-[14px] relative rounded-[8px] shrink-0" data-name="btn-primary">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white tracking-[0.5px] uppercase whitespace-nowrap">Contact Partners</p>
      <Frame20 />
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="calendar">
          <path d={svgPaths.p16e2f00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnSecondary() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[10px] items-center px-[28px] py-[14px] relative rounded-[8px] shrink-0" data-name="btn-secondary">
      <div aria-hidden className="absolute border border-[#4f46e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Calendar1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[16px] tracking-[0.5px] uppercase whitespace-nowrap">Schedule a Call</p>
    </div>
  );
}

function CtaActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="cta-actions">
      <BtnPrimary />
      <BtnSecondary />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="mail">
          <path d={svgPaths.pd3d5900} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[rgba(79,70,229,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Frame">
      <Mail />
    </div>
  );
}

function ContactRowEmail() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="contact-row-email">
      <Frame21 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#f8fafc] text-[14px]">peter.morris@strategy-innovations.com</p>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_8)" id="phone">
          <path d={svgPaths.p2a029800} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[rgba(79,70,229,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Frame">
      <Phone />
    </div>
  );
}

function ContactRowPhone() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="contact-row-phone">
      <Frame22 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#f8fafc] text-[14px]">+44 7557 162457</p>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[12px] items-start p-[20px] relative rounded-[16px] shrink-0 w-full" data-name="contact-card">
      <div aria-hidden className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_14px_30px_0px_rgba(0,0,0,0.15)]" />
      <ContactRowEmail />
      <ContactRowPhone />
    </div>
  );
}

function CtaContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="cta-content">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.2] min-w-full relative shrink-0 text-[#f8fafc] text-[44px] tracking-[-1.5px] w-[min-content]">{`Ready to build? Let's start.`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#94a3b8] text-[18px] w-[min-content]">{`Tell us about your venture and the challenges you're facing. We'll tell you honestly whether it stands up - and if it does, how to build it, train your team, and consult on every step.`}</p>
      <CtaActions />
      <ContactCard />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] relative shrink-0 to-[#0b1020] w-full" data-name="cta-section">
      <div className="content-stretch flex gap-[64px] items-center overflow-clip px-[80px] py-[96px] relative rounded-[inherit] size-full">
        <CtaVisual />
        <CtaContent />
      </div>
      <div aria-hidden className="absolute border-[#334155] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FooterBrand() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[360px]" data-name="footer-brand">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#f8fafc] text-[0px] whitespace-nowrap">
        <span className="leading-[normal] text-[18px]">Strategy Innovations</span>
        <span className="leading-[normal] text-[#14b8a6] text-[12px]">{` Advisory`}</span>
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.45] min-w-full relative shrink-0 text-[#94a3b8] text-[14px] w-[min-content]">Elite strategic advisory and institutional grade technology solutions for global capital markets.</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Peter Morris · United Kingdom</p>
    </div>
  );
}

function FooterCol() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="footer-col">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f8fafc] text-[14px]">DIVISIONS</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">{`Capital Markets & Institutions`}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Technology Execution</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Quantitative Modeling</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Regulatory Strategy</p>
    </div>
  );
}

function FooterCol1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="footer-col">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f8fafc] text-[14px]">RESOURCES</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Methodology</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Market Focus</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Insights</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Client Portal</p>
    </div>
  );
}

function FooterLinksGrid() {
  return (
    <div className="content-stretch flex gap-[48px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="footer-links-grid">
      <FooterCol />
      <FooterCol1 />
    </div>
  );
}

function FooterTop() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="footer-top">
      <FooterBrand />
      <FooterLinksGrid />
    </div>
  );
}

function FooterSocial() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[16px] items-start leading-[normal] relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap" data-name="footer-social">
      <p className="relative shrink-0">LinkedIn</p>
      <p className="relative shrink-0">Institutional Portal</p>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="content-stretch flex items-start justify-between pt-[32px] relative shrink-0 w-full" data-name="footer-bottom">
      <div aria-hidden className="absolute border-[#334155] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">© 2026 Strategy Innovations Advisory LLC. All rights reserved. Capital Markets Division.</p>
      <FooterSocial />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-col gap-[64px] items-start pb-[40px] pt-[80px] px-[80px] relative shrink-0 w-full" data-name="footer-section">
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default function CapitalMarketsSite() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full" data-name="capital-markets-site">
      <Header />
      <HeroSection />
      <VisionMissionSection />
      <ThreePillarsOverview />
      <TrainingSection />
      <ConsultingSection />
      <BuildingSection />
      <ServicesSection />
      <CaseStudiesSection />
      <EsxMarketPricesSection />
      <MarketFocusSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}