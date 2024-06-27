<!-- src/views/Home.vue -->
<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="formData.fecha" label="Fecha" type="date" required></v-text-field>
      <v-text-field v-model="formData.monto" label="Monto" required></v-text-field>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>

    <!-- Componente de Gráfico de Área -->
    <AreaChart :data="chartData" />

  </v-container>
</template>

<script>
import axios from '@/axios'; // Importa tu instancia de Axios configurada
import AreaChart from '@/components/AreaChart'; // Importa tu componente de gráfico de área

export default {
  components: {
    AreaChart,
  },
  data() {
    return {
      formData: {
        fecha: '',
        monto: null,
      },
      chartData: [], // Inicializa los datos del gráfico vacíos o con datos preexistentes
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.submitFormData(this.formData);
        console.log('Respuesta del servidor:', response);
        this.fetchChartData(); // Actualizar datos del gráfico después de enviar datos
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        // Lógica para manejar errores
      }
    },

     async fetchDataForChart() {
      try {
        const response = await axios.get('/api/datos'); // Endpoint API para obtener datos
        this.chartData = response.data; // Asignar datos al gráfico
      } catch (error) {
        console.error('Error al obtener datos para el gráfico:', error);
      }
    },
  },
  mounted() {
    this.fetchDataForChart(); // Cargar datos iniciales para el gráfico al montar el componente
  },
};
</script>