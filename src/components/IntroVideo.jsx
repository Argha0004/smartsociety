import { useEffect, useRef, useState } from "react";
import { MoveRight } from "lucide-react";
import introVideo from "../assets/load.mp4";

function IntroVideo() {
    const videoRef = useRef(null);
    const [showSkip, setShowSkip] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const handleTimeUpdate = () => {
            if (!video.duration || showSkip) return;

            const skipTime = video.duration * 0.5;

            if (video.currentTime >= skipTime) {
                setShowSkip(true);
            }
        };

        const handleEnded = () => {
            setIsVisible(false);
        };

        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("ended", handleEnded);

        video.play().catch(() => {
            // Browser autoplay fallback
        });

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("ended", handleEnded);
        };
    }, [showSkip]);

    const handleSkip = () => {
        const video = videoRef.current;

        if (video) {
            video.pause();
        }

        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className="
                fixed
                inset-0
                z-9999
                h-screen
                w-full
                overflow-hidden
                bg-black
            "
        >
            <video
                ref={videoRef}
                src={introVideo}
                muted
                playsInline
                preload="auto"
                className="
                    h-full
                    w-full
                    object-cover
                "
            />

            {/* Dark overlay */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/20
                "
            />

            {/* Skip button */}
            {showSkip && (
                <button
                    type="button"
                    onClick={handleSkip}
                    className="
                        group
                        absolute
                        bottom-6
                        right-6
                        z-10
                        flex
                        items-center
                        justify-center
                        left-1/2
                        -translate-x-1/2
                        gap-2
                        rounded-full
                        border
                        border-accent-light/40
                        bg-black/45
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wide
                        text-accent-light
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-accent-light
                        hover:bg-primary-light
                        sm:bottom-8
                        sm:right-8
                    "
                >
                    <span>Skip</span>

                    <MoveRight
                        className="
                            h-5
                            w-5
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        
                        "
                    />
                </button>
            )}
        </div>
    );
}

export default IntroVideo;