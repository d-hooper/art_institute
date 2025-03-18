import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/WorkOfArt.js').WorkOfArt[]} artwork info from the database*/
  artwork: [],
  currentPage: 0,
  pageCount: 0,
})

