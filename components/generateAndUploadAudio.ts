import { createAudioStreamFromText } from "./text_to_speech_stream";
import { generatePresignedUrl, uploadAudioStreamToS3 } from "./s3_uploader";
import { getAudioData } from "@remotion/media-utils";
import { Dispatch, SetStateAction } from "react"; // Updated import

export const generateAndUploadAudio = async (postText: string, setAudioURL: Dispatch<SetStateAction<string>>, setAudioLength: Dispatch<SetStateAction<number>>) => {
  const stream = await createAudioStreamFromText(postText);

  const s3path = await uploadAudioStreamToS3(stream);

  const presignedUrl = await generatePresignedUrl(s3path);

  setAudioURL(presignedUrl)

  const audioData = await getAudioData(presignedUrl);

  setAudioLength(Math.ceil(audioData.durationInSeconds * 30))

  console.log("Presigned URL:", presignedUrl);
}