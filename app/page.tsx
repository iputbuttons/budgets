import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/theme-toggle";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Carousel, Card as AppleCard } from "@/components/ui/apple-cards-carousel";
import { Marquee } from "@/components/ui/marquee";
import WorldMap from "@/components/ui/world-map";
import { FlipWords } from "@/components/ui/flip-words";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  MessageCircle,
  Briefcase,
  Code2,
  Terminal,
  Rocket,
  Zap,
} from "lucide-react";
import Link from "next/link";

const successCasesData = [
  {
    category: "Latinoamérica",
    title: "Modernización Bancaria",
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    content: "Lideré la reescritura completa de una aplicación bancaria utilizada por decenas de instituciones financieras. Reduje el tiempo de carga de la app en un 35%.",
  },
  {
    category: "Europa",
    title: "Logística E-commerce",
    src: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=1000&auto=format&fit=crop",
    content: "Desarrollé la plataforma interna crítica para gestionar entregas a domicilio. El sistema redujo el tiempo de gestión operativa en un 60% sin fallos técnicos.",
  },
  {
    category: "Latinoamérica",
    title: "Alta Demanda",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    content: "Programé el sistema de navegación principal para un sitio con más de 74 millones de visitantes. Optimicé la velocidad de carga en un 40%.",
  },
  {
    category: "Norteamérica",
    title: "Plataforma HealthTech",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    content: "Arquitecté un sistema seguro de videoconsultas en tiempo real. Escaló exitosamente para soportar más de 10,000 consultas diarias.",
  },
  {
    category: "Global",
    title: "Gestión de Flotas AI",
    src: "https://images.unsplash.com/photo-1519003722811-360f9ecd52a2?q=80&w=1000&auto=format&fit=crop",
    content: "Implementé una solución de monitoreo en tiempo real con IA predictiva. Redujo los tiempos de inactividad de la flota en un 25%.",
  },
];

