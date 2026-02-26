import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/theme-toggle";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  MonitorPlay,
  CreditCard,
  ShieldCheck,
  Video,
  Settings,
  BarChart,
  Lock,
  Users,
  Server,
  CalendarCheck,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Desarrollo | Locos por el Fútbol",
  description: "Propuesta confidencial para el desarrollo de la plataforma de streaming de partidos en vivo.",
  openGraph: {
    title: "Propuesta de Desarrollo | Locos por el Fútbol",
    description: "Propuesta confidencial para el desarrollo de la plataforma de streaming de partidos en vivo.",
    type: "website",
  },
};

export default function LocosPorElFutbolProposal() {
  const typewriterWords = [
    { text: "Propuesta", className: "text-foreground" },
    { text: "de", className: "text-foreground" },
    { text: "Desarrollo:", className: "text-foreground" },
    { text: "\"Locos", className: "text-emerald-500 dark:text-emerald-400" },
    { text: "por", className: "text-emerald-500 dark:text-emerald-400" },
    { text: "el", className: "text-emerald-500 dark:text-emerald-400" },
    { text: "Fútbol\"", className: "text-emerald-500 dark:text-emerald-400" },
  ];

  return (
    <div className="min-h-screen bg-background relative selection:bg-emerald-500/30">
      {/* Botón Flotante Dark Mode */}
      <div className="absolute top-4 right-4 z-50 md:top-6 md:right-6 md:fixed">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-emerald-500/10 blur-[100px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="mb-6 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium">
            Confidencial
          </Badge>
          
          <div className="mb-8 flex justify-center">
            <TypewriterEffect words={typewriterWords} className="text-4xl md:text-5xl lg:text-6xl" />
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-6">
            Una plataforma de streaming de partidos en vivo, diseñada para ser{" "}
            <FlipWords 
              words={["funcional.", "moderna.", "segura.", "escalable."]} 
              className="text-emerald-600 dark:text-emerald-400 font-semibold px-0" 
            />
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground border-y border-border/50 py-6 max-w-2xl mx-auto bg-muted/20 rounded-2xl">
            <div className="flex flex-col items-center sm:items-start px-6">
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground/70 mb-1">Preparado para</span>
              <span className="text-lg font-semibold text-foreground">Cristian Cortez</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border"></div>
            <div className="flex flex-col items-center sm:items-start px-6">
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground/70 mb-1">Fecha</span>
              <span className="text-lg font-semibold text-foreground">26 de Febrero, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl text-center font-medium text-foreground">
              El objetivo de esta propuesta es presentar un plan de trabajo claro y escalable para la creación de <strong>"Locos por el Fútbol"</strong>.
            </p>
            <p className="text-center mt-4">
              El enfoque está puesto en desarrollar un producto funcional, moderno y seguro, que permita comenzar a transmitir y monetizar los partidos en el menor tiempo posible, sentando bases sólidas para el crecimiento futuro del negocio.
            </p>
            <p className="text-center mt-4">
              Para lograr esto de manera eficiente, el proyecto se divide en <strong>dos fases</strong>. La Fase 1 abarca todo lo necesario para salir al mercado y generar ingresos. La Fase 2 contempla mejoras avanzadas para cuando el volumen de usuarios lo requiera.
            </p>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto max-w-5xl" />

      {/* FASE 1: MVP Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-emerald-500 hover:bg-emerald-600 text-white border-none">FASE 1</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Lanzamiento y Plataforma Principal (MVP)</h2>
            <p className="text-lg text-muted-foreground">
              El diseño y desarrollo del corazón del negocio. Un sistema donde los usuarios puedan registrarse, pagar y disfrutar de los partidos, con control total de la administración.
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Experiencia de usuario */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <MonitorPlay className="w-8 h-8 text-emerald-500" />
                <h3 className="text-2xl font-bold">Experiencia del Usuario (App Web)</h3>
              </div>
              
              <BentoGrid className="lg:grid-rows-2">
                <BentoCard
                  name="Transmisión y Participación"
                  className="col-span-3 lg:col-span-2"
                  background={<div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent z-0" />}
                  Icon={Video}
                  description="Reproductor de video integrado. Cuenta regresiva, marcador en tiempo real, chat exclusivo en vivo y espacios publicitarios dinámicos."
                />
                
                <BentoCard
                  name="Registro Simplificado"
                  className="col-span-3 lg:col-span-1"
                  background={<div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent z-0" />}
                  Icon={Users}
                  description="Creación de cuenta con email o login directo con Google y Facebook para reducir barreras de entrada."
                />

                <BentoCard
                  name="Pagos Integrados"
                  className="col-span-3 lg:col-span-1"
                  background={<div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent z-0" />}
                  Icon={CreditCard}
                  description="Integración con Mercado Pago. Compra de Planes (1, 3, 5, 10 partidos) como créditos. Devolución automática por suspensión."
                />

                <BentoCard
                  name="Protección de Cuentas"
                  className="col-span-3 lg:col-span-2"
                  background={<div className="absolute inset-0 bg-linear-to-br from-rose-500/5 to-transparent z-0" />}
                  Icon={ShieldCheck}
                  description="Bloqueo de uso simultáneo. Si alguien intenta ingresar desde otro dispositivo, la sesión anterior se cierra. Un pago = una pantalla."
                />
              </BentoGrid>
            </div>

            {/* Panel de Administración */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Settings className="w-8 h-8 text-emerald-500" />
                <h3 className="text-2xl font-bold">Panel de Administración (Backoffice)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:border-emerald-500/30 transition-colors">
                  <CardHeader>
                    <CalendarCheck className="w-10 h-10 text-emerald-500 mb-2" />
                    <CardTitle>Gestión de Eventos</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Creación de equipos, programación de partidos (fecha, hora, descripción) y carga de anunciantes con logos y tiempos en pantalla.
                  </CardContent>
                </Card>

                <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:border-emerald-500/30 transition-colors">
                  <CardHeader>
                    <MonitorPlay className="w-10 h-10 text-emerald-500 mb-2" />
                    <CardTitle>Control Room en Vivo</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Panel como director de transmisión: actualiza goles, controla reloj, cambia banners, inserta placas gráficas y modera el chat.
                  </CardContent>
                </Card>

                <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:border-emerald-500/30 transition-colors">
                  <CardHeader>
                    <BarChart className="w-10 h-10 text-emerald-500 mb-2" />
                    <CardTitle>Métricas y Estadísticas</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Información detallada sobre espectadores conectados en tiempo real y comportamiento general de los usuarios.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inversión Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto border-emerald-500/20 shadow-2xl shadow-emerald-500/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-400 to-emerald-600"></div>
            <CardHeader className="text-center pb-2 pt-10">
              <CardTitle className="text-3xl font-bold">Inversión de la Fase 1</CardTitle>
              <CardDescription className="text-lg mt-2">
                Desarrollo completo: Plataforma, pasarela de pagos, panel de control y base de datos.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-10 px-8 md:px-12">
              <div className="flex justify-center items-baseline mb-8">
                <span className="text-5xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">$1,200</span>
                <span className="text-xl text-muted-foreground ml-2 font-medium">USD</span>
              </div>

              <div className="mb-8 p-6 bg-background rounded-xl border border-border/50">
                <h4 className="font-semibold text-lg mb-4 text-foreground">Resumen de entregables:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Plataforma web adaptada para móviles (App Web).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Sistema de registro y login (Email, Google, Facebook).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Integración de pagos con Mercado Pago (Compra de créditos/planes).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Reproductor de video integrado con chat en vivo, marcador y publicidad.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Panel de administración completo (Control Room, gestión de eventos y analíticas).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Sistema de seguridad (Bloqueo de cuentas simultáneas).</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-6 text-sm text-muted-foreground italic text-center border border-border/50">
                Los plazos de entrega y la modalidad de pago se definirán de mutuo acuerdo al confirmar el proyecto. Los costos de mantenimiento de servidores al principio serán mínimos o nulos gracias a las tecnologías elegidas.<br /><br />
                <strong>Nota:</strong> Esta propuesta económica tiene una validez de 4 días corridos desde su fecha de emisión.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FASE 2: Expansión */}
      <section className="py-20 bg-emerald-950/5 dark:bg-emerald-950/20 border-y border-emerald-500/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 border-emerald-500/50 text-emerald-600 dark:text-emerald-400">FASE 2</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Expansión y Escalabilidad</h2>
            <p className="text-lg text-muted-foreground">
              Proyección a futuro. Una vez operando y con ingresos, se proponen estas mejoras para llevar el negocio al siguiente nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:border-emerald-500/30 transition-all group">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Protección Anti-Piratería</h3>
              <p className="text-muted-foreground">Migración a servidores de video privados (Vimeo Premium/AWS) para impedir extracción y difusión de enlaces.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:border-emerald-500/30 transition-all group">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gestión de Roles</h3>
              <p className="text-muted-foreground">Cuentas de "Operador" para delegar control del marcador y chat durante partidos, sin acceso a información financiera.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:border-emerald-500/30 transition-all group">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Escalabilidad del Chat</h3>
              <p className="text-muted-foreground">Actualización de infraestructura para soportar miles de usuarios simultáneos sin latencia ni caídas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-24 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold">Arquitectura Profesional y Segura</h2>
          <p className="text-xl text-muted-foreground">
            Esta propuesta ha sido pensada para equilibrar una salida rápida al mercado con bases tecnológicas sólidas. Quedo a disposición para revisar detalles y dar el próximo paso.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-emerald-500/25" asChild>
              <Link href="https://wa.me/5492657202327?text=Hola%20Francisco,%20quiero%20aprobar%20la%20propuesta%20de%20Locos%20por%20el%20Fútbol." target="_blank" rel="noopener noreferrer">
                Aprobar Propuesta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
