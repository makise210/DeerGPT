//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

import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: "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", dangerouslyAllowBrowser: true 
  });
//get message and send request to server
export async function sendMsgToOpenAI() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });
    console.log(completion.choices[0].message)
    console.log(completion.status);
    }

    