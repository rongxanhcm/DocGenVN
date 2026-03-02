// api/generate.js — Vercel Serverless Function
// File này chạy trên server, user không thể thấy API key

module.exports = async function handler(req, res) {
  // Chỉ cho phép POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS — cho phép frontend của bạn gọi vào
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { prompt, model = 'gemini-2.5-flash-lite' } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  // Rate limit đơn giản — giới hạn độ dài prompt để tránh abuse
  if (prompt.length > 8000) {
    return res.status(400).json({ error: 'Prompt quá dài' });
  }

  try {
    let response;

    if (model.includes('gemini')) {
      // Google Gemini API
      response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GOOGLE_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            maxOutputTokens: 10000,
          }
        }),
      });
    } else {
      // Claude/Anthropic API
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: model || 'claude-haiku-4-5-20251001',
          max_tokens: 10000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
    }

    if (!response.ok) {
      const err = await response.text();
      console.error(`${model} API error:`, err);
      return res.status(response.status).json({ error: 'AI API error' });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
