<template>
  <q-card class="my-card q-mt-md">
    <q-card-section class="card-header">
      <div class="text-h3">CUACA</div>
    </q-card-section>
    <q-card-section class="card-body">
      <q-input filled v-model="location" label="Masukkan Lokasi" class="my-input" />
      <q-btn color="primary" label="Cari" @click="getWeather" :loading="loading" class="my-button" />
    </q-card-section>
    <q-card-section v-if="weather && !loading" class="weather-info">
      <div>Lokasi: <span>{{ weather.name }}</span></div>
      <div>Temperatur: <span>{{ (weather.main.temp - 273.15).toFixed(2) }}°C</span></div>
      <div>Deskripsi: <span>{{ weather.weather[0].description }}</span></div>
    </q-card-section>
    <q-card-section v-if="loading" class="loading-section">
      <q-spinner-dots color="primary" size="50px" />
      <div class="loading-text">Loading...</div>
    </q-card-section>
    <q-card-section v-if="error" class="error-section">
      <div class="error-text">Error: {{ error }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'Weather',
  props: {
    apiKey: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const location = ref('');
    const weather = ref(null);
    const loading = ref(false);
    const error = ref(null);
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const getWeather = async () => {
      if (!location.value) {
        console.log('Location is empty');
        return;
      }

      loading.value = true;
      weather.value = null;
      error.value = null;
      console.log('Fetching weather for:', location.value);

      try {
        const response = await axios.get(`${apiUrl}?q=${location.value}&appid=${props.apiKey}`);
        console.log('API response:', response.data);
        weather.value = response.data;
      } catch (err) {
        console.error('Error fetching weather data:', err);
        error.value = 'Error fetching weather data. Please check the API key or location.';
        weather.value = null;
      } finally {
        loading.value = false;
      }
    };

    return { location, weather, loading, error, getWeather };
  },
};
</script>

<style scoped>
/* Import font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

/* Global styles */
body {
  font-family: 'Montserrat', sans-serif; /* Menggunakan font Montserrat */
  background-color: #f5f7fa;
  margin: 0;
  padding: 0;
  height: 100vh;
}

/* Custom card style */
.my-card {
  max-width: 10000px;
  width: 100%;
  margin: 50px auto;
  padding: 0;
  background: linear-gradient(135deg, #f7f7f7, #ffffff);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Header section style */
.card-header {
  background: linear-gradient(135deg, #0d4667, #7bcdcd);
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  padding: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Body section style */
.card-body {
  padding: 30px;
}

/* Input style */
.my-input {
  margin-bottom: 20px;
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 8px;
  border: 2px solid #ddd;
  transition: border-color 0.3s;
  width: calc(100% - 30px); /* Menggunakan calc untuk menghitung lebar input dengan padding */
}

.my-input:focus {
  outline: none;
  border-color: #007bff;
}

/* Button style */
.my-button {
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
}

.my-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Weather info style */
.weather-info {
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2rem;
}

.weather-info div {
  margin-bottom: 10px;
}

.weather-info span {
  font-weight: bold;
  color: #333;
}

/* Loading section style */
.loading-section {
  text-align: center;
  padding: 20px;
}

.loading-text {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #666;
}

/* Error section style */
.error-section {
  text-align: center;
  padding: 20px;
  background-color: #fdecea;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(255, 0, 0, 0.1);
}

.error-text {
  color: #d32f2f;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
