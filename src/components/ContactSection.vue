<script setup>
import { CONTENT, DOCTOR, whatsappUrl } from '../config.js'

const whatsappLink = whatsappUrl()

const iconPaths = {
  chat: 'M21 12c0 4-4 7-9 7-1 0-2-0.1-3-0.4L3 20l1.7-4.2A6.6 6.6 0 0 1 3 12c0-4 4-7 9-7s9 3 9 7z',
  phone: 'M6 4h3l2 5-2 1c1 2 3 4 5 5l1-2 5 2v3c0 1-1 2-2 2-7 0-12-5-12-12 0-1 1-2 2-2z',
  pin: 'M12 3a6 6 0 0 0-6 6c0 4 6 12 6 12s6-8 6-12a6 6 0 0 0-6-6z',
}
</script>

<template>
  <section id="contato" class="section-pad">
    <div class="mx-auto max-w-6xl">
      <div class="mb-10 flex flex-col gap-4">
        <span class="text-xs uppercase tracking-[0.35em] text-tide">{{ CONTENT.contact.eyebrow }}</span>
        <h2 class="text-3xl text-bone sm:text-4xl">{{ CONTENT.contact.title }}</h2>
        <p class="text-muted">{{ CONTENT.contact.subtitle }}</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="grid gap-6">
          <article
            v-for="card in CONTENT.contact.cards"
            :key="card.label"
            class="glass rounded-3xl p-6"
          >
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-tide/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="h-6 w-6 text-tide">
                  <path :d="iconPaths[card.icon]" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-muted">{{ card.label }}</p>
                <p class="text-lg text-bone">{{ card.value }}</p>
                <p class="text-sm text-muted">{{ card.description }}</p>
              </div>
            </div>
          </article>
        </div>

        <div class="rounded-3xl border border-bone/10 p-6">
          <h3 class="text-2xl text-bone">{{ DOCTOR.shortName }}</h3>
          <p class="text-muted">{{ DOCTOR.address }}</p>
          <div class="mt-6 space-y-4">
            <div
              v-for="step in CONTENT.contact.steps"
              :key="step.title"
              class="rounded-2xl bg-bone/5 p-4"
            >
              <p class="text-bone">{{ step.title }}</p>
              <p class="text-sm text-muted">{{ step.description }}</p>
            </div>
          </div>
          <a
            class="mt-6 inline-flex items-center justify-center rounded-full bg-tide px-5 py-3 text-sm font-semibold text-ink"
            :href="whatsappLink"
            target="_blank"
            rel="noreferrer"
          >
            {{ CONTENT.benefits.ctaLabel }}
          </a>
        </div>
      </div>

      <div class="mt-10 rounded-3xl border border-bone/10 bg-ink/70 p-6">
        <h3 class="text-2xl text-bone">Formulário de contato</h3>
        <p class="text-sm text-muted">
          Envie uma mensagem e nossa equipe retorna com o melhor horário.
        </p>
        <form class="mt-6 grid gap-4">
          <label class="text-sm text-muted">
            Nome completo
            <input
              type="text"
              name="name"
              class="mt-2 w-full rounded-2xl border border-bone/10 bg-ink/80 px-4 py-3 text-bone placeholder:text-mist/40"
              placeholder="Seu nome"
            />
          </label>
          <label class="text-sm text-muted">
            E-mail
            <input
              type="email"
              name="email"
              class="mt-2 w-full rounded-2xl border border-bone/10 bg-ink/80 px-4 py-3 text-bone placeholder:text-mist/40"
              placeholder="voce@email.com"
            />
          </label>
          <label class="text-sm text-muted">
            Mensagem
            <textarea
              name="message"
              rows="4"
              class="mt-2 w-full rounded-2xl border border-bone/10 bg-ink/80 px-4 py-3 text-bone placeholder:text-mist/40"
              placeholder="Conte rapidamente o que você precisa"
            ></textarea>
          </label>
          <button
            type="submit"
            class="mt-2 inline-flex items-center justify-center rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
