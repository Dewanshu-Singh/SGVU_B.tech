import { finalCta } from '../data/footer'
import Button from '../components/ui/Button'
import { pushDataLayerEvent } from '../lib/analytics'

export default function FinalCTA() {
  return (
    <section className="pt-0 pb-[84px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-12 md:py-20 text-center bg-[linear-gradient(150deg,#7B5CFF_0%,#4C31C9_60%,#0D0A1C_130%)]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(420px 320px at 8% 100%, rgba(200,241,53,.12), transparent 60%), radial-gradient(380px 300px at 95% 10%, rgba(79,184,174,.14), transparent 60%)',
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-5 font-mono font-bold text-white/5 text-[10rem] md:text-[14rem]"
          >
            {'</>'}
          </span>
          <h2 className="relative font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)]">
            {finalCta.titleLines[0]}
            <br />
            {finalCta.titleLines[1]}
          </h2>
          <p className="relative text-white/85 max-w-lg mx-auto mt-3 mb-7">{finalCta.body}</p>
          <Button as="a" href={finalCta.ctaHref} variant="lime" className="relative !px-9 !py-4 !text-[1.05rem]">
            {finalCta.ctaLabel}
          </Button>
          <div className="relative font-mono text-[0.76rem] text-white/70 mt-4">
            Prefer to talk? Call{' '}
            <a
              href={finalCta.phoneHref}
              className="text-lime underline"
              onClick={() => pushDataLayerEvent('call_click', { location: 'final_cta' })}
            >
              {finalCta.phoneDisplay}
            </a>{' '}
            or{' '}
            <a
              href={finalCta.whatsappHref}
              className="text-lime underline"
              onClick={() => pushDataLayerEvent('whatsapp_click', { location: 'final_cta' })}
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
