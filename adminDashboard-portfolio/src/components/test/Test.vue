<template>
  <div class="charts-page">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'charts.horizontalBarChart' | translate">
          <vuestic-chart :data="TestHorizontalBarChartData" type="horizontal-bar"></vuestic-chart>
        </vuestic-widget>
      </div>
      <div>{{ TestHorizontalBarChartData.datasets[0].data[0] }}</div>
    </div>
    </div>
  </div>
</template>

<script>
  import TestHorizontalBarChartData from 'data/charts/TestHorizontalBarChartData'
  import SidebarLink from 'components/admin/app-sidebar/components/SidebarLink'

  export default {
    name: 'charts',
    components: {
      SidebarLink
    },

    data: function () {
      return {
        TestHorizontalBarChartData: TestHorizontalBarChartData
      }
    },
  }
</script>

<style lang="scss">
  .widget.chart-widget {
    .widget-body {
      height: 500px;
    }
  }
</style>
