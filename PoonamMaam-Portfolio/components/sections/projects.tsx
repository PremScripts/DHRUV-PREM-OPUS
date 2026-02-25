'use client'

import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Brain, Shield, Cpu, Network, Sparkles, TrendingUp, Zap } from 'lucide-react'

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const researchThemes = [
    {
      title: 'AI & Machine Learning',
      description: 'Advancing artificial intelligence through deep learning for healthcare analytics, transfer learning techniques, adaptive neuro-fuzzy systems, and predictive modeling applications.',
      icon: Brain,
      gradient: 'from-violet-500 to-purple-500',
      areas: [
        'Deep Learning for Healthcare',
        'Transfer Learning',
        'Neuro-Fuzzy Systems',
        'Predictive Analytics'
      ]
    },
    {
      title: 'Blockchain Technology',
      description: 'Developing secure blockchain solutions for IoT security, supply chain traceability, rumor detection in social networks, and distributed smart contract systems.',
      icon: Shield,
      gradient: 'from-amber-500 to-orange-500',
      areas: [
        'Blockchain for IoT Security',
        'Supply Chain Traceability',
        'Rumor Detection Systems',
        'Smart Contracts'
      ]
    },
    {
      title: 'Internet of Things',
      description: 'Designing IoT-enabled health monitoring systems, optimizing 5G network performance, sensor network analytics, and edge computing security frameworks.',
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-500',
      areas: [
        'Health Monitoring Systems',
        '5G Network Optimization',
        'Sensor Networks',
        'Edge Computing Security'
      ]
    },
    {
      title: 'Social Network Analysis',
      description: 'Researching graph-based social network modeling, community detection algorithms, misinformation propagation, and fuzzy clustering techniques for network analysis.',
      icon: Network,
      gradient: 'from-emerald-500 to-teal-500',
      areas: [
        'Graph Modeling',
        'Community Detection',
        'Misinformation Analysis',
        'Fuzzy Clustering'
      ]
    }
  ]

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Subtle decorative element */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Research Focus</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Research <span className="gradient-text">Themes</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring cutting-edge technologies and methodologies across multiple research domains
            </p>
          </div>

          {/* Research Themes grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {researchThemes.map((theme, index) => {
              const Icon = theme.icon
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <Card className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border hover:border-primary/20 transition-all duration-300 hover-lift overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${theme.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                        <Icon className="w-full h-full text-white" />
                      </div>

                      <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {theme.title}
                      </h3>

                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {theme.description}
                      </p>

                      {/* Research Areas */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          Key Areas
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {theme.areas.map((area, areaIndex) => (
                            <div
                              key={areaIndex}
                              className="flex items-center gap-2 text-sm text-foreground/80"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${theme.gradient}`}></div>
                              <span className="text-xs">{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Research Summary Card */}
          <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-12 bg-card rounded-3xl border border-border">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                        Collaborative Research Approach
                      </h3>
                    </div>
                    <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                      Conducting interdisciplinary research combining AI, blockchain, IoT, and social network analysis
                      to address real-world challenges in healthcare, security, and communication systems.
                    </p>
                    <p className="text-foreground/60 leading-relaxed">
                      Active collaborations with government agencies, academic institutions, and industry partners
                      drive innovation across these research themes, resulting in high-impact publications and practical applications.
                    </p>
                  </div>

                  <div className="lg:w-1/3 grid grid-cols-2 lg:grid-cols-1 gap-4">
                    <div className="p-5 rounded-2xl bg-muted/50 hover:bg-primary/5 transition-colors text-center">
                      <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground mb-1">4+</p>
                      <p className="text-xs text-muted-foreground">Research Themes</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-muted/50 hover:bg-primary/5 transition-colors text-center">
                      <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground mb-1">10+</p>
                      <p className="text-xs text-muted-foreground">Years Research</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
