const routes = [
  {
    path: '/',
    url: './index.html',
  },
  // 地図画面
  {
    path: '/map/',
    componentUrl: './pages/map.html',
  },
  // 一覧画面
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
