import global from './global'
import globalCategory from './global-category'
import frontendArticle from './frontend-article'

export default {
  frontend: {
    namespaced: true,
    modules: {
      article: frontendArticle
    }
  },
  global: {
    namespaced: true,
    ...global,
    modules: {
      category: globalCategory
    }
  }
}
