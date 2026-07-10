import { useRouter } from './lib/router'
import CustomCursor from './components/CustomCursor'
import SEO from './components/SEO'
import { getRouteSEO } from './seo/routes'
import OSHome from './directions/OSHome'
import BancoBogota from './pages/BancoBogota'
import CaseStudyGlobalPayments from './pages/CaseStudyGlobalPayments'
import CaseStudyMonoma from './pages/CaseStudyMonoma'
import CaseStudyTravelAdventures from './pages/CaseStudyTravelAdventures'
import CaseStudyHuge from './pages/CaseStudyHuge'
import Contact from './pages/Contact'

function Routes() {
  const { path } = useRouter()
  const seo = getRouteSEO(path)

  let page
  if (path === '/contact') page = <Contact />
  else if (path === '/work/banco-de-bogota') page = <BancoBogota />
  else if (path === '/work/mastercard') page = <CaseStudyGlobalPayments />
  else if (path === '/work/monoma') page = <CaseStudyMonoma />
  else if (path === '/work/travel-adventures') page = <CaseStudyTravelAdventures />
  else if (path === '/work/huge') page = <CaseStudyHuge />
  else page = <OSHome />

  return (
    <>
      <SEO key={path} {...seo} />
      {page}
    </>
  )
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes />
    </>
  )
}
