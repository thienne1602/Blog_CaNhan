import { Calendar, Clock, Flame } from "lucide-react";
import { formatDate } from "@/utils/formatDate.js";

const PostMeta = ({ post }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
      <span className="inline-flex items-center gap-1">
        <Calendar size={14} />
        {formatDate(post.date)}
      </span>
      <span className="inline-flex items-center gap-1">
        <Clock size={14} />
        {post.readTime}
      </span>
      {post.level && (
        <span className="inline-flex items-center gap-1">
          <Flame size={14} />
          {post.level}
        </span>
      )}
    </div>
  );
};

export default PostMeta;
