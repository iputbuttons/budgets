import { LightThemeForcer } from "./light-theme-forcer";

export default function LocosPorElFutbolPrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LightThemeForcer>{children}</LightThemeForcer>;
}

