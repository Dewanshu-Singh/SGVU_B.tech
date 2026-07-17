import { useState, useCallback } from 'react'
import { pushDataLayerEvent } from '../lib/analytics'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  city: '',
  specialization: '',
}

const PHONE_PATTERN = /^[0-9+ ]{10,13}$/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const STEP_FIELDS = {
  1: ['name', 'phone', 'email'],
  2: ['city', 'specialization'],
}

function validateFields(values, fields) {
  const errors = {}
  if (fields.includes('name') && !values.name.trim()) {
    errors.name = "Please enter the student's full name."
  }
  if (fields.includes('phone') && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = 'Enter a valid mobile number.'
  }
  if (fields.includes('email') && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (fields.includes('city') && !values.city.trim()) {
    errors.city = 'Please enter city & state.'
  }
  if (fields.includes('specialization') && !values.specialization) {
    errors.specialization = 'Please select a specialization.'
  }
  return errors
}

export function useLeadForm() {
  const [step, setStep] = useState(1)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success
  const [startedTracked, setStartedTracked] = useState(false)

  const handleChange = useCallback(
    (field) => (e) => {
      const value = e.target.value
      setValues((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))

      if (!startedTracked) {
        setStartedTracked(true)
        pushDataLayerEvent('form_start', { form_name: 'btech_cse_lead_form' })
      }
    },
    [startedTracked]
  )

  const goNext = useCallback(
    (e) => {
      e.preventDefault()
      const stepErrors = validateFields(values, STEP_FIELDS[1])
      setErrors(stepErrors)
      if (Object.keys(stepErrors).length > 0) return

      pushDataLayerEvent('form_step_complete', { form_name: 'btech_cse_lead_form', step: 1 })
      setStep(2)
    },
    [values]
  )

  const goBack = useCallback((e) => {
    e.preventDefault()
    setStep(1)
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const stepErrors = validateFields(values, STEP_FIELDS[2])
      setErrors(stepErrors)
      if (Object.keys(stepErrors).length > 0) return

      setStatus('submitting')

      const payload = {
        ...values,
        source: 'btech-cse-landing-page',
        submittedAt: new Date().toISOString(),
      }

      // TODO: replace with real CRM/webhook integration (e.g. POST to /api/leads or a TeleCRM/Zoho webhook).
      // Include UTM params (source/medium/campaign/adset/ad) as hidden fields when wiring this up.
      console.log('[Lead Submitted]', payload)

      pushDataLayerEvent('lead_submit', payload)

      window.setTimeout(() => {
        setStatus('success')
      }, 400)
    },
    [values]
  )

  const reset = useCallback(() => {
    setStep(1)
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
    setStartedTracked(false)
  }, [])

  return {
    step,
    values,
    errors,
    status,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
    handleChange,
    goNext,
    goBack,
    handleSubmit,
    reset,
  }
}
