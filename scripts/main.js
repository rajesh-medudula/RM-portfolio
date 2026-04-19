import './navigation.js';
import './cursor.js';
import { initReveal } from './reveal.js'; // IMPORTANT: export it
import { data } from '../data/data.js';

document.addEventListener('DOMContentLoaded', () => {

  /* =====================
     RENDER CONTENT
  ===================== */

  // HOME
  const homeText = document.querySelector('.section--home .section__text');
  if (homeText) homeText.innerHTML = data.home.description;

  // ABOUT CONTENT
  const aboutContent = document.querySelector('.section--about .section__content');
  if (aboutContent) {
    aboutContent.innerHTML = data.about.paragraphs
      .map(p => `<p class="section__text section__text--secondary">${p}</p>`)
      .join('');
  }

  // ABOUT STATS
  const statsContainer = document.querySelector('.section__stats');
  if (statsContainer) {
    statsContainer.innerHTML = data.about.stats.map(stat => {
      const valueClass = stat.large
        ? 'section__stat-value section__stat-value--large'
        : 'section__stat-value';

      return `
        <div class="section__stat">
          <span class="section__stat-label">${stat.label}</span>
          <span class="${valueClass}">
            ${stat.value}${stat.suffix ? `<span class="section__stat-suffix">${stat.suffix}</span>` : ''}
          </span>
        </div>
      `;
    }).join('');
  }

  // STACK
  const stackContainer = document.querySelector('.stack');
  if (stackContainer) {
    stackContainer.innerHTML = data.stack.items.map(item => `
      <div class="stack__item">
        <div class="stack__indicator"></div>
        <p class="stack__name">${item.name}</p>
        <p class="stack__level">${item.level}</p>
      </div>
    `).join('');
  }

  // STACK NOTE
  const stackNote = document.querySelector('.section__note');
  if (stackNote) stackNote.textContent = data.stack.note;

  // PROJECTS
  const workContainer = document.querySelector('.work');

if (workContainer) {

  const sortedProjects = [...data.projects].sort((a, b) => a.order - b.order);

  workContainer.innerHTML = sortedProjects.map((p, i) => `
  <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="work__item">

    <div class="work__index">
      <p class="work__index-text">${String(i + 1).padStart(2, '0')}</p>
    </div>

    <div class="work__content">
      <h3 class="work__title">${p.title}</h3>
      <p class="work__desc">${p.desc}</p>

      <ul class="work__tags">
        ${p.tags.map(tag => `<li class="work__tag">${tag}</li>`).join('')}
      </ul>
    </div>

    <div class="work__link">
      <span class="work__link-arrow">↗</span>
    </div>

  </a>
`).join('');
}

  // CONTACT
  const contactSection = document.querySelector('.section--contact .section__container');
  if (contactSection) {
    contactSection.innerHTML = `
      <p class="section__text section__text--secondary">
        ${data.contact.description}
      </p>

      <h3 class="section__email">
        <a class="section__email--text"
          href="mailto:${data.contact.email}?subject=Let's%20Work%20Together&body=Hi%20Rajesh,%0A%0AI%20would%20like%20to%20work%20with%20you.%0A">
          ${data.contact.email}
        </a>
      </h3>

      <ul class="section__social">
        ${data.contact.socials.map(s => `
          <li>
            <a class="section__social-link" href="${s.link}">${s.name}</a>
          </li>
        `).join('')}
      </ul>
    `;
  }

  /* =====================
     APPLY REVEAL (AUTO)
  ===================== */

  document.querySelectorAll(`
    .btn,
    .work__item,
    .stack,
    .section__label,
    .section__stat,
    .section__intro,
    .section__text,
    .section__email--text,
    .section__social-link
  `).forEach(el => {
    el.classList.add('reveal');
  });

  /* =====================
     HERO REVEAL (LOAD)
  ===================== */

  document.querySelectorAll('#home .reveal').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 150 + i * 120);
  });

  /* =====================
     INIT SCROLL REVEAL
  ===================== */

  initReveal();

});