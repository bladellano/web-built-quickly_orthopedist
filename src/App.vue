<script setup>
import { RouterView } from 'vue-router'
import { CONTENT, whatsappUrl } from './config.js'

const whatsappLink = whatsappUrl()
</script>

<template>
  <div class="relative min-h-screen text-mist">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="bg-orb absolute -top-32 right-[-120px] h-[360px] w-[360px] opacity-80" />
      <div class="bg-orb absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] opacity-60" />
      <div
        class="absolute left-1/2 top-10 h-24 w-[520px] -translate-x-1/2 rounded-full bg-tide/20 blur-3xl"
      />
    </div>

    <RouterView />

    <a
      class="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-moss px-5 py-3 text-sm font-semibold text-bone shadow-soft transition hover:-translate-y-1"
      :href="whatsappLink"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
    >
      <span class="flex h-9 w-9 items-center justify-center rounded-full bg-bone/15">WA</span>
      <span>{{ CONTENT.floatingCta }}</span>
    </a>
  </div>
</template>
