import { RouterProvider, useRouter } from './lib/router'
import CustomCursor from './components/CustomCursor'
import OSHome from './directions/OSHome'
import BancoBogota from './pages/BancoBogota'
import CaseStudyGlobalPayments from './pages/CaseStudyGlobalPayments'
import CaseStudyMonoma from './pages/CaseStudyMonoma'
import CaseStudyTravelAdventures from './pages/CaseStudyTravelAdventures'
import CaseStudyHuge from './pages/CaseStudyHuge'
import Contact from './pages/Contact'

// Direction 2 — Product OS is the locked, final direction.
function Routes() {
  const { path } = useRouter()
  if (path === '/contact') return <Contact />
  if (path === '/work/banco-de-bogota') return <BancoBogota />
  if (path === '/work/mastercard') return <CaseStudyGlobalPayments />
  if (path === '/work/monoma') return <CaseStudyMonoma />
  if (path === '/work/travel-adventures') return <CaseStudyTravelAdventures />
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
