import VideoCard from "../watch/VideoCard.jsx";

function ChannelVideosGrid({ videos }) {
  if (!videos?.length) {
    return (
      <div
        className="
          flex
          items-center
          justify-center
          py-20
          text-zinc-500
        "
      >
        This channel hasn't uploaded any videos yet.
      </div>
    );
  }

  return (
    <div
      className="
        mx-auto
        max-w-7xl
        px-6
        py-8
      "
    >
      <h2
        className="
          mb-6
          text-2xl
          font-semibold
          text-white
        "
      >
        Videos
      </h2>

      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {videos.map((video) => (
          <VideoCard
            key={video._id}
            video={video}
          />
        ))}
      </div>
    </div>
  );
}

export default ChannelVideosGrid;