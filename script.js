// Function to switch pages
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.view-page').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    const target = document.getElementById(`page-${pageId}`);
    if(target) target.classList.remove('hidden');
    
    // Update Header Title
    document.getElementById('page-title').innerText = pageId.replace('-', ' ').toUpperCase();
}

// Generate Chamber Data dynamically
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('chamber-grid');
    
    // Exact list of chambers found in your screenshots
    const chambers = [
        { name: "CHAMBER 1", type: 'white' },
        { name: "CHAMBER 2", type: 'white' },
        { name: "DOCK 1", type: 'white' },
        { name: "CHMB 4", type: 'yellow' },
        { name: "CHMB 5", type: 'yellow' },
        { name: "CHMB 6", type: 'yellow' },
        { name: "CHMB 7", type: 'yellow' },
        { name: "CHMB 8", type: 'yellow' }
    ];

    // Add remaining chambers up to 39
    for (let i = 9; i <= 39; i++) {
        chambers.push({ name: `CHMB ${i}`, type: 'yellow' });
    }

    chambers.forEach(ch => {
        const inQty = Math.floor(Math.random() * 50000) + 10000;
        const outQty = Math.floor(Math.random() * 8000);
        const balQty = inQty - outQty;

        const card = document.createElement('div');
        card.className = `chamber-card ${ch.type === 'yellow' ? 'chamber-yellow' : 'chamber-white'} shadow-sm`;
        
        card.innerHTML = `
            <div class="chamber-header">
                <span><i class="fa fa-lock text-[9px]"></i> ${ch.name}</span>
                <i class="fa fa-ellipsis-v"></i>
            </div>
            <div class="p-2 space-y-1">
                <div class="flex justify-between"><span>In Qty</span><span class="font-bold">${inQty}</span></div>
                <div class="flex justify-between"><span>Out Qty</span><span class="font-bold">${outQty}</span></div>
                <div class="flex justify-between border-t pt-1 font-extrabold text-blue-900">
                    <span>Bal Qty</span><span>${balQty}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
});
