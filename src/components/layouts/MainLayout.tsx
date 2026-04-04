import { Outlet } from 'react-router-dom'

import Header from './header/Header'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
