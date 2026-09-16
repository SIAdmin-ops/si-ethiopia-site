import FinancialLiteracy from "../sections/training/FinancialLiteracy"
import { useSeo } from "../lib/useSeo"

export default function FinancialLiteracyPage() {
  useSeo(
    "Financial Literacy Programme",
    "SIC's financial literacy programme, delivered in partnership with New Generation University College (NGUC), helps every Ethiopian make informed financial decisions.",
    "/financial-literacy",
  )
  return <FinancialLiteracy />
}
