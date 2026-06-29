import { toggleSubscription } from "../../services/subscription-service/SubscriptionService.js";
import { useToggleSubscription } from "../../hooks/useSubscription.js";

function ChannelInfo({ channel, videoId }) {
    
    const { mutate: toggleSubscription } = useToggleSubscription();
    
    if (!channel) return null;


    return (
        <div
            className="
                mt-6
                flex
                items-center
                justify-between
                gap-4
            "
        >

            {/* Left Side */}
            <div
                className="
                    flex
                    items-center
                    gap-4
                "
            >

                {/* Avatar */}
                <img
                    src={channel.avatar}
                    alt={channel.name}
                    className="
                        h-12
                        w-12
                        rounded-full
                        object-cover
                    "
                />

                {/* Channel Details */}
                <div>

                    <h2
                        className="
                            text-white
                            font-semibold
                            text-lg
                        "
                    >
                        {channel.name}
                    </h2>

                    <p
                        className="
                            text-sm
                            text-zinc-400
                        "
                    >
                        {channel.subscribersCount.toLocaleString()} subscribers
                    </p>

                </div>

            </div>

            {/* Right Side */}
            <button  onClick={() => {


        toggleSubscription({
            channelId: channel._id,
            videoId,
        });

    }}
                className="
                    rounded-full
                    bg-white
                    px-5
                    py-2
                    font-semibold
                    text-black
                    transition
                    hover:bg-zinc-200
                "
            >
              {channel.isSubscribed
                    ? "Subscribed"
                    : "Subscribe"}
            </button>

        </div>
    );
}

export default ChannelInfo;