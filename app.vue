<template>
  <div>
    <header>
      <AppHeader />
    </header>
    <main>
      <AppHome />
    </main>
    <footer class="w-full bg-footerColor">
      <AppFooter />
    </footer>
  </div>
</template>


<script>
import AppHeader from './components/frame/header/AppHeader.vue';
import AppFooter from './components/frame/footer/AppFooter.vue';
import AppHome from './components/pages/home/AppHome.vue';
import '@/assets/styles/main.css'

export default {
  components: {
    AppHeader,
    AppHome,
    AppFooter
  }
}
</script>
