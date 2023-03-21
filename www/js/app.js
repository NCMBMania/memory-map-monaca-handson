const $ = Dom7;

// NCMBの初期化用
const event = window.cordova ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(event, async (e) => {
  const config = await (await fetch('./js/config.json')).json();
  // NCMBの初期化
  window.ncmb = new NCMB(config.applicationKey, config.clientKey);
  /*
  // ログイン状態を確認
  const user = ncmb.User.getCurrentUser();
  // ログインしていない場合は匿名ログイン
  if (!user) {
    await ncmb.User.loginAsAnonymous();
  }
  */
  window.app = new Framework7({
    name: 'My App', // App name
    theme: 'auto', // Automatic theme detection
    el: '#app', // App root element
    // App store
    store: store,
    // App routes
    routes: routes,
  });
});
