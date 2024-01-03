//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

import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: "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", dangerouslyAllowBrowser: true 
  });
//get message and send request to server
export async function sendMsgToOpenAI(userInput) {
    const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userInput }],
        
        model: "gpt-3.5-turbo",
      });
    console.log(completion.choices[0].message)
    }

    
