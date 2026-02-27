import Link from "next/link";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export function DeveloperFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/20 py-10 mt-auto">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-center sm:text-left">
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-md">
            <Image 
              src="/photo-square.jpg" 
              alt="Francisco Javier Rodriguez" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start max-w-md">
          <p className="text-base font-semibold text-foreground mb-1">
            Desarrollo a cargo de Francisco Javier Rodriguez
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Ingeniero de Software con más de 8 años de experiencia, especializado en crear productos digitales modernos, escalables y seguros para impulsar el crecimiento de los negocios.
          </p>
          <Link 
            href="https://linkedin.com/in/tu-perfil" 
            target="_blank"
            className="inline-flex items-center gap-2 text-base text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            Conectar en LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

