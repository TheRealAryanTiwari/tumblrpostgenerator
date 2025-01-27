"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import { Main } from "../remotion/MinecraftTumblr/Main";
import {
  CompositionProps,
  defaultMyCompProps,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { z } from "zod";
import { RenderControls } from "../components/RenderControls";

const container: React.CSSProperties = {
  maxWidth: 400,  
  margin: "auto",
  marginBottom: 20,
  justifyContent:"center",
  alignItems:"center",
};

const outer: React.CSSProperties = {
  borderRadius: "var(--geist-border-radius)",
  overflow: "hidden",
  boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
  marginBottom: 40,
  marginTop: 60,
};

const player: React.CSSProperties = {
  width: "100%",
};

const Home: NextPage = () => {
  const [promptText, setPromptText] = useState<string>(defaultMyCompProps.prompt);
  const [postText, setPostText] = useState<string>(defaultMyCompProps.post)
  const [audioURL, setAudioURL] = useState<string>(defaultMyCompProps.audioURL)
  const [audioLength, setAudioLength] = useState<number>(defaultMyCompProps.audioLength)

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      prompt: promptText,
      post: postText,
      audioURL: audioURL,
      audioLength: audioLength
    };
  }, [promptText, postText, audioURL]);

  return (
    <div>
      <div style={container}>
        <div className="cinematics" style={outer}>
          <Player
            component={Main}
            inputProps={inputProps}
            durationInFrames={audioLength}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={player}
            controls
            loop
          />
        </div>
        <RenderControls
          postText={postText}
          promptText={promptText}
          setPromptText={setPromptText}
          setPostText={setPostText}
          setAudioURL={setAudioURL}
          setAudioLength={setAudioLength}
          inputProps={inputProps}
        />
      </div>
    </div>
  );
};

export default Home;
