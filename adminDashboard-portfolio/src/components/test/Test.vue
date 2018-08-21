<template>
<div>
  <!-- 피부분석 시장 판매량 차트 -->
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <vuestic-widget class="chart-widget" :headerText="'charts.pieChart' | translate">
            <vuestic-chart :data="chartData" type="pie"></vuestic-chart>
        </vuestic-widget>
      </div>
    </div>

    <!-- 피부분석 시장 판매량 변경 파트 -->

<div class="row">
   <div class="col-md-6 offset-md-3 text-center">
     <select class="form-control mb-3" v-model="selectedValue" >
       <option v-for="product in products"  :value="product.name">{{product.name}}</option>
     </select>

   <div class="mb-4"><strong><span>{{ this.selectedValue }} 판매량 :</span></strong>
     <span v-if="selectedValue === '루미니'">
       <input type="number"  v-model="chartData.datasets[0].data[0]" @keyup.enter="setQuantity(chartData.datasets[0].data[0])">
       <button @click="setQuantity(chartData.datasets[0].data[0])">변경</button>
     </span>
     <span v-else-if="selectedValue === 'A제품'">
       <input type="number"  v-model="chartData.datasets[0].data[1]" @keyup.enter="setQuantity(chartData.datasets[0].data[1])">
       <button @click="setQuantity(chartData.datasets[0].data[1])">변경</button>
     </span>
     <span v-else="selectedValue === 'B제품'">
       <input type="number"  v-model="chartData.datasets[0].data[2]" @keyup.enter="setQuantity(chartData.datasets[0].data[2])">
       <button @click="setQuantity(chartData.datasets[0].data[2])">변경</button>
     </span>
   </div>
   </div>
  </div>
</div>

</template>

<script>
  import store from 'vuex-store'
  let palette = store.getters.palette
    export default {
      name:'testChart',
      data () {
        return {
          chartData: {
            labels: ['루미니', 'A사', 'B사'],
            datasets: [{
              label: 'EA',
              backgroundColor: [palette.primary, palette.warning, palette.danger],
              data: [5267, 2478, 734]
            }]
          },
          products: [{name:'루미니'},
                     {name:'A제품'},
                     {name:'B제품'},],
          selectedValue: '루미니'
          }
        },
        mounted() {
          this.filldata()
        },
          methods: {
            setQuantity (sq) {
              if (this.selectedValue === '루미니' ) {
              return this.chartData = {
                  labels: ['루미니', 'A제품', 'B제품'],
                  datasets: [{
                    label: 'EA',
                    backgroundColor: [palette.primary, palette.warning, palette.danger],
                    data: [sq, this.chartData.datasets[0].data[1], this.chartData.datasets[0].data[2]]
                  }]
                }
            } else if  (this.selectedValue === 'A제품' ) {
            return this.chartData = {
                labels: ['루미니', 'A제품', 'B제품'],
                datasets: [{
                  label: 'EA',
                  backgroundColor: [palette.primary, palette.warning, palette.danger],
                  data: [this.chartData.datasets[0].data[0], sq, this.chartData.datasets[0].data[2]]
                }]
              }
          } else {
            this.chartData = {
                labels: ['루미니', 'A제품', 'B제품'],
                datasets: [{
                  label: 'EA',
                  backgroundColor: [palette.primary, palette.warning, palette.danger],
                  data: [this.chartData.datasets[0].data[0], this.chartData.datasets[0].data[1], sq]
                }]
              }
          }
        }
      }
    }
</script>

<style lang="scss">
  .widget.chart-widget {
    .widget-body {
      height: 500px;
    }
  }

</style>
