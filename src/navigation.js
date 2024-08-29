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
          text: 'unser Team',
          href: getPermalink('/team'),
        },
        {
          text: 'ABC',
          href: getPermalink('/abc'),
        },
        {
          text: 'Kurz und Bündig',
          href: getPermalink('/#konzept'),
        },
        {
          text: 'Kontakt',
          href: getPermalink('/#kontakt'),
        },
      ],
    },
    {
      text: 'Aktuelles',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Speiseplan',
          href: getPermalink('/#speiseplan'),
        },
      ],
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
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Pustekuchen-Xanten/astro-website' },
  ],
  footNote: `
    © 2024 Pustekuchen. Theme by <a class="underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · Licensed under the MIT License. Source Code available on <a class="text-black underline dark:text-muted" href="https://github.com/Pustekuchen-Xanten/astro-website">GitHub</a>.
  `,
};
