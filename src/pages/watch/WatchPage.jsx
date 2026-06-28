import { useVideo, useRecommendedVideos } from "../../hooks/useVideo";
import VideoPlayer from "../../components/watch/VideoPlayer.jsx";
import VideoInfo from "../../components/watch/VideoInfo.jsx";
import ChannelInfo from "../../components/watch/ChannelInfo.jsx";
import RecommendedVideo from "../../components/watch/RecommendedVideo.jsx";
import Description from "../../components/watch/Description.jsx";
import { useParams } from "react-router-dom";
function WatchPage() {

    const { videoId } = useParams();
    const { data: recommendedVideos } =
    useRecommendedVideos(videoId);

    const {
        data,
        isLoading,
        error
    } = useVideo(videoId);

    if (isLoading)
        return <h1>Loading...</h1>;

    
    if (error)
        return <h1>Something went wrong</h1>;

    const watchData = data;



    return (

        <div className="mx-auto
        max-w-[1800px]
        min-h-screen
        bg-zinc-950
        p-6
        text-white">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                 <div className="lg:col-span-2">

                <VideoPlayer streamUrl={watchData?.streamUrl}
                             videoId={videoId}
                />

            
                <VideoInfo video={watchData?.video} />
                <ChannelInfo channel={watchData?.channel}
                videoId={videoId}
                />

                <Description video={watchData.video}/>
                
            </div>
           <div className="space-y-2">
    {recommendedVideos?.map((video) => (
        <RecommendedVideo
            key={video._id}
            video={video}
        />
    ))}
            </div>

</div>

        </div>

    );

}

export default WatchPage;