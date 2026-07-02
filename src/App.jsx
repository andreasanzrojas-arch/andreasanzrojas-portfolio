import { RouterProvider, useRouter } from './lib/router'
import CustomCursor from './components/CustomCursor'
import OSHome from './directions/OSHome'
import BancoBogota from './pages/BancoBogota'
import CaseStudyGlobalPayments from './pages/CaseStudyGlobalPayments'
import CaseStudyMonoma from './pages/CaseStudyMonoma'
import CaseStudyTravel from './pages/CaseStudyTravel'
import CaseStudyHuge from './pages/CaseStudyHuge'

// Direction 2 — Product OS is the locked, final direction.
function Routes() {
  const { path } = useRouter()
  if (path === '/work/banco-de-bogota') return <BancoBogota />
  if (path === '/work/mastercard') return <CaseStudyGlobalPayments />
  if (path === '/work/monoma') return <CaseStudyMonoma />
  if (path === '/work/travel-adventures') return <CaseStudyTravel />
  if (path === '/work/huge') return <CaseStudyHuge />
  return <OSHome />
}

export default function App() {
  return (
    <RouterProvider>
      <CustomCursor />
      <Routes />
    </RouterProvider>
  )
}
