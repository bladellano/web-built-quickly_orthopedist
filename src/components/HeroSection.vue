<script setup>
import { CONTENT, DOCTOR, whatsappUrl } from '../config.js'

const whatsappLink = whatsappUrl()
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-28">
    <div class="absolute inset-0">
      <div v-if="CONTENT.hero.videoUrl" class="h-full w-full">
        <video
          class="h-full w-full object-cover"
          :src="CONTENT.hero.videoUrl"
          :poster="CONTENT.hero.posterUrl || undefined"
          autoplay
          muted
          loop
          playsinline
        />
      </div>
      <div v-else class="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(90,161,179,0.3),_transparent_55%),_linear-gradient(135deg,_#0b1a2b_0%,_#142d3a_55%,_#1b2e3c_100%)]" />
      <div class="absolute inset-0 bg-ink/70" />
    </div>

    <div class="relative mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-8 sm:px-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="flex flex-col gap-6">
        <span class="inline-flex w-fit items-center gap-2 rounded-full border border-bone/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-bone/70">
          {{ CONTENT.hero.badge }}
        </span>
        <h1 class="text-4xl text-bone sm:text-5xl lg:text-6xl">
          {{ CONTENT.hero.title }}
        </h1>
        <p class="max-w-xl text-lg text-muted">
          {{ CONTENT.hero.subtitle }}
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            class="rounded-full bg-tide px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1"
            :href="whatsappLink"
            target="_blank"
            rel="noreferrer"
          >
            {{ CONTENT.hero.ctaPrimary }}
          </a>
          <a
            class="rounded-full border border-bone/30 px-6 py-3 text-sm font-semibold text-bone transition hover:bg-bone/10"
            href="#sobre"
          >
            {{ CONTENT.hero.ctaSecondary }}
          </a>
        </div>
      </div>

      <div class="glass fade-up relative mt-6 flex flex-col gap-6 rounded-3xl p-6 sm:p-8">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-tide">{{ CONTENT.hero.cardTitle }}</p>
          <p class="text-2xl text-bone">{{ DOCTOR.shortName }}</p>
        </div>
        <div class="space-y-4 text-sm text-muted">
          <div v-for="item in CONTENT.hero.cardItems" :key="item.label" class="flex justify-between">
            <span>{{ item.label }}</span>
            <span class="text-bone">{{ item.value }}</span>
          </div>
        </div>
        <div class="rounded-2xl bg-bone/10 p-4 text-sm text-bone">
          {{ DOCTOR.formation }}
        </div>
      </div>
    </div>
  </section>
</template>
