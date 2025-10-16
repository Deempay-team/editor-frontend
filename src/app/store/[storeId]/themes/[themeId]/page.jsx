import { redirect } from "next/navigation";

export default function ThemePage() {
  console.log("Theme ID Page");
  redirect("/store/deempay123/themes/12345678/editor");
}
