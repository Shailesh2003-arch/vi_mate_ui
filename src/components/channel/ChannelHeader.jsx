import { BiUserPlus } from "react-icons/bi";

function ChannelHeader({ channel }) {
  return (
    <div className="border-b border-zinc-800">

      {/* Cover */}
      <div className="h-52 w-full overflow-hidden bg-zinc-900 lg:h-64">
        {channel.coverImage ? (
          <img
            src={channel.coverImage.url}
            alt="Cover"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-zinc-500">
            No Cover Image
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mx-auto max-w-7xl px-6 py-6">

        <div className="flex flex-col gap-6 md:flex-row md:items-center">

          {/* Avatar */}
          <img
            src={channel.avatar.url}
            alt={channel.username}
            className="
              h-24
              w-24
              rounded-full
              border-4
              border-zinc-950
              object-cover
              shadow-lg
              md:h-32
              md:w-32
            "
          />

          {/* Right Side */}
          <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center md:justify-between">

            {/* Text */}
            <div>

              <h1 className="text-4xl font-bold tracking-tight">
                {channel.username}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-400">

                <span>
                  {channel.subscribersCount.toLocaleString()}{" "}
                  {channel.subscribersCount === 1
                    ? "Subscriber"
                    : "Subscribers"}
                </span>

                <span>•</span>

                <span>
                  {channel.videosCount}{" "}
                  {channel.videosCount === 1
                    ? "Video"
                    : "Videos"}
                </span>

              </div>

            </div>

            {/* Subscribe */}
            <button
              className={`
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                px-6
                py-3
                font-semibold
                transition-all
                duration-200

                ${
                  channel.isSubscribed
                    ? "bg-zinc-800 text-white hover:bg-zinc-700"
                    : "bg-white text-black hover:bg-zinc-200"
                }
              `}
            >
              <BiUserPlus size={20} />

              {channel.isSubscribed
                ? "Subscribed"
                : "Subscribe"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ChannelHeader;