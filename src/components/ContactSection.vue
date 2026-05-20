<template>
  <section id="contato" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12">
        <span class="section-label">Entre em contato</span>
        <h2 class="section-title">Agende sua Consulta</h2>
        <p class="text-gray-500 max-w-xl mx-auto">
          O agendamento é simples e direto. Entre em contato pelo WhatsApp ou telefone e
          o Dr. Mauro confirmará data e horário disponíveis.
        </p>
      </div>

      <!-- Cards de contato -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <!-- WhatsApp -->
        <a
          :href="whatsappUrl()"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center text-center bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-8 transition-all duration-200 hover:shadow-md"
        >
          <div class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-900 mb-1">WhatsApp</h3>
          <p class="text-green-700 font-medium">{{ DOCTOR.phone }}</p>
          <p class="text-gray-500 text-xs mt-1">Canal preferencial para agendamentos</p>
        </a>

        <!-- Telefone -->
        <a
          :href="`tel:+${DOCTOR.whatsapp}`"
          class="group flex flex-col items-center text-center bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-8 transition-all duration-200 hover:shadow-md"
        >
          <div class="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 class="font-semibold text-gray-900 mb-1">Telefone</h3>
          <p class="text-blue-700 font-medium">{{ DOCTOR.phone }}</p>
          <p class="text-gray-500 text-xs mt-1">Ligações e mensagens de texto</p>
        </a>

        <!-- Localização -->
        <div class="flex flex-col items-center text-center bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div class="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="font-semibold text-gray-900 mb-1">Localização</h3>
          <p class="text-gray-700 font-medium">{{ DOCTOR.city }}, {{ DOCTOR.state }}</p>
          <!-- ⚠️ Se quiser exibir endereço público, atualize DOCTOR.address em config.js -->
          <p class="text-gray-500 text-xs mt-1">Endereço informado após o agendamento</p>
        </div>
      </div>

      <!-- Passo a passo para agendar -->
      <div class="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-10">
        <h3 class="text-xl font-bold text-gray-900 text-center mb-8">Como agendar sua consulta</h3>
        <div class="grid sm:grid-cols-3 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="text-center">
            <div class="w-10 h-10 rounded-full bg-blue-800 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
              {{ index + 1 }}
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">{{ step.title }}</h4>
            <p class="text-sm text-gray-500 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
        <div class="text-center mt-8">
          <a
            :href="whatsappUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-whatsapp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Iniciar agendamento pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { DOCTOR, whatsappUrl } from '../config.js'

const steps = [
  {
    title: 'Envie uma mensagem',
    description: 'Clique no botão do WhatsApp, informe seu nome e o motivo da consulta.',
  },
  {
    title: 'Confirme o horário',
    description: 'O Dr. Mauro responderá com as datas e horários disponíveis para agendamento.',
  },
  {
    title: 'Compareça à consulta',
    description: 'Vá ao endereço informado no horário combinado com seus documentos e exames anteriores.',
  },
]
</script>
