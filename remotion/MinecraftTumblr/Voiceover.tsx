import { Audio } from "remotion";
import { useEffect } from "react";

export const Voiceover: React.FC<{
    audioURL: string
  }> = ({ audioURL }) => {
    return (
        <Audio src={audioURL}/>
    )
};