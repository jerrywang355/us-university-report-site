/*
Design philosophy for Home.tsx:
Quiet Luxury Education Briefing.
This page should feel like a premium education consulting dossier: editorial hierarchy,
asymmetric layout, refined motion, paper-like textures, and strong emphasis on ranking credibility
and return-to-China employment recommendations.
*/

import { useMemo } from "react";
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Building2, CheckCircle2, Compass, Globe2, GraduationCap, MapPinned, Scale, Sparkles } from "lucide-react";

type University = {
  name: string;
  chineseName: string;
  location: string;
  overallRank: string;
  csRank: string;
  employmentFit: string;
  category: string;
  highlight: string;
  features: string[];
  source: string;
  sourceUrl: string;
  accent: string;
};

const universities: University[] = [
  {
    name: "Arizona State University",
    chineseName: "亚利桑那州立大学",
    location: "Tempe, Arizona",
    overallRank: "U.S. News 2026 · National Universities #117",
    csRank: "U.S. News 2026 · Best Graduate Computer Science Schools #43 (tie)",
    employmentFit: "高",
    category: "研究型公立大学",
    highlight: "综合声誉、工程资源与产业连接最均衡，适合回国求职时强调学校体量与科技氛围。",
    features: ["创新型大学标签强", "计算机与工程外部认可度较稳", "学校规模大、资源完整"],
    source: "U.S. News",
    sourceUrl: "https://www.usnews.com/best-colleges/arizona-state-university-1081",
    accent: "bg-[linear-gradient(135deg,rgba(58,83,74,0.16),rgba(117,57,65,0.08))]"
  },
  {
    name: "University of Arizona",
    chineseName: "亚利桑那大学",
    location: "Tucson, Arizona",
    overallRank: "U.S. News 2026 · National Universities #127",
    csRank: "U.S. News 2026 · Best Graduate Computer Science Schools #59 (tie)",
    employmentFit: "高",
    category: "研究型公立大学",
    highlight: "典型的大型研究型大学路径，理工和科研气质更鲜明，简历解释成本低。",
    features: ["理工与研究底色强", "学校品牌成熟", "适合继续深造或回国技术岗"],
    source: "U.S. News",
    sourceUrl: "https://www.usnews.com/best-colleges/university-of-arizona-1083",
    accent: "bg-[linear-gradient(135deg,rgba(37,47,58,0.16),rgba(58,83,74,0.08))]"
  },
  {
    name: "University of San Francisco",
    chineseName: "旧金山大学",
    location: "San Francisco, California",
    overallRank: "U.S. News 2026 · National Universities #110",
    csRank: "U.S. News 2026 · Undergraduate Computer Science #154",
    employmentFit: "中高",
    category: "私立综合大学",
    highlight: "学校名气叠加旧金山区位，对实习叙事和回国时的城市资源表达有帮助。",
    features: ["湾区区位优势明显", "小班教学与国际化氛围", "适合重视实习的人"],
    source: "U.S. News",
    sourceUrl: "https://www.usnews.com/best-colleges/university-of-san-francisco-1325",
    accent: "bg-[linear-gradient(135deg,rgba(117,57,65,0.15),rgba(58,83,74,0.08))]"
  },
  {
    name: "Pace University",
    chineseName: "佩斯大学",
    location: "New York, New York",
    overallRank: "U.S. News 2026 · National Universities #273",
    csRank: "U.S. News 2026 · Best Graduate Computer Science Schools #195 (tie)",
    employmentFit: "中",
    category: "职业导向私立大学",
    highlight: "学校本身排名不算强，但纽约实习资源能明显抬高回国就业的简历表现。",
    features: ["纽约资源密集", "实习与职业服务是卖点", "更适合就业导向学生"],
    source: "U.S. News",
    sourceUrl: "https://www.usnews.com/best-colleges/pace-university-2791",
    accent: "bg-[linear-gradient(135deg,rgba(82,83,70,0.15),rgba(37,47,58,0.07))]"
  },
  {
    name: "Bryant University",
    chineseName: "布莱恩特大学",
    location: "Smithfield, Rhode Island",
    overallRank: "U.S. News 2026 · Regional Universities North #5",
    csRank: "主流 CS 榜单未单独突出；更适合理解为商科和就业回报型学校",
    employmentFit: "中",
    category: "区域型私立大学",
    highlight: "如果偏商科、商业分析或管理方向，实际价值会高于纸面 CS 表现。",
    features: ["商科标签更强", "投资回报率与就业叙事较好", "回国时需解释学校类别"],
    source: "U.S. News",
    sourceUrl: "https://www.usnews.com/best-colleges/bryant-university-3402",
    accent: "bg-[linear-gradient(135deg,rgba(65,58,52,0.15),rgba(117,57,65,0.06))]"
  },
  {
    name: "Pacific University",
    chineseName: "太平洋大学",
    location: "Forest Grove, Oregon",
    overallRank: "U.S. News 2026 · National Universities #232",
    csRank: "主流榜单未见单独 CS 名次",
    employmentFit: "中低",
    category: "小型私立综合大学",
    highlight: "本科体验与小班教学不错，但回国就业时学校名气与计算机可见度偏弱。",
    features: ["师生互动更紧密", "个性化培养明显", "适合重视本科体验"],
    source: "U.S. News",
    sourceUrl: "https://www.usnews.com/best-colleges/pacific-university-3212",
    accent: "bg-[linear-gradient(135deg,rgba(90,102,92,0.14),rgba(108,88,76,0.07))]"
  },
  {
    name: "Whittier College",
    chineseName: "惠蒂尔学院",
    location: "Whittier, California",
    overallRank: "National Liberal Arts Colleges #92（校方公开口径）",
    csRank: "未见主流 CS 榜单单独排名",
    employmentFit: "低",
    category: "博雅学院",
    highlight: "本科教育体验有亮点，但回中国直接就业时，博雅学院路径解释成本通常更高。",
    features: ["博雅教育特色强", "小班与个性化明显", "更适合重视通识与学习体验的人"],
    source: "Whittier College",
    sourceUrl: "https://www.whittier.edu/news/tue-09242024-702-am/whittier-leads-among-liberal-arts-colleges-national-rankings",
    accent: "bg-[linear-gradient(135deg,rgba(117,57,65,0.12),rgba(65,58,52,0.08))]"
  }
];

