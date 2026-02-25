'use client'

import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Users, GraduationCap, BookMarked, Trophy, Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react'

export default function StudentsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const phdScholars = [
    'Tushar Dahiya',
    'Monika Singh',
    'Astha Tripathi',
    'Shrestha Tripathi',
    'Saurabhi Chowdhary'
  ]

  const profileLinks = [
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=_cDpLFAAAAAJ&hl=en',
      description: 'Publications & Citations'
    },
    {
      name: 'NSUT Profile',
      url: 'https://www.nsut.ac.in/en/node/255',
      description: 'Official Faculty Page'
    }
  ]

  return (
    <section id="students" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mentorship</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Students & <span className="gradient-text">Supervision</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to nurturing the next generation of researchers and technology leaders through dedicated mentorship
            </p>
          </div>

          {/* Student cards - 50-50 Layout */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* PhD Scholars Card - Left side (50%) */}
            <div
              className={`lg:row-span-2 group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Card className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border hover:border-transparent transition-all duration-300 hover-lift overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header with icon and count */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-full h-full text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-bold gradient-text">5+</span>
                      <p className="text-xs text-muted-foreground">Supervised</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    PhD Scholars
                  </h3>

                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    Guiding doctoral researchers in advancing frontier research in AI, Blockchain, IoT, and Social Network Analysis
                  </p>

                  {/* Scrollable PhD Students List */}
                  <div className="flex-1 mb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Current Scholars
                    </p>
                    <div className="max-h-64 overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40">
                      {phdScholars.map((scholar, index) => (
                        <div
                          key={index}
                          className="group/item p-4 rounded-xl bg-gradient-to-r from-violet-500/5 to-purple-500/5 border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                              {scholar}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievement badge */}
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-current/10">
                    <p className="text-xs font-medium text-foreground/80 flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-primary" />
                      Multiple PhD students with published research
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* M.Tech Students Card - Top right */}
            <div
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Card className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border hover:border-transparent transition-all duration-300 hover-lift overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Header with icon and count */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-full h-full text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-bold gradient-text">12+</span>
                      <p className="text-xs text-muted-foreground">Supervised</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    M.Tech Students
                  </h3>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    Mentoring master's thesis projects with emphasis on practical implementation, innovation, and research excellence
                  </p>

                  {/* Achievement badge */}
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-current/10">
                    <p className="text-xs font-medium text-foreground/80 flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-primary" />
                      Industry-ready thesis implementations
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* B.Tech Projects Card - Bottom right */}
            <div
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Card className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border hover:border-transparent transition-all duration-300 hover-lift overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Header with icon and count */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <BookMarked className="w-full h-full text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-bold gradient-text">20+</span>
                      <p className="text-xs text-muted-foreground">Supervised</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    B.Tech Projects
                  </h3>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    Supporting undergraduate final year projects with hands-on guidance, mentorship, and industry exposure
                  </p>

                  {/* Achievement badge */}
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-current/10">
                    <p className="text-xs font-medium text-foreground/80 flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-primary" />
                      Award-winning student projects
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Professional Profile Links */}
          <div
            className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <Card className="relative p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <p className="text-lg font-semibold text-foreground mb-4">
                  Professional Profiles
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {profileLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                    >
                      <div>
                        <p className="font-medium text-foreground group-hover/link:text-primary transition-colors">
                          {link.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Call to action */}
          <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative px-8 py-6 bg-card rounded-2xl border border-border">
                <p className="text-lg font-medium text-foreground mb-2">
                  Interested in Research Opportunities?
                </p>
                <p className="text-muted-foreground mb-4">
                  I am always looking for motivated students to join my research group
                </p>
                <a
                  href="mailto:poonam.rani@nsut.ac.in"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
