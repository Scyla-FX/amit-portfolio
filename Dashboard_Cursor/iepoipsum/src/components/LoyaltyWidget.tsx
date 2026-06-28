import { loyalty } from '../data/mockData'

export function LoyaltyWidget() {
  const pct = Math.round((loyalty.current / loyalty.target) * 100)
  const remaining = loyalty.target - loyalty.current
  const r = 44
  const circ = 2 * Math.PI * r
  const offset = circ - (loyalty.current / loyalty.target) * circ

  return (
    <section
      className="rounded-2xl bg-white p-5"
      style={{ boxShadow: '0 1px 3px rgb(28 28 30 / 0.04), 0 8px 24px rgb(28 28 30 / 0.06)' }}
    >
      <p className="text-[15px] font-extrabold text-ink">Loyalty Points</p>
      <div className="mt-4 flex items-center gap-5">
        <div className="relative shrink-0">
          <svg className="h-[108px] w-[108px] -rotate-90" viewBox="0 0 108 108">
            <circle cx="54" cy="54" r={r} fill="none" stroke="#fff0ea" strokeWidth="9" />
            <circle
              cx="54"
              cy="54"
              r={r}
              fill="none"
              stroke="#ff6b35"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[22px] font-extrabold leading-none text-ink">{loyalty.current}</span>
            <span className="mt-0.5 text-[10px] font-medium text-ink-muted">of {loyalty.target}</span>
          </div>
        </div>
        <div>
          <p className="text-[13px] text-ink-muted">
            <span className="font-extrabold text-orange">{remaining} points</span> until
          </p>
          <p className="text-[16px] font-extrabold text-ink">{loyalty.reward}</p>
          <div className="mt-3 h-2 w-40 overflow-hidden rounded-full bg-[#fff0ea]">
            <div className="h-full rounded-full bg-orange" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-1 text-[11px] font-semibold text-ink-muted">{pct}% complete</p>
        </div>
      </div>
    </section>
  )
}
