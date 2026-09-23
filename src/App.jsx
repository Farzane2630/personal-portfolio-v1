import { useRoutes } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import routes from "./routes"
import { Suspense, useEffect, useState } from "react"
import LanguageProvider from "./context"

function App() {
  const router = useRoutes(routes)
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("i18nextLng")?.split("-")[0]
    return ["en", "de", "fa"].includes(storedLanguage) ? storedLanguage : "en"
  })

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr"
  }, [language])

  return (
    <LanguageProvider.Provider value={{
      language: language,
      setLanguage: setLanguage
    }}>
      <main
        className={`main-container ${language === "fa" ? "is-rtl" : "is-ltr"}`}
        dir={language === "fa" ? "rtl" : "ltr"}
      >
        <Suspense fallback={<div className="loading-state">Loading...</div>}>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {router}
          </div>
        </Suspense>
      </main>
    </LanguageProvider.Provider>
  )
}

export default App
