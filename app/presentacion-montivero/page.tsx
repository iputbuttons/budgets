import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/theme-toggle";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  TrendingUp,
  CheckCircle,
  Truck,
  FileText,
  BarChart,
  Smartphone,
  Search,
  ArrowRight,
  Award,
  Lock,
  Database
} from "lucide-react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const timelineData = [
  {
    title: "1. Solicitud y Asignación",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal mb-4">
          La fábrica solicita un servicio y automáticamente se asigna un camión y un chofer a través de nuestro panel. Todo queda registrado con fecha, hora y responsable, sin necesidad de intercambiar decenas de correos o llamadas.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl p-4 border bg-muted/50 flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:shadow-md transition-shadow">
            <Smartphone className="w-8 h-8 text-emerald-500" />
            <span className="text-sm font-medium">Asignación Digital</span>
          </div>
          <div className="rounded-xl p-4 border bg-muted/50 flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:shadow-md transition-shadow">
            <Clock className="w-8 h-8 text-emerald-500" />
            <span className="text-sm font-medium">Cero demoras</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2. Viaje y Trazabilidad",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal mb-4">
          Mientras el camión está en ruta, ustedes pueden monitorear el estado general del servicio. Si hay novedades (esperas en planta, controles, etc.), el sistema lo informa al instante. Es como tener una ventana directa a la cabina.
        </p>
        <div className="rounded-xl p-4 border border-emerald-500/30 bg-emerald-500/5 text-sm shadow-inner">
          <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Beneficio clave:</strong> Eliminamos la incertidumbre. El equipo de logística y recepción sabe exactamente cuándo prepararse, optimizando los tiempos en plataforma.
        </div>
      </div>
    ),
  },
  {
    title: "3. Entrega y Cierre Digital",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal mb-4">
          Al llegar y finalizar la descarga, el chofer o el supervisor de planta confirman la operación digitalmente. Los remitos, fotos de la carga y comprobantes se suben inmediatamente al sistema.
        </p>
        <div className="flex gap-4 items-center p-4 border rounded-xl bg-background shadow-sm">
          <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
          <p className="text-sm font-medium">Fin del viaje con comprobante validado en tiempo real.</p>
        </div>
      </div>
    ),
  },
  {
    title: "4. Auditoría y Facturación",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal mb-4">
          A fin de mes, su equipo de administración ingresa a la plataforma y, en un solo clic, exporta todos los viajes realizados con sus comprobantes. Esto acelera el proceso de auditoría y garantiza la transparencia que exige una certificación ISO.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl p-4 border bg-muted/50 flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:shadow-md transition-shadow">
            <FileText className="w-8 h-8 text-emerald-500" />
            <span className="text-sm font-medium">Exportación en 1 clic</span>
          </div>
          <div className="rounded-xl p-4 border bg-muted/50 flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-emerald-500" />
            <span className="text-sm font-medium">Auditoría Transparente</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PresentacionMontivero() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-emerald-500/30">
      {/* Botón Flotante Dark Mode */}
      <div className="absolute top-4 right-4 z-50 md:top-6 md:right-6 md:fixed">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-muted/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="px-4 py-2 text-sm border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2 inline-block" />
              Compromiso con la Excelencia
            </Badge>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              El siguiente nivel en <br className="hidden sm:block" />
              <FlipWords 
                words={[
                  "logística y transporte.", 
                  "transparencia operativa.", 
                  "calidad de servicio.", 
                  "control y seguridad."
                ]} 
                className="text-emerald-600 dark:text-emerald-500 px-0" 
              />
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              En <strong className="text-foreground font-semibold">Transportes Montivero</strong>, evolucionamos para ofrecer a nuestros clientes en San Luis una plataforma digital diseñada para hacer el trabajo de control más rápido, seguro y totalmente transparente.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-emerald-500/20" asChild>
                <Link href="#beneficios">
                  Ver Beneficios <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-background" id="beneficios">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">¿Por qué damos este paso?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sabemos que para la industria y las fábricas, el tiempo es el recurso más valioso. Hemos diseñado esta plataforma pensando en sus necesidades de control y auditoría.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-emerald-500/20 bg-emerald-500/5 shadow-lg shadow-emerald-500/5">
              <CardHeader>
                <Search className="w-10 h-10 text-emerald-500 mb-4" />
                <CardTitle className="text-2xl">Transparencia Total</CardTitle>
                <CardDescription className="text-base mt-2">
                  Acceso a la información en tiempo real.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Se acabó la incertidumbre. Podrá consultar el estado de los servicios, documentación y detalles operativos directamente desde su dispositivo, en cualquier momento. Sin llamadas de espera ni correos demorados.
              </CardContent>
            </Card>

            <Card className="border-emerald-500/20 bg-emerald-500/5 shadow-lg shadow-emerald-500/5">
              <CardHeader>
                <Clock className="w-10 h-10 text-emerald-500 mb-4" />
                <CardTitle className="text-2xl">Ahorro de Tiempo</CardTitle>
                <CardDescription className="text-base mt-2">
                  Auditorías y controles en minutos, no en horas.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Digitalizamos todo el flujo de trabajo. Las aprobaciones, remitos y controles que antes requerían papel y revisión manual, ahora se gestionan con un par de clics, agilizando drásticamente la logística de su fábrica.
              </CardContent>
            </Card>

            <Card className="border-emerald-500/20 bg-emerald-500/5 shadow-lg shadow-emerald-500/5">
              <CardHeader>
                <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
                <CardTitle className="text-2xl">Calidad ISO</CardTitle>
                <CardDescription className="text-base mt-2">
                  Estandarización y mejora continua.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Este sistema está alineado con los estándares internacionales de gestión de calidad (como la norma ISO 9001). Garantizamos procesos trazables, medibles y orientados a la satisfacción total del cliente.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Security & Data Immutability Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <Badge variant="outline" className="px-4 py-2 text-sm border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 backdrop-blur-sm">
                <Lock className="w-4 h-4 mr-2 inline-block" />
                Seguridad de Grado Corporativo
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                ¿Por qué el papel ya no es suficiente?
              </h2>
              <p className="text-lg text-muted-foreground">
                El papel se pierde, se daña y, lo más crítico: <strong className="text-foreground">se puede alterar</strong>. Nuestra plataforma elimina estos riesgos de raíz, brindando a su fábrica una seguridad que los métodos tradicionales simplemente no pueden igualar.
              </p>
              
              <ul className="space-y-6 mt-8">
                <li className="flex gap-4 items-start">
                  <Database className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-foreground text-lg mb-1">Inmutabilidad de los Datos</strong>
                    <span className="text-muted-foreground leading-relaxed">Los datos cargados en la plataforma (tiempos de llegada, descargas, estados) <strong>no pueden ser modificados manualmente por nadie</strong>. Todo queda sellado con un registro exacto e incorruptible generado por el sistema.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-foreground text-lg mb-1">Arquitectura y Roles Estrictos</strong>
                    <span className="text-muted-foreground leading-relaxed">Utilizamos infraestructura robusta (tecnología <strong className="text-foreground font-medium">Google Firestore</strong>) bajo estrictas reglas de seguridad. Según su rol, un operador puede registrar un viaje, pero nadie —ni siquiera un administrador— tiene los permisos técnicos para falsificar tiempos o alterar la historia.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2">
               <Card className="border-emerald-500/20 bg-muted/30 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
                 <CardContent className="p-8 md:p-12">
                   <div className="flex flex-col gap-6">
                     <div className="flex items-center justify-between p-5 bg-background rounded-xl border opacity-60 grayscale">
                       <div className="flex items-center gap-4">
                         <FileText className="w-6 h-6 text-neutral-500" />
                         <div>
                           <span className="font-semibold block text-neutral-700 dark:text-neutral-300">Remito en Papel</span>
                           <span className="text-xs text-neutral-500">Alterable y extraviable</span>
                         </div>
                       </div>
                       <span className="text-sm text-red-500 font-bold px-3 py-1 bg-red-50 dark:bg-red-950/30 rounded-full">Vulnerable</span>
                     </div>
                     
                     <div className="flex justify-center my-2">
                       <ArrowRight className="w-8 h-8 text-emerald-500/50 rotate-90 lg:rotate-0" />
                     </div>

                     <div className="flex items-center justify-between p-5 bg-emerald-500/10 border-emerald-500/30 rounded-xl border shadow-sm ring-1 ring-emerald-500/20">
                       <div className="flex items-center gap-4">
                         <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                         <div>
                           <span className="font-semibold block text-emerald-900 dark:text-emerald-300">Registro Digital Encriptado</span>
                           <span className="text-xs text-emerald-700/70 dark:text-emerald-400/70">Con validación de servidor</span>
                         </div>
                       </div>
                       <Badge className="bg-emerald-500 hover:bg-emerald-600 shadow-md">Inmutable</Badge>
                     </div>
                   </div>
                 </CardContent>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 9001 Section */}
      <section className="py-24 bg-emerald-900 text-emerald-50 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center border border-emerald-500/30 shadow-lg shadow-emerald-900/50 mb-2">
              <Award className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              El Aliado Perfecto para la Norma ISO 9001
            </h2>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Sabemos que la industria exige proveedores logísticos confiables. Nuestra plataforma está diseñada para resolverle la vida a sus auditores y gerentes de calidad, garantizando procesos medidos, documentados y 100% trazables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-emerald-950/50 border-emerald-800 backdrop-blur-sm text-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center mb-4 border border-emerald-600/50">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <CardTitle className="text-xl text-white">Trazabilidad Total</CardTitle>
              </CardHeader>
              <CardContent className="text-emerald-100/80">
                La norma ISO exige que todo proceso deje una "huella" auditable. Al digitalizar la operativa, su fábrica sabrá exactamente quién, cómo y cuándo se entregó la carga, con fotos y firmas digitales precisas.
              </CardContent>
            </Card>

            <Card className="bg-emerald-950/50 border-emerald-800 backdrop-blur-sm text-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center mb-4 border border-emerald-600/50">
                  <FileText className="w-6 h-6 text-emerald-400" />
                </div>
                <CardTitle className="text-xl text-white">Información Documentada</CardTitle>
              </CardHeader>
              <CardContent className="text-emerald-100/80">
                Las empresas certificadas necesitan acceso rápido a la información. Adiós a las carpetas con remitos perdidos; nuestra plataforma permite que su equipo de calidad encuentre cualquier comprobante de hace meses en solo 3 clics.
              </CardContent>
            </Card>

            <Card className="bg-emerald-950/50 border-emerald-800 backdrop-blur-sm text-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center mb-4 border border-emerald-600/50">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <CardTitle className="text-xl text-white">Mejora Continua</CardTitle>
              </CardHeader>
              <CardContent className="text-emerald-100/80">
                La ISO 9001 se basa en medir para mejorar. Le facilitamos la exportación de métricas de puntualidad y eficiencia logística para que pueda demostrar un alto desempeño en sus próximas auditorías de calidad.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Todo el control en sus manos</h2>
                <p className="text-lg text-muted-foreground">
                  Una interfaz amigable y profesional, diseñada para que cualquier persona en su equipo pueda utilizarla sin necesidad de conocimientos técnicos.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30">
                      <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Acceso Multiplataforma</h3>
                    <p className="text-muted-foreground">Revise la información desde su computadora en la oficina o desde su teléfono celular en la planta.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30">
                      <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Documentación Digitalizada</h3>
                    <p className="text-muted-foreground">Olvídese de los papeles perdidos. Remitos, facturas y comprobantes almacenados de forma segura y accesible.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30">
                      <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Métricas y Reportes</h3>
                    <p className="text-muted-foreground">Exporte datos estadísticos para sus reuniones de directorio y evalúe la eficiencia del servicio con datos reales.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-primary/20 rounded-3xl blur-2xl -z-10"></div>
              
              <div className="bg-background border shadow-2xl rounded-2xl p-6 relative z-10">
                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                  <div className="flex items-center gap-3">
                    <Truck className="w-6 h-6 text-emerald-500" />
                    <span className="font-semibold text-lg">Panel de Cliente</span>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">En línea</Badge>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border bg-muted/50">
                      <div className="flex items-center gap-4">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        <div>
                          <p className="font-medium text-sm">Servicio TR-800{i}</p>
                          <p className="text-xs text-muted-foreground">Destino: Planta San Luis</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs border-emerald-500/50">Completado</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona - Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">¿Cómo funciona el proceso?</h2>
            <p className="text-lg text-muted-foreground">
              Simplificamos toda la logística de control en 4 pasos claros, integrando a choferes, personal de planta y administración en una misma plataforma en tiempo real.
            </p>
          </div>
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <Truck className="h-16 w-16 mx-auto mb-6 text-emerald-400 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">Construyendo el futuro juntos</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-xl font-medium">
            Esta innovación es una inversión directa en la tranquilidad de su empresa. En Transportes Montivero, su confianza es el motor que nos impulsa a mejorar cada día.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-xl shadow-emerald-500/20">
              Solicitar Demostración
            </Button>
          </div>
        </div>
        <ShootingStars starColor="#10b981" trailColor="#047857" />
        <StarsBackground starDensity={0.0003} />
      </section>

      {/* Footer minimalista */}
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Transportes Montivero. Innovación al servicio de la industria.
          </p>
        </div>
      </footer>
    </div>
  );
}
