import { NavItem } from "./nav-item";

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    bgcolor: 'primary',
    route: '/dashboard',
  },
  {
    navCap: 'Pages',
  },
  {
    displayName: 'Coming Soon',
    iconName: 'schedule',
    bgcolor: 'success',
    route: '/coming-soon',
  },
  {
    displayName: 'Errors',
    iconName: 'error',
    bgcolor: 'error',
    route: '/errors',
    chip: true,
    chipClass: 'bg-warning',
    chipContent: '4',
    children: [
      {
        displayName: '404',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/errors/404',
      },
      {
        displayName: '500',
        iconName: 'hdr_weak',
        bgcolor: 'warning',
        route: '/errors/500',
      },
    ]
  },
  {
    displayName: 'FAQ',
    iconName: 'help',
    bgcolor: 'error',
    route: '/faq'
  },
  {
    navCap: 'UI',
  },
  {
    displayName: 'Components',
    iconName: 'view_week',
    bgcolor: 'error',
    route: '/ui',
    children: [
      {
        displayName: 'Autocomplete',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/ui/components/autocomplete',
      },
      {
        displayName: 'Badge',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/ui/components/badge',
      },
      {
        displayName: 'Button',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/ui/components/button',
      },
      {
        displayName: 'Button Toggle',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/ui/components/button-toggle',
      },
      {
        displayName: 'Chips',
        iconName: 'hdr_weak',
        bgcolor: 'warning',
        route: '/ui/components/chips',
      },
      {
        displayName: 'Dialog',
        iconName: 'hdr_weak',
        bgcolor: 'warning',
        route: '/ui/components/dialog',
      },
      {
        displayName: 'Lists',
        iconName: 'hdr_weak',
        bgcolor: 'success',
        route: '/ui/components/lists',
      },
      {
        displayName: 'Divider',
        iconName: 'hdr_weak',
        bgcolor: 'success',
        route: '/ui/components/divider',
      },
      {
        displayName: 'Menu',
        iconName: 'hdr_weak',
        bgcolor: 'error',
        route: '/ui/components/menu',
      },
      {
        displayName: 'Paginator',
        iconName: 'hdr_weak',
        bgcolor: 'error',
        route: '/ui/components/paginator',
      },
      {
        displayName: 'Progress bar',
        iconName: 'hdr_weak',
        bgcolor: 'error',
        route: '/ui/components/progress-bar',
      },
      {
        displayName: 'Tooltips',
        iconName: 'hdr_weak',
        bgcolor: 'primary',
        route: '/ui/components/tooltips',
      },
    ]
  },
  {
    displayName: 'Icons',
    iconName: 'insert_emoticon',
    bgcolor: 'error',
    route: '/ui/icons',
    children: [
      {
        displayName: 'Tabler Icons',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/ui/icons/tabler-icons',
      }
    ]
  },
  {
    displayName: 'Page Layouts',
    iconName: 'view_quilt',
    bgcolor: 'error',
    route: '/ui/page-layouts',
    children: [
      {
        displayName: 'Sample Page',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/ui/page-layouts/sample-page',
      }
    ]
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    bgcolor: 'accent',
    route: '/authentication/login',
    children: [
      {
        displayName: 'Side',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/authentication/login/side',
      },
      {
        displayName: 'Center',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/authentication/login/center',
      }
    ]
  },
  {
    displayName: 'Register',
    iconName: 'person_add',
    bgcolor: 'warning',
    route: '/authentication/register',
    children: [
      {
        displayName: 'Side',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/authentication/register/side',
      },
      {
        displayName: 'Center',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/authentication/register/center',
      }
    ]
  },
  {
    displayName: 'Forgot Password',
    iconName: 'lock_reset',
    bgcolor: 'warning',
    route: '/authentication/forgot-password',
    children: [
      {
        displayName: 'Side',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/authentication/forgot-password/side',
      },
      {
        displayName: 'Center',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/authentication/forgot-password/center',
      }
    ]
  },
  {
    displayName: 'Two Steps',
    iconName: 'security',
    bgcolor: 'warning',
    route: '/authentication/two-step',
    children: [
      {
        displayName: 'Side',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/authentication/two-step/side',
      },
      {
        displayName: 'Center',
        iconName: 'hdr_weak',
        bgcolor: 'accent',
        route: '/authentication/two-step/center',
      }
    ]
  },
];
