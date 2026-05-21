<script setup>
import { CONTENT, DOCTOR } from '../config.js'
</script>

<template>
  <footer class="border-t border-bone/10 bg-ink/80">
    <div class="section-pad mx-auto max-w-6xl">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img src="/logo-02.png" alt="Logo" class="h-12 w-12 rounded-full object-cover" />
            <div>
              <p class="text-lg text-bone">{{ DOCTOR.shortName }}</p>
              <p class="text-sm text-muted">{{ DOCTOR.specialty }}</p>
            </div>
          </div>
          <p class="text-muted">{{ CONTENT.footer.tagline }}</p>
          <div class="flex items-center gap-3 text-sm text-muted">
            <span v-if="DOCTOR.instagram">Instagram</span>
            <span v-if="DOCTOR.facebook">Facebook</span>
          </div>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div>
            <p class="text-sm uppercase tracking-[0.35em] text-tide">Navegação</p>
            <div class="mt-4 flex flex-col gap-2 text-sm text-muted">
              <a v-for="item in CONTENT.footer.links" :key="item.href" :href="item.href">
                {{ item.label }}
              </a>
            </div>
          </div>
          <div>
            <p class="text-sm uppercase tracking-[0.35em] text-tide">Contato</p>
            <div class="mt-4 space-y-2 text-sm text-muted">
              <p>{{ DOCTOR.phone }}</p>
              <p>{{ DOCTOR.address }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col justify-between gap-3 border-t border-bone/10 pt-6 text-xs text-muted sm:flex-row">
        <span>{{ DOCTOR.siteTitle }}</span>
        <span>{{ CONTENT.footer.copyright }}</span>
      </div>
    </div>
  </footer>
</template>
