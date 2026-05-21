<script setup>
import { CONTENT } from '../config.js'

const iconPaths = {
  stethoscope:
    'M12 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V4m10 0h4m-4 0h-4m6 12a6 6 0 0 0 12 0',
  shield: 'M12 3l8 4v6c0 5-3 9-8 12-5-3-8-7-8-12V7l8-4z',
  spine: 'M12 4v16m0-10h6m-6 4h6m-6 4h6',
  joint: 'M7 5h10v4H7zM9 9h6v10H9z',
  arm: 'M8 5c2 0 4 2 4 4v3c0 2 2 4 4 4',
  video: 'M4 7h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm14 2 4-2v10l-4-2',
}
</script>

<template>
  <section id="especialidades" class="section-pad">
    <div class="mx-auto max-w-6xl">
      <div class="mb-10 flex flex-col gap-4">
        <span class="text-xs uppercase tracking-[0.35em] text-tide">{{ CONTENT.specialties.eyebrow }}</span>
        <h2 class="text-3xl text-bone sm:text-4xl">{{ CONTENT.specialties.title }}</h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in CONTENT.specialties.items"
          :key="item.title"
          class="glass flex flex-col gap-4 rounded-3xl p-6"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-tide/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="h-6 w-6 text-tide">
              <path :d="iconPaths[item.icon]" />
            </svg>
          </div>
          <h3 class="text-xl text-bone">{{ item.title }}</h3>
          <p class="text-sm text-muted">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
