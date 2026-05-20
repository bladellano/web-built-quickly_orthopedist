<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12">
        <span class="section-label">Dúvidas frequentes</span>
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="text-gray-500">
          Encontre respostas para as principais dúvidas sobre o atendimento do Dr. Mauro.
        </p>
      </div>

      <div class="space-y-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <button
            class="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
            @click="toggle(index)"
            :aria-expanded="openIndex === index"
          >
            <span class="font-medium text-gray-900">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="openIndex === index" class="px-6 pb-5">
            <p class="text-gray-600 text-sm leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)
const toggle = (index) => { openIndex.value = openIndex.value === index ? null : index }

const faqs = [
  {
    question: 'Como faço para agendar uma consulta?',
    answer: 'O agendamento é feito diretamente pelo WhatsApp. Clique no botão "Agendar Consulta" neste site, envie uma mensagem com seu nome e o motivo da consulta, e o Dr. Mauro responderá com as datas e horários disponíveis.',
  },
  {
    question: 'Quais documentos devo levar na consulta?',
    answer: 'Traga um documento de identificação com foto (RG ou CNH), cartão do plano de saúde se aplicável, exames anteriores relacionados ao motivo da consulta e lista de medicamentos em uso contínuo.',
  },
  {
    question: 'O consultório aceita planos de saúde?',
    // ⚠️ Atualizar conforme convênios reais aceitos
    answer: 'Para informações sobre convênios aceitos, entre em contato pelo WhatsApp. O Dr. Mauro informará os planos disponíveis e as condições de atendimento particular.',
  },
  {
    question: 'É possível fazer atendimento por telemedicina?',
    answer: 'A telemedicina está sendo estruturada e em breve estará disponível. Acompanhe as atualizações neste site ou consulte pelo WhatsApp.',
  },
  {
    question: 'Qual é o endereço do consultório?',
    // ⚠️ Atualizar com endereço real, se optar por divulgar
    answer: 'O consultório fica localizado em Belém, Pará. O endereço completo e as instruções de acesso são fornecidos após a confirmação do agendamento pelo WhatsApp.',
  },
  {
    question: 'Como funciona o retorno médico?',
    answer: 'Retornos são agendados pelo WhatsApp no mesmo processo de agendamento regular. O prazo do retorno é definido pelo Dr. Mauro na própria consulta, conforme a necessidade clínica de cada caso.',
  },
]
</script>
