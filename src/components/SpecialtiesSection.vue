<template>
  <section id="especialidades" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12">
        <span class="section-label">Áreas de atuação</span>
        <h2 class="section-title">Especialidades e Atendimentos</h2>
        <p class="text-gray-500 max-w-xl mx-auto">
          Diagnóstico e tratamento de lesões e doenças do sistema musculoesquelético, com foco em
          qualidade de vida e recuperação funcional do paciente.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="specialty in specialties"
          :key="specialty.title"
          class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 group"
        >
          <div class="w-12 h-12 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-4 transition-colors">
            <span class="text-2xl" role="img" :aria-label="specialty.title">{{ specialty.icon }}</span>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">{{ specialty.title }}</h3>
          <p class="text-sm text-gray-500 leading-relaxed">{{ specialty.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ⚠️ Adapte os itens abaixo conforme as subespecialidades reais do Dr. Mauro
const specialties = [
  {
    icon: '🦴',
    title: 'Consulta Ortopédica',
    description: 'Avaliação completa do sistema musculoesquelético com anamnese detalhada, exame físico e definição do plano terapêutico.',
  },
  {
    icon: '🩹',
    title: 'Traumas e Fraturas',
    description: 'Diagnóstico e tratamento de fraturas, luxações e lesões traumáticas, com indicação conservadora ou cirúrgica conforme cada caso.',
  },
  {
    icon: '🔩',
    title: 'Doenças da Coluna',
    description: 'Manejo de hérnia de disco, lombalgia, cervicalgia e outras patologias da coluna vertebral cervical, torácica e lombar.',
  },
  {
    icon: '🦵',
    title: 'Joelho e Quadril',
    description: 'Tratamento de lesões ligamentares, meniscopatias, artrose e outras condições que afetam joelho e quadril.',
  },
  {
    icon: '💪',
    title: 'Ombro e Cotovelo',
    description: 'Avaliação e tratamento de tendinopatias, instabilidades, lesões do manguito rotador e demais doenças do membro superior.',
  },
  {
    icon: '📱',
    title: 'Telemedicina (em breve)',
    description: 'Atendimento online em estruturação. Em breve disponível para ampliar o acesso e a comodidade dos pacientes.',
  },
]
</script>
