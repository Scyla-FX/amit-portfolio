import { user } from '../data/mockData'

interface NavbarProps {
  cartCount: number
}

export function Navbar({ cartCount }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-5 py-3.5">
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange text-base shadow-sm">
            👨‍🍳
          </div>
          <span className="text-[17px] font-extrabold text-ink">Iepoipsum</span>
        </a>

        <div className="relative mx-auto hidden max-w-[440px] flex-1 md:block">
          <svg className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Search delicious food, cuisines, or restaurants..."
            className="w-full rounded-xl border border-black/[0.06] bg-[#fff8f0] py-2.5 pl-10 pr-14 text-[13px] text-ink outline-none focus:border-orange/40 focus:ring-2 focus:ring-orange/10"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-black/[0.08] bg-white px-1.5 py-0.5 text-[10px] text-ink-muted">
            Ctrl + K
          </kbd>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button type="button" className="relative rounded-xl p-2 text-ink-muted hover:bg-orange-soft hover:text-orange">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-orange ring-2 ring-white" />
            )}
          </button>
          <div className="hidden items-center gap-2.5 sm:flex">
            <img src={user.avatar} alt={user.name} className="h-9 w-9 rounded-full object-cover" />
            <div>
              <p className="text-[13px] font-bold leading-tight text-ink">{user.name}</p>
              <p className="text-[11px] font-semibold text-orange">{user.tier}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
