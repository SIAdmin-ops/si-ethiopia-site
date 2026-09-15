import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LanguageProvider } from "./i18n"
import { AdminAuthProvider } from "./context/AdminAuth"
import Layout from "./components/Layout"
import AdminLayout from "./components/AdminLayout"
import RequireAdminAuth from "./components/RequireAdminAuth"
import Home from "./pages/Home"
import CapitalMarkets from "./pages/CapitalMarkets"
import TechnologyPage from "./pages/TechnologyPage"
import Training from "./pages/Training"
import FinancialLiteracyPage from "./pages/FinancialLiteracyPage"
import About from "./pages/About"
import ContactPage from "./pages/ContactPage"
import AdminLogin from "./pages/admin/Login"
import AdminDashboard from "./pages/admin/Dashboard"
import NewsEditor from "./pages/admin/NewsEditor"

export default function App() {
  return (
    <LanguageProvider>
      <AdminAuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="capital-markets" element={<CapitalMarkets />} />
              <Route path="technology" element={<TechnologyPage />} />
              <Route path="training" element={<Training />} />
              <Route path="financial-literacy" element={<FinancialLiteracyPage />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>

            <Route path="admin/login" element={<AdminLogin />} />
            <Route element={<RequireAdminAuth />}>
              <Route path="admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="news/new" element={<NewsEditor />} />
                <Route path="news/:id" element={<NewsEditor />} />
              </Route>
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AdminAuthProvider>
    </LanguageProvider>
  )
}
