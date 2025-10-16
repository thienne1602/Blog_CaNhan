const TagCloud = ({ tags, activeTags, onToggle }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isActive = activeTags.includes(tag);
        return (
          <button
            type="button"
            key={tag}
            onClick={() => onToggle(tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-primary-600 text-white shadow"
                : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
            }`}
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
};

export default TagCloud;
