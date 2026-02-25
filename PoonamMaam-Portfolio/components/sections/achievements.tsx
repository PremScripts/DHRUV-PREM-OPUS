'use client'

import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Trophy, Award, BookOpen, Star, Sparkles } from 'lucide-react'

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const achievements = [
    {
      year: '2023',
      title: 'Distinguished Speaker - Global Summit on Earth Science and Climate Change',
      description: 'Invited as Distinguished Speaker at the 2nd Global Summit on Advances in Earth Science and Climate Change (Adv. ESCC 2023) in London, UK. Presented research on "Blockchain-based IoT enabled health-monitoring system". Organized by Peers Alley Media, Canada.',
      icon: Trophy,
      category: 'International Recognition',
      highlight: true,
      location: 'London, UK',
      date: 'September 14-15, 2023'
    },
    {
      year: '2022',
      title: 'SCIE Publication Excellence',
      description: 'Published multiple high-impact papers in SCIE indexed journals including Soft Computing (IF: 3.732), Journal of Ambient Intelligence (IF: 3.662), and The Journal of Supercomputing (IF: 2.557)',
      icon: BookOpen,
      category: 'Research Publications'
    },
    {
      year: '2021',
      title: 'High-Impact Research Contributions',
      description: 'Published groundbreaking research in Computers & Electrical Engineering (IF: 4.152), Cognitive Systems Research (IF: 4.541), and multiple Wireless and Telecommunication journals',
      icon: Award,
      category: 'Research Excellence'
    },
    {
      year: '2019-2022',
      title: 'International Conference Contributions',
      description: 'Presented research at prestigious conferences including Springer ICICC, IEEE COMITCon, and International Conference on Data Analytics and Management',
      icon: Star,
      category: 'Conference Presentations'
    }
  ]

  const stats = [
    { value: '4+', label: 'Major Achievements' },
    { value: '33+', label: 'Publications' },
    { value: '12+', label: 'SCIE Indexed' },
    { value: '10+', label: 'Years Research' },
  ]

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Subtle decorative element */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6 border border-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Achievements & <span className="text-primary">Awards</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition for excellence in research, teaching, and contributions to the academic community
            </p>
          </div>

          {/* Stats bar */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="group p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/20 transition-all duration-300 text-center">
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Achievements Grid - Minimal Card Design */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <Card className={`group h-full p-6 border-border/50 hover:border-primary/30 transition-all duration-300 ${achievement.highlight ? 'bg-primary/[0.02]' : 'bg-card/50'}`}>
                    {/* Header with icon and year */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-primary/10 text-primary">
                            {achievement.year}
                          </span>
                          {achievement.highlight && (
                            <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-amber-500/10 text-amber-600 border border-amber-500/20">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{achievement.category}</p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    {/* Location and Date for highlighted achievement */}
                    {achievement.location && achievement.date && (
                      <div className="pt-3 border-t border-border/50">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-primary"></span>
                            {achievement.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-primary"></span>
                            {achievement.date}
                          </span>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Future achievements note */}
          <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/30 rounded-full border border-border/50">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Continuously striving for excellence in research and education</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
