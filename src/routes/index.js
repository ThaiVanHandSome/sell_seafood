import { routes } from '~/config';

// layouts
import DefaultLayout from '~/layouts/DefaultLayout';

// pages
import Home from '~/pages/Home';

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
        layout: DefaultLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
