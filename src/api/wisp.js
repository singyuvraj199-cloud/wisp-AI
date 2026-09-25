export async function getAIResponse(messages) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const contents = messages.map((m) => ({
    role: m.role === "ai" ? "model" : "user",
    parts: [{ text: m.content }]
  }));

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ contents })
    }
  );

  const data = await response.json();

  // Handle API errors
  if (!response.ok) {
    console.error("Gemini API error:", data);

    throw new Error(
      data?.error?.message || "Gemini API request failed"
    );
  }

  // Make sure a response actually exists
  if (!data?.candidates?.[0]?.content?.parts?.[0]?.text) {
    throw new Error("Gemini returned an empty response");
  }

  return data.candidates[0].content.parts[0].text;
}