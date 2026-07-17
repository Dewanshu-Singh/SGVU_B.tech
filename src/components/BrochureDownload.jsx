import { FileDown, CheckCircle2 } from 'lucide-react'
import { useBrochureForm } from '../hooks/useBrochureForm'

export default function BrochureDownload() {
  const { email, error, isSubmitting, isSuccess, handleChange, handleSubmit } = useBrochureForm()

  if (isSuccess) {
    return (
      <div className="mt-4 flex items-center gap-2.5 text-textdark text-[0.85rem]" role="status">
        <CheckCircle2 size={18} className="text-violet shrink-0" />
        Sent! Check your inbox for the course brochure.
      </div>
    )
  }

  return (
    <div className="mt-4 border border-textdark/10 bg-white rounded-brand p-4">
      <p className="flex items-center gap-2 font-mono text-[0.7rem] tracking-wide uppercase text-muted-light mb-3">
        <FileDown size={14} className="text-violet" />
        Not ready to talk yet? Get the brochure instead.
      </p>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-2.5">
        <label htmlFor="brochure-email" className="sr-only">
          Email address
        </label>
        <input
          id="brochure-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={handleChange}
          className="flex-1 min-w-0 px-4 py-3 rounded-[10px] border border-textdark/15 bg-white text-textdark placeholder:text-muted-light text-[0.9rem] focus:outline-none focus:border-violet"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold text-[0.82rem] px-5 py-3 border border-textdark/15 text-textdark hover:border-violet hover:text-violet transition-colors"
        >
          {isSubmitting ? 'Sending…' : 'Email Me the PDF'}
        </button>
      </form>
      {error && (
        <p className="mt-2 text-[0.72rem] text-redx" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
