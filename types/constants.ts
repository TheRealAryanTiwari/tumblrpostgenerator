import { staticFile } from "remotion";
import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  prompt: z.string(),
  post: z.string(),
  audioURL: z.string(),
  // audioLength: z.number()
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  prompt: "Tumblr post about minecraft",
  post: "i love minecraft waiting behaviors. Writing on a sign and you can vaguely see your friend hopping around making spontaneous parkour out of the terrain while they wait for you to finish. writing a message in chat and having the person you're talking to crouch right in front of you or stand as close to you as possible while they wait for you to finish. Finally finishing writing in a book only to see your friend has made several new furniture pieces and/or surrounded you in a cobblestone cube that may or may not have a sign on it. theres something so charming to it",
  audioURL: staticFile("voiceover.mp3"),
  // audioLength: 30 * 30
};

export const DURATION_IN_FRAMES = 900;
export const VIDEO_WIDTH = 720;
export const VIDEO_HEIGHT = 1280;
export const VIDEO_FPS = 30;