const recommendationOrder = [
  "Arizona State University",
  "University of Arizona",
  "University of San Francisco",
  "Pace University",
  "Bryant University",
  "Pacific University",
  "Whittier College"
];

const reasoningCards = [
  {
    title: "综合声誉与简历可识别度",
    icon: Building2,
    text: "回中国就业时，学校是否属于大型研究型大学、是否容易被 HR 一眼识别，通常比局部榜单更重要。"
  },
  {
    title: "计算机与理工相关外部评价",
    icon: GraduationCap,
    text: "若目标偏互联网、数据、产品或技术岗，理工与计算机相关排名会直接影响学校的说服力。"
  },
  {
    title: "城市与实习叙事",
    icon: MapPinned,
    text: "旧金山与纽约这类城市资源，能在回国求职时补强实习经历和行业关联度。"
  },
  {
    title: "回国解释成本",
    icon: Scale,
    text: "区域型大学和博雅学院并非没有价值，但在中国招聘语境里通常需要更多额外解释。"
  }
];

const sourceNotes = [
  {
    label: "第一层来源",
    text: "U.S. News、QS 和学校官网用于校验综合排名、学科表现与官方定位，可信度最高。"
  },
  {
    label: "第二层来源",
    text: "Niche、College Factual 等用于补充主流榜单未覆盖的专业体验或热度，但不替代核心判断。"
  },
  {
    label: "使用原则",
    text: "网站中的排序结论更偏重“回国求职场景的实际可用性”，而不是机械照抄任何单一榜单。"
  }
];

