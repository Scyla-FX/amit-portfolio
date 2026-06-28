import { favoriteRestaurants } from '../data/mockData'

const cardShadow = '0 1px 3px rgb(28 28 30 / 0.04), 0 8px 24px rgb(28 28 30 / 0.06)'

export function FavoritesGrid() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-[18px] font-extrabold text-ink">Your Favorites</h2>
        <p className="text-[13px] text-ink-muted">4 saved restaurants · cuisine tags & delivery times</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {favoriteRestaurants.map((r) => (
          <article
            key={r.id}
            className="overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5"
            style={{ boxShadow: cardShadow }}
          >
            <div className="relative h-[88px]">
              <img src={r.image} alt={r.name} className="h-full w-full object-cover" loading="lazy" />
              {r.discount && (
                <span className="absolute right-2 top-2 rounded-md bg-orange px-1.5 py-0.5 text-[9px] font-bold text-white">
                  {r.discount}
                </span>
              )}
            </div>
            <div className="p-2.5">
              <p className="truncate text-[13px] font-bold text-ink">{r.name}</p>
              <p className="mt-0.5 text-[10px] text-ink-muted">★ {r.rating} · {r.deliveryTime}</p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {r.cuisine.map((t) => (
                  <span key={t} className="rounded bg-[#fff0ea] px-1.5 py-0.5 text-[9px] font-semibold text-orange">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
