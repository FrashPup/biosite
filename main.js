function createTag(tagName) {
    const color = config.tagColors[tagName] || '#87ceeb';
    return `
        <span class="tag-element" style="background: linear-gradient(120deg, ${color}20, ${color}40); border-color: ${color};">
            ${tagName}
        </span>
    `;
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star-element';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const size = `${Math.random() * 2}px`;
        star.style.width = size;
        star.style.height = size;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
}

function generateProfileTags() {
    const tagsContainer = document.getElementById('profile-tags');
    tagsContainer.innerHTML = config.profile.tags.map(tag => createTag(tag)).join('');
}

function generateLinks() {
    const linksContainer = document.getElementById('links');
    config.links.forEach((link, index) => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'card-container link-element';
        a.textContent = link.title;
        a.style.animationDelay = `${0.3 + (index * 0.1)}s`;
        linksContainer.appendChild(a);
    });
}

function generateProjects() {
    const projectsContainer = document.querySelector('.projects-container');
    config.projects.forEach((project, index) => {
        const article = document.createElement('article');
        article.className = 'card-container project-container';
        article.style.animationDelay = `${0.5 + (index * 0.1)}s`;
        
        article.innerHTML = `
            <img class="project-image-element" src="${project.image}" alt="${project.title}">
            <div class="project-content-container">
                <h3 class="project-title-element">${project.title}</h3>
                <p class="project-description-element">${project.description}</p>
                <div class="tags-container">
                    ${project.tags.map(tag => createTag(tag)).join('')}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(article);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    generateProfileTags();
    generateLinks();
    generateProjects();
    setupSmoothScroll();
});