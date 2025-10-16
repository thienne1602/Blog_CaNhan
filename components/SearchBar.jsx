import { Search } from "lucide-react";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Tìm kiếm bài viết, chủ đề, từ khóa...",
}) => {
  return (
    <label className="relative block w-full">
      <span className="absolute inset-y-0 left-3 flex items-center text-secondary-400">
        <Search size={18} />
      </span>
      <input
        type="search"
        className="w-full rounded-xl border border-secondary-200 bg-white py-3 pl-10 pr-4 text-sm text-secondary-700 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};

export default SearchBar;
