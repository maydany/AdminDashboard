import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['TV 광고', '인터넷 광고', '지면 광고'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.danger, palette.info, palette.success],
    data: [5267, 2478, 734]
  }]
}
