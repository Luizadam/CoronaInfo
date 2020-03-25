export default {
  install(Vue) {
    Vue.prototype.$currency = new Intl.NumberFormat("en-ID", {
      // style: "currency",
      // currency: "IDR"
    });
  }
};
