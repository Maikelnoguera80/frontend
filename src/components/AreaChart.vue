<template>
  <div id="chartdiv" style="width: 100%; height: 500px;"></div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import axios from 'axios';

export default {
  name: 'AreaChart',
  data() {
    return {
      chart: null,
    };
  },
  async mounted() {
    // Fetch the initial data from the backend
    const response = await axios.get('/api/datos');
    const data = response.data;

    // Apply the animated theme to the chart
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    // Add data
    chart.data = data.map(item => ({
      date: new Date(item.fecha),
      value: item.monto,
    }));

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.dateX = 'date';
    series.tooltipText = '{value}';
    series.fillOpacity = 0.3;

    // Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    this.chart = chart;
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style scoped>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
