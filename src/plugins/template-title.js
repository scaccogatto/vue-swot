export default {
  install (Vue, template = t => `${t} | SWOT`) {
    Vue.prototype.$setTitle = title => {
      document.title = template(title)
    }
  }
}
