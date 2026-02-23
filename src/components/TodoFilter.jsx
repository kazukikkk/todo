function TodoFilter({ filter, onFilterChange, activeCount, completedCount, totalCount }) {
  const filters = [
    { key: 'all', label: `すべて (${totalCount})` },
    { key: 'active', label: `未完了 (${activeCount})` },
    { key: 'completed', label: `完了済み (${completedCount})` },
  ]

  return (
    <div className="filter-bar">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          className={`filter-btn ${filter === key ? 'active' : ''}`}
          onClick={() => onFilterChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
