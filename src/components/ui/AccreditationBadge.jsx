export default function AccreditationBadge({ title, subtitle, onLight = false }) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <svg viewBox="0 0 100 116" className="w-16 h-[74px]" aria-hidden="true">
        <defs>
          <linearGradient id={`badge-grad-${title}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7B5CFF" />
            <stop offset="1" stopColor="#C8F135" />
          </linearGradient>
        </defs>
        <path d="M50 2 L61 20 L82 24 L67 40 L71 62 L50 51 L29 62 L33 40 L18 24 L39 20 Z" fill={`url(#badge-grad-${title})`} />
        <circle cx="50" cy="34" r="24" fill="#161129" stroke={`url(#badge-grad-${title})`} strokeWidth="2.5" />
        <path d="M40 70 L50 116 L60 70 Z" fill="#1F1838" />
      </svg>
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
