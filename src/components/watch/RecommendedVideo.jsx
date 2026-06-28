import { useNavigate } from "react-router-dom";
import timeAgo from "../../utils/timeAgo.js";
import formatDuration from "../../utils/formatDuration.js"

function RecommendedVideo({ video }) {
    const navigate = useNavigate();

    if (!video) return null;

    const formatUploadDate = (date) => {
        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "short",
                year: "numeric",
            }
        );
    };

    const formatViews = (views) => {
        return views.toLocaleString();
    };

    return (
        <div
            onClick={() => navigate(`/watch/${video._id}`)}
            className="
                flex
                gap-3
                cursor-pointer
                rounded-xl
                p-2
                transition-all
                hover:bg-zinc-900
            "
        >
            {/* Thumbnail */}
            <div
                className="
                    relative
                    w-44
                    shrink-0
                "
            >
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="
                        aspect-video
                        w-full
                        rounded-xl
                        object-cover
                    "
                />

                {/* Duration */}
                <span
                    className="
                        absolute
                        bottom-2
                        right-2
                        rounded
                        bg-black/80
                        px-1.5
                        py-0.5
                        text-xs
                        font-medium
                        text-white
                    "
                >
                    {(video.duration)}
                </span>
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">

                {/* Title */}
                <h3
                    className="
                        line-clamp-2
                        text-sm
                        font-semibold
                        leading-5
                        text-white
                    "
                >
                    {video.title}
                </h3>

                {/* Channel */}
                <p
                    className="
                        mt-1
                        text-xs
                        text-zinc-400
                    "
                >
                    {video.channel.name}
                </p>

                {/* Views + Date */}
                <p
                    className="
                        mt-1
                        text-xs
                        text-zinc-500
                    "
                >
                    {formatViews(video.views)} views
                    {" • "}
                    {timeAgo(video.createdAt)}
                </p>

            </div>
        </div>
    );
}

export default RecommendedVideo;