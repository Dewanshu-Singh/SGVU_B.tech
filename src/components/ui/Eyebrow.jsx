export default function Eyebrow({ children, onLight = false, className = '' }) {
  return (
    <span
      className={`font-mono text-[0.72rem] tracking-[0.14em] uppercase inline-flex items-center gap-2 ${
        onLight ? 'text-violet' : 'text-lime'
      } ${className}`}
    >
      <span className={`w-[22px] h-px ${onLight ? 'bg-violet' : 'bg-lime'}`} />
      {children}
    </span>
  )
}
