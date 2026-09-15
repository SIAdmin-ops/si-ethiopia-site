function Eyebrow() {
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
      <Eyebrow />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.15] min-w-full relative shrink-0 text-[#f8fafc] text-[44px] tracking-[-0.88px] w-[min-content]">We navigate the complexity so you can focus on the vision.</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#cbd5e1] text-[18px] w-[min-content]">Comprehensive regulatory and risk advisory services to navigate complex compliance landscapes.</p>
    </div>
  );
}

function Badge() {
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
      <Badge />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">{`Licence Approval Requirements & Impact - ECMA`}</p>
    </div>
  );
}

function ChevronRight() {
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
      <ChevronRight />
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

function Badge1() {
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
      <Badge1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">{`Licence Approval Requirements & Impact - ESX`}</p>
    </div>
  );
}

function ChevronRight1() {
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
      <ChevronRight1 />
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

function Badge2() {
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
      <Badge2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">{`Membership & Requirements - CSD (NBE)`}</p>
    </div>
  );
}

function ChevronRight2() {
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
      <ChevronRight2 />
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

function Badge3() {
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
      <Badge3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Risk Management</p>
    </div>
  );
}

function ChevronRight3() {
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
      <ChevronRight3 />
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

function Badge4() {
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
      <Badge4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Liquidity / Collateral / Capital Requirement Management</p>
    </div>
  );
}

function ChevronRight4() {
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
      <ChevronRight4 />
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

function Badge5() {
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
      <Badge5 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Operational Risk Management</p>
    </div>
  );
}

function ChevronRight5() {
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
      <ChevronRight5 />
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

function Badge6() {
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
      <Badge6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Internal Controls / Audit</p>
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

function CardHeader6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left6 />
      <ChevronRight6 />
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

function Badge7() {
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
      <Badge7 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">{`Credit & Counterparty Risk`}</p>
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

function CardHeader7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left7 />
      <ChevronRight7 />
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

function Badge8() {
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
      <Badge8 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#f8fafc] text-[16px]">Effective Corporate Governance</p>
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

function CardHeader8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <Left8 />
      <ChevronRight8 />
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

export default function ConsultingSection() {
  return (
    <div className="bg-gradient-to-r from-[#0b1020] relative size-full to-[#0f172a]" data-name="consulting-section">
      <div className="content-stretch flex flex-col gap-[56px] items-start px-[80px] py-[96px] relative size-full">
        <div className="absolute right-[-120px] size-[360px] top-[-120px]" data-name="bg-glow-1">
          <div className="absolute inset-[-33.33%]">
            <svg className="block size-full" fill="none" height="600" preserveAspectRatio="none" viewBox="0 0 600 600" width="600">
              <g filter="url(#filter0_f_0_8)" id="bg-glow-1" opacity="0.08">
                <circle cx="300" cy="300" fill="#4F46E5" r="180" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="600" id="filter0_f_0_8" width="600" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_0_8" stdDeviation="60" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[-140px] left-[-140px] size-[320px]" data-name="bg-glow-2">
          <div className="absolute inset-[-34.38%]">
            <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
              <g filter="url(#filter0_f_0_7)" id="bg-glow-2" opacity="0.06">
                <circle cx="270" cy="270" fill="#10B981" r="160" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="filter0_f_0_7" width="540" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_0_7" stdDeviation="55" />
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