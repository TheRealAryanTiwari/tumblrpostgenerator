import { Audio } from "remotion";

export const Voiceover: React.FC<{
    audioURL: string
  }> = ({ audioURL }) => {

    return (
        <Audio src={audioURL}/>
    )
};