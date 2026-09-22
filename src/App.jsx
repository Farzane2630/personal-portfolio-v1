import { useRoutes } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import routes from "./routes"
import { useEffect, useState } from "react"
import LanguageProvider from "./context"

function App() {
  let router = useRoutes(routes)
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
      <main style={{ direction: `${language === "fa" ? "rtl " : "ltr"}` }}>
        <Sidebar />
        {router}
      </main>
    </LanguageProvider.Provider >
  )
}

export default App
