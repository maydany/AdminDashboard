import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['루미니', 'A사', 'B사'],
  datasets: [{
    label: 'EA',
    backgroundColor: [palette.primary, palette.warning, palette.danger],
    data: [5267, 2478, 734]
  }]
}
