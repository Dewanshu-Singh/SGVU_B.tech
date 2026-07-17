import { footer } from '../data/footer'

export default function Footer() {
  return (
    <footer className="border-t border-textdark/10 bg-paper-2 pt-11 pb-[110px] md:pb-11 text-[0.82rem] text-muted-light">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-9">
          <div>
            <b className="text-textdark font-display block mb-2.5 text-[0.9rem]">{footer.university}</b>
            {footer.address}
            <br />
            {footer.accreditation}
          </div>
          <div>
            <b className="text-textdark font-display block mb-2.5 text-[0.9rem]">{footer.admissionsLabel}</b>
            <a href={footer.phoneHref} className="hover:text-violet transition-colors">
              ☎ {footer.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${footer.email}`} className="hover:text-violet transition-colors">
              {footer.email}
            </a>
          </div>
          <div>
            <b className="text-textdark font-display block mb-2.5 text-[0.9rem]">{footer.programLabel}</b>
            {footer.programLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-7 pt-5 border-t border-textdark/10 text-[0.72rem] opacity-80">{footer.fine}</div>
      </div>
    </footer>
  )
}
