const $ = Dom7;

// NCMBの初期化用
const event = window.cordova ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(event, async (e) => {
  const config = await (await fetch('./js/config.json')).json();
  window.ncmb = new NCMB(config.applicationKey, config.clientKey);
  const user = ncmb.User.getCurrentUser();
  if (!user) {
    await ncmb.User.loginAsAnonymous();
  }
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
