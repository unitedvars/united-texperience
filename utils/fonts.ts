import { Maitree, Orbitron, Archivo } from "next/font/google";

const maitree = Maitree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
const orbitron = Orbitron({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export { maitree, orbitron, archivo };
