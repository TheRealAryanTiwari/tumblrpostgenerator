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
import { createAudioStreamFromText } from "./text_to_speech_stream";
import { generatePresignedUrl, uploadAudioStreamToS3 } from "./s3_uploader";
import { getAudioData } from "@remotion/media-utils";

import Together from "together-ai";

import "dotenv/config";
import { CostExplorer } from "aws-sdk";

const together = new Together({
  apiKey: process.env["NEXT_PUBLIC_TOGETHER_API_KEY"]
});

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
  postText, 
  setPromptText, 
  setPostText, 
  setAudioURL,
  setAudioLength,
  inputProps 
}) => {
  const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);

  async function fetchChatCompletion() {
    const response = await together.chat.completions.create({
      messages: [{ role: "user", content: promptText}],
      model: "meta-llama/Llama-3-8b-chat-hf",
    });
    
    if (response?.choices?.[0]?.message?.content) {
      // console.log(response.choices[0].message.content);
      setPostText(response.choices[0].message.content);
    }
  }

  async function generateAndUploadAudio() {
  // OR stream the audio, upload to S3, and get a presigned URL
  const stream = await createAudioStreamFromText(postText);

  const s3path = await uploadAudioStreamToS3(stream);

  const presignedUrl = await generatePresignedUrl(s3path);

  setAudioURL(presignedUrl)

  const audioData = await getAudioData(presignedUrl);
  // console.log(audioData)

  setAudioLength(audioData.durationInSeconds * 30)

  console.log("Presigned URL:", presignedUrl);
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

    <Button onClick={fetchChatCompletion}>Generate Video</Button>


    <Button onClick={generateAndUploadAudio} >Test audio maker</Button>

    </InputContainer>
  );
};
