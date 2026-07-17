import { useEffect, useRef } from 'react'
import { X, Sparkles } from 'lucide-react'
import { scholarshipPopup } from '../data/scholarshipPopup'
import { useScholarshipPopup } from '../hooks/useScholarshipPopup'
import Button from './ui/Button'

export default function ScholarshipPopup() {
  const { isOpen, dismiss, clickCta } = useScholarshipPopup()
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') dismiss('escape')
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, dismiss])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm"
      onClick={() => dismiss('backdrop')}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="scholarship-popup-title"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-7 border border-textdark/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => dismiss('close_button')}
          aria-label="Close"
          className="absolute top-4 right-4 text-muted-light hover:text-textdark transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-violet to-lime grid place-items-center mb-4">
          <Sparkles size={22} className="text-ink" strokeWidth={1.75} />
        </div>

        <p className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-violet mb-2">
          {scholarshipPopup.eyebrow}
        </p>
        <h2 id="scholarship-popup-title" className="font-display font-bold text-2xl text-textdark mb-2.5">
          {scholarshipPopup.title}
        </h2>
        <p className="text-[0.9rem] text-muted-light mb-6">{scholarshipPopup.body}</p>

        <Button
          as="a"
          href={scholarshipPopup.ctaHref}
          variant="violet"
          className="w-full"
          onClick={clickCta}
        >
          {scholarshipPopup.ctaLabel}
        </Button>
        <button
          type="button"
          onClick={() => dismiss('maybe_later')}
          className="w-full text-center mt-3 font-mono text-[0.76rem] text-muted-light hover:text-textdark underline"
        >
          {scholarshipPopup.dismissLabel}
        </button>
      </div>
    </div>
  )
}
