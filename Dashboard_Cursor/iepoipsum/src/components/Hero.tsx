import { quickReorder, user } from '../data/mockData'

interface HeroProps {
  onReorder: () => void
}

export function Hero({ onReorder }: HeroProps) {
  return (
    <section
      className="overflow-hidden rounded-2xl p-6 sm:p-8"
      style={{
        background: 'linear-gradient(135deg, #fff0ea 0%, #fff8f0 50%, #ffe8dc 100%)',
        boxShadow: '0 1px 3px rgb(28 28 30 / 0.04), 0 8px 24px rgb(28 28 30 / 0.06)',
      }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-[28px] font-extrabold leading-tight text-ink sm:text-[32px]">
            Good evening, {user.firstName} 👋
          </h1>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted">
            Hungry? We have <strong className="font-semibold text-orange">38 hot deals</strong> waiting
            for you in your neighborhood today.
          </p>
        </div>

        <div
          className="flex w-full shrink-0 items-center gap-4 rounded-2xl bg-white p-4 sm:w-[340px]"
          style={{ boxShadow: '0 4px 16px rgb(28 28 30 / 0.08)' }}
        >
          <img
            src={quickReorder.image}
            alt={quickReorder.name}
            className="h-[72px] w-[72px] shrink-0 rounded-xl object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">Quick Reorder</p>
            <p className="text-[14px] font-bold leading-snug text-ink">{quickReorder.name}</p>
            <button
              type="button"
              onClick={onReorder}
              className="mt-2.5 w-full rounded-xl bg-orange py-2.5 text-[13px] font-bold text-white hover:bg-orange-hover"
            >
              ↻ Reorder Now — ${quickReorder.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
