import { activeOrder, orderSteps, type OrderStep } from '../data/mockData'

const cardShadow = '0 1px 3px rgb(28 28 30 / 0.04), 0 8px 24px rgb(28 28 30 / 0.06)'

const idx = (s: OrderStep) => orderSteps.findIndex((x) => x.key === s)

export function ActiveOrder() {
  const current = idx(activeOrder.step)

  return (
    <section className="overflow-hidden rounded-2xl bg-white" style={{ boxShadow: cardShadow }}>
      <div className="border-b border-black/[0.05] px-4 py-3.5">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-[15px] font-extrabold text-ink">Active Order</h2>
              <span className="rounded bg-green-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-green-700">
                Live
              </span>
            </div>
            <p className="text-[11px] text-ink-muted">{activeOrder.id}</p>
          </div>
          <div className="text-right">
            <p className="text-[26px] font-extrabold leading-none text-orange">{activeOrder.eta}</p>
            <p className="text-[10px] font-semibold uppercase text-ink-muted">min left</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div>
          <p className="text-[13px] font-semibold text-ink">{activeOrder.items}</p>
          <p className="text-[11px] text-ink-muted">{activeOrder.restaurant}</p>
        </div>

        <div className="relative">
          <div className="absolute left-2 right-2 top-3 h-0.5 rounded bg-[#fff0ea]" />
          <div
            className="absolute left-2 top-3 h-0.5 rounded bg-orange"
            style={{ width: `calc(${(current / (orderSteps.length - 1)) * 100}% - 16px)` }}
          />
          <div className="relative flex justify-between">
            {orderSteps.map((step, i) => {
              const done = i <= current
              const active = i === current
              return (
                <div key={step.key} className="flex flex-col items-center gap-1">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold ${
                      done ? 'bg-orange text-white' : 'bg-[#fff0ea] text-ink-muted'
                    } ${active ? 'ring-2 ring-orange/30' : ''}`}
                  >
                    {done ? '✓' : i + 1}
                  </div>
                  <span className={`max-w-[52px] text-center text-[8px] font-semibold leading-tight ${active ? 'text-orange' : 'text-ink-muted'}`}>
                    {step.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative h-24 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 280 96" preserveAspectRatio="none">
            <path d="M10,70 Q70,50 140,60 T270,45" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
          </svg>
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 text-xl">📍</div>
          <p className="absolute bottom-2 left-2 text-[10px] font-semibold text-emerald-800">
            {activeOrder.driver} · 1.2 km away
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-[#fff8f0] p-3">
          <img src={activeOrder.driverAvatar} alt="" className="h-9 w-9 rounded-lg object-cover" />
          <div className="flex-1">
            <p className="text-[12px] font-bold text-ink">{activeOrder.driver}</p>
            <p className="text-[10px] text-ink-muted">Delivery partner</p>
          </div>
          <button type="button" className="rounded-lg bg-orange px-3 py-1.5 text-[11px] font-bold text-white">
            Track
          </button>
        </div>
      </div>
    </section>
  )
}
