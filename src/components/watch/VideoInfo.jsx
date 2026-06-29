import {
    BiLike,
    BiDislike
} from "react-icons/bi";

import { PiShareFat } from "react-icons/pi";
import { RiPlayListAddLine } from "react-icons/ri";
import { useToggleReaction } from "../../hooks/useToggleReaction.js";

function VideoInfo({ video, videoId }) {
    const { mutate: toggleReaction, isPending } = useToggleReaction();
    if (!video) return null;


    return (
        <div className="mt-4 space-y-4">

            {/* Title */}
            <h1 className="text-2xl font-bold text-white">
                {video.title}
            </h1>

            {/* Views + Action Buttons */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* Views */}
                {/* <p className="text-zinc-400">
                    {video.views.toLocaleString()} views
                </p> */}

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">

                    <button disabled={isPending}
    onClick={() =>
        toggleReaction({
            videoId,
            type: "like",
        })
    }
                        className={
                            `
                            
                             flex
        items-center
        gap-2
        rounded-full
        px-4
        py-2
        cursor-pointer
        transition-colors
                             ${
            video.userReaction === "like"
               ? "bg-blue-900/40 text-blue-300 hover:bg-blue-900/50"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
        }    
                            
                            
                            `
                        }
                        
                    >
                        <BiLike size={20} />
                        <span>{video.likes}</span>
                    </button>

                    <button disabled={isPending}
    onClick={() =>
        toggleReaction({
            videoId,
            type: "dislike",
        })
    }
                         className={`
        flex
        items-center
        gap-2
        rounded-full
        px-4
        py-2
        cursor-pointer
        transition-colors
        ${
            video.userReaction === "dislike"
                ? "bg-blue-900/40 text-blue-300 hover:bg-blue-900/50"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
        }
    `}
                    >
                        <BiDislike size={20} />
                        <span>{video.dislikes}</span>
                    </button>

                    <button
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-zinc-800
                            px-4
                            py-2
                            hover:bg-zinc-700
                            transition-colors
                        "
                    >
                        <PiShareFat size={20} />
                        <span>Share</span>
                    </button>

                    <button
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-zinc-800
                            px-4
                            py-2
                            hover:bg-zinc-700
                            transition-colors
                        "
                    >
                        <RiPlayListAddLine size={20} />
                        <span>Save</span>
                    </button>

                </div>

            </div>

        </div>
    );
}

export default VideoInfo;