import { formatDistanceToNow } from "date-fns";
import { BiLike, BiDislike } from "react-icons/bi";

function CommentItem({ comment }) {
  return (
    <div className="flex gap-4">

      {/* Avatar */}
      <img
        src={comment.owner.avatar}
        alt={comment.owner.username}
        className="
          h-10
          w-10
          rounded-full
          object-cover
          flex-shrink-0
        "
      />

      {/* Content */}
      <div className="flex-1">

        {/* Header */}
        <div className="flex items-center gap-2">

          <h4
            className="
              font-medium
              text-white
            "
          >
            @{comment.owner.username}
          </h4>

          <span
            className="
              text-sm
              text-zinc-500
            "
          >
            {formatDistanceToNow(new Date(comment.createdAt), {
              addSuffix: true,
            })}
          </span>

        </div>

        {/* Comment Text */}
        <p
          className="
            mt-1
            whitespace-pre-wrap
            text-zinc-200
          "
        >
          {comment.text}
        </p>

        {/* Actions */}
        <div
          className="
            mt-3
            flex
            items-center
            gap-5
            text-zinc-400
          "
        >

          <button
            className="
              flex
              items-center
              gap-1
              transition-colors
              hover:text-white
            "
          >
            <BiLike size={18} />
            <span>{comment.likes}</span>
          </button>

          <button
            className="
              flex
              items-center
              gap-1
              transition-colors
              hover:text-white
            "
          >
            <BiDislike size={18} />
            <span>{comment.dislikes}</span>
          </button>

          <button
            className="
              text-sm
              font-medium
              transition-colors
              hover:text-white
            "
          >
            Reply
          </button>

        </div>

      </div>

    </div>
  );
}

export default CommentItem;