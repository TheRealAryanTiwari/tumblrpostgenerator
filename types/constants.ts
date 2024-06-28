// import { staticFile } from "remotion";
import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  prompt: z.string(),
  post: z.string(),
  audioURL: z.string(),
  audioLength: z.number()
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  prompt: "Tumblr post about Minecraft",
  post: "Ah, Minecraft, my beloved digital escape from reality. There's something so satisfying about building a cozy little cottage in the middle of a desert, surrounded by nothing but sand and cacti. And don't even get me started on the thrill of exploring abandoned mineshafts, searching for hidden treasures and avoiding those pesky skeletons. But what really gets me is the sense of community. Whether it's collaborating with friends to build an epic castle or joining a server with strangers to take down a giant dragon, Minecraft has a way of bringing people together. So, fellow Minecraft enthusiasts, what's your favorite thing to do in the game? Do you prefer building, exploring, or fighting off monsters? Let me know in the comments below!",
  audioURL: "https://togetheraibucket.s3.us-east-1.amazonaws.com/ef5937f0-7488-48c5-bca8-90169bdb97fa.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZI2LGZ42P46XDMVZ%2F20240628%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240628T195849Z&X-Amz-Expires=3600&X-Amz-Signature=b229b19d51870380b39dff484af10a3bb3af144c4172263dd01f0689cc2495d5&X-Amz-SignedHeaders=host&x-id=GetObject",
  audioLength: 900
};

export const DURATION_IN_FRAMES = 900;
export const VIDEO_WIDTH = 720;
export const VIDEO_HEIGHT = 1280;
export const VIDEO_FPS = 30;
