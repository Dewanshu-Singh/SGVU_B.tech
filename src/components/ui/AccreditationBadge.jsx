export default function AccreditationBadge({ title, subtitle, onLight = false }) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      {title === 'NAAC A+' && <img src="/NAAC.webp" alt="NAAC A+" className="h-[74px] object-contain mix-blend-multiply" />}
      {title === 'UGC' && <img src="/ugc.webp" alt="UGC" className="h-[74px] object-contain mix-blend-multiply" />}
      {title === 'NIRF' && <img src="/NIRF.webp" alt="NIRF" className="h-[74px] object-contain mix-blend-multiply" />}
      {title !== 'NAAC A+' && title !== 'UGC' && title !== 'NIRF' && (
        <div className="w-16 h-[74px] bg-white rounded-full flex items-center justify-center font-bold text-ink drop-shadow-sm">{title.substring(0,2)}</div>
      )}
      <div>
        <b className={`block font-display font-bold text-sm ${onLight ? 'text-textdark' : 'text-white'}`}>
          {title}
        </b>
        <span
          className={`block font-mono text-[0.62rem] uppercase tracking-wide ${
            onLight ? 'text-muted-light' : 'text-muted-dark'
          }`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  )
}
