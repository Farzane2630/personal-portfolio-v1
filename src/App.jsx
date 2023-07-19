import { Link, useRoutes } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import routes from "./routes"
import { useState } from "react"
import EnglishContext from "./context"

function App() {
  let router = useRoutes(routes)
  const [isEn, setIsEn] = useState(true)
  return (
    <EnglishContext.Provider value={{
      isEn: isEn,
      setIsEn: setIsEn
    }}>
      <main>
        <Sidebar />
        {router}
      </main>
    </EnglishContext.Provider >
  )
}

export default App
