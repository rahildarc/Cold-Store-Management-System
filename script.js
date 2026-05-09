document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('chamber-grid');
    const totalBoxes = 39; 

    for (let i = 1; i <= totalBoxes; i++) {
        let chamberName = "";
        let bgColorClass = "chamber-yellow"; 

        if (i === 1) { 
            chamberName = "CHAMBER 1"; 
            bgColorClass = "bg-white"; 
        } else if (i === 2) { 
            chamberName = "Chamber 2"; 
            bgColorClass = "bg-white"; 
        } else if (i === 3) { 
            chamberName = "Dock 1"; 
            bgColorClass = "bg-white"; 
        } else { 
            chamberName = `CHMB-${i - 3}`; 
        }

        const card = document.createElement('div');
        card.className = `chamber-card p-2 text-xs shadow-sm ${bgColorClass}`;
        
        card.innerHTML = `
            <div class="flex items-center gap-1 font-bold border-b border-gray-300 mb-1 uppercase text-[10px]">
                <i class="fa fa-lock"></i> <span>${chamberName}</span>
            </div>
            <div class="space-y-0.5 text-[11px]">
                <div class="flex justify-between">
                    <span>In Qty</span>
                    <span class="font-medium">0000</span>
                </div>
                <div class="flex justify-between">
                    <span>Out Qty</span>
                    <span class="font-medium">0000</span>
                </div>
                <div class="flex justify-between font-bold border-t border-gray-300 mt-1 pt-0.5">
                    <span>Bal Qty</span>
                    <span>0000</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    }
});

function showPage(pageId) {
    document.getElementById('page-title').innerText = pageId.toUpperCase();
}
