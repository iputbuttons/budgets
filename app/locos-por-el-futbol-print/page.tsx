import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  MonitorPlay,
  Users,
  CreditCard,
  ShieldCheck,
  CalendarCheck,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { PrintButton } from "./print-button";
import { DeveloperFooter } from "@/components/developer-footer";
import "./print.css";

export const metadata: Metadata = {
  title: "Locos por el Fútbol | Versión para imprimir",
  description:
    "Resumen en lenguaje sencillo del proyecto Locos por el Fútbol para presentar en papel a clientes y personas mayores.",
};

export default function LocosPorElFutbolPrintPage() {
  return (
    <>
      <div className="print:hidden fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-2 border">
        <PrintButton />
      </div>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-8 print:py-4">
          {/* Portada / Hero */}
          <section className="py-10 lg:py-14 bg-muted/10 rounded-xl px-6 mb-8 print:mb-6 print:break-inside-avoid">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2 text-sm border-emerald-500/30 text-emerald-700 bg-emerald-500/10">
                Propuesta en revisión
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Propuesta <span className="block mt-1 text-emerald-600">“Locos por el Fútbol”</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En palabras simples, esta propuesta es{" "}
                <span className="font-semibold text-foreground">
                  un servicio para ver partidos de fútbol por internet
                </span>
                , pensado para que los hinchas puedan mirar los partidos en vivo de forma cómoda,
                ordenada y segura, desde su casa o desde donde estén.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground border-y border-border/50 py-6 max-w-2xl mx-auto bg-muted/20 rounded-2xl">
                <div className="flex flex-col items-center sm:items-start px-4">
                  <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground/70 mb-1">
                    Preparado para
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    Cristian Cortez
                  </span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border" />
                <div className="flex flex-col items-center sm:items-start px-4">
                  <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground/70 mb-1">
                    Fecha
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    26 de febrero de 2026
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Qué es el proyecto */}
          <section className="py-10 print:break-inside-avoid">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-center">
                1. ¿Qué es “Locos por el Fútbol”?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground text-center mb-6">
                Es una página web muy sencilla donde la gente puede{" "}
                <span className="font-semibold text-foreground">
                  registrarse, pagar su abono y ver los partidos en vivo
                </span>
                . Todo se maneja desde un mismo lugar: accesos de usuarios, cobros y control de la
                transmisión.
              </p>
              <p className="text-base text-muted-foreground text-center">
                La idea es que, para el hincha, usar el sistema sea tan fácil como prender la
                televisión: entrar, elegir el partido y mirar. Y para la persona que administra el
                proyecto, que sea fácil{" "}
                <span className="font-semibold text-foreground">
                  saber quién paga, quién entra y cuántas personas están mirando
                </span>
                , sin hojas de cálculo ni anotaciones a mano.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Cómo se ve para el hincha */}
          <section className="py-10 print:break-inside-avoid">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  2. Cómo lo vive el hincha
                </h2>
                <p className="text-base text-muted-foreground">
                  En esta primera etapa queremos que la experiencia sea clara, sin vueltas. El
                  hincha solo necesita tres pasos:
                </p>
                <ol className="space-y-3 text-base text-muted-foreground mt-2 list-decimal list-inside">
                  <li>
                    <span className="font-semibold text-foreground">Crear una cuenta sencilla</span>{" "}
                    con su correo o con su cuenta de Google/Facebook.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Comprar un plan</span>{" "}
                    (por ejemplo 1, 3, 5 o 10 partidos) con Mercado Pago.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Entrar al partido</span> desde
                    la página, elegir el encuentro del día y mirar la transmisión en vivo.
                  </li>
                </ol>
                <p className="text-base text-muted-foreground mt-4">
                  La pantalla principal muestra el video, el marcador, un reloj con el minuto del
                  partido y un espacio para mensajes del público (chat sencillo). También hay
                  lugares reservados para{" "}
                  <span className="font-semibold text-foreground">publicidad de comercios y marcas</span>.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border-emerald-500/20 bg-muted/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40">
                        <MonitorPlay className="w-6 h-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-lg">
                        Pantalla de partido (ejemplo)
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      • Video del partido a pantalla principal, en buena calidad.
                    </p>
                    <p>
                      • Marcador con resultado y tiempo de juego, siempre visibles.
                    </p>
                    <p>
                      • Espacio para mensajes del público durante el partido.
                    </p>
                    <p>
                      • Banners para mostrar anuncios de sponsors.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Qué incluye la primera etapa */}
          <section className="py-10 bg-muted/20 rounded-xl px-6 my-8 print:my-6 print:break-inside-avoid">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8">
                3. Primera etapa: lo esencial para empezar
              </h2>
              <p className="text-base text-muted-foreground text-center mb-8">
                En esta primera fase construimos todo lo necesario para{" "}
                <span className="font-semibold text-foreground">
                  salir a la cancha, cobrar entradas y transmitir
                </span>{" "}
                sin depender de terceras plataformas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background border-emerald-500/20">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Registro y acceso de usuarios
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>• Creación de cuentas con correo o redes sociales.</p>
                    <p>• Recuperación de contraseña sencilla.</p>
                    <p>• Un pago = una pantalla a la vez (evita compartir cuentas).</p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-emerald-500/20">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <CreditCard className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Cobros claros con Mercado Pago
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>• Planes por cantidad de partidos (créditos).</p>
                    <p>• Pagos registrados automáticamente en el sistema.</p>
                    <p>• Posibilidad de devolución automática si un partido se suspende.</p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-emerald-500/20">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Plataforma de administración
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>• Carga de equipos, partidos y horarios.</p>
                    <p>• Control de la transmisión en vivo (goles, tiempo, banners).</p>
                    <p>• Vista rápida de cuántas personas están conectadas.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Panel de control para la organización */}
          <section className="py-10 print:break-inside-avoid">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  4. Qué gana la organización con este sistema
                </h2>
                <p className="text-base text-muted-foreground mt-3">
                  Además de ofrecer un mejor servicio a los hinchas,{" "}
                  <span className="font-semibold text-foreground">
                    el proyecto ordena los números y abre puertas a nuevos ingresos
                  </span>
                  .
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background/70 border border-border/60">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <CalendarCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Calendario y partidos en orden
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>• Todos los partidos cargados en un solo lugar.</p>
                    <p>• Historial de encuentros pasados.</p>
                    <p>• Información lista para pasar a redes sociales o prensa.</p>
                  </CardContent>
                </Card>

                <Card className="bg-background/70 border border-border/60">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <BarChart className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Números claros y sin sorpresas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>• Resumen de ventas y accesos por partido.</p>
                    <p>• Listado de personas conectadas en cada encuentro.</p>
                    <p>• Base para decidir precios, promociones y sponsors.</p>
                  </CardContent>
                </Card>

                <Card className="bg-background/70 border border-border/60">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Imagen profesional y confianza
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>• Plataforma propia, con marca y colores del proyecto.</p>
                    <p>• Mejor presentación ante sponsors y municipios.</p>
                    <p>• Base sólida para crecer a futuro (segunda etapa).</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Inversión resumida */}
          <section className="py-10 relative overflow-hidden print:break-inside-avoid">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
            <div className="container mx-auto px-0 md:px-6">
              <Card className="max-w-3xl mx-auto border-emerald-500/20 shadow-2xl shadow-emerald-500/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-400 to-emerald-600" />
                <CardHeader className="text-center pb-2 pt-10">
                  <CardTitle className="text-3xl font-bold">
                    5. Inversión propuesta (primera etapa)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 pb-10 px-6 md:px-10 space-y-6">
                  <div className="flex flex-col items-center justify-center mb-4 px-4 py-6 bg-muted/30 rounded-2xl border border-border border-dashed">
                    <p className="text-base text-muted-foreground mb-2 text-center">
                      Desarrollo completo de la primera etapa:
                    </p>
                    <p className="text-base text-muted-foreground mb-4 text-center">
                      página para hinchas, sistema de cobro, panel de administración y base de datos.
                    </p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-600">
                        $1.200
                      </span>
                      <span className="text-lg text-muted-foreground font-medium">
                        USD
                      </span>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl border border-border/60 p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      Los plazos de trabajo y la forma de pago se conversan en conjunto, según las
                      necesidades del proyecto. La meta es construir algo sólido, útil y que pueda
                      crecer con el tiempo, sin obligar a grandes gastos de servidor al comienzo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Cierre */}
          <section className="py-12 text-center px-4 print:break-inside-avoid">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                6. En resumen
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                “Locos por el Fútbol” busca ser{" "}
                <span className="font-semibold text-foreground">
                  un proyecto simple de entender
                </span>
                : los hinchas miran los partidos sin complicarse, y la organización tiene números
                claros, más control y nuevas oportunidades de negocio.
              </p>
              <p className="text-base text-muted-foreground">
                Este documento está pensado para imprimirlo y leerlo tranquilo, sin necesidad de
                conocimientos técnicos. Cualquier duda o ajuste se puede conversar y adaptar a la
                realidad del proyecto.
              </p>
              <div className="print:hidden pt-2">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-emerald-500/25"
                  asChild
                >
                  <Link
                    href="https://wa.me/5492657202327?text=Hola%20Francisco,%20quiero%20hablar%20sobre%20la%20propuesta%20de%20Locos%20por%20el%20F%C3%BAtbol."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar o ajustar propuesta
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <DeveloperFooter />
        </div>
      </div>
    </>
  );
}

