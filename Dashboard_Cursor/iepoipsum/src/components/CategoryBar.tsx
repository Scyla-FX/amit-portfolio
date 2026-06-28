import { useState } from 'react'
import { categories } from '../data/mockData'

export function CategoryBar() {
  const [active, setActive] = useState('all')

  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-1">
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => setActive(cat.id)}
          className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition ${
            active === cat.id
              ? 'bg-orange text-white shadow-md shadow-orange/25'
              : 'card text-ink-secondary hover:border-orange/20 dark:text-white/80'
          }`}
        >
          <span>{cat.icon}</span>
          {cat.label}
        </button>
      ))}
    </div>
  )
}
