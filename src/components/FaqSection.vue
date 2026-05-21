<script setup>
import { ref } from 'vue'
import { CONTENT } from '../config.js'

const openIndex = ref(0)

const toggleItem = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="faq" class="section-pad">
    <div class="mx-auto max-w-5xl">
      <div class="mb-10 flex flex-col gap-4">
        <span class="text-xs uppercase tracking-[0.35em] text-tide">{{ CONTENT.faq.eyebrow }}</span>
        <h2 class="text-3xl text-bone sm:text-4xl">{{ CONTENT.faq.title }}</h2>
      </div>

      <div class="space-y-4">
        <article
          v-for="(item, index) in CONTENT.faq.items"
          :key="item.question"
          class="rounded-2xl border border-bone/10 p-5"
        >
          <button
            class="flex w-full items-center justify-between gap-4 text-left"
            @click="toggleItem(index)"
          >
            <span class="text-lg text-bone">{{ item.question }}</span>
            <span class="text-tide">{{ openIndex === index ? '-' : '+' }}</span>
          </button>
          <div v-if="openIndex === index" class="mt-3 text-sm text-muted">
            {{ item.answer }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
