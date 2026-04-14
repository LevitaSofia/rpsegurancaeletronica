'use client'

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cctv, DoorOpen, Network, Home, LayoutGrid, Phone, CheckCircle2, Clock, Wrench, Star } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { GlowCard } from "@/components/ui/spotlight-card";
import { LimelightNav } from "@/components/ui/limelight-nav";

const services = [
  {
    title: "Alarmes Monitorados",
    description: "Centrais de alarme com monitoramento 24h por dia. Sensores de presença, magnéticos e de vibração integrados com resposta imediata de nossa equipe técnica.",
    icon: <Shield className="w-8 h-8" style={{ color: '#00ffff' }} />
  },
  {
    title: "Câmeras IP / CFTV Digital",
    description: "Câmeras de alta resolução com visão noturna, gravação em nuvem e acesso remoto pelo celular. Monitoramento em tempo real de qualquer lugar do mundo.",
    icon: <Cctv className="w-8 h-8" style={{ color: '#00ffff' }} />
  },
  {
    title: "Automatização de Portões",
    description: "Motores de alta performance para portões deslizantes e basculantes. Controle via controle remoto, smartphone ou biometria com sensores de segurança.",
    icon: <DoorOpen className="w-8 h-8" style={{ color: '#00ffff' }} />
  },
  {
    title: "Sistemas de TI e Redes",
    description: "Instalação e manutenção de redes cabeadas e Wi-Fi, configuração de servidores, câmeras IP e infraestrutura completa para empresas e residências.",
    icon: <Network className="w-8 h-8" style={{ color: '#00ffff' }} />
  }
];

