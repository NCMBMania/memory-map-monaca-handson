const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/map/',
    componentUrl: './pages/map.html',
  },
  {
    path: '/list/',
    componentUrl: './pages/list.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
