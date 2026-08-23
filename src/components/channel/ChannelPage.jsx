import { useParams } from "react-router-dom";
import { useChannel } from "../../hooks/useChannel.js";
import { useChannelVideos } from "../../hooks/useChannelVideos.js";
import ChannelHeader from "./ChannelHeader.jsx";
import ChannelVideosGrid from "./ChannelVideosGrid.jsx";

function ChannelPage() {
  const { channelId } = useParams();

  const {
    data: channel,
    isLoading: channelLoading,
    isError: channelError,
  } = useChannel(channelId);

  const {
    data: videos,
    isLoading: videosLoading,
    isError: videosError,
  } = useChannelVideos(channelId);

  if (channelLoading || videosLoading) {
    return (
      <div className="p-10 text-center text-zinc-400">
        Loading...
      </div>
    );
  }

  if (channelError || videosError) {
    return (
      <div className="p-10 text-center text-red-500">
        Failed to load channel.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <ChannelHeader channel={channel} />

      <ChannelVideosGrid
        videos={videos.docs}
      />

    </div>
  );
}

export default ChannelPage;