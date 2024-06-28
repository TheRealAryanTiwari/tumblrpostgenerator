import { z } from "zod";
import { useRendering } from "../helpers/use-rendering";
import { CompositionProps, COMP_NAME } from "../types/constants";
import { AlignEnd } from "./AlignEnd";
import { Button } from "./Button/Button";
import { InputContainer } from "./Container";
import { DownloadButton } from "./DownloadButton";
import { ErrorComp } from "./Error";
import { Input } from "./Input";
import { ProgressBar } from "./ProgressBar";
import { Spacing } from "./Spacing";
import { generateScript } from "./generateScript";
import { generateAndUploadAudio } from "./generateAndUploadAudio";

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

  async function generateScriptAndAudio() {
    const script = await generateScript(promptText)
    
    if (script) {
      setPostText(script)
      generateAndUploadAudio(script, setAudioURL, setAudioLength)
    }
  }

  return (
    <InputContainer>
      {state.status === "init" ||
      state.status === "invoking" ||
      state.status === "error" ? (
        <>
          <Input
            disabled={state.status === "invoking"}
            setText={setPromptText}
            text={promptText}
          ></Input>
          <Spacing></Spacing>
          <AlignEnd>
            <Button
              disabled={state.status === "invoking"}
              loading={state.status === "invoking"}
              onClick={renderMedia}
            >
              Render video
            </Button>
          </AlignEnd>
          {state.status === "error" ? (
            <ErrorComp message={state.error.message}></ErrorComp>
          ) : null}
        </>
      ) : null}
      {state.status === "rendering" || state.status === "done" ? (
        <>
          <ProgressBar
            progress={state.status === "rendering" ? state.progress : 1}
          />
          <Spacing></Spacing>
          <AlignEnd>
            <DownloadButton undo={undo} state={state}></DownloadButton>
          </AlignEnd>
        </>
      ) : null}

    <Button onClick={generateScriptAndAudio}>Generate Video</Button>

    </InputContainer>
  );
};
