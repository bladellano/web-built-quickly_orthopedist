<script setup>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SpecialtiesSection from '../components/SpecialtiesSection.vue'
import BenefitsSection from '../components/BenefitsSection.vue'
import FaqSection from '../components/FaqSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/Footer.vue'
</script>

<template>
  <div class="relative">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <BenefitsSection />
      <FaqSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
