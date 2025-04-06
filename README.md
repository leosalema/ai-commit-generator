# 🧠 AI Commit Generator

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-in%20progress-yellow.svg)]()
[![Made with Node.js](https://img.shields.io/badge/made%20with-Node.js-brightgreen.svg)]()

An AI-powered tool that generates smart, consistent commit messages based on your code changes.

---

## 🚀 Overview

AI Commit Generator analyzes your staged code (`git diff --cached`) and suggests clear, contextual commit messages using a language model (LLM). It helps maintain clean git history with minimal effort.

---

## 🛠️ How It Works

1. The tool reads the staged changes in your repository using `git diff --cached`.
2. It sends the diff to OpenAI's GPT model to generate a concise and meaningful commit message.
3. You can review the suggested message and decide whether to use it or cancel the commit.

---

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- A valid OpenAI API key

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/ai-commit-generator.git
   cd ai-commit-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```

---

## ▶️ Usage

1. Stage your changes using `git add`:

   ```bash
   git add .
   ```

2. Run the tool:

   ```bash
   npm start
   ```

3. Follow the prompts:
   - The tool will display a suggested commit message.
   - You can confirm the message by typing `y` or cancel the commit by typing `n`.

---

## 📝 Example

```bash
$ git add .
$ npm start

⏳ Generating commit message with AI.

💬 Suggested message:

➡️ feat: add AI-powered commit message generator

Want to use that message? (y/N) y

[main 1234567] feat: add AI-powered commit message generator
```

---

## 📄 License

MIT – feel free to use, improve, and share!

---

## 🙌 Thanks

- [OpenAI](https://platform.openai.com/)
- [LangChain.js](https://js.langchain.com/)
- Dev community that loves automation 😄
