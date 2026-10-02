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
  1: { icon: Compass, color: "text-sky bg-teal-600/15" },
  2: { icon: FileText, color: "text-gold bg-amber-600/15" },
  3: { icon: Settings, color: "text-teal-200 bg-teal-800/25" },
  4: { icon: GraduationCap, color: "text-amber-300 bg-amber-500/15" },
  5: { icon: Coins, color: "text-teal-300 bg-teal-500/15" },
  6: { icon: ShieldAlert, color: "text-error bg-error/15" },
  7: { icon: Cpu, color: "text-blue-400 bg-blue-700/20" },
  8: { icon: Scale, color: "text-gold bg-amber-800/25" },
}
