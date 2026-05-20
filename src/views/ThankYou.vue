<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
    <div class="max-w-md mx-auto text-center">
      <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Mensagem Enviada!</h1>
      <p class="text-gray-600 leading-relaxed mb-8">
        Sua mensagem foi recebida com sucesso. O Dr. Mauro entrará em contato em breve para confirmar o agendamento da sua consulta.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Voltar ao início
      </router-link>
    </div>
  </div>
</template>
