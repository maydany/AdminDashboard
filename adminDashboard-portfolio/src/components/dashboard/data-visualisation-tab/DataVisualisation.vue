<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="row">
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart :data="donutChartData" type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-6">
        <vuestic-data-table
          :apiMode="apiMode"
          :tableData="tableData"
          :tableFields="tableFields"
          :itemsPerPage="itemsPerPage"
          :onEachSide="onEachSide"
          :sortFunctions="sortFunctions"
          :dataModeFilterableFields="dataModeFilterableFields"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import TableData from './TableData'
  import DonutChartData from './DonutChartData'
  import FieldsDef from './fields-definition'
  export default {
    name: 'data-visualisation-tab',
    data () {
      return {
        donutChartData: DonutChartData,
        apiMode: false,
        sortFunctions: FieldsDef.sortFunctions,
        tableData: TableData,
        onEachSide: 1,
        tableFields: FieldsDef.tableFields,
        dataModeFilterableFields: ['name'],
        itemsPerPage: [
          {
            value: 5
          },
          {
            value: 10
          }
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }


</style>