function rankStyle(index: number) {
  if (index === 0) return "bg-[#6b2e36] text-stone-50 border-[#6b2e36]";
  if (index === 1) return "bg-[#44584d] text-stone-50 border-[#44584d]";
  if (index === 2) return "bg-[#b5915a] text-stone-950 border-[#b5915a]";
  return "bg-transparent text-[#2e312c] border-[#8d8778]";
}

export default function Home() {
  const orderedUniversities = useMemo(
    () => recommendationOrder.map((name) => universities.find((school) => school.name === name)!).filter(Boolean),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--paper)] text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(107,46,54,0.07),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(68,88,77,0.08),transparent_24%)]" />
      <div className="paper-grain" />

      <header className="sticky top-0 z-40 border-b border-black/8 bg-[rgba(247,243,235,0.72)] backdrop-blur-xl">
        <div className="container grid grid-cols-[1fr_auto] items-center gap-6 py-4 lg:grid-cols-[220px_1fr_220px]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#44584d] text-stone-50 shadow-[0_10px_30px_rgba(68,88,77,0.18)]">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#7c7364]">U.S. University Briefing</p>
              <p className="font-serif-display text-lg text-[#2b2b28]">回国就业选校简报</p>
            </div>
          </div>

          <nav className="hidden items-center justify-center gap-7 text-sm text-[#4f4a42] lg:flex">
            <a href="#overview" className="transition hover:text-[#6b2e36]">项目概览</a>
            <a href="#comparison" className="transition hover:text-[#6b2e36]">院校比较</a>
            <a href="#ranking" className="transition hover:text-[#6b2e36]">推荐排序</a>
            <a href="#methodology" className="transition hover:text-[#6b2e36]">判断逻辑</a>
          </nav>

          <div className="justify-self-end">
            <a
              href="#ranking"
              className="inline-flex items-center gap-2 rounded-full border border-[#6b2e36]/20 bg-[#6b2e36] px-4 py-2 text-sm font-semibold text-stone-50 transition duration-300 hover:-translate-y-0.5 hover:bg-[#5d2730]"
            >
              查看最终排序
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="overview" className="relative isolate border-b border-black/8">
          <div className="container grid gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-16 xl:gap-16">
            <div className="grid gap-8">
              <div className="grid gap-4">
                <div className="flex items-center gap-3 text-[#7c7364]">
                  <span className="h-px w-10 bg-[#b5915a]" />
                  <span className="text-xs uppercase tracking-[0.28em]">Research-led selection memo</span>
                </div>
                <p className="max-w-[16ch] font-serif-display text-5xl leading-[0.96] tracking-[-0.03em] text-[#26231f] sm:text-6xl lg:text-7xl">
                  美国大学调研
                  <span className="block text-[#6b2e36]">与回国就业建议</span>
                </p>
                <p className="max-w-2xl text-lg leading-8 text-[#514c44]">
                  这不是一页普通的排名清单，而是一份围绕 <strong>“美本毕业后回中国就业”</strong> 的数字化选校简报。页面综合了综合排名、计算机相关外部评价、城市资源与简历可解释性，帮助你更快判断哪所学校更适合回国求职场景。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.7rem] border border-black/8 bg-white/72 p-5 shadow-[0_18px_50px_rgba(32,26,21,0.08)] backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#8f836e]">院校数量</p>
                  <p className="mt-3 font-serif-display text-4xl text-[#2f2a26]">07</p>
                  <p className="mt-2 text-sm leading-6 text-[#666055]">覆盖研究型公立大学、私立综合大学、区域型大学与博雅学院。</p>
                </div>
                <div className="rounded-[1.7rem] border border-black/8 bg-white/72 p-5 shadow-[0_18px_50px_rgba(32,26,21,0.08)] backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#8f836e]">核心目标</p>
                  <p className="mt-3 font-serif-display text-4xl text-[#2f2a26]">CN</p>
                  <p className="mt-2 text-sm leading-6 text-[#666055]">排序优先围绕回中国求职场景，而不是单看美国本土榜单位置。</p>
                </div>
                <div className="rounded-[1.7rem] border border-black/8 bg-white/72 p-5 shadow-[0_18px_50px_rgba(32,26,21,0.08)] backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#8f836e]">重点方向</p>
                  <p className="mt-3 font-serif-display text-4xl text-[#2f2a26]">CS</p>
                  <p className="mt-2 text-sm leading-6 text-[#666055]">尤其适用于计算机、数据、产品、互联网与通用管理培训生路径。</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-black/8 bg-[#ded7cc] shadow-[0_32px_80px_rgba(36,27,21,0.16)]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663298513085/oD8xjkWrq6hqWELMZyKb6D/hero-education-briefing-TFEn2fTQJLd9PNoUtsff8D.webp"
                alt="高端教育咨询风格的大学调研主视觉"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(26,24,22,0.18),rgba(247,243,235,0.04)_44%,rgba(26,24,22,0.10))]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/88 backdrop-blur-md">
                Premium selection memo
              </div>
              <div className="absolute bottom-0 left-0 right-0 grid gap-3 border-t border-white/15 bg-[linear-gradient(180deg,rgba(23,21,18,0.02),rgba(23,21,18,0.72))] p-6 text-stone-50 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-stone-200/80">
                  <Sparkles className="h-4 w-4" />
                  回国就业导向摘要
                </div>
                <p className="max-w-lg font-serif-display text-3xl leading-tight text-stone-50">
                  如果只看就业效率，首选通常集中在 ASU 与 University of Arizona。
                </p>
                <p className="max-w-xl text-sm leading-7 text-stone-200/90">
                  两者在学校规模、研究型大学身份、理工与计算机标签、以及中国招聘语境中的辨识度上更均衡。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black/8 bg-[#f2ece2]">
          <div className="container grid gap-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#8b7f6e]">判断框架</p>
              <h2 className="mt-4 font-serif-display text-4xl leading-tight text-[#2d2824] lg:text-5xl">
                排序不是简单照抄榜单，
                <span className="block text-[#44584d]">而是把就业场景也算进去。</span>
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasoningCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="group rounded-[1.6rem] border border-black/8 bg-white/78 p-5 shadow-[0_18px_50px_rgba(40,31,22,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(40,31,22,0.12)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#44584d]/10 text-[#44584d] transition duration-300 group-hover:bg-[#6b2e36]/10 group-hover:text-[#6b2e36]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[#2e2a25]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#595248]">{card.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="comparison" className="relative border-b border-black/8">
          <div className="absolute inset-0 opacity-45">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663298513085/oD8xjkWrq6hqWELMZyKb6D/rankings-cards-texture-EQFFwkLfPEAni7ZgXQDnYj.webp"
              alt="用于大学比较区域的纸本与透明片质感背景"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="container relative py-14 lg:py-18">
            <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#877c6c]">院校比较</p>
                <h2 className="mt-4 font-serif-display text-4xl leading-tight text-[#27231f] lg:text-5xl">
                  七所学校放在同一张桌面上，
                  <span className="block text-[#6b2e36]">才能看见选择的真实差别。</span>
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-[#524c44]">
                下列卡片统一呈现学校类别、综合排名、计算机相关表现和更适合回中国就业时使用的解释逻辑。每张卡片附带主要来源链接，方便你后续继续核实。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {universities.map((school, index) => (
                <article
                  key={school.name}
                  className={`group relative overflow-hidden rounded-[1.85rem] border border-black/8 bg-[rgba(255,255,255,0.82)] p-6 shadow-[0_22px_65px_rgba(36,28,21,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_rgba(36,28,21,0.13)] ${school.accent}`}
                >
                  <div className="absolute right-5 top-5 text-[11px] uppercase tracking-[0.25em] text-[#867a69]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="grid gap-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#8c7f6b]">{school.category}</p>
                      <h3 className="mt-3 font-serif-display text-3xl leading-tight text-[#24211d]">{school.chineseName}</h3>
                      <p className="mt-1 text-sm text-[#6d6559]">{school.name} · {school.location}</p>
                    </div>

                    <div className="grid gap-3 text-sm leading-7 text-[#49443d]">
                      <div>
                        <span className="block text-[11px] uppercase tracking-[0.22em] text-[#8f836f]">综合排名</span>
                        <p>{school.overallRank}</p>
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-[0.22em] text-[#8f836f]">计算机相关表现</span>
                        <p>{school.csRank}</p>
                      </div>
                    </div>

                    <p className="rounded-[1.2rem] border border-black/8 bg-white/60 px-4 py-4 text-sm leading-7 text-[#4f4941] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                      {school.highlight}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {school.features.map((item) => (
                        <span key={item} className="rounded-full border border-black/8 bg-white/62 px-3 py-1.5 text-xs text-[#5a544a]">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-[1.2rem] border border-black/8 bg-white/62 p-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6b2e36]/10 text-[#6b2e36]">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8c816e]">回中国就业适配度</p>
                        <p className="text-sm font-semibold text-[#2c2925]">{school.employmentFit}</p>
                      </div>
                    </div>

                    <a
                      href={school.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#44584d] transition hover:text-[#6b2e36]"
                    >
                      来源：{school.source}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ranking" className="border-b border-black/8 bg-[#231f1a] text-stone-100">
          <div className="container grid gap-10 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:py-18 xl:gap-14">
            <div className="grid gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-300/70">最终建议</p>
                <h2 className="mt-4 font-serif-display text-4xl leading-tight text-stone-50 lg:text-5xl">
                  回中国就业导向的
                  <span className="block text-[#d7bc8b]">推荐排序</span>
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-stone-300/88">
                如果你的目标是读完美国本科之后回中国就业，且方向偏计算机、数据、互联网、产品或通用企业岗位，那么排序最值得优先参考的是学校体量、理工标签、学校辨识度和实习叙事是否容易被国内市场理解。
              </p>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_26px_70px_rgba(0,0,0,0.22)]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663298513085/oD8xjkWrq6hqWELMZyKb6D/return-china-pathway-NR4sGRfzfmdd2EjGokzzMj.webp"
                  alt="美国留学到中国就业路径的图像"
                  className="h-full w-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,14,13,0.06),rgba(15,14,13,0.64))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-stone-200/72">Practical interpretation</p>
                  <p className="mt-3 text-sm leading-7 text-stone-100/90">
                    ASU 与 University of Arizona 之所以领先，是因为它们在“学校名气—理工强度—简历解释成本”三方面形成了更稳定的平衡。
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {orderedUniversities.map((school, index) => (
                <article
                  key={school.name}
                  className="grid gap-5 rounded-[1.8rem] border border-white/10 bg-white/6 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:bg-white/[0.085] sm:grid-cols-[84px_1fr] sm:items-start"
                >
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full border text-2xl font-semibold ${rankStyle(index)}`}>
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-serif-display text-3xl text-stone-50">{school.chineseName}</h3>
                      <span className="rounded-full border border-white/12 px-3 py-1 text-xs uppercase tracking-[0.18em] text-stone-300/80">
                        {school.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-stone-300/70">{school.name}</p>
                    <p className="mt-4 text-sm leading-7 text-stone-200/88">{school.highlight}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-black/8">
          <div className="container grid gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-18 xl:gap-14">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#8c806d]">情境化建议</p>
              <h2 className="mt-4 font-serif-display text-4xl leading-tight text-[#2a2622] lg:text-5xl">
                不是所有人都应该追同一所学校，
                <span className="block text-[#44584d]">关键是目标岗位是否清晰。</span>
              </h2>
            </div>
            <div className="grid gap-4">
              <article className="rounded-[1.7rem] border border-black/8 bg-white/72 p-6 shadow-[0_20px_65px_rgba(40,31,22,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#44584d]/10 text-[#44584d]">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#26231f]">偏计算机、数据、互联网方向</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#555046]">
                  优先考虑 <strong>Arizona State University</strong> 和 <strong>University of Arizona</strong>。这两所学校更容易在回国求职时形成“学校体量大、理工底色强、项目成熟”的直观印象。
                </p>
              </article>

              <article className="rounded-[1.7rem] border border-black/8 bg-white/72 p-6 shadow-[0_20px_65px_rgba(40,31,22,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6b2e36]/10 text-[#6b2e36]">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#26231f]">更看重大城市资源与实习</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#555046]">
                  <strong>University of San Francisco</strong> 和 <strong>Pace University</strong> 更适合把旧金山或纽约的资源转化为简历亮点。它们的价值很大程度上取决于你是否真的拿到高质量实习。
                </p>
              </article>

              <article className="rounded-[1.7rem] border border-black/8 bg-white/72 p-6 shadow-[0_20px_65px_rgba(40,31,22,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b5915a]/16 text-[#7a5a2d]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#26231f]">偏商科、商业分析或管理</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#555046]">
                  如果未来想走商业分析、管理、会计或就业回报导向更强的路线，<strong>Bryant University</strong> 的实际吸引力会高于它在通用排序中的位置。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="methodology" className="relative border-b border-black/8 bg-[#f6f1e8]">
          <div className="container grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-18 xl:gap-14">
            <div className="grid gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#8f836f]">来源与可信度</p>
                <h2 className="mt-4 font-serif-display text-4xl leading-tight text-[#26231f] lg:text-5xl">
                  这份网站为什么值得参考，
                  <span className="block text-[#6b2e36]">关键在于来源层级清楚。</span>
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-[#575145]">
                网站优先使用 U.S. News、QS 与学校官网作为第一层信息源，再用其他平台补足主流榜单未单列的项目。排序结论不是盲目复制名次，而是根据你最关心的回国就业场景做再解释。
              </p>
              <div className="overflow-hidden rounded-[2rem] border border-black/8 shadow-[0_28px_80px_rgba(38,28,22,0.12)]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663298513085/oD8xjkWrq6hqWELMZyKb6D/campus-collage-premium-HrsdVEgfXr4KHpJnwzcqZ8.webp"
                  alt="用于来源与可信度模块的大学拼贴图像"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-5">
              {sourceNotes.map((note) => (
                <article
                  key={note.label}
                  className="rounded-[1.7rem] border border-black/8 bg-white/76 p-6 shadow-[0_18px_60px_rgba(40,31,22,0.08)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8f836e]">{note.label}</p>
                  <p className="mt-4 text-base leading-8 text-[#514a42]">{note.text}</p>
                </article>
              ))}

              <div className="overflow-hidden rounded-[1.7rem] border border-black/8 bg-[#25211d] text-stone-100 shadow-[0_25px_70px_rgba(18,14,12,0.18)]">
                <div className="grid gap-0 md:grid-cols-[1fr_1.05fr]">
                  <div className="border-b border-white/8 p-6 md:border-b-0 md:border-r">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-stone-300/70">一句话结论</p>
                    <p className="mt-4 font-serif-display text-3xl leading-tight text-stone-50">
                      若以回国就业为目标，
                      <span className="block text-[#d7bc8b]">ASU 与 University of Arizona 更稳。</span>
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-7 text-stone-200/86">
                      它们更符合中国市场对“美国研究型大学”的直观想象：规模大、学科全、理工底色明确、学校名称较容易被理解。如果你更看重城市资源与实习叙事，则再考虑 University of San Francisco 与 Pace University。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#181613] text-stone-200">
        <div className="container grid gap-8 py-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-400/70">Prepared for practical decision making</p>
            <p className="mt-3 font-serif-display text-3xl text-stone-50">美国大学调研与回国就业建议</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300/80">
              本页内容基于已整理的调研报告与公开可核验来源制作，适合作为选校沟通、家庭讨论与后续深入筛选的起点。
            </p>
          </div>

          <div className="grid gap-2 text-sm text-stone-300/78">
            <a href="https://www.usnews.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
              主要参考：U.S. News
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#overview" className="inline-flex items-center gap-2 transition hover:text-white">
              返回顶部
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
