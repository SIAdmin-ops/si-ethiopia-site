import {
  Compass,
  FileText,
  Settings,
  GraduationCap,
  Coins,
  ShieldAlert,
  Cpu,
  Scale,
  type LucideIcon,
} from "lucide-react"

/* Category → icon + accent, keyed by the `cat` index in the content model
   (src/i18n.tsx `services.categories` / `services.items[].cat`). */
export const SERVICE_CATEGORY_META: Record<number, { icon: LucideIcon; color: string }> = {
  1: { icon: Compass, color: "text-violet-300 bg-violet-500/15" },
  2: { icon: FileText, color: "text-sky-300 bg-sky-500/15" },
  3: { icon: Settings, color: "text-cyan-300 bg-cyan-500/15" },
  4: { icon: GraduationCap, color: "text-amber-300 bg-amber-500/15" },
  5: { icon: Coins, color: "text-teal-300 bg-teal-500/15" },
  6: { icon: ShieldAlert, color: "text-rose-300 bg-rose-500/15" },
  7: { icon: Cpu, color: "text-blue-300 bg-blue-500/15" },
  8: { icon: Scale, color: "text-orange-300 bg-orange-500/15" },
}
