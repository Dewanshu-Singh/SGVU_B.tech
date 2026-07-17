function hashSeed(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

export default function PhotoPlaceholder({ label, seed, index = 0, className = '', aspect = 'aspect-[4/3]', style }) {
  const key = seed || label || `photo-${index}`
  const src = `https://picsum.photos/seed/${hashSeed(key)}/640/480`

  return (
    <div
      className={`relative ${aspect} rounded-brand overflow-hidden border border-textdark/10 bg-paper-2 ${className}`}
      style={style}
    >
      <img
        src={src}
        alt={label || 'Placeholder photo — replace with real photography'}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {label && (
        <span className="absolute bottom-2.5 left-2.5 font-mono text-[0.6rem] tracking-wide text-white/85 bg-black/45 backdrop-blur-sm px-2 py-1 rounded-full">
          📷 {label} (stock — replace later)
        </span>
      )}
    </div>
  )
}
