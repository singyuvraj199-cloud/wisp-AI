const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  console.log("REQUEST RECEIVED");
  console.log("BODY:", req.body);

  const message = req.body.message;

  try {
    console.log("Calling OpenRouter...");

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("OpenRouter response:", data);

    if (!response.ok) {
      throw new Error(data.error?.message || "OpenRouter request failed");
    }

    res.json({
      reply: data.choices[0].message.content,
    });

  } catch (error) {
    console.error("OPENROUTER ERROR:", error);

    res.status(500).json({
      error: "Wisp is temporarily unavailable. Please try again later.",
    });
  }
}); 

const server = app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

server.on("error", (error) => {
  console.log("SERVER ERROR:", error);
});