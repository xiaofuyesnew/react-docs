import { createHashRouter } from 'react-router-dom'
import Index from '@/views/Index'


const router = createHashRouter([
  {
    path: '/',
    element: <Index />
  }
])

export default router