import { useEffect, useState } from 'react'
import { coupons } from '../data/mockData'

function useCountdown(expiresAt?: number) {
  const [time, setTime] = useState('')

  useEffect(() => {
    if (!expiresAt) return
    const tick = () => {
      const diff = Math.max(0, expiresAt - Date.now())
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTime(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [expiresAt])

  return time
}

function CouponCard({ coupon }: { coupon: (typeof coupons)[0] }) {
  const countdown = useCountdown(coupon.expiresAt)
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(coupon.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl p-4 text-white ${coupon.bg}`}>
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10" />
      <p className="text-[28px] font-extrabold leading-none">{coupon.discount}</p>
      <p className="mt-1 text-[12px] text-white/80">{coupon.subtitle}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="rounded-lg bg-white/20 px-2.5 py-1 font-mono text-[12px] font-bold tracking-wide">
          {coupon.code}
        </span>
        <button
          type="button"
          onClick={copy}
          className="cursor-pointer rounded-lg bg-white/25 px-3 py-1 text-[11px] font-bold transition hover:bg-white/35"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      {countdown && (
        <p className="mt-2.5 flex items-center gap-1.5 text-[11px] font-medium text-white/90">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Expiring in {countdown}
        </p>
      )}
    </div>
  )
}

export function OffersSidebar() {
  return (
    <aside>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[16px] font-extrabold text-ink dark:text-white">Offers & Coupons</h2>
        <span className="rounded-md bg-orange-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange">
          Exclusive Deals
        </span>
      </div>
      <div className="space-y-3">
        {coupons.map((c) => (
          <CouponCard key={c.id} coupon={c} />
        ))}
      </div>
    </aside>
  )
}
