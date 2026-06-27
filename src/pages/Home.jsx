import { useEffect, useState } from "react";
import { getFeedVideos } from "../services/video-service/VideoService.js";

import VideoCard from "../components/watch/VideoCard.jsx";

function Home() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const fetchVideos = async () => {

            try {

                const response =
                    await getFeedVideos();

                setVideos(
                    response.data.videos
                );

            } catch (error) {

                console.log(error);
            }
        };

        fetchVideos();

    }, []);

    return (

        
    <div
        className="
            bg-zinc-950
            p-6
        "
        
    >



        <div
            className="
                grid
                gap-6
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
            "
        >

            {
                videos.map((video) => (
                    <VideoCard
                        key={video._id}
                        video={video}
                    />
                ))
            }

        </div>

    </div>
);
}




export default Home;