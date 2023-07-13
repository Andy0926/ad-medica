export interface NavigationBarListProps extends LinkProps {
  subLink?: LinkProps[];
}
export interface LinkProps {
  label: string;
  link: string;
}

export const NavigationBarList: NavigationBarListProps[] = [
  {
    label: 'VISION',
    link: '/company',
  },
  {
    label: 'WORKS',
    link: '/company',
  },
  {
    label: 'SHOOTING',
    link: '/company',
    subLink: [
      {
        label: 'HATONOMORI\nSTUDIO',
        link: '/',
      },
      {
        label: 'Virtual\nSTUDIO',
        link: '/',
      },
      {
        label: 'HATO\nLocation',
        link: '/',
      },
    ],
  },
  {
    label: 'CREATIVE',
    link: '/company',
    subLink: [
      {
        label: 'CG',
        link: '/',
      },
      {
        label: 'WEB',
        link: '/',
      },
      {
        label: 'SHOOTING',
        link: '/',
      },
      {
        label: 'GRAPHIC',
        link: '/',
      },
      {
        label: 'MOVIE',
        link: '/',
      },
    ],
  },
  {
    label: 'COMPANY',
    link: '/company',
  },
  {
    label: 'Every Day Life',
    link: '/company',
  },
  {
    label: 'CONTACT',
    link: '/company',
  },
];
