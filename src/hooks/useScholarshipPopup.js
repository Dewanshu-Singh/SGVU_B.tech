import { useEffect, useState, useCallback } from 'react'
import { scholarshipPopup } from '../data/scholarshipPopup'
import { pushDataLayerEvent } from '../lib/analytics'

const SESSION_KEY = 'scholarship_popup_dismissed'

export function useScholarshipPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(
      () => {
        setIsOpen(true)
        pushDataLayerEvent('scholarship_popup_shown')
      },
      prefersReducedMotion ? 0 : scholarshipPopup.delayMs
    )

    return () => window.clearTimeout(timer)
  }, [])

  const dismiss = useCallback((reason) => {
    setIsOpen(false)
    sessionStorage.setItem(SESSION_KEY, '1')
    pushDataLayerEvent('scholarship_popup_dismiss', { reason })
  }, [])

  const clickCta = useCallback(() => {
    pushDataLayerEvent('scholarship_popup_cta_click')
    dismiss('cta')
  }, [dismiss])

  return { isOpen, dismiss, clickCta }
}
