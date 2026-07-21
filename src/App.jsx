import { useRoutes } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import routes from "./routes"
import { useState } from "react"
import LanguageProvider from "./context"

function App() {
  let router = useRoutes(routes)
  const [language, setLanguage] = useState("en")
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
