import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['강남', '명동', '홍대'],
  datasets: [{
    label: 'EA',
    backgroundColor: [palette.info, palette.warning, palette.primary],
    data: [300, 200, 100]
  }]
}
