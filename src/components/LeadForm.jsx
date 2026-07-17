import { CheckCircle2 } from 'lucide-react'
import { leadForm } from '../data/hero'
import { useLeadForm } from '../hooks/useLeadForm'
import Button from './ui/Button'

function Field({ label, htmlFor, error, children }) {
  return (
    <div className="mb-3.5">
      <label
        htmlFor={htmlFor}
        className="block font-mono text-[0.64rem] tracking-[0.1em] uppercase text-muted-light mb-1.5"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[0.72rem] text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  'w-full px-4 py-3.5 rounded-[10px] border-[1.5px] border-textdark/10 bg-white font-body text-[0.95rem] text-textdark transition-colors focus:outline-none focus:border-violet'

function StepProgress({ step }) {
  return (
    <div className="flex items-center gap-2 mb-5" aria-hidden="true">
      <span className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-violet' : 'bg-textdark/10'}`} />
      <span className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-violet' : 'bg-textdark/10'}`} />
      <span className="font-mono text-[0.62rem] text-muted-light shrink-0 ml-1">Step {step} of 2</span>
    </div>
  )
}

export default function LeadForm({ id = 'lead-form' }) {
  const { step, values, errors, isSubmitting, isSuccess, handleChange, goNext, goBack, handleSubmit } =
    useLeadForm()

  return (
    <div
      id={id}
      className="relative bg-paper text-textdark rounded-[20px] p-7 shadow-card scroll-mt-24"
    >
      <span className="absolute -top-3.5 left-6 bg-lime text-ink font-mono text-[0.62rem] tracking-[0.12em] px-3.5 py-1.5 rounded-full font-bold">
        {leadForm.tag}
      </span>

      {isSuccess ? (
        <div className="py-6 text-center" role="status">
          <CheckCircle2 className="mx-auto mb-4 text-violet" size={44} strokeWidth={1.5} />
          <h3 className="font-display font-bold text-xl mb-2">{leadForm.successTitle}</h3>
          <p className="text-[0.92rem] text-muted-light">{leadForm.successMessage}</p>
        </div>
      ) : (
        <>
          <h3 className="font-display font-bold text-[1.35rem] mb-1">{leadForm.title}</h3>
          <p className="text-[0.86rem] text-muted-light mb-5">{leadForm.subtitle}</p>

          <StepProgress step={step} />

          {step === 1 && (
            <form onSubmit={goNext} noValidate>
              <p className="font-display font-semibold text-[0.95rem] mb-3.5">{leadForm.step1Title}</p>

              <Field label="Student's Full Name" htmlFor="f-name" error={errors.name}>
                <input
                  id="f-name"
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  className={inputClass}
                  value={values.name}
                  onChange={handleChange('name')}
                  autoComplete="name"
                  autoFocus
                />
              </Field>

              <Field label="Mobile (WhatsApp)" htmlFor="f-phone" error={errors.phone}>
                <input
                  id="f-phone"
                  type="tel"
                  placeholder="+91"
                  className={inputClass}
                  value={values.phone}
                  onChange={handleChange('phone')}
                  autoComplete="tel"
                />
              </Field>

              <Field label="Email" htmlFor="f-email" error={errors.email}>
                <input
                  id="f-email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                  value={values.email}
                  onChange={handleChange('email')}
                  autoComplete="email"
                />
              </Field>

              <Button type="submit" variant="violet" className="w-full mt-1.5">
                {leadForm.continueLabel}
              </Button>
              <p className="text-center mt-3 font-mono text-[0.66rem] text-muted-light">
                {leadForm.note}
              </p>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} noValidate>
              <p className="font-display font-semibold text-[0.95rem] mb-3.5">{leadForm.step2Title}</p>

              <Field label="Preferred Specialization" htmlFor="f-spec" error={errors.specialization}>
                <select
                  id="f-spec"
                  className={inputClass}
                  value={values.specialization}
                  onChange={handleChange('specialization')}
                  autoFocus
                >
                  <option value="">Select one</option>
                  {leadForm.specializationOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="City & State" htmlFor="f-city" error={errors.city}>
                <input
                  id="f-city"
                  type="text"
                  placeholder="e.g. Patna, Bihar"
                  className={inputClass}
                  value={values.city}
                  onChange={handleChange('city')}
                  autoComplete="address-level2"
                />
              </Field>

              <Button type="submit" variant="violet" className="w-full mt-1.5" disabled={isSubmitting}>
                {isSubmitting ? leadForm.submittingLabel : leadForm.submitLabel}
              </Button>
              <div className="flex items-center justify-between mt-3">
                <button
                  type="button"
                  onClick={goBack}
                  className="font-mono text-[0.66rem] text-muted-light hover:text-textdark underline"
                >
                  {leadForm.backLabel}
                </button>
                <p className="font-mono text-[0.66rem] text-muted-light">{leadForm.note}</p>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  )
}
