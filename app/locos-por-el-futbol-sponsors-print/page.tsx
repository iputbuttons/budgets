import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  MonitorPlay,
  Users,
  BarChart,
  Coins,
  Megaphone,
  Eye,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { PrintButton } from "../locos-por-el-futbol-print/print-button";
import { DeveloperFooter } from "@/components/developer-footer";
import "../locos-por-el-futbol-print/print.css";

export const metadata: Metadata = {
  title: "Locos por el Fútbol | Propuesta para auspiciantes (impresión)",
  description:
    "Documento en lenguaje claro para presentar la propuesta comercial de auspicio de Locos por el Fútbol.",
};

export default function LocosPorElFutbolSponsorsPrintPage() {
  return (
    <>
      <div className="print:hidden fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-2 border">
        <PrintButton />
      </div>

      <div className="min-h-screen bg-background text-foreground print:bg-white print:text-black">
        <div className="container mx-auto px-4 md:px-6 py-8 print:py-4">
          {/* Portada */}
          <section className="py-10 lg:py-14 bg-muted/10 rounded-xl px-6 mb-8 print:mb-6 print:bg-white print:border print:border-black/10 print:break-inside-avoid">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm border-emerald-500/30 text-emerald-700 bg-emerald-500/10 print:border-black print:text-black print:bg-white"
              >
                Propuesta para auspiciantes
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight print:text-black">
                &quot;Locos por el Fútbol&quot;
                <span className="block mt-1 text-emerald-600 text-2xl md:text-3xl print:text-black">
                  Oportunidad de Auspicio Local
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed print:text-black">
                En palabras simples, esta propuesta le explica{" "}
                <span className="font-semibold text-foreground">
                  cómo puede mostrar su marca
                </span>{" "}
                durante las transmisiones de partidos en vivo, de una manera clara, ordenada y
                pensada para el público de la zona.
              </p>
            </div>
          </section>

          {/* Qué es y para quién es */}
          <section className="py-10 print:break-inside-avoid">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  1. ¿Qué es “Locos por el Fútbol”?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground print:text-black">
                  Es un proyecto de{" "}
                  <span className="font-semibold text-foreground">
                    transmisiones de partidos de fútbol por internet
                  </span>
                  . Los hinchas se conectan desde el celular y miran los encuentros en vivo, como si fuera un canal propio.
                </p>
                <p className="text-base text-muted-foreground print:text-black">
                  Usted, como auspiciante, puede{" "}
                  <span className="font-semibold text-foreground">
                    aparecer en pantalla mientras la gente mira el partido
                  </span>
                  : logo, mensajes, ofertas o recordatorios simples (teléfono, dirección, redes).
                </p>
              </div>
              <div className="space-y-4">
                <Card className="border-emerald-500/20 bg-muted/30 print:border-black/20 print:bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40">
                        <MonitorPlay className="w-6 h-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-lg">
                        Público objetivo (de forma sencilla)
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground print:text-black">
                    <p>• Hinchas locales que siguen los partidos de la zona.</p>
                    <p>• Familias que miran juntas desde el living.</p>
                    <p>• Gente joven que comparte fragmentos en redes sociales.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Cómo se ve su marca */}
          <section className="py-10 print:break-inside-avoid">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-6">
                2. Cómo se verá su marca durante los partidos
              </h2>
              <p className="text-base text-muted-foreground text-center mb-8 print:text-black">
                La pantalla principal del partido tiene espacios claros para que{" "}
                <span className="font-semibold text-foreground">
                  su negocio esté presente sin molestar al hincha
                </span>
                . Todo está pensado para que el mensaje se lea fácil.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background border border-border/60 print:bg-white print:border-black/20">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <Megaphone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Banners en pantalla
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2 print:text-black">
                    <p>• Logo y frase corta en la parte inferior del partido.</p>
                    <p>• Mensajes como “Patrocina: [Nombre de su negocio]”.</p>
                    <p>• Se muestran varias veces en cada tiempo.</p>
                  </CardContent>
                </Card>

                <Card className="bg-background border border-border/60 print:bg-white print:border-black/20">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <Eye className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Placas entre tiempos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2 print:text-black">
                    <p>• Pantallas completas con su anuncio durante el entretiempo.</p>
                    <p>• Tiempo suficiente para leer dirección, teléfono y oferta.</p>
                    <p>• Puede cambiar el mensaje cada cierto tiempo.</p>
                  </CardContent>
                </Card>

                <Card className="bg-background border border-border/60 print:bg-white print:border-black/20">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Menciones del relator
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2 print:text-black">
                    <p>• Agradecimientos hablados durante el partido.</p>
                    <p>• Mensajes simples: “Este partido llega gracias a…”.</p>
                    <p>• Refuerza el nombre de su negocio en la memoria del público.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Beneficios para el auspiciante */}
          <section className="py-10 bg-muted/20 rounded-xl px-6 my-8 print:my-6 print:bg-white print:border print:border-black/10 print:break-inside-avoid">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8">
                3. Beneficios para su negocio
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background border-emerald-500/20 print:bg-white print:border-black/20">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Presencia constante
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2 print:text-black">
                    <p>• Su marca aparece varias veces durante cada partido.</p>
                    <p>• La gente la ve mientras está atenta al juego.</p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-emerald-500/20 print:bg-white print:border-black/20">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <BarChart className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Resultados medibles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2 print:text-black">
                    <p>• Sabemos cuántas personas se conectan a cada partido.</p>
                    <p>• Se puede estimar cuántos ven sus anuncios.</p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-emerald-500/20 print:bg-white print:border-black/20">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-500/40 mb-3">
                      <Coins className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Inversión accesible
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2 print:text-black">
                    <p>• Planes pensados para comercios y empresas locales.</p>
                    <p>• Posibilidad de comenzar con pocos partidos y luego ampliar.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Ejemplo simple de paquete */}
          <section className="py-10 print:break-inside-avoid">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-6">
                4. Ejemplo de paquete de auspicio
              </h2>
              <Card className="border-emerald-500/20 shadow-lg shadow-emerald-500/10 print:border-black/20 print:shadow-none">
                <CardHeader className="text-center pb-2 pt-8">
                  <CardTitle className="text-2xl font-bold">
                    Paquete “Temporada Local”
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 pt-4 space-y-4">
                  <p className="text-sm text-muted-foreground text-center print:text-black">
                    El objetivo es mostrar cómo podría ser un esquema sencillo. Los detalles
                    finales (cantidad de partidos, precios y formas de pago) se ajustan en conjunto.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground print:text-black">
                    <li>• Presencia en todos los partidos transmitidos en la temporada.</li>
                    <li>• Banners fijos y rotativos durante el juego.</li>
                    <li>• Placa completa en entretiempo y al final del partido.</li>
                    <li>• Mención del locutor al inicio y al cierre de cada transmisión.</li>
                    <li>• Posibilidad de incluir promociones especiales (descuentos, sorteos, etc.).</li>
                  </ul>
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
                5. En resumen
              </h2>
              <p className="text-base md:text-lg text-muted-foreground print:text-black">
                “Locos por el Fútbol” es una oportunidad para que{" "}
                <span className="font-semibold text-foreground">
                  su marca acompañe un momento de disfrute real
                </span>
                : el partido que la gente está esperando ver.
              </p>
              <p className="text-base text-muted-foreground print:text-black">
                Este documento está pensado para leerlo con calma, sin tecnicismos. Los detalles
                comerciales finales se conversan personalmente para encontrar{" "}
                <span className="font-semibold text-foreground">la mejor forma de trabajar juntos</span>.
              </p>
              <div className="print:hidden pt-2">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-emerald-500/25"
                  asChild
                >
                  <Link
                    href="https://wa.me/5492657202327?text=Hola%20Francisco,%20quiero%20hablar%20sobre%20los%20auspicios%20de%20Locos%20por%20el%20F%C3%BAtbol."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conversar sobre auspicio
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

