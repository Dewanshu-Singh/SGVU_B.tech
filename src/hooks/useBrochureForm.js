import { useState, useCallback } from 'react'
import { pushDataLayerEvent } from '../lib/analytics'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useBrochureForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = useCallback((e) => {
    setEmail(e.target.value)
    setError('')
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (!EMAIL_PATTERN.test(email.trim())) {
        setError('Enter a valid email address.')
        return
      }

      setStatus('submitting')

      const payload = {
        email: email.trim(),
        source: 'btech-cse-landing-page-brochure',
        submittedAt: new Date().toISOString(),
      }

      // TODO: replace with real CRM/webhook integration that emails the actual
      // course brochure PDF (e.g. POST to /api/brochure-request or a
      // TeleCRM/Zoho automation). Include UTM params as hidden fields.
      console.log('[Brochure Requested]', payload)

      pushDataLayerEvent('brochure_download_request', payload)

      window.setTimeout(() => {
        setStatus('success')
      }, 400)
    },
    [email]
  )

  return {
    email,
    error,
    status,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
    handleChange,
    handleSubmit,
  }
}
