import {useEffect, useRef, useCallback} from "react";
import Hls from "hls.js";
import { useWatchVideo } from "../../hooks/useVideo";


function VideoPlayer({ streamUrl, videoId }) {
    const videoRef = useRef(null);
    const hasCountedView = useRef(false);

    const { mutate: countView } = useWatchVideo();

    // Reset view tracking whenever a new video is loaded
    useEffect(() => {
        hasCountedView.current = false;
    }, [videoId]);

    const handleTimeUpdate = useCallback(() => {
        if (!videoRef.current) return;

        if (
            videoRef.current.currentTime >= 10 &&
            !hasCountedView.current
        ) {
            hasCountedView.current = true;

            countView(videoId);

            console.log("✅ View Counted");
        }
    }, [videoId, countView]);

    useEffect(() => {
        if (!streamUrl || !videoRef.current) return;

        const video = videoRef.current;

        // Track playback time
        video.addEventListener("timeupdate", handleTimeUpdate);

        let hls = null;

        // Chrome / Edge / Firefox
        if (Hls.isSupported()) {
            hls = new Hls();

            hls.loadSource(streamUrl);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                console.log("🎥 Video is ready to play.");
            });
        }

        // Safari (Native HLS)
        else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = streamUrl;

            video.addEventListener("loadedmetadata", () => {
                console.log("🎥 Video is ready to play.");
            });
        }

        return () => {
            video.removeEventListener(
                "timeupdate",
                handleTimeUpdate
            );

            if (hls) {
                hls.destroy();
            }
        };
    }, [streamUrl, handleTimeUpdate]);

    return (
        <video
            ref={videoRef}
            controls
            className="w-full rounded-xl bg-black"
        />
    );
}

export default VideoPlayer;



