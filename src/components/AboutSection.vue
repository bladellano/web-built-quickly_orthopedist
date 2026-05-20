<template>
  <section id="sobre" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Foto do profissional -->
        <div class="relative">
          <div class="aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden">
            <img
              src="/foto-dr-mauro.jpg"
              alt="Dr. Mauro Augusto Lima dos Passos"
              class="w-full h-full object-cover object-top"
            />
          </div>
          <!-- Badge CRM -->
          <div class="absolute -bottom-4 -right-4 bg-blue-800 text-white rounded-xl px-5 py-3 shadow-lg">
            <p class="text-xl font-bold leading-none">{{ DOCTOR.crm }}</p>
            <p class="text-blue-300 text-xs mt-1">Médico registrado</p>
          </div>
        </div>

        <!-- Texto -->
        <div>
          <span class="section-label">Sobre o profissional</span>
          <h2 class="section-title">
            Dr. Mauro Augusto<br>Lima dos Passos
          </h2>
          <p class="text-gray-600 leading-relaxed mb-5">
            Ortopedista com mais de 12 anos de experiência dedicado ao atendimento humanizado, o Dr. Mauro Passos
            atua em Belém do Pará no diagnóstico e tratamento de lesões e doenças do sistema musculoesquelético.
            Cada consulta é conduzida com escuta ativa, atenção individualizada e comprometimento com o melhor
            resultado clínico para cada paciente.
          </p>
          <p class="text-gray-600 leading-relaxed mb-8">
            {{ DOCTOR.formation }}. Comprometido com a atualização contínua e com as melhores práticas
            da medicina baseada em evidências.
          </p>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 rounded-xl p-5">
              <p class="text-3xl font-bold text-blue-800">{{ DOCTOR.yearsExperience }}+</p>
              <p class="text-sm text-gray-500 mt-1">Anos de experiência</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5">
              <p class="text-2xl font-bold text-green-700">Belém</p>
              <p class="text-sm text-gray-500 mt-1">Pará, Brasil</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { DOCTOR } from '../config.js'
</script>
