'use client'

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cctv, DoorOpen, Network, Home, LayoutGrid, Phone } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/spline-scene";
import { GlowCard } from "@/components/ui/spotlight-card";
import { LimelightNav } from "@/components/ui/limelight-nav";

const services = [
  {
    title: "Alarmes e Sensores",
    description: "Monitoramento avançado com tecnologia Piroelétrica. Integrado aos painéis remotos de resposta inteligente 24 horas por dia.",
    icon: <Shield className="w-8 h-8 text-brand-neon" />
  },
  {
    title: "CFTV IP Digital",
    description: "Câmeras de alta resolução 4K com IA integrada para análise de vídeo, cruzamento de perímetro e reconhecimento de placas.",
    icon: <Cctv className="w-8 h-8 text-brand-neon" />
  },
  {
    title: "Automação de Portões",
    description: "Motores ultra-rápidos de alta performance e controles anticlonagem, trazendo o máximo conforto sem brechas na sua portaria.",
    icon: <DoorOpen className="w-8 h-8 text-brand-neon" />
  },
  {
    title: "Infraestrutura de TI",
    description: "Cabeamento estruturado, racks, e soluções híbridas focadas no fluxo da sua empresa. Redes robustas que não caem em momentos críticos.",
    icon: <Network className="w-8 h-8 text-brand-neon" />
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden pt-20">
      
      {/* HEADER NAVBAR MOCKUP */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 py-4 bg-brand-dark/80 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <a href="#" className="flex items-center gap-2">
                <img src="/Imagens/logo-rp.png" alt="RP Sistemas" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <div className="hidden md:block">
                <LimelightNav 
                  className="bg-transparent border-none text-brand-neon"
                  limelightClassName="bg-cyan-500 shadow-[0_20px_15px_var(--tw-shadow-color)] shadow-cyan-500"
                  iconClassName="text-white hover:text-cyan-400 transition-colors"
                  items={[
                    { id: 'home', icon: <Home />, label: 'Início', href: '#' },
                    { id: 'services', icon: <LayoutGrid />, label: 'Tecnologia', href: '#services' },
                    { id: 'contact', icon: <Phone />, label: 'Contato', href: '#contact' },
                  ]}
                />
            </div>
            <div className="hidden md:flex items-center">
                <a href="#contact" className="px-6 py-2 rounded-full border border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-brand-dark transition-all duration-300">
                    Falar com Especialista
                </a>
            </div>
        </div>
      </nav>

      {/* HERO SECTION WITH SPLINE */}
      <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center bg-brand-dark overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
        
        <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-7xl px-6 z-10 h-full pt-10">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pb-20 md:pb-0 z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight font-[family-name:var(--font-outfit)]"
            >
              SEGURANÇA INTELIGENTE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">PARA O FUTURO.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-lg font-light leading-relaxed"
            >
              Arquitetura de proteção unificada com foco em rentabilidade (ROI). Domine sua infraestrutura com Alarmes, Câmeras IP e CFTV de Nível Operacional Avançado.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#contact" className="inline-flex mt-4 px-8 py-4 rounded-full bg-brand-neon text-brand-dark font-bold hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transition-all duration-300 hover:scale-[1.02]">
                SOLICITAR ORÇAMENTO AGORA
              </a>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative mt-10 md:mt-0 right-0 z-10 pointer-events-auto">
             {/* Spline placeholder representing a secure control center or abstract tech sphere */}
             <SplineScene scene="https://prod.spline.design/kZIGLNwgGjcL0WfB/scene.splinecode" className="w-full h-full scale-[1.2] md:scale-100" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID (ACETERNITY STYLE CARDS) */}
      <section id="services" className="relative w-full py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-outfit)]"
            >
              Pilar <span className="text-brand-neon">Operacional</span>
            </motion.h2>
            <div className="w-24 h-1 bg-brand-neon mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {services.map((service, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 whileHover={{ y: -5 }}
              >
                <GlowCard
                  glowColor="blue"
                  customSize={true}
                  className="w-full flex-col p-8 glass-card border flex items-start text-left h-full group"
                >
                  <div className="mb-6 p-4 rounded-full bg-black border border-brand-border inline-block shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-shadow">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION & IMAGE */}
      <section id="contact" className="w-full py-24 relative overflow-hidden">
        {/* Placeholder from user specs using the original car design to show the real service application */}
        <div className="absolute inset-0 z-0">
            <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
               alt="Data Center e Segurança" 
               className="w-full h-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-12 rounded-[2rem] border border-brand-neon/30"
            >
                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] text-white mb-6">
                    A Segurança do Seu Negócio Não Atestita Espera.
                </h2>
                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                    Converse diretamente com os nossos engenheiros e analistas para criar um raio-x das vulnerabilidades da sua operação atual. 
                </p>
                <a href="#" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-brand-neon text-brand-dark font-bold text-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] transition-all duration-300">
                    FALAR COM O COMERCIAL
                </a>
            </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-brand-border bg-[#020202] py-8 relative z-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                  <img src="/Imagens/logo-rp.png" alt="RP Sistemas" className="h-8 w-auto opacity-70" />
              </div>
              <p className="text-gray-500 text-sm text-center md:text-left">
                  &copy; 2026 RP Sistemas de Segurança. Monitoramento Sênior.
              </p>
          </div>
      </footer>
    </main>
  );
}
