import { stickyMobileCta } from '../data/footer'
import { pushDataLayerEvent } from '../lib/analytics'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-[70] flex sm:hidden gap-2.5 bg-white border-t border-textdark/10 px-3 py-2.5 shadow-[0_-6px_24px_rgba(36,30,56,.08)]">
      <a
        href={stickyMobileCta.call.href}
        onClick={() => pushDataLayerEvent('call_click', { location: 'sticky_mobile_bar' })}
        className="flex-1 text-center font-display font-semibold text-[0.82rem] py-3 rounded-[10px] border border-textdark/15 text-textdark"
      >
        {stickyMobileCta.call.label}
      </a>
      <a
        href={stickyMobileCta.whatsapp.href}
        onClick={() => pushDataLayerEvent('whatsapp_click', { location: 'sticky_mobile_bar' })}
        className="flex-1 text-center font-display font-semibold text-[0.82rem] py-3 rounded-[10px] bg-[#1FAF5A] text-white"
      >
        {stickyMobileCta.whatsapp.label}
      </a>
      <a
        href={stickyMobileCta.apply.href}
        className="flex-1 text-center font-display font-semibold text-[0.82rem] py-3 rounded-[10px] bg-lime text-ink"
      >
        {stickyMobileCta.apply.label}
      </a>
    </div>
  )
}
