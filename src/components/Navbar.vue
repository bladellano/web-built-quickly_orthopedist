<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { CONTENT, DOCTOR, whatsappUrl } from '../config.js'

const isScrolled = ref(false)
const isOpen = ref(false)
const whatsappLink = whatsappUrl()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed left-0 right-0 top-0 z-40 transition"
    :class="isScrolled ? 'bg-ink/90 shadow-soft backdrop-blur' : 'bg-transparent'"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
      <a href="#top" class="flex items-center gap-3 text-bone">
        <img src="/logo-02.png" alt="Logo" class="h-10 w-10 rounded-full object-cover" />
        <div class="leading-tight">
          <p class="text-sm uppercase tracking-[0.3em] text-tide">{{ DOCTOR.specialty }}</p>
          <p class="text-lg font-semibold">{{ DOCTOR.shortName }}</p>
        </div>
      </a>

      <div class="hidden items-center gap-6 text-sm text-mist/80 md:flex">
        <a
          v-for="item in CONTENT.nav"
          :key="item.href"
          class="transition hover:text-bone"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="hidden items-center gap-3 md:flex">
        <a
          class="rounded-full border border-bone/30 px-4 py-2 text-sm font-semibold text-bone transition hover:bg-bone/10"
          :href="whatsappLink"
          target="_blank"
          rel="noreferrer"
        >
          {{ CONTENT.navCta }}
        </a>
      </div>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-full border border-bone/30 text-bone md:hidden"
        @click="isOpen = !isOpen"
        aria-label="Abrir menu"
      >
        <span v-if="!isOpen">+</span>
        <span v-else>-</span>
      </button>
    </nav>

    <div v-if="isOpen" class="border-t border-bone/10 bg-ink/95 md:hidden">
      <div class="flex flex-col gap-3 px-6 py-4 text-sm text-mist/80">
        <a v-for="item in CONTENT.nav" :key="item.href" :href="item.href">
          {{ item.label }}
        </a>
        <a
          class="rounded-full border border-bone/30 px-4 py-2 text-center text-sm font-semibold text-bone"
          :href="whatsappLink"
          target="_blank"
          rel="noreferrer"
        >
          {{ CONTENT.navCta }}
        </a>
      </div>
    </div>
  </header>
</template>
