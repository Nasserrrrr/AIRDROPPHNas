 // Menu Toggle
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        // Scroll Sections Active Link
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    });
                }
            });

            // Sticky Header
            let header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 100);

            // Remove menu icon when click navbar link (scroll)
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };

        // Initialize status indicators and TGE countdowns
        document.addEventListener('DOMContentLoaded', function() {
            // Define airdrop data with TGE dates and statuses
            const airdropData = [
                { tgeDate: new Date('2023-11-10'), status: 'ended' }, // DeFi Token Airdrop
                { tgeDate: new Date('2025-06-15'), status: 'early' }, // Binance Smart Chain Testnet
                { tgeDate: new Date('2025-05-20'), status: 'late' },  // Polygon Testnet
                { tgeDate: new Date('2025-07-01'), status: 'early' }, // Arbitrum Testnet
                { tgeDate: new Date('2025-06-30'), status: 'early' }, // Ethereum Layer 2
                { tgeDate: new Date('2025-05-25'), status: 'late' },  // Solana NFT Drop
                { tgeDate: new Date('2025-06-10'), status: 'early' }, // Cosmos Ecosystem
                { tgeDate: new Date('2025-05-15'), status: 'late' },  // Polkadot Parachain
                { tgeDate: new Date('2025-07-15'), status: 'early' }, // Avalanche Subnet
                { tgeDate: new Date('2025-08-01'), status: 'early' }  // New Airdrop // ID PLACED HERE (10th entry)
            ];

            // Collect all airdrop elements
            const airdropElements = Array.from(document.querySelectorAll('.airdrops-box'));

            // Check if the number of elements matches the data
            if (airdropElements.length !== airdropData.length) {
                console.warn(`Expected ${airdropData.length} airdrop elements, but found ${airdropElements.length}`);
            }

            // Create airdrops array by mapping elements to data
            const airdrops = airdropElements.map((element, index) => {
                if (!element) {
                    console.warn(`Airdrop element at index ${index} is undefined`);
                    return null;
                }
                return {
                    element,
                    tgeDate: airdropData[index]?.tgeDate || new Date(),
                    status: airdropData[index]?.status || 'early'
                };
            }).filter(item => item !== null);

            airdrops.forEach(airdrop => {
                const countdownElement = airdrop.element.querySelector('.airdrop-info p:first-child');
                const statusElement = airdrop.element.querySelector('.airdrop-status');
                const btnElement = airdrop.element.querySelector('.btn');
                
                // Set status
                if (airdrop.status === 'early') {
                    statusElement.classList.add('status-early');
                    statusElement.textContent = 'Early Phase';
                    if (btnElement) btnElement.textContent = 'Participate Now';
                } else if (airdrop.status === 'late') {
                    statusElement.classList.add('status-late');
                    statusElement.textContent = 'Final Days';
                    if (btnElement) btnElement.textContent = 'Last Chance';
                } else {
                    statusElement.classList.add('status-ended');
                    statusElement.textContent = 'Distribution';
                    if (btnElement) {
                        btnElement.textContent = 'View Details';
                        btnElement.classList.add('ended');
                    }
                }

                // Update TGE countdown
                updateTgeCountdown(countdownElement, airdrop.tgeDate);
            });

            function updateTgeCountdown(element, tgeDate) {
                if (!element) return;
                const timer = setInterval(() => {
                    const now = new Date();
                    const distance = tgeDate - now;
                    
                    if (distance < 0) {
                        clearInterval(timer);
                        element.innerHTML = "<i class='bx bx-calendar'></i> TGE: Completed";
                        return;
                    }
                    
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    
                    element.innerHTML = `<i class='bx bx-calendar'></i> TGE in: ${days}d ${hours}h ${minutes}m`;
                }, 1000);
            }
        });