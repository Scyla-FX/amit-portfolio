import { featuredFood } from '../data/mockData'

const cardShadow = '0 1px 3px rgb(28 28 30 / 0.04), 0 8px 24px rgb(28 28 30 / 0.06)'

interface FeaturedProps {
  onAdd: () => void
}

export function FeaturedToday({ onAdd }: FeaturedProps) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-[18px] font-extrabold text-ink">Featured Today</h2>
        <p className="text-[13px] text-ink-muted">Handpicked meals prepared fresh today</p>
      </div>

      <div className="scrollbar-hide -mx-1 flex gap-4 overflow-x-auto px-1 pb-1">
        {featuredFood.map((item) => (
          <article
            key={item.id}
            className="w-[220px] shrink-0 overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5"
            style={{ boxShadow: cardShadow }}
          >
            <div className="relative h-[148px]">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute right-2.5 top-2.5 rounded-lg bg-white px-2 py-0.5 text-[11px] font-bold text-ink shadow-sm">
                ★ {item.rating}
              </span>
            </div>
            <div className="p-3.5">
              <h3 className="text-[14px] font-bold text-ink">{item.name}</h3>
              <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-ink-muted">{item.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[16px] font-extrabold text-orange">${item.price.toFixed(2)}</span>
                <button
                  type="button"
                  onClick={onAdd}
                  className="rounded-lg bg-orange px-3.5 py-1.5 text-[12px] font-bold text-white hover:bg-orange-hover"
                >
                  + Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
