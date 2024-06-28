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
  post: "i love minecraft waiting behaviors. Writing on a sign and you can vaguely see your friend hopping around making spontaneous parkour out of the terrain while they wait for you to finish. writing a message in chat and having the person you're talking to crouch right in front of you or stand as close to you as possible while they wait for you to finish. Finally finishing writing in a book only to see your friend has made several new furniture pieces and/or surrounded you in a cobblestone cube that may or may not have a sign on it. theres something so charming to it",
  audioURL: "https://togetheraibucket.s3.us-east-1.amazonaws.com/ef5937f0-7488-48c5-bca8-90169bdb97fa.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZI2LGZ42P46XDMVZ%2F20240628%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240628T195849Z&X-Amz-Expires=3600&X-Amz-Signature=b229b19d51870380b39dff484af10a3bb3af144c4172263dd01f0689cc2495d5&X-Amz-SignedHeaders=host&x-id=GetObject",
  audioLength: 900
};

export const DURATION_IN_FRAMES = 900;
export const VIDEO_WIDTH = 720;
export const VIDEO_HEIGHT = 1280;
export const VIDEO_FPS = 30;
