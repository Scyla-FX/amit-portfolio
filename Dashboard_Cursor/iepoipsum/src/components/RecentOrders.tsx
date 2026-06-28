import { recentOrders } from '../data/mockData'

export function RecentOrders() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-[18px] font-extrabold text-ink">Recent Orders</h2>
        <p className="text-[13px] text-ink-muted">Your last 3 orders — reorder in one tap</p>
      </div>
      <div
        className="divide-y divide-black/[0.05] overflow-hidden rounded-2xl bg-white"
        style={{ boxShadow: '0 1px 3px rgb(28 28 30 / 0.04), 0 8px 24px rgb(28 28 30 / 0.06)' }}
      >
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center gap-4 p-4">
            <img src={order.thumbnail} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-bold text-ink">{order.itemName}</p>
              <p className="text-[12px] text-ink-muted">{order.restaurant}</p>
              <p className="text-[11px] text-ink-muted">{order.date}</p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <span className="text-[15px] font-extrabold text-ink">${order.total.toFixed(2)}</span>
              <button
                type="button"
                className="rounded-lg bg-orange px-3 py-1.5 text-[11px] font-bold text-white hover:bg-orange-hover"
              >
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
