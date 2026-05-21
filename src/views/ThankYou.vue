<script setup>
import { RouterLink } from 'vue-router'
import { CONTENT } from '../config.js'
</script>

<template>
  <section class="section-pad min-h-screen">
    <div class="mx-auto flex max-w-3xl flex-col items-start gap-6">
      <span class="text-sm uppercase tracking-[0.35em] text-tide">Confirmação</span>
      <h1 class="text-4xl text-bone sm:text-5xl">{{ CONTENT.thankYou.title }}</h1>
      <p class="text-lg text-muted">{{ CONTENT.thankYou.subtitle }}</p>
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm font-semibold text-bone transition hover:bg-bone/10"
      >
        {{ CONTENT.thankYou.ctaLabel }}
      </RouterLink>
    </div>
  </section>
</template>
