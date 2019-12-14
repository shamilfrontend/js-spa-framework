import { homePage } from './pages/home-page';
import { tabsPage } from './pages/tabs-page';
import { directivePage } from './pages/directive.page';
import { pipesPage } from './pages/pipes.page';

import { notFound } from './common/not-found.component';

export const appRoutes = [
  {
    path: '',
    component: homePage
  },
  {
    path: 'tabs',
    component: tabsPage
  },
  {
    path: 'directive',
    component: directivePage
  },
  {
    path: 'pipes',
    component: pipesPage
  },
  {
    path: '**',
    component: notFound
  }
];
