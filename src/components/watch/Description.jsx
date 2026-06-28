import { useState } from "react";
import timeAgo from "../../utils/timeAgo";

function Description({ video }) {
    const [expanded, setExpanded] = useState(false);

    if (!video) return null;

    const MAX_LENGTH = 180;

    const shouldTruncate =
        video.description.length > MAX_LENGTH;

    const displayedDescription = expanded
        ? video.description
        : video.description.slice(0, MAX_LENGTH);

    

    return (
        <div
            className="
                mt-4
                rounded-xl
                bg-zinc-900
                p-4
                transition-colors
                hover:bg-zinc-800
            "
        >
            {/* Views + Upload Date */}
            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-white
                "
            >
                <span>{video.views.toLocaleString()} views</span>

                <span className="text-zinc-500">•</span>

                <span>{timeAgo(video.createdAt)}</span>
            </div>

            {/* Description */}
            <p
                className="
                    mt-3
                    whitespace-pre-wrap
                    break-words
                    text-sm
                    leading-7
                    text-zinc-300
                "
            >
                {displayedDescription}
                {!expanded && shouldTruncate && "..."}
            </p>

            {/* Show More / Less */}
            {shouldTruncate && (
                <button
                    onClick={() =>
                        setExpanded((prev) => !prev)
                    }
                    className="
                        mt-4
                        text-sm
                        font-semibold
                        text-white
                        transition-colors
                        hover:text-zinc-300
                    "
                >
                    {expanded
                        ? "Show less"
                        : "Show more"}
                </button>
            )}
        </div>
    );
}

export default Description;