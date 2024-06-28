import { Composition } from "remotion";
import { Main } from "./Main";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={Main}
        durationInFrames={900}
        fps={30}
        width={720}
        height={1280}
        defaultProps={{ 
          prompt: "Tumblr post about Minecraft", 
          post: "i love minecraft waiting behaviors. Writing on a sign and you can vaguely see your friend hopping around making spontaneous parkour out of the terrain while they wait for you to finish. writing a message in chat and having the person you're talking to crouch right in front of you or stand as close to you as possible while they wait for you to finish. Finally finishing writing in a book only to see your friend has made several new furniture pieces and/or surrounded you in a cobblestone cube that may or may not have a sign on it. theres something so charming to it", 
          audioURL: "https://togetheraibucket.s3.us-east-1.amazonaws.com/ec286f3f-ee68-4398-bcf2-c52e5b54d0b7.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZI2LGZ42P46XDMVZ%2F20240627%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240627T215511Z&X-Amz-Expires=3600&X-Amz-Signature=b180a2755d14242d5b8aedfeddc34d63a0951af98640e1f523e45766d626fec1&X-Amz-SignedHeaders=host&x-id=GetObject",
          audioLength: 900
        }}
      />
    </>
  );
};
