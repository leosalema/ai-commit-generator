import { OpenAI } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const openAi = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateCommitMessage(diffText) {
    const systemMessage = {
        role: 'system',
        content: 'You are an assitant who writes clear and useful commit messages, following good practives from Convetional Commit'
    }

    const userMessage = {
        role: 'user',
        content: `Here's the diff git:\n\n${diffText}\n\nGenerate a short and clear commit message based on changes.`
    }

    const response = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [systemMessage, userMessage],
        temperature: 0.7
    });

    return response.choices[0].message.content.trim();
}
