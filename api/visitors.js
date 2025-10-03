// Vercel serverless function for visitor counter
// This will track unique visitors using localStorage and a simple API

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        // Simple in-memory counter (resets on deployment)
        // For production, you'd want to use a database like Vercel KV or external service
        
        if (!global.visitorCount) {
            global.visitorCount = 0;
            global.dailyVisitors = new Set();
            global.lastResetDate = new Date().toDateString();
        }

        // Reset daily counter if it's a new day
        const today = new Date().toDateString();
        if (global.lastResetDate !== today) {
            global.dailyVisitors = new Set();
            global.lastResetDate = today;
        }

        if (req.method === 'POST') {
            // Increment visitor count
            const { visitorId } = req.body;
            
            if (visitorId && !global.dailyVisitors.has(visitorId)) {
                global.visitorCount++;
                global.dailyVisitors.add(visitorId);
            }
        }

        // Return current count
        res.status(200).json({
            totalVisitors: global.visitorCount,
            dailyVisitors: global.dailyVisitors.size,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Visitor counter error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
