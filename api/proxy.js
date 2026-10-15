export default async function handler(req, res) {
  const targetUrl = `https://openrouter.ai/api/v1${req.url}`;
  const response = await fetch(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body
  });
  const data = await response.json();
  res.status(response.status).json(data);
}
