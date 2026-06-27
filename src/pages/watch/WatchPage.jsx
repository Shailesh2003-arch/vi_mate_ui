import { useVideo } from "../../hooks/useVideo";
import VideoPlayer from "../../components/watch/VideoPlayer.jsx";
import VideoInfo from "../../components/watch/VideoInfo.jsx";
import { useParams } from "react-router-dom";
function WatchPage() {

    const { videoId } = useParams();

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

        <div className="min-h-screen bg-zinc-950 text-white p-6">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                 <div className="lg:col-span-2">

                <VideoPlayer streamUrl={watchData?.streamUrl}
                             videoId={videoId}
                />

                <VideoInfo video={watchData?.video} />

            </div>
            </div>

            {/* <RecommendedVideos /> */}

        </div>

    );

}

export default WatchPage;