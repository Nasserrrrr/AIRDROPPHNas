 // Menu Toggle
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        // Airdrop Data
        const airdrops = [
            { id: 1, title: 'DeFi Token Airdrop', status: 'ended', tgeDate: new Date('2023-11-10'), reward: '100-1000 tokens', kyc: 'Not required', tasks: 'Testnet tasks', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Participate in the DeFi Token Airdrop to earn tokens by completing testnet tasks. This airdrop is designed to test decentralized finance protocols.', steps: ['Set up a testnet wallet', 'Complete testnet transactions', 'Submit your wallet address'] },
            { id: 2, title: 'Binance Smart Chain Testnet', status: 'early', tgeDate: new Date('2025-06-15'), reward: '500-2000 BNB tokens', kyc: 'Not required', tasks: 'Deploy smart contract', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Join the Binance Smart Chain Testnet airdrop by deploying a smart contract on the testnet to earn BNB tokens.', steps: ['Set up BSC testnet node', 'Deploy a smart contract', 'Verify deployment'] },
            { id: 3, title: 'Polygon Testnet', status: 'late', tgeDate: new Date('2025-05-20'), reward: '$100-$1000', kyc: 'Required', tasks: 'Test scaling solutions', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Test Polygon’s scaling solutions to earn rewards in this airdrop, aimed at improving layer-2 performance.', steps: ['Register with KYC', 'Run test transactions', 'Submit test results'] },
            { id: 4, title: 'Arbitrum Testnet', status: 'early', tgeDate: new Date('2025-07-01'), reward: '200-5000 tokens', kyc: 'Not required', tasks: 'Run test transactions', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Participate in Arbitrum’s testnet by running transactions to earn tokens for testing layer-2 solutions.', steps: ['Set up Arbitrum wallet', 'Execute test transactions', 'Report results'] },
            { id: 5, title: 'Ethereum Layer 2', status: 'early', tgeDate: new Date('2025-06-30'), reward: '$50-$500', kyc: 'Not required', tasks: 'Simple social tasks', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Join the Ethereum Layer 2 airdrop by completing social media tasks to promote the project.', steps: ['Follow project on Twitter', 'Join Telegram group', 'Share campaign post'] },
            { id: 6, title: 'Solana NFT Drop', status: 'late', tgeDate: new Date('2025-05-25'), reward: 'Exclusive NFT', kyc: 'Required', tasks: 'Wallet interaction', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Earn an exclusive NFT by interacting with Solana wallets in this airdrop campaign.', steps: ['Complete KYC', 'Connect Solana wallet', 'Perform test interactions'] },
            { id: 7, title: 'Cosmos Ecosystem', status: 'early', tgeDate: new Date('2025-06-10'), reward: 'Staking rewards', kyc: 'Not required', tasks: 'Stake tokens', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Stake tokens in the Cosmos ecosystem to earn rewards through this testnet airdrop.', steps: ['Set up Cosmos wallet', 'Stake testnet tokens', 'Verify staking'] },
            { id: 8, title: 'Polkadot Parachain', status: 'late', tgeDate: new Date('2025-05-15'), reward: 'Early access', kyc: 'Not required', tasks: 'Contribute to crowdloan', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Contribute to Polkadot’s crowdloan for early access rewards to parachain projects.', steps: ['Set up Polkadot wallet', 'Contribute to crowdloan', 'Confirm contribution'] },
            { id: 9, title: 'Avalanche Subnet', status: 'early', tgeDate: new Date('2025-07-15'), reward: 'Gas fee tokens', kyc: 'Required', tasks: 'Bridge assets', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Bridge assets on Avalanche subnets to earn gas fee tokens in this airdrop.', steps: ['Complete KYC', 'Set up Avalanche wallet', 'Bridge test assets'] },
            { id: 10, title: 'New Airdrop', status: 'early', tgeDate: new Date('2025-08-01'), reward: '100-500 tokens', kyc: 'Not required', tasks: 'Social tasks', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', description: 'Join the New Airdrop by completing social tasks to earn tokens.', steps: ['Follow on Twitter', 'Join Telegram', 'Share post']},   
            // New Airdrop // ID PLACED HERE (10th entry)
        ];

        // Load Airdrop Details
        document.addEventListener('DOMContentLoaded', function() {
            const params = new URLSearchParams(window.location.search);
            const airdropId = parseInt(params.get('id'));
            const airdropContent = document.getElementById('airdrop-content');

            if (!airdropId || isNaN(airdropId)) {
                airdropContent.innerHTML = '<p class="error-message">Error: Invalid or missing airdrop ID.</p>';
                return;
            }

            const airdrop = airdrops.find(a => a.id === airdropId);

            if (!airdrop) {
                airdropContent.innerHTML = '<p class="error-message">Error: Airdrop not found.</p>';
                return;
            }

            // Update content
            document.getElementById('airdrop-title').textContent = airdrop.title;
            document.getElementById('airdrop-status').textContent = airdrop.status === 'early' ? 'Early Phase' : airdrop.status === 'late' ? 'Final Days' : 'Distribution';
            document.getElementById('airdrop-status').classList.add(`status-${airdrop.status}`);
            document.getElementById('airdrop-image').src = airdrop.image;
            document.getElementById('airdrop-image').alt = `${airdrop.title} Image`;
            document.getElementById('airdrop-reward').textContent = airdrop.reward;
            document.getElementById('airdrop-kyc').textContent = airdrop.kyc;
            document.getElementById('airdrop-tasks').textContent = airdrop.tasks;
            document.getElementById('airdrop-description').textContent = airdrop.description;

            // Update TGE
            const tgeElement = document.getElementById('airdrop-tge');
            updateTgeCountdown(tgeElement, airdrop.tgeDate);

            // Update participation steps
            const stepsList = document.getElementById('airdrop-steps');
            stepsList.innerHTML = airdrop.steps.map(step => `<li>${step}</li>`).join('');

            // Update Join Now button
            const joinBtn = document.getElementById('join-btn');
            if (airdrop.status === 'ended') {
                joinBtn.textContent = 'View Details';
                joinBtn.classList.add('ended');
            } else {
                joinBtn.textContent = airdrop.status === 'late' ? 'Last Chance' : 'Join Now';
            }

            function updateTgeCountdown(element, tgeDate) {
                if (!element) return;
                const timer = setInterval(() => {
                    const now = new Date();
                    const distance = tgeDate - now;
                    
                    if (distance < 0) {
                        clearInterval(timer);
                        element.textContent = 'Completed';
                        return;
                    }
                    
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    
                    element.textContent = `${days}d ${hours}h ${minutes}m`;
                }, 1000);
            }
        });