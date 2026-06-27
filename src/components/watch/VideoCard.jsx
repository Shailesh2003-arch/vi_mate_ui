import timeAgo from "../../utils/timeAgo";
import { Link } from "react-router-dom";



function VideoCard({ video }) {

    


    return (
    
        <Link to={`/watch/${video._id}`}  className="block">
        <div
           className="
           relative
           cursor-pointer
        bg-zinc-900
        rounded-xl
        p-3
        border
        border-zinc-800
        hover:border-zinc-700
        transition-all
    "
        >

            <img
                src={video.thumbnail.url}
                alt={video.title}
               className="
        w-full
        aspect-video
        object-cover
        rounded-xl
        shadow-lg
    "
            />
               <span
        className="
              absolute
        bottom-2
        right-2
        bg-zinc-900
        text-white
        text-xs
        font-medium
        px-2
        py-1
        rounded-md
        border
        border-zinc-700
        "
    >
        {(video.duration)}
                </span>


            <div className="flex gap-3 mt-3">

                <img
                    src={video.owner.avatar.url}
                    alt={video.owner.username}
                    className="
                        w-10
                        h-10
                        rounded-full
                        object-cover
                    "
                />

                <div>

                    <h3
                        className="
                            font-semibold
                            text-white
                            line-clamp-2
                        "
                    >
                        {video.title}
                    </h3>

                    <p
                        className="
                            text-sm
                            text-zinc-400
                            mt-1
                        "
                    >
                        {video.owner.username}
                    </p>

                   <p className="text-sm text-zinc-400">
    {video.views} views • {timeAgo(video.createdAt)}
</p>

                </div>

            </div>

        </div>

        </Link>
        
    );
}

export default VideoCard;