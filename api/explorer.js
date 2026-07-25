// api/explorer.js

export default async function handler(req, res) {
  const playMoves = req.query.play || '';
  
  // FIX: Use /lichess path for player moves, and encode the moves!
  const url = playMoves 
    ? `https://explorer.lichess.ovh/lichess?play=${encodeURIComponent(playMoves)}`
    : `https://explorer.lichess.ovh/lichess`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.LICHESS_TOKEN}`,
        'Accept': 'application/json'
      }
    });

    if (response.status === 204) {
      return res.status(204).end();
    }

    if (!response.ok) {
      return res.status(response.status).json({ error: `Explorer error (${response.status})` });
    }

    const data = await response.json();
    res.status(200).json(data);
    
  } catch (error) {
    console.error('Fetch Failed:', error);
    res.status(500).json({ error: 'Failed to fetch from Lichess', details: error.message });
  }
}