import { LightThemeForcer } from "./light-theme-forcer";

export default function DigitalizacionPrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LightThemeForcer>{children}</LightThemeForcer>;
}
