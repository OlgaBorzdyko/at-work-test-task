import type { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/layouts/MainLayout'
import MainPage from '@/pages/MainPage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />
      }
    ]
  }
]
