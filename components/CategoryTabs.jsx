const CategoryTabs = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            type="button"
            key={category}
            onClick={() => onSelect(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-primary-600 text-white shadow"
                : "bg-white text-secondary-600 hover:bg-secondary-100"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
