// ============================================================
// CONFIGURAÇÃO CENTRAL DO SITE
// Edite apenas este arquivo para atualizar dados do médico.
// ============================================================

export const DOCTOR = {
  // Dados pessoais
  name: 'Dr. Mauro Augusto Lima dos Passos',
  shortName: 'Dr. Mauro Passos',
  initials: 'MP',
  crm: 'CRM-PA 7607',

  // Especialidade
  specialty: 'Ortopedia',
  formation: 'Graduado em Medicina pela Universidade do Estado do Pará (UEPA)',

  // Experiência
  yearsExperience: 12,

  // Localização
  city: 'Belém',
  state: 'Pará',
  address: '', // ⚠️ Preencher com endereço do consultório (opcional: divulgar após agendamento)

  // Contato — ⚠️ Atualize o número abaixo se necessário
  whatsapp: '559185761174',              // Formato: 55 + DDD + número
  phone: '(91) 8576-1174',
  whatsappMessage: 'Olá, Dr. Mauro! Gostaria de agendar uma consulta.',

  // Redes sociais — ⚠️ Preencher com as URLs reais
  instagram: '', // ex: 'https://instagram.com/drmauropassos'
  facebook:  '', // ex: 'https://facebook.com/drmauropassos'

  // SEO / Meta
  siteTitle: 'Dr. Mauro Passos | Ortopedista em Belém, PA',
  siteDescription: 'Ortopedista em Belém, Pará. Dr. Mauro Augusto Lima dos Passos, CRM-PA 7607. Mais de 12 anos de experiência. Atendimento humanizado e responsável.',
}

export const whatsappUrl = (message = DOCTOR.whatsappMessage) =>
  `https://wa.me/${DOCTOR.whatsapp}?text=${encodeURIComponent(message)}`
