import { BrowserRouter, useRoutes } from 'react-router-dom'

import { routes } from './routes'

const App = () => {
  const AppRoutes = () => useRoutes(routes)
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
export default App
