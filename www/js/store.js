const createStore = Framework7.createStore;
const store = createStore({
  state: {
    prefectures: [], // 都道府県一覧
  },
  getters: {
    // 都道府県一覧を返却
    prefectures({ state }) {
      return state.prefectures;
    }
  },
  actions: {
    // 都道府県一覧をセット
    setPrefectures({ state }, prefectures) {
      state.prefectures = prefectures;
    },
  },
})

