export default async function handler(req, res) {
  const path = req.url.replace('/api/proxy', '');
  const targetUrl = `https://openrouter.ai/api/v1${path}`;
  
  const response = await fetch(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body
  });
  
  const data = await response.json();
  res.status(response.status).json(data);
}
