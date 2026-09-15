import svgPaths from "./svg-e490sfikdu";
import imgServicesIllustration from "./479757653f6b57c724bbbb1ab01ce578964ebe0d.png";
import imgBgIllustration from "./4bcd8393eccbac1539198b5b8920a222e7d841b4.png";

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

function Eyebrow() {
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

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="section-header">
      <Eyebrow />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.25] min-w-full relative shrink-0 text-[#0f172a] text-[36px] tracking-[-0.72px] w-[min-content]">Choose the support you need.</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#475569] text-[18px] w-[min-content]">Advisory. Consulting. Training. Technology. Every institution is different - pick the capabilities that match where you are in your journey.</p>
    </div>
  );
}

function SectionHeader1() {
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

function CardHeader() {
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
      <CardHeader />
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

function CardHeader1() {
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
      <CardHeader1 />
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

function CardHeader2() {
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
      <CardHeader2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">{`Regulatory Licensing & Compliance`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">End-to-end management of regulatory applications, ECMA filings, and policy alignment.</p>
    </div>
  );
}

function Row() {
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

function CardHeader3() {
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
      <CardHeader3 />
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

function CardHeader4() {
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
      <CardHeader4 />
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

function CardHeader5() {
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
      <CardHeader5 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Membership and requirements CSD (NBE)</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">CSD membership requirements, settlement readiness, and operational integration with NBE frameworks.</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-2">
      <ServiceCard3 />
      <ServiceCard4 />
      <ServiceCard5 />
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

function IconBg6() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Shield />
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

function CardHeader6() {
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
      <CardHeader6 />
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

function CardHeader7() {
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
      <CardHeader7 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Programme Management</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Rigorous execution templates from feasibility sign-off down to first-day transaction settlement.</p>
    </div>
  );
}

function GraduationCap() {
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
      <GraduationCap />
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

function CardHeader8() {
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
      <CardHeader8 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">{`Knowledge Transfer & Handover`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Building customized client academies, handbooks, and operational playbooks for self-sufficiency.</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-3">
      <ServiceCard6 />
      <ServiceCard7 />
      <ServiceCard8 />
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

function IconBg9() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Shield1 />
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

function CardHeader9() {
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
      <CardHeader9 />
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

function CardHeader10() {
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
      <CardHeader10 />
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

function CardHeader11() {
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
      <CardHeader11 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Operational Risk Management</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Identifying, mitigating, and monitoring operational risks across people, process, and technology.</p>
    </div>
  );
}

function Row3() {
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

function CardHeader12() {
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
      <CardHeader12 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Internal Controls / Audit</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Designing and testing internal controls, audit trails, and evidence-based compliance reporting.</p>
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

function IconBg13() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Shield2 />
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

function CardHeader13() {
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
      <CardHeader13 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Credit and Counterparty Risk</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Counterparty due diligence, credit limits, and ongoing monitoring frameworks for market operations.</p>
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

function IconBg14() {
  return (
    <div className="bg-[rgba(79,70,229,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="icon-bg">
      <Shield3 />
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

function CardHeader14() {
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
      <CardHeader14 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-white w-full">Effective Corporate Governance</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Board composition, decision-making protocols, and accountability structures for regulated entities.</p>
    </div>
  );
}

function Row4() {
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
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="bg-[#0f172a] relative size-full" data-name="services-section">
      <div className="content-stretch flex flex-col gap-[56px] items-start px-[80px] py-[96px] relative size-full">
        <ServicesIllustration />
        <BgIllustration />
        <SectionHeader />
        <SectionHeader1 />
        <ServicesPrompt />
        <ServicesGrid />
      </div>
      <div aria-hidden className="absolute border-[#1e293b] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}