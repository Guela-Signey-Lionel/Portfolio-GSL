import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Palette,
  BarChart3,
  FileText,
  Github,
  Linkedin,
  Facebook,
  MessageCircle,
  Star,
  Calendar,
  GraduationCap,
  Briefcase,
  Menu,
  X
} from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour gérer les chemins d'images avec le base path de GitHub Pages
  const getImagePath = (imagePath: string) => {
    const basePath = import.meta.env.BASE_URL || '/';
    return `${basePath.replace(/\/$/, '')}${imagePath}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Bootstrap', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'PostgreSQL', level: 80 }
    ],
    tools: [
      { name: 'Figma', level: 85 },
      { name: 'Canva', level: 90 },
      { name: 'Lunacy', level: 75 },
      { name: 'Excel', level: 80 },
      { name: 'SPSS', level: 70 }
    ]
  };

  const services = [
    {
      icon: Code,
      title: 'Développement Web Full-Stack',
      description: 'Création d\'applications web complètes avec React, Node.js et bases de données PostgreSQL'
    },
    {
      icon: Palette,
      title: 'Design UI/UX',
      description: 'Conception d\'interfaces utilisateur modernes et intuitives avec Figma et Canva'
    },
    {
      icon: FileText,
      title: 'Documentation Technique',
      description: 'Rédaction de cahiers des charges structurés et documentation complète de projets'
    },
    {
      icon: BarChart3,
      title: 'Analyse de Données',
      description: 'Analyse statistique et visualisation de données avec Excel et SPSS'
    }
  ];

  const projects = [
    {
      title: 'Site web de l\'Association "É Maï Oko"',
      description: 'Site web institutionnel pour l\'association É Maï Oko avec présentation des activités et services.',
      url: 'https://site-emai-oko.onrender.com',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: getImagePath('/images/affiche e mai oko.jpeg')
    },
    {
      title: 'Hostel Management System',
      description: 'Plateforme complète pour la gestion des réservations de chambres, salles de conférence et services traiteur.',
      url: 'https://lunahotel.onrender.com',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: getImagePath('/images/hotel.jpeg')
    },
    {
      title: 'SigneyTech E-Commerce',
      description: 'Site e-commerce pour la vente d\'appareils électroniques et électroménagers avec système de commande.',
      url: 'https://signeytech.onrender.com',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: getImagePath('/images/électronique.jpg')
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={getImagePath('/images/profile_photo_20251205_111828.png')} 
                alt="GSL Portfolio" 
                className="w-10 h-10 rounded-full border-2 border-primary/20"
              />
              <div className="font-bold text-xl gradient-text">
                GSL-Portfolio
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'hero', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'skills', label: 'Compétences' },
                { id: 'projects', label: 'Projets' },
                { id: 'experience', label: 'Expérience' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4 space-y-3">
              {[
                { id: 'hero', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'skills', label: 'Compétences' },
                { id: 'projects', label: 'Projets' },
                { id: 'experience', label: 'Expérience' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <img 
                src={getImagePath('/images/profile_photo_20251205_111828.png')} 
                alt="GUELA Signey Lionel" 
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-elegant animate-float"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">GUELA Signey Lionel</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Développeur Full-Stack passionné avec 2 ans d'expérience dans la création d'applications web modernes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-elegant"
                onClick={() => scrollToSection('contact')}
              >
                Me Contacter
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('about')}
              >
                En Savoir Plus
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">À Propos de Moi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Développeur passionné basé à Yaoundé, Cameroun, spécialisé dans la création d'expériences web exceptionnelles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Formation</h3>
                </div>
                <p className="text-muted-foreground">
                  <strong>PKfokam Institute of Excellence</strong><br />
                  Ingénierie des Codages Informatiques
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Expérience</h3>
                </div>
                <p className="text-muted-foreground">
                  <strong>2 ans d'expérience professionnelle</strong><br />
                  Développement d'applications Web Full-Stack
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Localisation</h3>
                </div>
                <p className="text-muted-foreground">
                  Quartier Olembé, Yaoundé<br />
                  Cameroun
                </p>
              </Card>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Ma Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Je suis passionné par la création d'applications web innovantes qui résolvent des problèmes réels. 
                Avec une solide formation en ingénierie informatique et 2 ans d'expérience pratique, 
                je maîtrise l'ensemble du cycle de développement, de la conception à la mise en production.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mon expertise couvre le développement frontend et backend, la conception UI/UX, 
                la documentation technique et l'analyse de données. Je suis disponible pour tous 
                ceux qui ont besoin d'une application de qualité.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="secondary">Full-Stack</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">UI/UX Design</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mes Compétences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un ensemble complet de compétences techniques pour créer des solutions web complètes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Backend Skills */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Tools Skills */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <Palette className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Outils & Design</h3>
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Expérience & Formation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mon parcours professionnel et académique dans le développement web
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20" />
              
              {/* Experience Items */}
              <div className="space-y-12">
                {/* Current Experience */}
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background" />
                  <Card className="ml-12 md:ml-0 md:w-5/12 md:mr-auto p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-primary font-medium">2022 - Présent</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Développeur Full-Stack</h3>
                    <p className="text-muted-foreground mb-4">
                      2 ans d'expérience dans le développement d'applications web complètes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
                    </div>
                  </Card>
                </div>
                
                {/* Education */}
                <div className="relative flex items-center md:justify-end">
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background" />
                  <Card className="ml-12 md:ml-0 md:w-5/12 md:ml-auto p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-primary font-medium">Formation</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">PKfokam Institute of Excellence</h3>
                    <p className="text-muted-foreground mb-4">
                      Ingénierie des Codages Informatiques
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Informatique</Badge>
                      <Badge variant="outline">Programmation</Badge>
                      <Badge variant="outline">Génie Logiciel</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets réalisés avec passion et expertise technique
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant="outline"
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      Voir le Projet
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mes Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins en développement web et analyse de données
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-4">
                    <Icon className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contactez-Moi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prêt à collaborer ? N'hésitez pas à me contacter pour discuter de votre projet
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Informations de Contact</h3>
                
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-muted-foreground">+236 72 90 33 59</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-muted-foreground">+237 687 789 930</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-muted-foreground">Quartier Olembé, Yaoundé, Cameroun</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Social Links */}
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Réseaux Sociaux</h4>
                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </Card>
              </div>
              
              {/* Call to Action */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Travaillons Ensemble</h3>
                
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-purple-500/5">
                  <div className="text-center space-y-4">
                    <Star className="h-12 w-12 text-primary mx-auto" />
                    <h4 className="text-xl font-semibold">Disponible pour Nouveaux Projets</h4>
                    <p className="text-muted-foreground">
                      Je suis disponible pour tous ceux qui ont besoin d'une application de qualité. 
                      Contactez-moi pour discuter de votre projet !
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Button className="flex-1" asChild>
                        <a href="tel:+23672903359">
                          <Phone className="h-4 w-4 mr-2" />
                          Appeler
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <a href="https://wa.me/237687789930" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Pourquoi Me Choisir ?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-sm">2 ans d'expérience professionnelle</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-sm">Expertise Full-Stack complète</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-sm">Documentation technique détaillée</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-sm">Support et maintenance inclus</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/30 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={getImagePath('/images/profile_photo_20251205_111828.png')} 
                  alt="SLG Portfolio" 
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div className="font-bold text-xl gradient-text">
                  GSL-Portfolio
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Développeur Full-Stack passionné avec 2 ans d'expérience dans la création 
                d'applications web modernes. Disponible pour tous vos projets.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://wa.me/237687789930" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+23672903359" className="hover:text-primary transition-colors">
                    +236 72 90 33 59
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <a href="https://wa.me/237687789930" className="hover:text-primary transition-colors">
                    +237 687 789 930
                  </a>
                </div>
                <div className="flex items-start text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>Quartier Olembé<br />Yaoundé, Cameroun</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2 text-sm">
                {[
                  { id: 'about', label: 'À propos' },
                  { id: 'skills', label: 'Compétences' },
                  { id: 'projects', label: 'Projets' },
                  { id: 'services', label: 'Services' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © 2024 GUELA Signey Lionel. Tous droits réservés.
            </p>
            <p className="mt-2 md:mt-0">
              Développé avec ❤️ à Yaoundé, Cameroun
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
