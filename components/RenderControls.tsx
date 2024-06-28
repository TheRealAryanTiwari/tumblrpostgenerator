import { z } from "zod";
import { useRendering } from "../helpers/use-rendering";
import { CompositionProps, COMP_NAME } from "../types/constants";
import { AlignEnd } from "./AlignEnd";
import { Button } from "./Button/Button";
import { DownloadButton } from "./DownloadButton";
import { ErrorComp } from "./Error";
import { Input } from "./Input";
import { ProgressBar } from "./ProgressBar";
import { Spacing } from "./Spacing";
import { generateScript } from "./generateScript";
import { generateAndUploadAudio } from "./generateAndUploadAudio";
import { loadFont, fontFamily } from "@remotion/google-fonts/Inter";
import React, { useMemo } from "react";

loadFont();

export const RenderControls: React.FC<{
  promptText: string;
  postText: string;
  setPromptText: React.Dispatch<React.SetStateAction<string>>;
  setPostText: React.Dispatch<React.SetStateAction<string>>;
  setAudioURL: React.Dispatch<React.SetStateAction<string>>;
  setAudioLength: React.Dispatch<React.SetStateAction<number>>
  inputProps: z.infer<typeof CompositionProps>;
}> = ({ 
  promptText, 
  setPromptText, 
  setPostText, 
  setAudioURL,
  setAudioLength,
  inputProps 
}) => {
  const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);

  const titleStyle: React.CSSProperties = useMemo(() => {
    return { fontFamily, fontSize: 25, color: "white" };
  }, []);

  async function generateScriptAndAudio() {
    const script = await generateScript(promptText + ". limit the output to less than 175 words")
    
    if (script) {
      setPostText(script)
      generateAndUploadAudio(script, setAudioURL, setAudioLength)
    }
  }

  return (
      // <InputContainer>
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          border: "1px solid var(--unfocused-border-color)",
          padding: "var(--geist-pad)",
          borderRadius: "var(--geist-border-radius)",
          backgroundColor: "var(--background)",

            // border: "solid",
            // borderWidth: 4,
            // borderColor: "green",
            // width: "100%",
        }}>
          
          <div style={{ 
              display:"flex", 
              flexDirection: "column", 
              alignItems: "center",
              justifyContent:"center",

              border: "solid",
              borderWidth: 4,
              borderColor: "red",
          }}>
            {state.status === "init" ||
            state.status === "invoking" ||
            state.status === "error" ? 
              (<>
                <h1 style={titleStyle}>Enter your prompt:</h1>
                <Input
                disabled={state.status === "invoking"}
                setText={setPromptText}
                text={promptText}
                ></Input>
                <Spacing></Spacing>
                <Spacing></Spacing>
                <Spacing></Spacing>
              </>) 
            : null}
            
            {state.status === "init" ||
            state.status === "invoking" ||
            state.status === "error" ? (
              <div style={{ 
                width: "100%",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent:"center",


                border: "solid",
                borderWidth: 4,
                borderColor: "blue",
               }}>
                  <Button onClick={generateScriptAndAudio}>Generate Video</Button>

                  <Spacing></Spacing>
                  <Spacing></Spacing>
                  <Spacing></Spacing>

                  <Button
                    disabled={state.status === "invoking"}
                    loading={state.status === "invoking"}
                    onClick={renderMedia}
                  >
                    Render video
                  </Button>
                {state.status === "error" ? (
                  <ErrorComp message={state.error.message}></ErrorComp>
                ) : null}
                
              </div>
            ) : null}
            {state.status === "rendering" || state.status === "done" ? (
              <div style={{ }}>
                <ProgressBar
                  progress={state.status === "rendering" ? state.progress : 1}
                />
                <Spacing></Spacing>
                <AlignEnd>
                  <DownloadButton undo={undo} state={state}></DownloadButton>
                </AlignEnd>
              </div>
            ) : null}
          </div>
        </div>
      // </InputContainer>
  );
};
