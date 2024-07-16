// import { openai } from '@ai-sdk/openai'
// import { streamText } from 'ai'

// // Allow streaming responses up to 30 seconds
// export const maxDuration = 30

// export async function POST(req: Request) {
//   try {
//     const prompt =
//       "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What's a hobby you've recently started? ||If you could have dinner with any historical figure, who would it be? || What's a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment."

//     const result = await streamText({
//       model: openai('gpt-3.5-turbo'),
//       prompt,
//     })

//     return result.toAIStreamResponse()
//   } catch (error) {
//     console.error('Unexpected error occured::', error)
//     throw error
//   }
// }

import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = process.env.GEMINI_API_KEY || ''

const genAI = new GoogleGenerativeAI(apiKey)

export async function POST(request: Request) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

  const prompt =
    "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What's a hobby you've recently started? ||If you could have dinner with any historical figure, who would it be? || What's a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment."

  const result = await model.generateContent(prompt)
  if (!result) {
    return Response.json(
      {
        sucsess: false,
        message: 'Failed getting messages from GPT',
      },
      { status: 500 }
    )
  }
  const response = await result.response
  console.log(response)

  return Response.json(
    {
      sucsess: true,
      message: response,
    },
    { status: 200 }
  )
}
