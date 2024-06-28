import { AbsoluteFill } from "remotion";
import { BackgroundVideo } from "./BackgroundVideo";
import { TumblrPost } from "./TumblerPost";
import { Voiceover } from "./Voiceover";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";

export const Main = ({ post, audioURL }: z.infer<typeof CompositionProps>) => {
  return (
    <AbsoluteFill
      style = {{ justifyContent:"center", alignItems:"center" }}
    >
      <BackgroundVideo />
      <Voiceover audioURL={audioURL}/>
      <TumblrPost post={post}/>
    </AbsoluteFill>
  )
};