export default function Home() {
  const carouselCards = successCasesData.map((card, index) => (
    <AppleCard key={card.src} card={card} index={index} />
  ));

  return (
    <div className="min-h-screen bg-background relative">
      {/* Botón Flotante Dark Mode */}
      <div className="absolute top-4 right-4 z-50 md:top-6 md:right-6 md:fixed">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col items-start gap-8 order-2 lg:order-1">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Transformo ideas complejas en <br className="hidden sm:block" />
                <FlipWords 
                  words={[
                    "productos excepcionales.", 
                    "soluciones escalables.", 
                    "experiencias únicas.", 
                    "software de impacto."
                  ]} 
                  className="text-emerald-600 dark:text-emerald-500 px-0" 
                />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mt-4">
                Soy <strong className="text-foreground font-semibold">Francisco Javier Rodriguez</strong>, ingeniero de software con más de 8 años de experiencia creando tecnología de alto impacto. 
                Ayudo a empresas a escalar y modernizar sus negocios construyendo plataformas web y móviles ultrarrápidas, seguras y fáciles de usar, respaldado por mi experiencia construyendo sistemas para corporaciones con millones de usuarios activos diarios.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-emerald-500/20" asChild>
                  <Link href="https://wa.me/5492657202327" target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contactar por WhatsApp
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                  <Link href="https://linkedin.com/in/iputbuttons" target="_blank">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-[320px] h-[420px] sm:w-[400px] sm:h-[500px] lg:w-[500px] lg:h-[650px] group">
                {/* Glow de fondo para destacar la imagen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-primary/20 rounded-full blur-3xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Imagen fundida con el fondo */}
                <Image 
                  src="/photo.jpg" 
                  alt="Francisco Javier Rodriguez"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in'
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <BentoGrid className="lg:grid-rows-2">
            <BentoCard
              name="Impacto a Gran Escala"
              className="col-span-3 lg:col-span-2"
              background={
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="/bento1.png" 
                    fill 
                    className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" 
                    alt="Impacto a Gran Escala" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </div>
              }
              Icon={Rocket}
              description="Experiencia probada desarrollando sistemas que soportan millones de usuarios simultáneos sin caerse. Arquitecturas robustas diseñadas para que tu negocio nunca se detenga."
              href="#"
              cta="Saber más"
            />
            
            <BentoCard
              name="Expertise Web & Móvil"
              className="col-span-3 lg:col-span-1 lg:row-span-2"
              background={
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="/bento2.png" 
                    fill 
                    className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" 
                    alt="Expertise Web & Móvil" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </div>
              }
              Icon={Smartphone}
              description="Desarrollo de aplicaciones rápidas, intuitivas y que funcionan a la perfección tanto en computadoras de escritorio como en cualquier dispositivo móvil (iOS y Android)."
              href="#"
              cta="Ver proyectos"
            />

            <BentoCard
              name="Enfoque de Negocio"
              className="col-span-3 lg:col-span-2"
              background={
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="/bento3.png" 
                    fill 
                    className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" 
                    alt="Enfoque de Negocio" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </div>
              }
              Icon={Zap}
              description="No solo escribo código. Entiendo tus objetivos de negocio para construir soluciones digitales que optimicen tus procesos, ahorren costos y atraigan más clientes."
              href="#"
              cta="Saber más"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 overflow-hidden bg-muted/10">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <Code2 className="h-12 w-12 text-emerald-500" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stack Tecnológico</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Herramientas y tecnologías que utilizo para construir productos robustos y escalables.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {[
              "React", "React Native", "TypeScript", "Next.js", 
              "Node.js", "Tailwind CSS", "Redux", "React Query"
            ].map((skill) => (
              <div 
                key={skill} 
                className="mx-4 flex items-center justify-center rounded-xl border border-primary/10 bg-background/50 px-8 py-4 backdrop-blur-sm transition-all hover:bg-emerald-500/10 hover:border-emerald-500/30"
              >
                <span className="text-lg font-semibold tracking-tight text-foreground/80">{skill}</span>
              </div>
            ))}
          </Marquee>
          
          <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
            {[
               "Jest", "TDD", "Firebase", "Azure DevOps", 
               "AI Engineering", "Cursor", "MCPs", "Git"
            ].map((skill) => (
              <div 
                key={skill} 
                className="mx-4 flex items-center justify-center rounded-xl border border-primary/10 bg-background/50 px-8 py-4 backdrop-blur-sm transition-all hover:bg-emerald-500/10 hover:border-emerald-500/30"
              >
                <span className="text-lg font-semibold tracking-tight text-foreground/80">{skill}</span>
              </div>
            ))}
          </Marquee>

          {/* Gradients para difuminar los bordes del carrusel */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent md:w-1/3"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent md:w-1/3"></div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Experience Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <Briefcase className="h-12 w-12 text-emerald-500" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Casos de Éxito</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Soluciones empresariales críticas que he construido y ayudado a escalar a nivel global.
            </p>
          </div>

          <div className="w-full relative h-full">
            <Carousel items={carouselCards} />
          </div>
        </div>
      </section>

      {/* Prensa & Reconocimientos */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Prensa & Reconocimientos</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Desarrollando tecnología que genera un impacto real y positivo en la comunidad.
            </p>
          </div>

          <CardContainer className="inter-var">
            <CardBody className="bg-background relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-muted/30 border-primary/10 w-auto sm:w-[35rem] h-auto rounded-xl p-6 border shadow-xl transition-all">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-foreground"
              >
                Unas 220 personas ya usan la aplicación de oficios de UPrO
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-muted-foreground text-sm max-w-sm mt-3"
              >
                Desarrollo principal de <strong className="text-emerald-600 dark:text-emerald-500 font-semibold">Uprofy</strong>. Una plataforma que digitaliza y conecta a profesionales de oficios con ciudadanos en la provincia de San Luis.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Uprofy App en el Diario"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  className="text-xs font-medium text-muted-foreground"
                >
                  El Diario de la República (Dic 2023)
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.eldiariodelarepublica.com/nota/2023-12-4-18-11-0-unas-220-personas-ya-usan-la-aplicacion-de-oficios-de-upro"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-md"
                >
                  Leer artículo
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* Impacto Global Map Section */}
      <section className="py-20 bg-muted/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Impacto Global</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Soluciones digitales desarrolladas para empresas de primer nivel, impactando a diario a millones de usuarios en: <strong className="text-emerald-600 dark:text-emerald-500">Argentina, Uruguay, Brasil, Perú, Estados Unidos, Reino Unido y España</strong>.
            </p>
          </div>
          <div className="max-w-5xl mx-auto w-full relative">
            <WorldMap
              dots={[
                {
                  start: { lat: -34.6037, lng: -58.3816, label: "Argentina" }, // Buenos Aires
                  end: { lat: -34.9011, lng: -56.1645, label: "Uruguay" }, // Montevideo
                },
                {
                  start: { lat: -34.9011, lng: -56.1645, label: "Uruguay" },
                  end: { lat: -23.5505, lng: -46.6333, label: "Brasil" }, // Sao Paulo
                },
                {
                  start: { lat: -23.5505, lng: -46.6333, label: "Brasil" },
                  end: { lat: -12.0464, lng: -77.0428, label: "Perú" }, // Lima
                },
                {
                  start: { lat: -12.0464, lng: -77.0428, label: "Perú" },
                  end: { lat: 40.7128, lng: -74.0060, label: "Estados Unidos" }, // New York
                },
                {
                  start: { lat: 40.7128, lng: -74.0060, label: "Estados Unidos" },
                  end: { lat: 51.5074, lng: -0.1278, label: "Reino Unido" }, // London
                },
                {
                  start: { lat: 51.5074, lng: -0.1278, label: "Reino Unido" },
                  end: { lat: 40.4168, lng: -3.7038, label: "España" }, // Madrid
                },
              ]}
              lineColor="#10b981"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <Terminal className="h-16 w-16 mx-auto mb-6 text-emerald-400 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">¿Listo para escalar tu producto?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-xl font-medium">
            Si buscas un ingeniero con visión de producto, capaz de llevar el rendimiento web y móvil al siguiente nivel, hablemos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold text-emerald-700 hover:bg-emerald-50 transition-colors shadow-xl shadow-black/10" asChild>
              <Link href="https://wa.me/5492657202327" target="_blank">
                <MessageCircle className="mr-2 h-6 w-6" />
                Contactar por WhatsApp
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
              <Link href="https://github.com/iputbuttons" target="_blank">
                <Github className="mr-2 h-6 w-6" />
                Ver GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 py-12 md:flex-row md:gap-0">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold tracking-tight">Francisco Javier Rodriguez</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <Link href="#" className="hover:text-emerald-500 transition-colors">Servicios</Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors">Casos de Éxito</Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors">Stack</Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors">Contacto</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="https://linkedin.com/in/iputbuttons" target="_blank" className="text-muted-foreground hover:text-emerald-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/iputbuttons" target="_blank" className="text-muted-foreground hover:text-emerald-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://wa.me/5492657202327" target="_blank" className="text-muted-foreground hover:text-emerald-500 transition-colors">
                <span className="sr-only">WhatsApp</span>
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-between border-t border-border/40 py-8 md:flex-row">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Francisco Javier Rodríguez. Todos los derechos reservados.
            </p>
            <div className="mt-4 flex gap-6 text-sm text-muted-foreground md:mt-0">
              <Link href="#" className="hover:text-foreground transition-colors">Privacidad</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Términos</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}