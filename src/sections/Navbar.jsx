import { Phone } from 'lucide-react'
import { nav } from '../data/nav'
import Button from '../components/ui/Button'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[60] bg-white/85 backdrop-blur-md border-b border-textdark/10">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-[80px] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-[56px] shrink-0 flex items-center">
            <img src="/sgvu-logo.png" alt="SGVU Logo" className="h-full w-auto object-contain" />
          </div>
          <div className="font-semibold text-[0.8rem] sm:text-[0.92rem] leading-tight min-w-0 text-textdark">
            <span className="block truncate">{nav.name}</span>
            <small className="hidden sm:block text-[0.6rem] text-muted-light tracking-wide uppercase">
              {nav.tagline}
            </small>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <span className="hidden lg:inline-block text-[0.68rem] bg-lime text-ink px-3 py-1.5 rounded-full font-medium">
            {nav.badge}
          </span>
          <a
            href={nav.phoneHref}
            className="hidden lg:flex items-center gap-1.5 text-[0.8rem] text-muted-light hover:text-violet transition-colors"
          >
            <Phone size={14} />
            {nav.phoneDisplay}
          </a>
          <Button
            as="a"
            href={nav.ctaHref}
            variant="violet"
            className="whitespace-nowrap shrink-0 !px-3.5 sm:!px-5 !py-2 sm:!py-2.5 !text-[0.72rem] sm:!text-[0.85rem]"
          >
            {nav.ctaLabel}
          </Button>
        </div>
      </div>
    </nav>
  )
}
