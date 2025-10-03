// This script creates a favicon for Life Blocks
// Run this in the browser console or as a Node.js script with canvas library

function createFavicon() {
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    // Black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 32, 32);
    
    // Create life blocks grid (5x5 for better visibility)
    const blockSize = 4;
    const gap = 1;
    const startX = 3;
    const startY = 3;
    
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const x = startX + col * (blockSize + gap);
            const y = startY + row * (blockSize + gap);
            
            // Color logic: first 12 blocks white (lived), 13th red (current), rest gray
            const blockIndex = row * 5 + col;
            let color;
            
            if (blockIndex < 12) {
                color = '#ffffff'; // Lived weeks
            } else if (blockIndex === 12) {
                color = '#ff0000'; // Current week
            } else {
                color = '#333333'; // Future weeks
            }
            
            ctx.fillStyle = color;
            ctx.fillRect(x, y, blockSize, blockSize);
        }
    }
    
    // Add small accent - hourglass or time symbol
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(28, 28, 3, 1);
    ctx.fillRect(29, 29, 1, 1);
    ctx.fillRect(28, 30, 3, 1);
    
    return canvas;
}

// If running in browser
if (typeof document !== 'undefined') {
    const canvas = createFavicon();
    document.body.appendChild(canvas);
    
    // Create download link
    const link = document.createElement('a');
    link.download = 'favicon.png';
    link.href = canvas.toDataURL();
    link.textContent = 'Download Favicon';
    document.body.appendChild(link);
}
