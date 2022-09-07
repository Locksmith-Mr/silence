Object.assign(window, Vue);
function mountApp(params) {
  const app = Vue.createApp(params);
  dayjs.locale("zh-cn");
  dayjs().locale("zh-cn").format();
  app.use(antd);
  app.mount("#app");
}
