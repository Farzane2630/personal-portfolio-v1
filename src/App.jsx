import { Link, useRoutes } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import routes from "./routes"

function App() {
  let router = useRoutes(routes)
  return (
    <main>
      <Sidebar />
      {router}
    </main>
  )
}

export default App
