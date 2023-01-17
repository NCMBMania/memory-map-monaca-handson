const createStore = Framework7.createStore;
const store = createStore({
  state: {
    prefectures: [],
  },
  getters: {
    prefectures({ state }) {
      return state.prefectures;
    }
  },
  actions: {
    setPrefectures({ state }, prefectures) {
      state.prefectures = prefectures;
    },
  },
})

