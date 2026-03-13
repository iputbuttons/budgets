import { LightThemeForcer } from "../locos-por-el-futbol-print/light-theme-forcer";

export default function LocosPorElFutbolSponsorsPrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LightThemeForcer>{children}</LightThemeForcer>;
}

