<template>
  <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
    <q-header elevated class="custom-header">
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>

        <q-btn flat round dense class="header-icon" href="https://www.instagram.com/zakiaauliaputra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <q-icon name="assignment_ind" />
        </q-btn>
        <q-space></q-space>
      
        <q-btn-dropdown flat class="custom-btn" label="ZAKIA's TASK">
          <q-list>
            <q-item clickable @click="navigateToLink('https://zakiaaulia-p-223510358-prak-pb-kt1.vercel.app')">
              <q-item-section>TUGAS 1</q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://zakiaauliaputra-223510358-tugas2-prak-pbk.vercel.app')">
              <q-item-section>TUGAS 2</q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://zakiaauliaputra-223510358-4e-t3-prakpbk.vercel.app')">
              <q-item-section>TUGAS 3</q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://zakiaauliaputra-223510358-4e-t4-prak-pbk.vercel.app')">
              <q-item-section>TUGAS 4</q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://zakiaauliaputra-223510358-tgs5-prak-pbk.vercel.app')">
              <q-item-section>TUGAS 5</q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('https://zakiaauliaputra-223510358-4e-t6-prak-pbk.vercel.app')">
              <q-item-section>TUGAS 6</q-item-section>
            </q-item>
            <q-item clickable @click="navigateToLink('')">
              <q-item-section>TUGAS 7</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar>
      
      <q-toolbar inset>
        <q-toolbar-title class="custom-title" style="margin-left: 70px;">
          <strong>ZAKIA's WEB PROJECT</strong> 
        </q-toolbar-title>
        
        <div class="nav-links">
          <q-btn flat round dense to="/" exact-active-class="active" class="q-item">
            <q-icon name="home" class="q-item-icon" />
            <q-item-label>Home</q-item-label>
          </q-btn>
          
          <q-btn flat round dense to="/weather" exact-active-class="active" class="q-item">
            <q-icon name="checklist" class="q-item-icon" />
            <q-item-label>Weather</q-item-label>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="custom-page-container">
      <q-page class="custom-page">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import Weather from './views/Weather.vue';
import Home from './views/Home.vue'; 

export default {
  name: 'App',
  components: {
    Weather,
    Home,
  },
  data() {
    return {
      apiKey: '4fb4881cdb8b643efdfb97cfccc6ce5b',
    };
  },
  methods: {
    navigateToLink(url) {
      window.open(url, '_blank');
    },
    getTasks() {
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f7fa;
  margin: 0;
  padding: 0;
  height: 100vh;
}

.custom-layout {
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  height: 100vh;
}

.custom-header {
  background: linear-gradient(135deg, #3c4566, #2848c7) !important;
  border-bottom: 2px solid #ff0000;
}

.custom-title {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.custom-btn .q-btn__content {
  color: #ffffff;
  font-weight: 500;
}

.custom-select .q-field__control {
  border-radius: 8px;
  border: 2px solid #f5a623;
  background-color: #ffffff;
  color: #3a3f51;
}

.custom-select .q-field__control:hover {
  border-color: #ffce00;
}

.custom-icon {
  color: #ffffff !important;
  transition: background-color 0.3s, color 0.3s;
}

.custom-icon:hover {
  background-color: #f5a623 !important;
  color: #ffffff !important;
}

.custom-page-container {
  background-color: #953d3d53;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex: 1;
}

.q-btn {
  color: #ffffff;
  border-radius: 50%;
}

.q-btn:hover {
  background-color: #c1beb8;
  color: #ffffff;
}

.header-icon {
  margin-right: 30px;
  font-size: 1.4rem; 
}

.shadow-2 {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.rounded-borders {
  border-radius: 12px;
}

</style>