const diferenciais = [
  { icon: <Clock className="w-6 h-6" style={{ color: '#00ffff' }} />, title: "Atendimento 24h", desc: "Suporte técnico disponível a qualquer hora" },
  { icon: <Wrench className="w-6 h-6" style={{ color: '#00ffff' }} />, title: "Instalação Profissional", desc: "Equipe certificada com anos de experiência" },
  { icon: <Star className="w-6 h-6" style={{ color: '#00ffff' }} />, title: "Garantia de Serviço", desc: "Todo serviço com garantia e suporte pós-venda" },
  { icon: <CheckCircle2 className="w-6 h-6" style={{ color: '#00ffff' }} />, title: "Materiais de Qualidade", desc: "Trabalhamos apenas com marcas reconhecidas" },
];

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#050505', color: '#e2e8f0', minHeight: '100vh', overflowX: 'hidden', paddingTop: '80px' }}>

      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,255,255,0.1)', padding: '12px 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#">
            <img src="/Imagens/logo-rp.png" alt="RP Sistemas de Segurança" style={{ height: '44px', width: 'auto' }} />
          </a>
          <div className="hidden md:block">
            <LimelightNav
              className="bg-transparent border-none"
              limelightClassName="bg-cyan-400"
              items={[
                { id: 'home', icon: <Home />, label: 'Início', href: '#' },
                { id: 'services', icon: <LayoutGrid />, label: 'Serviços', href: '#services' },
                { id: 'contact', icon: <Phone />, label: 'Contato', href: '#contact' },
              ]}
            />
          </div>
          <a href="#contact" style={{ border: '1px solid #00ffff', color: '#00ffff', padding: '8px 24px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, transition: 'all 0.3s' }}
            className="hidden md:flex hover:bg-cyan-400 hover:text-black">
            Falar com Especialista
          </a>
        </div>
      </nav>

      {/* HERO SECTION — imagem do carro como fundo */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Imagem de fundo: carro com logo da empresa */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/Imagens/carro-rp.jpg"
            alt="RP Sistemas de Segurança - Equipe em campo"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.35 }}
          />
          {/* Gradiente escurecendo a imagem para o texto aparecer */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,5,0.95) 55%, rgba(5,5,5,0.4) 100%)' }} />
        </div>

        <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" fill="cyan" />

        <div className="max-w-7xl mx-auto px-6 relative" style={{ zIndex: 10 }}>
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(0,255,255,0.1)', border: '1px solid rgba(0,255,255,0.3)', padding: '6px 16px', borderRadius: '9999px', marginBottom: '24px' }}
            >
              <span style={{ width: '8px', height: '8px', backgroundColor: '#00ffff', borderRadius: '9999px', display: 'inline-block' }} className="animate-pulse" />
              <span style={{ color: '#00ffff', fontSize: '13px', fontWeight: 600 }}>Monitoramento 24h Ativo</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', fontFamily: 'var(--font-outfit)' }}
            >
              SEGURANÇA INTELIGENTE{' '}
              <span style={{ background: 'linear-gradient(to right, #22d3ee, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                PARA O FUTURO.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '520px' }}
            >
              Especialistas em <strong style={{ color: '#e2e8f0' }}>alarmes, câmeras IP, CFTV digital, automatização de portões</strong> e infraestrutura de TI. Proteção real para sua residência ou empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <a href="#contact"
                style={{ backgroundColor: '#00ffff', color: '#050505', padding: '14px 32px', borderRadius: '9999px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 0 20px rgba(0,255,255,0.4)', transition: 'all 0.3s' }}
                className="hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]">
                SOLICITAR ORÇAMENTO
              </a>
              <a href="#services"
                style={{ border: '1px solid rgba(148,163,184,0.4)', color: '#94a3b8', padding: '14px 32px', borderRadius: '9999px', fontWeight: 500, textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s' }}
                className="hover:border-cyan-400 hover:text-cyan-400">
                Nossos Serviços
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE — foto + diferenciais */}
      <section style={{ padding: '80px 0', backgroundColor: '#080808' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Foto do carro/empresa */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 70%)', transform: 'scale(1.2)', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1, borderRadius: '24px', border: '1px solid rgba(0,255,255,0.2)', padding: '8px', boxShadow: '0 0 40px rgba(0,255,255,0.1)' }}>
                <img
                  src="/Imagens/tecnico-rp.jpg"
                  alt="Técnico especialista RP Sistemas de Segurança"
                  style={{ width: '100%', borderRadius: '18px', objectFit: 'cover', height: '420px', objectPosition: 'top' }}
                />
              </div>
              {/* Badge sobre a foto */}
              <div style={{ position: 'absolute', bottom: '-16px', right: '24px', zIndex: 10, backgroundColor: '#050505', border: '1px solid rgba(0,255,255,0.3)', borderRadius: '16px', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#00ffff', borderRadius: '9999px' }} className="animate-pulse" />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px' }}>Atendimento Ativo</div>
                  <div style={{ color: '#94a3b8', fontSize: '12px' }}>24h por dia, 7 dias por semana</div>
                </div>
              </div>
            </motion.div>

            {/* Texto e diferenciais */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', fontFamily: 'var(--font-outfit)' }}>
                Por que escolher a{' '}
                <span style={{ color: '#00ffff' }}>RP Sistemas?</span>
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '32px' }}>
                Somos especialistas em segurança eletrônica com equipe técnica qualificada, trabalhando com equipamentos de última geração para garantir a proteção total da sua propriedade.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {diferenciais.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0,255,255,0.1)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {d.icon}
                      <strong style={{ fontSize: '14px', color: '#e2e8f0' }}>{d.title}</strong>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.5 }}>{d.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="services" style={{ padding: '80px 0', backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, fontFamily: 'var(--font-outfit)' }}
            >
              Nossos <span style={{ color: '#00ffff' }}>Serviços</span>
            </motion.h2>
            <div style={{ width: '80px', height: '3px', backgroundColor: '#00ffff', margin: '12px auto 0', borderRadius: '9999px', boxShadow: '0 0 10px rgba(0,255,255,0.8)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <GlowCard glowColor="blue" customSize={true} className="w-full p-8 flex flex-col items-start text-left h-full glass-card">
                  <div style={{ marginBottom: '20px', padding: '14px', borderRadius: '9999px', backgroundColor: '#050505', border: '1px solid rgba(0,255,255,0.15)', display: 'inline-block' }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px', fontFamily: 'var(--font-outfit)' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {service.description}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contact" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/Imagens/carro-rp.jpg"
            alt="RP Sistemas em ação"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12, filter: 'grayscale(100%)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #050505, rgba(5,5,5,0.7), #050505)' }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0,255,255,0.2)', borderRadius: '32px', padding: '64px 48px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', fontFamily: 'var(--font-outfit)' }}>
              Proteja o que é seu.{' '}
              <span style={{ color: '#00ffff' }}>Agora.</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
              Fale agora com um especialista da RP Sistemas e receba um orçamento gratuito para alarme, câmeras, portão ou TI.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/55" target="_blank" rel="noopener noreferrer"
                style={{ backgroundColor: '#00ffff', color: '#050505', padding: '16px 40px', borderRadius: '9999px', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none', boxShadow: '0 0 25px rgba(0,255,255,0.5)', transition: 'all 0.3s' }}>
                📲 SOLICITAR ORÇAMENTO GRÁTIS
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(0,255,255,0.1)', backgroundColor: '#020202', padding: '32px 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/Imagens/logo-rp.png" alt="RP Sistemas de Segurança" style={{ height: '36px', opacity: 0.8 }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#475569', fontSize: '13px' }}>
              © 2026 RP Sistemas de Segurança · Alarmes · Câmeras · Portões · TI
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none' }} className="hover:text-cyan-400">Instagram</a>
            <a href="#" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none' }} className="hover:text-cyan-400">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
