/**
 * app.js - Main logic for dynamic portfolio
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Launch Animation Control
    const loader = document.getElementById('loader');
    const appContainer = document.getElementById('app');

    // The CSS animation takes ~2.5s total. We'll reveal the app and hide the loader after 2.8s
    setTimeout(() => {
        appContainer.classList.remove('hidden');
        document.body.classList.remove('loading-state');
        
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);

    }, 2800);


    // 2. SPA Navigation Implementation
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            // Prevent re-triggering animation if clicking active tab
            if (btn.classList.contains('active')) return;

            // 1. Mark button as active
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Animate out the currently active page
            const currentPage = document.querySelector('.page.active');
            
            if (currentPage) {
                currentPage.classList.add('fade-out');
                
                // Wait for fade-out to complete before swapping
                setTimeout(() => {
                    currentPage.classList.remove('active', 'fade-out');
                    
                    // Activate new page
                    const nextPage = document.getElementById(targetId);
                    nextPage.classList.remove('hidden'); // ensure it's not strictly display:none from layout
                    nextPage.classList.add('active');

                }, 400); // 400ms matches CSS .fade-out duration
            } else {
                // Fallback (e.g. initial load glitch)
                const nextPage = document.getElementById(targetId);
                nextPage.classList.add('active');
            }
        });
    });

    // 3. Project Modal Implementation
    const projectCards = document.querySelectorAll('.project-card');
    const modalOverlay = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    const projectData = {
        diabetes: `
            <h2>Early Detection of Diabetes Using Random Forest</h2>
            <div class="modal-tags"><span class="card-tag ml">Machine Learning</span><span class="card-tag ml">Healthcare</span></div>
            <p><strong>Overview:</strong> This project is a machine learning-based research study focused on the early prediction of diabetes using non-invasive lifestyle features. The objective was to develop a predictive model that can identify potential diabetes cases without relying on medical tests or invasive procedures.</p>
            <p><strong>My Role:</strong> As the primary author, I collaborated with a team of three members to design and implement this solution.</p>
            <p><strong>Methodology:</strong> The model was trained using the Pima Indians Diabetes Dataset. We utilized the Random Forest algorithm due to its robustness, ability to handle feature importance, and effectiveness in classification tasks.</p>
            <p><strong>Results:</strong> The final model achieved an accuracy of approximately 86%, demonstrating the potential of machine learning in preventive healthcare using practical, demographic data points.</p>
        `,
        lumiara: `
            <h2>Lumiara (Art-Portfolio)</h2>
            <div class="modal-tags"><span class="card-tag dev">Frontend & Design</span></div>
            <p><strong>Overview:</strong> Lumiara is a personal art portfolio website designed from the ground up to showcase creative works, illustrations, and visual experiments.</p>
            <p><strong>Design Philosophy:</strong> The objective was to reflect an artistic journey through a minimal and immersive digital experience. It uses bespoke glassmorphism techniques, refined grid layouts, and curated typography to let the art speak for itself rather than overwhelming the user with heavy UI elements.</p>
            <a href="https://github.com/eddardstark687-rgb/Art-Portfolio" target="_blank" class="github-btn mod-btn">View Repository</a>
        `,
        nocturne: `
            <h2>Nocturne-Library</h2>
            <div class="modal-tags"><span class="card-tag dev">Digital Experience</span><span class="card-tag dev">HTML/CSS</span></div>
            <p><strong>Overview:</strong> Nocturne Library is a hauntingly beautiful, infinite-scroll single-page sanctuary where a whisper of a genre summons thousands of real books.</p>
            <p><strong>Technical Depth:</strong> Built entirely with pure HTML and CSS fundamentals, the project challenges modern JS-heavy ecosystems by relying on deep architectural aesthetics and dark thematic elements. All books are displayed in order of fame and are wrapped in dark elegance.</p>
            <a href="https://github.com/eddardstark687-rgb/Nocturne-Library" target="_blank" class="github-btn mod-btn">View Repository</a>
        `
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectKey = card.getAttribute('data-project');
            if(projectData[projectKey]) {
                modalBody.innerHTML = projectData[projectKey];
                modalOverlay.classList.remove('hidden');
                setTimeout(() => modalOverlay.classList.add('visible'), 50);
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modalOverlay.classList.remove('visible');
        setTimeout(() => modalOverlay.classList.add('hidden'), 400); // Wait for fade out
    });

    // Close on clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if(e.target === modalOverlay) {
            modalOverlay.classList.remove('visible');
            setTimeout(() => modalOverlay.classList.add('hidden'), 400);
        }
    });

});
