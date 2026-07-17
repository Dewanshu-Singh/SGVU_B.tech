export default function Chip({ strong, color, children }) {
  return (
    <span className="font-mono text-[0.68rem] tracking-wide text-muted-light border border-textdark/12 bg-white px-3.5 py-1.5 rounded-full">
      {strong && (
        <b className="font-semibold" style={color ? { color } : undefined}>
          {strong}{' '}
        </b>
      )}
      {children}
    </span>
  )
}
