import Together from "together-ai";

const together = new Together({
  apiKey: process.env["NEXT_PUBLIC_TOGETHER_API_KEY"]
});

export const generateScript = async (promptText: string) => {
  const response = await together.chat.completions.create({
    messages: [{ role: "user", content: promptText}],
    model: "meta-llama/Llama-3-8b-chat-hf",
  });
  
  if (response?.choices?.[0]?.message?.content) {
    // console.log(response.choices[0].message.content);
    return response.choices[0].message.content
  }
}