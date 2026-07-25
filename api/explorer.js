// api/explorer.js

export default async function handler(req, res) {
  // 1. Get the UCI moves from the frontend request
  const playMoves = req.query.play || '';
  
  // 2. Construct the Lichess URL
  const url = playMoves 
    ? `https://explorer.lichess.ovh?play=${playMoves}`
    : `https://explorer.lichess.ovh`;

  try {
    // 3. Fetch from Lichess securely on the server
    const response = await fetch(url, {
      headers: {
        // Vercel securely injects the secret token here!
        'Authorization': `Bearer ${process.env.LICHESS_TOKEN}`,
        'Accept': 'application/json'
      }
    });

    // 4. Handle Lichess's specific status codes
    if (response.status === 204) {
      return res.status(204).end(); // No content
    }

    if (!response.ok) {
      return res.status(response.status).json({ error: `Explorer error (${response.status})` });
    }

    // 5. Send the JSON data back to your Vue frontend
    const data = await response.json();
    res.status(200).json(data);
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from Lichess' });
  }
}