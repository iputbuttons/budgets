import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/theme-toggle";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  Smartphone,
  MapPin,
  PenTool,
  Clock,
  Building,
  Truck,
  Calculator,
  Users,
  FileSpreadsheet,
  Map,
  Sparkles,
  Receipt,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { DeveloperFooter } from "@/components/developer-footer";

export const metadata: Metadata = {
  title: "Propuesta de Desarrollo | Transportes Montivero",
  description: "Propuesta confidencial para el desarrollo del Sistema Integral de Gestión de Recorridos.",
  openGraph: {
    title: "Propuesta de Desarrollo | Transportes Montivero",
    description: "Propuesta confidencial para el desarrollo del Sistema Integral de Gestión de Recorridos.",
    type: "website",
  },
};

export default function TransportesMontiveroProposal() {
  const typewriterWords = [
    { text: "Propuesta", className: "text-foreground" },
    { text: "de", className: "text-foreground" },
    { text: "Desarrollo:", className: "text-foreground" },
    { text: "Sistema", className: "text-blue-500 dark:text-blue-400" },
    { text: "de", className: "text-blue-500 dark:text-blue-400" },
    { text: "Trazabilidad", className: "text-blue-500 dark:text-blue-400" },
  ];

  return (
    <div className="min-h-screen bg-background relative selection:bg-blue-500/30">
      {/* Botón Flotante Dark Mode */}
      <div className="absolute top-4 right-4 z-50 md:top-6 md:right-6 md:fixed">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="mb-6 border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10 px-4 py-1.5 text-sm font-medium">
            Confidencial
          </Badge>
          
          <div className="mb-8 flex justify-center">
            <TypewriterEffect words={typewriterWords} className="text-4xl md:text-5xl lg:text-6xl" />
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-6">
            Una plataforma integral de gestión de recorridos para transporte de personal, diseñada para ser{" "}
            <FlipWords 
              words={["transparente.", "moderna.", "segura.", "eficiente."]} 
              className="text-blue-600 dark:text-blue-400 font-semibold px-0" 
            />
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground border-y border-border/50 py-6 max-w-2xl mx-auto bg-muted/20 rounded-2xl">
            <div className="flex flex-col items-center sm:items-start px-6">
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground/70 mb-1">Preparado para</span>
              <span className="text-lg font-semibold text-foreground">Transportes Montivero</span>
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
              El objetivo de esta propuesta es presentar un plan de trabajo claro y escalable para la creación de una <strong>Plataforma Integral de Gestión de Recorridos</strong>.
            </p>
            <p className="text-center mt-4">
              El enfoque está puesto en desarrollar un producto funcional, moderno y seguro que elimine el uso de vales de papel y planillas de Excel manuales. Esto permitirá reducir el tiempo de control de facturación de las fábricas (de 2-3 días a minutos), brindar pruebas irrefutables de los viajes realizados y sentar bases sólidas para la optimización operativa de la empresa.
            </p>
            <p className="text-center mt-4">
              Para lograr esto de manera eficiente, el proyecto se divide en <strong>dos fases</strong>. La Fase 1 abarca todo lo necesario para digitalizar el proceso actual, registrar la información con geolocalización y darle acceso a las fábricas. La Fase 2 contempla mejoras avanzadas para la automatización administrativa.
            </p>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto max-w-5xl" />

      {/* FASE 1: MVP Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-blue-500 hover:bg-blue-600 text-white border-none">FASE 1</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Lanzamiento y Plataforma Principal (MVP)</h2>
            <p className="text-lg text-muted-foreground">
              El corazón del negocio: un sistema donde los choferes registran viajes desde su celular, la empresa monitorea la flota y las fábricas auditan en tiempo real.
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {/* App Web para Choferes */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Smartphone className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">1. Aplicación Web para Choferes</h3>
              </div>
              
              <BentoGrid className="lg:grid-rows-2">
                <BentoCard
                  name="Odómetro Digital y Trazabilidad"
                  className="col-span-3 lg:col-span-2"
                  background={<div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent z-0" />}
                  Icon={MapPin}
                  description="Registro de ruta mediante puntos GPS para calcular automáticamente los kilómetros reales recorridos, contemplando desvíos o calles cortadas."
                />
                
                <BentoCard
                  name="Acceso Seguro"
                  className="col-span-3 lg:col-span-1"
                  background={<div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent z-0" />}
                  Icon={ShieldCheck}
                  description="Ingreso con usuario y contraseña desde el navegador del celular, sin necesidad de instalar apps complejas."
                />

                <BentoCard
                  name="Validación de Pasajeros"
                  className="col-span-3 lg:col-span-1"
                  background={<div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent z-0" />}
                  Icon={PenTool}
                  description="Firma Digital en la pantalla del celular del chofer o escaneo de QR, reemplazando el vale de papel y garantizando transparencia."
                />

                <BentoCard
                  name="Protocolo 'Pasajero Ausente'"
                  className="col-span-3 lg:col-span-2"
                  background={<div className="absolute inset-0 bg-linear-to-br from-rose-500/5 to-transparent z-0" />}
                  Icon={Clock}
                  description="Tolerancia de 5 minutos con cronómetro. Si expira, el viaje se cierra como 'Ausente' adjuntando GPS y hora como prueba indiscutible para la fábrica."
                />
              </BentoGrid>
            </div>

            {/* Panel de Administración (Backoffice) */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Truck className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">2. Panel de Administración (Backoffice para Montivero)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:border-blue-500/30 transition-colors">
                  <CardHeader>
                    <Truck className="w-10 h-10 text-blue-500 mb-2" />
                    <CardTitle>Control de Flota</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    Visualización de los más de 500 viajes quincenales en tiempo real desde un panel centralizado.
                  </CardContent>
                </Card>

                <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:border-blue-500/30 transition-colors">
                  <CardHeader>
                    <Calculator className="w-10 h-10 text-blue-500 mb-2" />
                    <CardTitle>Liquidación Automática</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    Cálculo automático de los kilómetros recorridos por quincena (7.000 a 9.000 km), eliminando la carga en Excel.
                  </CardContent>
                </Card>

                <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:border-blue-500/30 transition-colors">
                  <CardHeader>
                    <Users className="w-10 h-10 text-blue-500 mb-2" />
                    <CardTitle>Gestión de Usuarios</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    Módulo para alta, baja y modificación de choferes, vehículos y fábricas clientes en el sistema.
                  </CardContent>
                </Card>

                <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:border-blue-500/30 transition-colors">
                  <CardHeader>
                    <FileSpreadsheet className="w-10 h-10 text-blue-500 mb-2" />
                    <CardTitle>Generador de Reportes</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    Exportación de resúmenes quincenales listos para enviar a facturación de las fábricas, sin errores humanos.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Portal de Auditoría */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Building className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">3. Portal de Auditoría para Fábricas</h3>
              </div>

              <Card className="bg-background/60 backdrop-blur-sm border-primary/10 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h4 className="text-xl font-bold mb-4">Auditoría Visual y Rápida (Ej. Tersuave)</h4>
                    <p className="text-muted-foreground mb-6">
                      Cada fábrica cliente tendrá un acceso web con credenciales propias para ver <strong>únicamente</strong> los viajes correspondientes a sus empleados. Al hacer clic en un viaje, el supervisor podrá ver:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        <span>Chofer, pasajero y horario exacto.</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        <span>Firma digital del pasajero.</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        <span>Pruebas de ausentismo (GPS + reloj) si aplica.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 p-8 md:p-10 flex items-center justify-center border-l border-border/50">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Map className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h5 className="font-bold text-lg mb-2">Mapa del Recorrido</h5>
                      <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                        Enlace directo a Google Maps mostrando el punto de inicio, la ruta trazada y el punto de fin del viaje realizado por el chofer.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inversión Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto border-blue-500/20 shadow-2xl shadow-blue-500/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-400 to-blue-600"></div>
            <CardHeader className="text-center pb-2 pt-10">
              <CardTitle className="text-3xl font-bold">Inversión de la Fase 1</CardTitle>
              <CardDescription className="text-lg mt-2">
                Desarrollo completo: App para choferes, Panel de Control, Portal para Fábricas y Base de datos.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-10 px-8 md:px-12">
              <div className="flex justify-center items-baseline mb-8 text-center px-4 py-8 bg-muted/30 rounded-2xl border border-border border-dashed">
                <span className="text-5xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">$1,200</span>
                <span className="text-xl text-muted-foreground ml-2 font-medium">USD</span>
              </div>
              
              <div className="mb-8 p-6 bg-background rounded-xl border border-border/50">
                <h4 className="font-semibold text-lg mb-4 text-foreground">Resumen de entregables:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>App Web para Choferes:</strong> Odómetro GPS, firmas digitales y control de ausencias.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Panel de Administración:</strong> Control de flota, liquidación de km y generador de reportes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Portal para Fábricas:</strong> Auditoría en tiempo real, mapas y pruebas de viaje.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Infraestructura:</strong> Base de datos segura y servidores iniciales (costo mínimo/nulo).</span>
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
      <section className="py-20 bg-blue-950/5 dark:bg-blue-950/20 border-y border-blue-500/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 border-blue-500/50 text-blue-600 dark:text-blue-400">FASE 2</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Expansión y Escalabilidad</h2>
            <p className="text-lg text-muted-foreground">
              Proyección a futuro. Una vez operando y con el equipo adaptado, se proponen estas mejoras para llevar el negocio al siguiente nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:border-blue-500/30 transition-all group">
              <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Optimización de Rutas con IA</h3>
              <p className="text-muted-foreground">Sugerencia automática del camino más rápido y eficiente para recoger a múltiples pasajeros, ahorrando combustible y tiempo.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:border-blue-500/30 transition-all group">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Receipt className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Facturación Electrónica Automática</h3>
              <p className="text-muted-foreground">Integración con AFIP para emitir la factura con un solo clic una vez que la fábrica aprueba la quincena en su portal.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:border-blue-500/30 transition-all group">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Notificaciones WhatsApp</h3>
              <p className="text-muted-foreground">Envío de un mensaje automático al pasajero cuando el chofer está a 5 minutos de llegar, reduciendo demoras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-24 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-2">
            <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold">Un Salto de Calidad Tecnológica</h2>
          <p className="text-xl text-muted-foreground">
            Esta propuesta posiciona a Montivero como un proveedor de transporte moderno, seguro y transparente. Quedo a disposición para revisar detalles y dar el próximo paso.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-blue-500/25" asChild>
              <Link href="https://wa.me/5492657202327?text=Hola%20Francisco,%20quiero%20avanzar%20con%20la%20propuesta%20de%20Transportes%20Montivero." target="_blank" rel="noopener noreferrer">
                Aprobar Propuesta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <DeveloperFooter />
    </div>
  );
}
