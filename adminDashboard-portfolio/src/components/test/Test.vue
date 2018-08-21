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
     <select class="form-control mb-4" v-model="selectedValue" >
       <option v-for="product in products"  :value="product.name">{{product.name}}</option>
     </select>

   <div><strong><span>{{ this.selectedValue }} 판매량 :</span></strong>
     <span v-if="selectedValue === '루미니'">
       <input type="number"  v-model="chartData.datasets[0].data[0]" @keyup.enter="fillData3($event)">
     </span>
     <span v-else-if="selectedValue === 'A제품'">
       <input type="number"  v-model="chartData.datasets[0].data[1]" @keyup.enter="fillData3($event)">
     </span>
     <span v-else="selectedValue === 'B제품'">
       <input type="number"  v-model="chartData.datasets[0].data[2]" @keyup.enter="fillData3($event)">
     </span>
     <button @click="">변경</button></div>
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
          methods: {
            fillData3 (e) {

              this.chartData = {
                  labels: ['루마니', '우리', 'B사'],
                  datasets: [{
                    label: 'EA',
                    backgroundColor: [palette.primary, palette.warning, palette.danger],
                    data: [e.target.value, 2478, 734]
                  }]
                }
      }
    }
  }

</script>

<style lang="scss">
  .widget.chart-widget {
    .widget-body {
      height: 550px;
    }
  }

</style>
