import { lazy } from 'react'
import { createHashRouter } from 'react-router-dom'

// const views = import.meta.glob('../views/*.jsx', { eager: true })

// console.log(views)

// const moduleNames = Object.keys(views).map(key => views[key].default.name)

// console.log(moduleNames)

// const imports = moduleNames.map(name => ({ name, module: lazy(() => import(`../views/${name}`)) }))

// console.log(imports)

// const getElement = (name) => imports.filter(item => item.name === name)[0].module

const Index = lazy(() => import('@/views/Index'))
const Profile = lazy(() => import('@/views/Profile'))


const router = createHashRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/profile',
    element: <Profile />
  }
])

export default router