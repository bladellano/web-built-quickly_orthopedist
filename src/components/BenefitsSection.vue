<script setup>
import { CONTENT, whatsappUrl } from '../config.js'

const whatsappLink = whatsappUrl()

const iconPaths = {
  target: 'M12 4v4m0 8v4m8-8h-4M8 12H4m8-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z',
  users: 'M16 11a4 4 0 1 0-8 0m12 9v-1a5 5 0 0 0-10 0v1',
  spark: 'M5 12l7-9 7 9-7 9-7-9z',
  heart: 'M12 20s-7-4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5-7 9-7 9z',
  calendar: 'M7 4v3m10-3v3M4 9h16M6 13h5m-5 4h8',
  pin: 'M12 3a6 6 0 0 0-6 6c0 4 6 12 6 12s6-8 6-12a6 6 0 0 0-6-6z',
}
</script>

<template>
  <section class="section-pad">
    <div class="mx-auto max-w-6xl">
      <div class="mb-10 flex flex-col gap-4">
        <span class="text-xs uppercase tracking-[0.35em] text-tide">{{ CONTENT.benefits.eyebrow }}</span>
        <h2 class="text-3xl text-bone sm:text-4xl">{{ CONTENT.benefits.title }}</h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in CONTENT.benefits.items"
          :key="item.title"
          class="rounded-3xl border border-bone/10 p-6"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-bone/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="h-6 w-6 text-bone">
              <path :d="iconPaths[item.icon]" />
            </svg>
          </div>
          <h3 class="mt-4 text-xl text-bone">{{ item.title }}</h3>
          <p class="text-sm text-muted">{{ item.description }}</p>
        </article>
      </div>

      <div class="mt-12 grid gap-6 rounded-3xl border border-bone/10 bg-bone/5 p-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h3 class="text-2xl text-bone">{{ CONTENT.benefits.ctaTitle }}</h3>
          <p class="text-muted">{{ CONTENT.benefits.ctaSubtitle }}</p>
        </div>
        <div class="flex items-center justify-start lg:justify-end">
          <a
            class="rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1"
            :href="whatsappLink"
            target="_blank"
            rel="noreferrer"
          >
            {{ CONTENT.benefits.ctaLabel }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
