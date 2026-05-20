<template>
  <section id="diferenciais" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12">
        <span class="section-label">Por que escolher</span>
        <h2 class="section-title">Diferenciais do Atendimento</h2>
        <p class="text-gray-500 max-w-xl mx-auto">
          Um cuidado médico que coloca o paciente no centro, com ética, clareza e comprometimento em cada consulta.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div v-for="benefit in benefits" :key="benefit.title" class="flex gap-4">
          <div
            class="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center"
            :class="benefit.bgColor"
          >
            <svg class="w-6 h-6" :class="benefit.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="benefit.iconPath" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-1">{{ benefit.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>

      <!-- Banner CTA -->
      <div class="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
          Pronto para cuidar da sua saúde?
        </h3>
        <p class="text-blue-200 mb-6 max-w-md mx-auto">
          Agende sua consulta agora mesmo pelo WhatsApp. Atendimento ágil, sem burocracia.
        </p>
        <a
          :href="whatsappUrl()"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Agendar Consulta
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { whatsappUrl } from '../config.js'

const benefits = [
  {
    title: 'Atendimento Humanizado',
    description: 'Cada consulta é conduzida com escuta ativa, respeito e atenção dedicada às necessidades individuais do paciente.',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    title: 'Comunicação Clara',
    description: 'Diagnósticos, orientações e prescrições explicados de forma acessível, sem jargão técnico desnecessário.',
    iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Pontualidade',
    description: 'Compromisso com os horários agendados, respeitando o tempo e a rotina de cada paciente.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    title: 'Sigilo e Ética',
    description: 'Confidencialidade total no atendimento, em conformidade com o Código de Ética Médica e a legislação vigente.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    title: 'Acompanhamento Contínuo',
    description: 'Suporte ao paciente além da consulta, com orientações para seguimento do tratamento e retornos programados conforme necessidade clínica.',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    title: 'Agendamento Simples',
    description: 'Marque sua consulta diretamente pelo WhatsApp, sem burocracia e com confirmação rápida de data e horário.',
    iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
]
</script>
