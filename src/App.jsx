import { Suspense, lazy } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import PartnerMarquee from './sections/PartnerMarquee'
import StickyMobileCTA from './sections/StickyMobileCTA'
import ScholarshipPopup from './components/ScholarshipPopup'

const Specializations = lazy(() => import('./sections/Specializations'))
const ComparisonDiff = lazy(() => import('./sections/ComparisonDiff'))
const Pillars = lazy(() => import('./sections/Pillars'))
const LabShowcase = lazy(() => import('./sections/LabShowcase'))
const CampusLife = lazy(() => import('./sections/CampusLife'))
const Placements = lazy(() => import('./sections/Placements'))
const Testimonials = lazy(() => import('./sections/Testimonials'))
const GlobalEdge = lazy(() => import('./sections/GlobalEdge'))
const Team = lazy(() => import('./sections/Team'))
const Eligibility = lazy(() => import('./sections/Eligibility'))
const AdmissionProcess = lazy(() => import('./sections/AdmissionProcess'))
const FAQ = lazy(() => import('./sections/FAQ'))
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
        <ComparisonDiff />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Pillars />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <LabShowcase />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CampusLife />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Placements />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GlobalEdge />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Eligibility />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AdmissionProcess />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
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
