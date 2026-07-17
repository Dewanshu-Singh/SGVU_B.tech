import Eyebrow from './Eyebrow'

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  onLight = false,
  center = false,
  className = '',
}) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <Eyebrow onLight={onLight} className={center ? 'justify-center' : ''}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`font-display font-bold leading-[1.12] tracking-[-0.01em] text-[clamp(1.7rem,3.6vw,2.6rem)] mt-3.5 mb-3 ${
          onLight ? 'text-textdark' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`max-w-xl text-[1.02rem] ${center ? 'mx-auto' : ''} ${
            onLight ? 'text-muted-light' : 'text-muted-dark'
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
