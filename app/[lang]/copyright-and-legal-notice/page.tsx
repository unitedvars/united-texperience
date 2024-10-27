import { sanityFetch } from "@/sanity/lib/fetch";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";

import { Category } from "@/types";
import clsx from "clsx";
import { archivo, maitree } from "@/utils/fonts";

export default async function Home() {
  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  return (
    <>
      <header className="flex flex-col">
        <Navbar categories={categories} showCategoryBar={false} />
      </header>
      <main className="pb-16">
        <div className={clsx(
            "flex flex-col min-h-screen pb-8 small-box [&>p]:mb-6 pt-8",
            archivo.className
          )}>
            <h1 className={clsx(maitree.className, "text-center mb-8 text-6xl")}>
            Copyright and Legal Notice
            </h1>
          
          <p>
          Website operator as defined by § 5 German Telemedia Act (TMG)
          </p>
          
          <p><strong>
          United VARs LLP
          </strong>
          </p>

          <p>
          Rita-Maiburg-Straße 40
          70794 Filderstadt
          Germany
          </p>

          <p>E-Mail: info@united-vars.com
          Internet: www.united-vars.com</p>

          <p>Telephone: +49 2102 94 21 00 (United VARs Office Ratingen / Germany)
          Fax: +49 2102 94 21 044 (United VARs Office Ratingen / Germany)</p>

          <p>Directors authorized to represent</p>
          
          <p>Detlef Mehlmann (Chairman)
          Alejandro Daniel
          John McGrath
          Ronnie Sung
          Register</p>

          <p>Partnership No. OC370027 Companies House, Cardiff, Wales</p>

          <p>Value Added Tax Identification Number in accordance with §27 a of the German Value Added Tax Act: DE 292471152</p>

          <p>Person responsible in accordance with § 55 par. 2 of the German Interstate Broadcasting Agreement (RStV)</p>

          <p>Detlef Mehlmann (same address as above)</p>

          <p>Copyright and picture credits</p>
          
          <p>The contents on www.united-vars.com – unless otherwise stated – are protected by copyright. Where necessary, the photographs used on the website are labeled with picture credits or the source is indicated under the images if the photographs were not taken by us. Using photographs on third party websites is only possible with a respective license from the copyright owner. If there are picture credits, please indicate them here (provided mentioning them in the Copyright and Legal Notice is permitted)</p>

        </div>

        <Footer />
      </main>
    </>
  );
}