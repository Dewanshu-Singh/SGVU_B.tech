import { Suspense, lazy } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import PartnerMarquee from './sections/PartnerMarquee'
import StickyMobileCTA from './sections/StickyMobileCTA'
import ScholarshipPopup from './components/ScholarshipPopup'

const Specializations = lazy(() => import('./sections/Specializations'))

const Pillars = lazy(() => import('./sections/Pillars'))
const LabShowcase = lazy(() => import('./sections/LabShowcase'))
const Placements = lazy(() => import('./sections/Placements'))
const FinalCTA = lazy(() => import('./sections/FinalCTA'))
const Footer = lazy(() => import('./sections/Footer'))

function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PartnerMarquee />

      <Suspense fallback={<SectionFallback />}>
        <Specializations />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Pillars />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <LabShowcase />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Placements />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FinalCTA />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

      <StickyMobileCTA />
      <ScholarshipPopup />
    </>
  )
}
