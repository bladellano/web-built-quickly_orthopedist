<template>
  <nav
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#inicio" @click.prevent="scrollTo('#inicio')" class="flex items-center gap-3 cursor-pointer">
        <img
          src="/logo-02.png"
          :alt="DOCTOR.shortName"
          class="h-[3.125rem] w-auto object-contain"
        />
        <div class="leading-tight hidden sm:block">
          <p class="font-bold text-sm" :class="isScrolled ? 'text-blue-900' : 'text-white'">
            {{ DOCTOR.shortName }}
          </p>
          <p class="text-xs" :class="isScrolled ? 'text-gray-400' : 'text-blue-200'">
            {{ DOCTOR.crm }}
          </p>
        </div>
      </a>

      <!-- Links desktop -->
      <div class="hidden md:flex items-center gap-6">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click.prevent="scrollTo(item.href)"
          class="text-sm font-medium transition-colors cursor-pointer"
          :class="isScrolled ? 'text-gray-600 hover:text-blue-800' : 'text-blue-100 hover:text-white'"
        >
          {{ item.label }}
        </a>
        <a
          :href="whatsappUrl()"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-semibold bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Agendar Consulta
        </a>
      </div>

      <!-- Botão mobile -->
      <button
        class="md:hidden p-2 rounded-lg"
        :class="isScrolled ? 'text-gray-700' : 'text-white'"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Abrir menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        @click.prevent="scrollTo(item.href); mobileMenuOpen = false"
        class="block text-gray-700 hover:text-blue-800 font-medium py-2"
      >
        {{ item.label }}
      </a>
      <a
        :href="whatsappUrl()"
        target="_blank"
        rel="noopener noreferrer"
        class="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg mt-2"
      >
        Agendar Consulta
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { DOCTOR, whatsappUrl } from '../config.js'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Início',        href: '#inicio' },
  { label: 'Sobre',         href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Diferenciais',  href: '#diferenciais' },
  { label: 'Contato',       href: '#contato' },
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const handleScroll = () => { isScrolled.value = window.scrollY > 60 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
