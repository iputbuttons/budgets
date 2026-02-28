import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ShieldCheck,
  Clock,
  TrendingUp,
  CheckCircle,
  Truck,
  FileText,
  Smartphone,
  Search,
  ArrowRight,
  Award,
  Lock,
  Database,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { PrintButton } from "./print-button";
import { DeveloperFooter } from "@/components/developer-footer";
import "./print.css";

export const metadata: Metadata = {
  title: "Digitalización | Transportes Montivero - Versión para imprimir",
  description: "Presentación de la plataforma de digitalización de Transportes Montivero. Versión optimizada para descargar en PDF A4.",
};

const timelineData = [
  {
    title: "1. Solicitud y Asignación",
    content: (
      <div>
        <p className="text-neutral-700 text-sm mb-4">
          La fábrica solicita un servicio y automáticamente se asigna un camión y un chofer a través de nuestro panel. Todo queda registrado con fecha, hora y responsable, sin necesidad de intercambiar decenas de correos o llamadas.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl p-4 border bg-muted/50 flex flex-col items-center justify-center text-center gap-2">
            <Smartphone className="w-8 h-8 text-emerald-500" />
            <span className="text-sm font-medium">Asignación Digital</span>
          </div>
          <div className="rounded-xl p-4 border bg-muted/50 flex flex-col items-center justify-center text-center gap-2">
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
        <p className="text-neutral-700 text-sm mb-4">
          Mientras el camión está en ruta, ustedes pueden monitorear el estado general del servicio. Si hay novedades (esperas en planta, controles, etc.), el sistema lo informa al instante. Es como tener una ventana directa a la cabina.
        </p>
        <div className="rounded-xl p-4 border border-emerald-500/30 bg-emerald-500/5 text-sm">
          <strong className="text-emerald-600 block mb-1">Beneficio clave:</strong> Eliminamos la incertidumbre. El equipo de logística y recepción sabe exactamente cuándo prepararse, optimizando los tiempos en plataforma.
        </div>
      </div>
    ),
  },
  {
    title: "3. Entrega y Cierre Digital",
    content: (
      <div>
        <p className="text-neutral-700 text-sm mb-4">
          Al llegar y finalizar la descarga, el chofer o el supervisor de planta confirman la operación digitalmente. Los remitos, fotos de la carga y comprobantes se suben inmediatamente al sistema.
        </p>
        <div className="flex gap-4 items-center p-4 border rounded-xl bg-background">
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
        <p className="text-neutral-700 text-sm mb-4">
          A fin de mes, su equipo de administración ingresa a la plataforma y, en un solo clic, exporta todos los viajes realizados con sus comprobantes. Esto acelera el proceso de auditoría y garantiza la transparencia que exige una certificación ISO.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl p-4 border bg-muted/50 flex flex-col items-center justify-center text-center gap-2">
            <FileText className="w-8 h-8 text-emerald-500" />
            <span className="text-sm font-medium">Exportación en 1 clic</span>
          </div>
          <div className="rounded-xl p-4 border bg-muted/50 flex flex-col items-center justify-center text-center gap-2">
            <ShieldCheck className="w-8 h-8 text-emerald-500" />
            <span className="text-sm font-medium">Auditoría Transparente</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function DigitalizacionPrintPage() {
  return (
    <>
      <div className="print:hidden fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-2 border">
        <PrintButton />
      </div>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-8 print:py-4">
          {/* Hero Section */}
          <section className="py-12 lg:py-16 bg-muted/10 rounded-xl px-6 mb-8 print:mb-6 print:break-inside-avoid">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2 text-sm border-emerald-500/30 text-emerald-600 bg-emerald-500/10">
                <Award className="w-4 h-4 mr-2 inline-block" />
                Compromiso con la Excelencia
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                El siguiente nivel en{" "}
                <span className="text-emerald-600">logística y transporte, trazabilidad total, calidad de servicio, control y seguridad.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En <strong className="text-foreground font-semibold">Transportes Montivero</strong>, evolucionamos para ofrecer a nuestros clientes en San Luis una plataforma digital diseñada para hacer el trabajo de control más rápido, seguro y totalmente transparente.
              </p>
              <div className="print:hidden">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-emerald-500/20" asChild>
                  <Link href="#beneficios">
                    Ver Beneficios <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Problem & Solution Section */}
          <section className="py-12 bg-background" id="beneficios">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">¿Por qué damos este paso?</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Sabemos que para la industria y las fábricas, el tiempo es el recurso más valioso. Hemos diseñado esta plataforma pensando en sus necesidades de control y auditoría.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-emerald-500/20 bg-emerald-500/5 shadow-lg shadow-emerald-500/5 print:shadow-md">
                <CardHeader>
                  <Search className="w-10 h-10 text-emerald-500 mb-4" />
                  <CardTitle className="text-xl">Transparencia Total</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Acceso a la información en tiempo real.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Se acabó la incertidumbre. Podrá consultar el estado de los servicios, documentación y detalles operativos directamente desde su dispositivo, en cualquier momento. Sin llamadas de espera ni correos demorados.
                </CardContent>
              </Card>
              <Card className="border-emerald-500/20 bg-emerald-500/5 shadow-lg shadow-emerald-500/5 print:shadow-md">
                <CardHeader>
                  <Clock className="w-10 h-10 text-emerald-500 mb-4" />
                  <CardTitle className="text-xl">Ahorro de Tiempo</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Auditorías y controles en minutos, no en horas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Digitalizamos todo el flujo de trabajo. Las aprobaciones, remitos y controles que antes requerían papel y revisión manual, ahora se gestionan con un par de clics, agilizando drásticamente la logística de su fábrica.
                </CardContent>
              </Card>
              <Card className="border-emerald-500/20 bg-emerald-500/5 shadow-lg shadow-emerald-500/5 print:shadow-md">
                <CardHeader>
                  <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
                  <CardTitle className="text-xl">Calidad ISO</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Estandarización y mejora continua.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Este sistema está alineado con los estándares internacionales de gestión de calidad (como la norma ISO 9001). Garantizamos procesos trazables, medibles y orientados a la satisfacción total del cliente.
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Security & Data Immutability Section */}
          <section className="py-12 print:break-inside-avoid">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/2 space-y-6">
                <Badge variant="outline" className="px-4 py-2 text-sm border-emerald-500/30 text-emerald-600 bg-emerald-500/10">
                  <Lock className="w-4 h-4 mr-2 inline-block" />
                  Seguridad de Grado Corporativo
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  ¿Por qué el papel ya no es suficiente?
                </h2>
                <p className="text-base text-muted-foreground">
                  El papel se pierde, se daña y, lo más crítico: <strong className="text-foreground">se puede alterar</strong>. Nuestra plataforma elimina estos riesgos de raíz, brindando a su fábrica una seguridad que los métodos tradicionales simplemente no pueden igualar.
                </p>
                <ul className="space-y-6 mt-6">
                  <li className="flex gap-4 items-start">
                    <Database className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground text-base mb-1">Inmutabilidad de los Datos</strong>
                      <span className="text-muted-foreground text-sm leading-relaxed">Los datos cargados en la plataforma (tiempos de llegada, descargas, estados) <strong>no pueden ser modificados manualmente por nadie</strong>. Todo queda sellado con un registro exacto e incorruptible generado por el sistema.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground text-base mb-1">Arquitectura y Roles Estrictos</strong>
                      <span className="text-muted-foreground text-sm leading-relaxed">Utilizamos infraestructura robusta (tecnología <strong className="text-foreground font-medium">Google Firestore</strong>) bajo estrictas reglas de seguridad. Según su rol, un operador puede registrar un viaje, pero nadie —ni siquiera un administrador— tiene los permisos técnicos para falsificar tiempos o alterar la historia.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <Card className="border-emerald-500/20 bg-muted/30 overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-between p-5 bg-background rounded-xl border opacity-60 grayscale">
                        <div className="flex items-center gap-4">
                          <FileText className="w-6 h-6 text-neutral-500" />
                          <div>
                            <span className="font-semibold block text-neutral-700">Remito en Papel</span>
                            <span className="text-xs text-neutral-500">Alterable y extraviable</span>
                          </div>
                        </div>
                        <span className="text-sm text-red-500 font-bold px-3 py-1 bg-red-50 rounded-full">Vulnerable</span>
                      </div>
                      <div className="flex justify-center">
                        <ArrowRight className="w-8 h-8 text-emerald-500/50" />
                      </div>
                      <div className="flex items-center justify-between p-5 bg-emerald-500/10 border-emerald-500/30 rounded-xl border">
                        <div className="flex items-center gap-4">
                          <Lock className="w-6 h-6 text-emerald-600" />
                          <div>
                            <span className="font-semibold block text-emerald-900">Registro Digital Encriptado</span>
                            <span className="text-xs text-emerald-700/70">Con validación de servidor</span>
                          </div>
                        </div>
                        <Badge className="bg-emerald-500 hover:bg-emerald-600">Inmutable</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ISO 9001 Section */}
          <section className="py-12 bg-emerald-900 text-emerald-50 rounded-xl px-6 my-8 print:my-6 print:break-inside-avoid">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto mb-12">
              <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center border border-emerald-500/30 mb-2">
                <Award className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                El Aliado Perfecto para la Norma ISO 9001
              </h2>
              <p className="text-base text-emerald-100/90 leading-relaxed">
                Sabemos que la industria exige proveedores logísticos confiables. Nuestra plataforma está diseñada para resolverle la vida a sus auditores y gerentes de calidad, garantizando procesos medidos, documentados y 100% trazables.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-emerald-950/50 border-emerald-800 text-emerald-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center mb-4 border border-emerald-600/50">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Trazabilidad Total</CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-100/80 text-sm">
                  La norma ISO exige que todo proceso deje una &quot;huella&quot; auditable. Al digitalizar la operativa, su fábrica sabrá exactamente quién, cómo y cuándo se entregó la carga, con fotos y firmas digitales precisas.
                </CardContent>
              </Card>
              <Card className="bg-emerald-950/50 border-emerald-800 text-emerald-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center mb-4 border border-emerald-600/50">
                    <FileText className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Información Documentada</CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-100/80 text-sm">
                  Las empresas certificadas necesitan acceso rápido a la información. Adiós a las carpetas con remitos perdidos; nuestra plataforma permite que su equipo de calidad encuentre cualquier comprobante de hace meses en solo 3 clics.
                </CardContent>
              </Card>
              <Card className="bg-emerald-950/50 border-emerald-800 text-emerald-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center mb-4 border border-emerald-600/50">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Mejora Continua</CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-100/80 text-sm">
                  La ISO 9001 se basa en medir para mejorar. Le facilitamos la exportación de métricas de puntualidad y eficiencia logística para que pueda demostrar un alto desempeño en sus próximas auditorías de calidad.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Features Detail - Todo el control en sus manos */}
          <section className="py-12 bg-muted/30 rounded-xl px-6 my-8 print:my-6 print:break-inside-avoid">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Todo el control en sus manos</h2>
                  <p className="text-base text-muted-foreground">
                    Una interfaz amigable y profesional, diseñada para que cualquier persona en su equipo pueda utilizarla sin necesidad de conocimientos técnicos.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/30">
                        <Smartphone className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Acceso Multiplataforma</h3>
                      <p className="text-muted-foreground text-sm">Revise la información desde su computadora en la oficina o desde su teléfono celular en la planta.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/30">
                        <FileText className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Documentación Digitalizada</h3>
                      <p className="text-muted-foreground text-sm">Olvídese de los papeles perdidos. Remitos, facturas y comprobantes almacenados de forma segura y accesible.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/30">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Métricas y Reportes</h3>
                      <p className="text-muted-foreground text-sm">Exporte datos estadísticos para sus reuniones de directorio y evalúe la eficiencia del servicio con datos reales.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background border shadow-xl rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                  <div className="flex items-center gap-3">
                    <Truck className="w-6 h-6 text-emerald-500" />
                    <span className="font-semibold text-lg">Panel de Cliente</span>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">En línea</Badge>
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
          </section>

          {/* Cómo Funciona - Timeline estático */}
          <section className="py-12 print:break-inside-avoid">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">¿Cómo funciona el proceso?</h2>
              <p className="text-base text-muted-foreground">
                Simplificamos toda la logística de control en 4 pasos claros, integrando a choferes, personal de planta y administración en una misma plataforma en tiempo real.
              </p>
            </div>
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/30">
                      <div className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    {index < timelineData.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-[40px] bg-emerald-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold text-muted-foreground mb-4">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 rounded-xl bg-neutral-900 flex flex-col items-center justify-center my-8 print:my-6 print:break-inside-avoid">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <Truck className="h-16 w-16 mx-auto mb-6 text-emerald-400 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-white">Construyendo el futuro juntos</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-lg font-medium">
                Esta innovación es una inversión directa en la tranquilidad de su empresa. En Transportes Montivero, su confianza es el motor que nos impulsa a mejorar cada día.
              </p>
            </div>
          </section>

          <DeveloperFooter />
        </div>
      </div>
    </>
  );
}
