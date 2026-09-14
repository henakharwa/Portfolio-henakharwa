export default function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-slate-700 bg-slate-900/60 px-2 py-1 font-mono text-xs text-slate-300">
      {children}
    </span>
  )
}
