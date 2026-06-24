import { RouterProvider, useRouter } from './lib/router'
import OSHome from './directions/OSHome'
import CaseStudyBancoBogota from './pages/CaseStudyBancoBogota'

// Direction 2 — Product OS is the locked, final direction.
function Routes() {
  const { path } = useRouter()
  if (path === '/work/banco-de-bogota') return <CaseStudyBancoBogota />
  return <OSHome />
}

export default function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  )
}
