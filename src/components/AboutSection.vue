<script setup>
import { CONTENT, DOCTOR } from '../config.js'
</script>

<template>
  <section id="sobre" class="section-pad relative">
    <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="relative">
        <div class="absolute -left-6 top-10 h-24 w-24 rounded-full bg-tide/30 blur-2xl" />
        <img
          src="/foto-dr-mauro.jpg"
          alt="Foto do médico"
          class="relative z-10 w-full rounded-3xl object-cover shadow-soft"
        />
      </div>
      <div class="flex flex-col gap-6">
        <span class="text-xs uppercase tracking-[0.35em] text-tide">{{ CONTENT.about.eyebrow }}</span>
        <h2 class="text-3xl text-bone sm:text-4xl">{{ CONTENT.about.title }}</h2>
        <p class="text-lg text-muted">{{ CONTENT.about.lead }}</p>
        <p class="text-muted">{{ CONTENT.about.bio }}</p>

        <div class="flex flex-wrap gap-4">
          <div class="glass rounded-2xl px-5 py-4 text-sm">
            <p class="text-bone">{{ DOCTOR.crm }}</p>
            <p class="text-muted">{{ DOCTOR.specialty }}</p>
          </div>
          <div class="glass rounded-2xl px-5 py-4 text-sm">
            <p class="text-bone">{{ DOCTOR.yearsExperience }}+ anos</p>
            <p class="text-muted">{{ DOCTOR.city }}, {{ DOCTOR.state }}</p>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="stat in CONTENT.about.stats"
            :key="stat.label"
            class="rounded-2xl border border-bone/10 px-5 py-4"
          >
            <p class="text-2xl text-bone">{{ stat.value }}</p>
            <p class="text-sm text-muted">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
