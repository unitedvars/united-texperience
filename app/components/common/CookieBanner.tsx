import clsx from "clsx";
import { orbitron, archivo } from "@/utils/fonts";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import Link from "next/link";

export default async function CookieBanner() {
  
  return (
    <>
    {/* ESTO ES EL BANNER DE COOKIES SE TIENE QUE ABRIR AL CARGAR LA PAGINA, Y ENVIAR EL EVENTO QUE ELIJA EL USUARIO*/}
      <div className="w-4/5 max-w-7xl shadow-lg bg-white rounded-lg p-4 fixed bottom-10 right-[16px] lg:right-[80px]">
        <div>
          <h5
            className={clsx(
              orbitron.className,
              "text-primary-800 text-xl mb-2 transition"
            )}
          >
            This website uses cookies
          </h5>
          <p className={clsx(
              "text-secondary-100 text-1xl font-thin mb-4",
                archivo.className
            )}>
            We use cookies to improve your experience, analyze website usage, and personalize advertising. By selecting "Accept All", you consent to the use of cookies as described in our <Link className={clsx(
            archivo.className,
            "hover:border-primary-200 pb-1 border-transparent transition border-b text-primary-500"
          )} href={`/en/cookies-policy`}>Cookies Policy</Link> and agree to our Privacy Policy. You can also choose to "Reject All" non-essential cookies or adjust your preferences in "Cookie Settings
          </p>
        </div>
        
        <div className="flex justify-end">
          <ButtonSecondary className="me-4">Reject all</ButtonSecondary>
          <Button> Accept all</Button>
        </div>
      </div>
    </>
  );
};