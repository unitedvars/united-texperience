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
        <div
          className={clsx(
            "flex flex-col min-h-screen pb-16 px-8 lg:px-0 lg:max-w-4xl [&>p]:mb-6 pt-8 mx-auto",
            archivo.className
          )}
        >
          <h1 className={clsx(maitree.className, "text-center mb-8 text-6xl")}>
            Cookies Policy of UnitedTexExperience
          </h1>
          <p>
            At UnitedTexExperience, we respect your privacy and are committed to protecting your personal data. This Cookie Policy explains what cookies are, the types we use, and how you can manage your preferences. By using our website, you agree to the use of cookies as outlined in this policy. <br></br><br></br>

            <strong>1. What are Cookies?</strong><br></br>
            Cookies are small text files placed on your device when you visit websites. They help improve your experience by remembering your preferences and enabling personalized content.<br></br><br></br>

            <strong>2. Types of Cookies We Use</strong><br></br>
            Essential Cookies: These cookies are necessary for the website’s core functionality, such as enabling secure access to account areas. Without these, the website cannot function properly.
            Analytical Cookies: These cookies allow us to measure and analyze how you use our site to improve its performance and the user experience. Data collected by these cookies is anonymous.
            Functional Cookies: These cookies remember your preferences (e.g., language or region) to enhance your experience on our website.
            Marketing Cookies: These cookies track your browsing habits and are used to display relevant advertisements on third-party websites and measure the effectiveness of our marketing campaigns.<br></br><br></br>
            
            <strong>3. Cookie Consent and Preferences</strong><br></br>
            In compliance with the General Data Protection Regulation (GDPR), we require your consent to place certain cookies on your device. Upon your first visit to our website, you will see a cookie banner allowing you to accept all cookies, reject non-essential cookies, or customize your preferences. You can manage or withdraw your consent at any time through our Cookie Settings or by adjusting your browser settings.<br></br><br></br>

            <strong>4. Third-Party Cookies</strong><br></br>
            Our website may use third-party cookies (such as analytics or social media cookies) that are placed by external services. These third-party providers may process your data independently; we recommend reviewing their privacy policies for more information on how they manage your data.<br></br><br></br>
            
            <strong>5. Managing Your Cookie Preferences</strong><br></br>
            You can modify your cookie settings at any time by visiting our [Cookie Settings] link, available at the bottom of each page. You may also configure your browser to block or delete cookies. Please note that disabling essential cookies may affect certain functionalities of the website.<br></br><br></br>
            
            <strong>6. Updates to Our Cookie Policy</strong><br></br>
            We may update this Cookie Policy periodically to reflect changes in technology, regulation, or our practices. We recommend reviewing this policy from time to time for the latest information.<br></br><br></br>
            7. Contact Us
            If you have questions about our Cookie Policy or how we use cookies, please contact us at unitedtexperience@gmail.com.
          </p>
        </div>

      <Footer />
      </main>
    </>
  );
}
