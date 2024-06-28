import { OffthreadVideo, staticFile } from "remotion";

export const BackgroundVideo: React.FC = () => {
    return (
        <OffthreadVideo src={staticFile("parkourGameplay.mp4")} 
            style={{
                scale: "3.2",
                transform: `translateY(137px)`,
            }}
        />
    )
};