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
          href: getPermalink('/#about'),
        },
        {
          text: 'unser Team',
          href: getPermalink('/team'),
        },
        {
          text: 'Elterninitiative',
          href: getPermalink('/#elternini'),
        },
        {
          text: 'ABC',
          href: getPermalink('/#abc'),
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
      text: 'Speiseplan',
      href: getPermalink('/#speiseplan'),
    },

    {
      text: 'Aktuelles',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
};

export const footerData = {

  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/terms') },
    { text: 'Datenschutzerklärung', href: getPermalink('/privacy') },
    { text: 'Cookies', href: getPermalink('/cookies') },
    { text: 'Open Source', href: getPermalink('/opensource') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    © 2024 Pustekuchen. Theme by <a class="underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · Licensed under the MIT License. Source Code available on <a class="text-black underline dark:text-muted" href="https://github.com/">GitHub</a>.
  `,
};
