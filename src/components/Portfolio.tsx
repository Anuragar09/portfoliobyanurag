import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Download, 
  ExternalLink, 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Gamepad2,
  Building,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Trophy,
  Target,
  Briefcase,
  GraduationCap,
  Star,
  Heart
} from 'lucide-react';

// Import AI-generated images
import profileAvatarAsset from '@/assets/anurag-profile.jpg.asset.json';
import resumeAsset from '@/assets/Anurag_Resume.pdf.asset.json';
import aiChatThumb from '@/assets/ai-chat-thumb.jpg';
import portfolioDashboardThumb from '@/assets/portfolio-dashboard-thumb.jpg';
import designSystemThumb from '@/assets/design-system-thumb.jpg';
import netflixCloneThumb from '@/assets/netflix-clone-thumb.jpg';
import gameEngineThumb from '@/assets/game-engine-thumb.jpg';

const profileAvatar = profileAvatarAsset.url;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const [animatedText, setAnimatedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0 });
  const [hasCounterStarted, setHasCounterStarted] = useState(false);

  // Intersection Observer for animations and counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            
            // Start counter animation when stats section is visible
            if (entry.target.id === 'stats' && !hasCounterStarted) {
              setHasCounterStarted(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [hasCounterStarted]);

  // Counter animation effect
  useEffect(() => {
    if (hasCounterStarted) {
      const targets = { years: 3, projects: 20, clients: 50 };
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCounters({
          years: Math.floor(targets.years * easeOutQuart),
          projects: Math.floor(targets.projects * easeOutQuart),
          clients: Math.floor(targets.clients * easeOutQuart)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targets); // Ensure exact final values
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    }
  }, [hasCounterStarted]);

  // Animated text effect
  useEffect(() => {
    const text = 'Developer ⚡ Designer ⚡ Innovator';
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setAnimatedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const skills = [
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 76 },
    { name: 'Vue.js', level: 88 },
    { name: 'Next.js', level: 82 },
    { name: 'Node.js', level: 89 },
    { name: 'Python', level: 92 },
    { name: 'PostgreSQL', level: 88 },
    { name: 'MongoDB', level: 90 },
    { name: 'Docker', level: 78 },
    { name: 'AWS', level: 85 },
    { name: 'Git', level: 94 },
    { name: 'Figma', level: 75 }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Chat Application',
      category: 'Web',
      description: 'Advanced AI-powered chat application with real-time messaging',
      image: aiChatThumb,
      demoUrl: '#', // Comment: Add AI chat application link here
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio Dashboard',
      category: 'Web',
      description: 'Trading view dashboard with P&L tracking and forex trades',
      image: portfolioDashboardThumb,
      demoUrl: '#', // Comment: Portfolio dashboard will show trading interface
      featured: true
    },
    {
      id: 3,
      title: 'Game Engine',
      category: 'Game',
      description: 'Custom game engine built with modern technologies',
      image: gameEngineThumb,
      demoUrl: '#', // Comment: Add game engine demo link here
      featured: false
    },
    {
      id: 4,
      title: 'Design System',
      category: 'UI/UX',
      description: 'Comprehensive design system with reusable components',
      image: designSystemThumb,
      demoUrl: '#', // Comment: Design system will be generated dynamically
      featured: false
    },
    {
      id: 5,
      title: 'Netflix Clone',
      category: 'Web',
      description: 'Full-featured Netflix clone with streaming capabilities',
      image: netflixCloneThumb,
      demoUrl: '#', // Comment: Add Netflix clone link here
      featured: true
    }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      achievements: ['Built 15+ production applications', 'Improved performance by 40%', 'Led team of 5 developers']
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Solutions Ltd.',
      period: '2021 - 2022',
      description: 'Developed responsive user interfaces and collaborated with design teams.',
      achievements: ['Redesigned company website', 'Implemented design system', 'Reduced load time by 50%']
    }
  ];

  const goals = [
    {
      type: 'Short-term',
      items: [
        'Master AI/ML integration in web apps',
        'Launch 3 new SaaS products',
        'Contribute to open source projects'
      ]
    },
    {
      type: 'Long-term',
      items: [
        'Build a successful tech startup',
        'Become a recognized tech leader',
        'Mentor next generation developers'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Corp',
      content: 'ANURAG delivered exceptional results on our project. His technical skills and attention to detail are outstanding.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'Working with ANURAG was a game-changer for our startup. He transformed our ideas into reality.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="particles">
          {/* Animated background particles */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="float">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden glow">
              <img 
                src={profileAvatar} 
                alt="ANURAG - Profile Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">ANURAG</span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl mb-8 text-muted-foreground animate-slide-up min-h-[3rem]">
            {animatedText}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto animate-slide-up text-muted-foreground px-4">
            Crafting next-generation digital experiences with cutting-edge technology and creative design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button 
              size="lg" 
              variant="glow"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 sm:py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center glass-card">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{counters.years}+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center glass-card">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{counters.projects}+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center glass-card">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{counters.clients}+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 gradient-text">Career Journey</h2>
          
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="glass-card overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 w-full sm:w-auto">
                      <div className="sticky-title-container">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sticky-title">{exp.title}</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <span className="text-primary font-medium">{exp.company}</span>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <span className="text-muted-foreground text-sm sm:text-base">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm sm:text-base">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="secondary" className="glass text-xs sm:text-sm">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Goals & Vision</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {goals.map((goalCategory, index) => (
              <div key={index} className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold">{goalCategory.type} Goals</h3>
                </div>
                <div className="space-y-4">
                  {goalCategory.items.map((goal, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="glass-card group">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="outline" className="glass">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm" 
                      variant="glass" 
                      className="flex-1"
                      onClick={() => {
                        if (project.title === 'AI Chat Application') {
                          window.open('https://asklybyanurag.netlify.app/', '_blank');
                        } else if (project.title === 'Portfolio Dashboard') {
                          window.open('/demo?type=portfolio-dashboard', '_blank');
                        } else if (project.title === 'Design System') {
                          window.open('/demo?type=design-system', '_blank');
                        } else if (project.title === 'Netflix Clone') {
                          window.open('/demo?type=netflix-clone', '_blank');
                        } else {
                          window.open(project.demoUrl, '_blank');
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="glass-card">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">What People Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Let's Work Together</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>anuragarora15713@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>6283732889</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>PUNJAB | LUDHIANA</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <Button 
                    size="sm" 
                    variant="glass"
                    onClick={() => window.open('https://www.linkedin.com/in/anurag-arora-56064a359/', '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="glass"
                    onClick={() => window.open('https://github.com/Anuragar09?tab=repositories', '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  
                  {/* Comment: Add Twitter link here */}
                  <Button size="sm" variant="glass">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  
                  {/* Comment: Add Discord link here */}
                  <Button size="sm" variant="glass">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="glass-card">
              <h3 className="text-2xl font-semibold mb-6">Download Resume</h3>
              <p className="text-muted-foreground mb-6">
                Get my complete resume with detailed information about my experience, skills, and projects.
              </p>
              
              <Button 
                variant="glow"
                className="w-full" 
                size="lg"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1IMu-r6QB5pdAUhN2hWq2WfU05UiMde0N/view?usp=sharing', '_blank');
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card/50 text-center">
        <p className="text-muted-foreground">
          Made ❤️ with <span className="gradient-text font-semibold">ANURAG</span>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;