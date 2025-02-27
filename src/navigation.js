import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Willkommen',
      href: '/',
    },
    {
      text: 'Über',
      links: [
        {
          text: 'Das sind wir',
          href: getPermalink('/#wir'),
        },
        {
          text: 'Elterninitiative',
          href: getPermalink('/#elternini'),
        },
        {
          text: 'Unser Team',
          href: getPermalink('/team'),
        },
        {
          text: 'Das ABC',
          href: getPermalink('/abc'),
        },
        {
          text: 'Auf einen Blick',
          href: getPermalink('/#blick'),
        },
      ],
    },
    {
      text: 'Aktuelles',
      links: [
        {
          text: 'Neuigkeiten ',
          href: getBlogPermalink(),
        },
        {
          text: 'Speiseplan',
          href: getPermalink('/#speiseplan'),
        },
        {
          text: 'Impressionen',
          href: getPermalink('/impressionen'),
        },
      ],
    },
    {
      text: 'Kontakt',
      href: getPermalink('/#kontakt'),
    },
  ],
};

export const footerData = {

  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/impress') },
    { text: 'Datenschutzerklärung', href: getPermalink('/privacy') },
    { text: 'Cookies', href: getPermalink('/cookies') },
    { text: 'Open Source', href: getPermalink('/opensource') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Pustekuchen-Xanten/astro-website' },
  ],
  footNote: `
    © ${new Date().getFullYear()}  Pustekuchen. Quellcode verfügbar auf <a class="text-black underline dark:text-muted" href="https://github.com/Pustekuchen-Xanten/astro-website">GitHub</a>.
  `,
};
