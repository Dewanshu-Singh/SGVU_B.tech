const VARIANTS = {
  lime: 'bg-lime text-ink hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,241,53,.25)]',
  violet: 'bg-violet text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(123,92,255,.35)]',
  ghost: 'bg-transparent text-textdark border border-textdark/15 hover:border-violet hover:text-violet',
}

export default function Button({
  as: Component = 'button',
  variant = 'violet',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold text-[0.95rem] px-6 py-3.5 transition-all duration-150 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
