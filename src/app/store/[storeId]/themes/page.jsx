import { redirect } from "next/navigation";

export default function Themes() {
  console.log("Themes");
  redirect("/store/deempay123/themes/12345678/editor");
}
