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
            Data Protection Notice
          </h1>
          <p>
            Thank you for visiting our Internet website and for your interest in
            United VARs. The protection of your personal data is important to
            us. Personal data is a term used to describe any individual piece of
            information about personal or factual circumstances concerning a
            specific natural person or that can be assigned to a natural person.
            This includes information about an individual&apos;s real name,
            address, telephone number and date of birth.
          </p>
          <p>
            Since this information is subject to special protection, we will
            only collect it to the extent that it is technically required. We
            explain below which information is collected while visiting our
            website and how it will be used.
          </p>
          <p>
            Our data protection practices adhere to the provisions set out in
            the German Federal Data Protection Act (BDSG) and the German
            Telemedia Act (TMG). We will collect, process and save your personal
            data solely for the purpose of processing requests and, when
            necessary, for processing orders / contracts. Only once you have
            given your consent separately will your data also be used for the
            other purposes explicitly indicated in the consent form, e.g. for
            being sent information about special offers via newsletters, etc.
          </p>
          <p>
            We collect your data as a result of your sharing of your data with
            us. This may, for instance be information you enter into our contact
            form. Other data shall be recorded by our IT systems automatically
            or after you consent to its recording during your website visit.
          </p>
          <p>
            This data comprises primarily technical information (e.g. web
            browser, operating system or time the site was accessed). This
            information is recorded automatically when you access this website.
          </p>
          <p>
            The purpose to use your data is to guarantee the error free
            provision of the website. Other data may be used to analyze your
            user patterns.
          </p>
          <p>
            You have the right to receive information about the source,
            recipients and purposes of your archived personal data at any time
            without having to pay a fee for such disclosures. You also have the
            right to demand that your data are rectified or eradicated. If you
            have consented to data processing, you have the option to revoke
            this consent at any time, which shall affect all future data
            processing. Moreover, you have the right to demand that the
            processing of your data be restricted under certain circumstances.
            Furthermore, you have the right to log a complaint with the
            competent supervising agency. Please do not hesitate to contact us
            at any time under the address disclosed in section
            &ldquo;Information Required by Law&rdquo; on this website if you
            have questions about this or any other data protection related
            issues. There is a possibility that your browsing patterns will be
            statistically analyzed when your visit this website. Such analyses
            are performed primarily with what we refer to as analysis programs.
            For detailed information about these analysis programs please
            consult our Data Protection Declaration below.
          </p>
          <p>
            1. Responsible authority as defined in &sect; 13 par. 1 German
            Telemedia Act / &sect; 3 par. 7 German Federal Data Potection Act
            (BDSG)
          </p>
          <p>
            The responsible authority as defined under data protection law
            is:United VARs CLGKaiserswerther Str. 11540880 RatingenGermanyFax:
            +49 2102 94 21 044E-Mail:&nbsp;info@united-vars.comThe responsible
            authority is the natural or legal person who alone or jointly with
            others decides on the purposes and means of processing personal data
            (e.g. names, e-mail addresses, etc.).
          </p>
          <p>Statutory data protection officer</p>
          <p>
            We have appointed a data protection officer for our
            company:Christian SchwingeAll for One Steeb
            AGRita-Maiburg-Stra&szlig;e 4070794
            Filderstadt-BernhausenGermanyPhone: +49 711 258560-0E-Mail:{" "}
            <a href="mailto:christian.schwinge@all-for-one.com">
              christian.schwinge@all-for-one.com
            </a>
          </p>
          <p>2. Data Protection</p>
          <p>
            The operators of this website and its pages take the protection of
            your personal data very seriously. Hence, we handle your personal
            data as confidential information and in compliance with the
            statutory data protection regulations and this Data Protection
            Declaration. Whenever you use this website, a variety of personal
            information will be collected. Personal data comprises data that can
            be used to personally identify you. This Data Protection Declaration
            explains which data we collect as well as the purposes we use this
            data for. It also explains how, and for which purpose the
            information is collected.
          </p>
          <p>
            We herewith advise you that the transmission of data via the
            Internet (i.e. through e-mail communications) may be prone to
            security gaps. It is not possible to completely protect data against
            third party access.
          </p>
          <p>
            3. Data security, data protection and communicating / inquiry by
            email, telephone or fax
          </p>
          <p>
            If you contact us by e-mail, telephone or fax, your request
            including all personal data (name, request) will be stored and
            processed by us for the purpose of processing your request. Whilst
            your personal data is being collected, saved and processed, it is
            protected by technical and organisational measures so that it cannot
            be accessed by third parties. We do not pass on this data without
            your consent. However, when communicating by email, telephone or
            fax, we cannot guarantee complete data security, which is why we
            recommend that you send us any information requiring a high level of
            confidentiality by mail.
          </p>
          <p>
            The processing of this data is based on Art. 6 Para. 1 lit. b DSGVO,
            when your request is related to the performance of a contract or is
            necessary for the implementation of pre-contractual measures. In all
            other cases, the processing is based on your consent (Art. 6 para. 1
            lit. a DSGVO) and / or on our legitimate interests (Art. 6 para. 1
            lit. f DSGVO), as we have a legitimate interest in the effective
            processing of enquiries addressed to us.
          </p>
          <p>
            The data sent to us by you via contact requests will remain with us
            until you request it to be deleted, revoke your consent to store it,
            or the purpose for the data storage no longer applies (e.g. after
            your request has been processed). Mandatory statutory provisions -
            in particular statutory retention periods - remain unaffected.
          </p>
          <p>
            4. Revocation of consents - data disclosures and change requests
            &ndash; deleting &amp; blocking information
          </p>
          <p>
            According to the German Federal Data Protection Act, you have a
            right to obtain information about your saved data for free and if
            necessary, you have a right to have this data changed, blocked or
            deleted. Your information will be deleted if it is not subject to
            any legal regulations which prevent its deletion. At any time you
            can revoke the permission you have given us to use your personal
            information. You can contact us directly at any time about requests
            concerning the disclosure, deletion and correction of your data.
            Please use the following address for correspondence:United VARs
            LLPOffice RatingenKaiserswerther Str. 11540880 RatingenFax: +49-2102
            / 94 21 044E-Mail:&nbsp;info@united-vars.comIN THE EVENT THAT DATA
            ARE PROCESSED ON THE BASIS OF ART. 6 SECT. 1 LIT. E OR F GDPR, YOU
            HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR
            PERSONAL DATA BASED ON GROUNDS ARISING FROM YOUR UNIQUE SITUATION.
            THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE PROVISIONS. TO
            DETERMINE THE LEGAL BASIS, ON WHICH ANY PROCESSING OF DATA IS BASED,
            PLEASE CONSULT THIS DATA PROTECTION DECLARATION. IF YOU LOG AN
            OBJECTION, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA,
            UNLESS WE ARE IN A POSITION TO PRESENT COMPELLING PROTECTION WORTHY
            GROUNDS FOR THE PROCESSING OF YOUR DATA, THAT OUTWEIGH YOUR
            INTERESTS, RIGHTS AND FREEDOMS OR IF THE PURPOSE OF THE PROCESSING
            IS THE CLAIMING, EXERCISING OR DEFENCE OF LEGAL ENTITLEMENTS
            (OBJECTION PURSUANT TO ART. 21 SECT. 1 GDPR).
          </p>
          <p>
            IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO ENGAGE IN
            DIRECT ADVERTISING, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE
            PROCESSING OF YOUR AFFECTED PERSONAL DATA FOR THE PURPOSES OF SUCH
            ADVERTISING. THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS
            AFFILIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR
            PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT
            ADVERTISING PURPOSES (OBJECTION PURSUANT TO ART. 21 SECT. 2 GDPR).
          </p>
          <p>
            In the event of violations of the GDPR, data subjects are entitled
            to log a complaint with a supervisory agency, in particular in the
            member state where they usually maintain their domicile, place of
            work or at the place where the alleged violation occurred. The right
            to log a complaint is in effect regardless of any other
            administrative or court proceedings available as legal recourses.You
            have the right to demand that we hand over any data we automatically
            process on the basis of your consent or in order to fulfil a
            contract be handed over to you or a third party in a commonly used,
            machine readable format. If you should demand the direct transfer of
            the data to another controller, this will be done only if it is
            technically feasible.
          </p>
          <p>
            Within the scope of the applicable statutory provisions, you have
            the right to at any time demand information about your archived
            personal data, their source and recipients as well as the purpose of
            the processing of your data. You may also have a right to have your
            data rectified or eradicated. If you have questions about this
            subject matter or any other questions about personal data, please do
            not hesitate to contact us at any time at the address provided in
            section &ldquo;Information Required by Law.&rdquo;
          </p>
          <p>
            You have the right to demand the imposition of restrictions as far
            as the processing of your personal data is concerned. To do so, you
            may contact us at any time at the address provided in section
            &ldquo;Information Required by Law.&rdquo; The right to demand
            restriction of processing applies in the following cases:In the
            event that you should dispute the correctness of your data archived
            by us, we will usually need some time to verify this claim. During
            the time that this investigation is ongoing, you have the right to
            demand that we restrict the processing of your personal data.If the
            processing of your personal data was/is conducted in an unlawful
            manner, you have the option to demand the restriction of the
            processing of your data in lieu of demanding the eradication of this
            data.
          </p>
          <p>
            If we do not need your personal data any longer and you need it to
            exercise, defend or claim legal entitlements, you have the right to
            demand the restriction of the processing of your personal data
            instead of its eradication.
          </p>
          <p>
            If you have raised an objection pursuant to Art. 21 Sect. 1 GDPR,
            your rights and our rights will have to be weighed against each
            other. As long as it has not been determined whose interests
            prevail, you have the right to demand a restriction of the
            processing of your personal data. If you have restricted the
            processing of your personal data, these data &ndash; with the
            exception of their archiving &ndash; may be processed only subject
            to your consent or to claim, exercise or defend legal entitlements
            or to protect the rights of other natural persons or legal entities
            or for important public interest reasons cited by the European Union
            or a member state of the EU.
          </p>
          <p>
            We herewith object to the use of contact information published in
            conjunction with the mandatory information to be provided in section
            &ldquo;Information Required by Law&rdquo; to send us promotional and
            information material that we have not expressly requested. The
            operators of this website and its pages reserve the express right to
            take legal action in the event of the unsolicited sending of
            promotional information, for instance via SPAM messages.
          </p>
          <p>5. SSL and/or TLS encryption</p>
          <p>
            For security reasons and to protect the transmission of confidential
            content, such as purchase orders or inquiries you submit to us as
            the website operator, this website uses either an SSL or a TLS
            encryption program. You can recognize an encrypted connection by
            checking whether the address line of the browser switches from
            &ldquo;http://&rdquo; to &ldquo;https://&rdquo; and also by the
            appearance of the lock icon in the browser line.If the SSL or TLS
            encryption is activated, data you transmit to us cannot be read by
            third parties.
          </p>
          <p>6. Anonymized / Pseudonymized use of the website</p>
          <p>
            In principle, you can use our website without entering your personal
            information. Pseudonymized user data will not be linked to the
            information about the person using the pseudonym. Pseudonymized user
            profiles are not created.
          </p>
          <p>7. Special functions on the website</p>
          <p>
            Our website offers you several functions; when these are used,
            personal data is collected, processed and saved by us. Below, we
            explain what happens with this information:&bull; CommentsWe will
            only use the information acquired from our comment function for
            processing comments which have been made using the submission form.
            The comments will be included on our website and as a general rule,
            they will remain available for an indefinite period of time as
            retrievable content. You may personally request to have your
            comments deleted by us at any time. Please contact us if you want
            your comments removed. The personal information collected for
            processing or removing the submitted comment will be deleted
            immediately after the submission or deletion of the comment,
            provided it is not subject to any legal retention periods.
          </p>
          <p>8. Contact form</p>
          <p>
            If you submit inquiries to us via our contact form, the information
            provided in the contact form as well as any contact information
            provided therein will be stored by us in order to handle your
            inquiry and in the event that we have further questions. The
            processing of these data is based on Art. 6 para. 1 lit. b GDPR, if
            your request is related to the execution of a contract or if it is
            necessary to carry out pre-contractual measures. In all other cases
            the processing is based on our legitimate interest in the effective
            processing of the requests addressed to us (Art. 6 Para. 1 lit. f
            GDPR) or on your agreement (Art. 6 Para. 1 lit. a GDPR) if this has
            been requested.
          </p>
          <p>
            The information you have entered into the contact form shall remain
            with us until you ask us to eradicate the data, revoke your consent
            to the archiving of data or if the purpose for which the information
            is being archived no longer exists (e.g. after we have concluded our
            response to your inquiry). This shall be without prejudice to any
            mandatory legal provisions &ndash; in particular retention periods.
          </p>
          <p>
            9. Processing based on consentUnited VARs will process your Personal
            Data if you granted prior consent to the specific proposed
            processing of your Personal Data (Article 6(1) lit. a GDPR). Subject
            to a respective provision and your consent, United VARs may use your
            name, email and postal address, telephone number, job title and
            basic information about your employer (name, address, and industry)
            as well as an interaction profile based on prior interactions with
            United VARs; United VARs may forward this information and also
            provide a hashed user ID to its members and partners listed on this
            page:{" "}
            <a href="//www.united-vars.com/en/partners.">
              www.united-vars.com/en/partners.
            </a>
          </p>
          <p>10. Registration on this website</p>
          <p>
            You have the option to register on this website to be able to use
            additional website functions. We shall use the data you enter only
            for the purpose of using the respective offer or service you have
            registered for. The required information we request at the time of
            registration must be entered in full. Otherwise we shall reject the
            registration.
          </p>
          <p>
            To notify you of any important changes to the scope of our portfolio
            or in the event of technical modifications, we shall use the e-mail
            address provided during the registration process. We shall process
            the data entered during the registration process on the basis of
            your consent (Art. 6 Sect. 1 lit. a GDPR).
          </p>
          <p>
            The data recorded during the registration process shall be stored by
            us as long as you are registered on this website. Subsequently, such
            data shall be deleted. This shall be without prejudice to mandatory
            statutory retention obligations. The type and version of browser
            used &middot; The used operating system &middot; Referrer URL
            &middot; The hostname of the accessing computer &middot; The time of
            the server inquiry &middot;
          </p>
          <p>
            &nbsp;The IP address This data is not merged with other data
            sources.
          </p>
          <p>11. Analyse tools and advertising</p>
          <p>Google Analytics</p>
          <p>
            This website uses web analysis service Google Analytics, which is
            provided is Google Inc., 1600 Amphitheatre Parkway, Mountain View,
            CA 94043, USA. Google Analytics also uses &quot;cookies&quot;, which
            are text files that are stored on your computer and enable an
            analysis of your usage of the website. The information generated by
            the &ldquo;cookies&rdquo; about your use of this website is
            generally transferred to a Google server in the USA and stored
            there. The storage of Google Analytics cookies and the use of this
            analysis tool are based on Art. 6 para. 1 lit. f DSGVO. The website
            operator has a legitimate interest in analysing user behaviour in
            order to optimise both its website and its advertising. However, due
            to the activation of the IP anonymisation on these websites, your IP
            address will be abbreviated by Google within the European Union or
            in other Contracting States of the European Economic Area.
          </p>
          <p>
            Only in exceptional cases will the full IP address be transferred to
            a Google server in the US and abbreviated there. On behalf of the
            operator of this website, Google will use this information to
            evaluate your use of the website, to compile reports on the website
            activities and to provide other services related to the website
            usage and the Internet usage against the website operator. The IP
            address provided by your browser as part of Google Analytics will
            not be merged with other Google data. You can prevent cookies from
            being saved by setting your browser software accordingly; however,
            we would like to point out that in this case you may not be able to
            fully utilise all the functions on this website. In addition, you
            can prevent Google from collecting and processing Google&apos;s data
            (including your IP address) related to your use of the Website
            (including your IP address), as well as the processing of this data
            by Google, by downloading the browser plug-in available under the
            following link and install:
          </p>
          <p>Link:&nbsp;Browser Add On to disable Google Analytics</p>
          <p>
            In addition to or as an alternative to the browser add-on, you can
            block Google Analytics tracking on our pages An opt-out cookie is
            installed on your device. This will prevent the Google Analytics
            collection for this site and for this browser as long as the cookie
            remains installed in your browser.
          </p>
          <p>IP anomymization</p>
          <p>
            On this website, we have activated the IP anonymization function. As
            a result, your IP address will be abbreviated by Google within the
            member states of the European Union or in other states that have
            ratified the Convention on the European Economic Area prior to its
            transmission to the United States. The full IP address will be
            transmitted to one of Google&rsquo;s servers in the United States
            and abbreviated there only in exceptional cases. On behalf of the
            operator of this website, Google shall use this information to
            analyze your use of this website to generate reports on website
            activities and to render other services to the operator of this
            website that are related to the use of the website and the Internet.
            The IP address transmitted in conjunction with Google Analytics from
            your browser shall not be merged with other data in Google&rsquo;s
            possession.
          </p>
          <p>Browser Plugin</p>
          <p>
            You may refuse the use of cookies by selecting the appropriate
            settings on your browser, however please note that if you do this
            you may not be able to use the full functionality of this website.
            In addition, you can prevent Google from collecting the data
            generated by the cookie and related to your use of the website
            (including your IP address) and Google from processing this data by
            downloading and installing the browser plug-in available under the
            following link:{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en">
              https://tools.google.com/dlpage/gaoptout?hl=en
            </a>
            .
          </p>
          <p>Objection to data collection</p>
          <p>
            You can prevent Google Analytics from collecting your data by
            clicking on the following link. An opt-out cookie is set to prevent
            your information from being collected on future visits to this
            website: Disable Google Analytics.
          </p>
          <p>
            For more information on how Google Analytics uses user data, please
            refer to Google&apos;s privacy policy.
          </p>
          <p>Contract data processing</p>
          <p>
            We have executed a contract data processing agreement with Google
            and are implementing the stringent provisions of the German data
            protection agencies to the fullest when using Google Analytics.
          </p>
          <p>Demographic parameters provided by Google Analytics</p>
          <p>
            This website uses the &ldquo;demographic characteristics&rdquo;
            function of Google Analytics, to be able to display to the website
            visitor compatible ads within the Google advertising network. This
            allows reports to be created that contain information about the age,
            gender and interests of the website visitors. The sources of this
            information are interest-related advertising by Google as well as
            visitor data obtained from third party providers. This data cannot
            be allocated to a specific individual. You have the option to
            deactivate this function at any time by making pertinent settings
            changes for advertising in your Google account or you can generally
            prohibit the recording of your data by Google Analytics as explained
            in section &ldquo;Objection to the recording of data&rdquo;.
          </p>
          <p>Archiving period</p>
          <p>
            Data on the user or incident level stored by Google linked to
            cookies, user IDs or advertising IDs (e.g. DoubleClick cookies,
            Android advertising ID) will be anonymized or deleted after 50
            month. For details please click the following link:{" "}
            <a href="https://support.google.com/analytics/answer/7667196?hl=en">
              https://support.google.com/analytics/answer/7667196?hl=en
            </a>
          </p>
          <p>Google Ads</p>
          <p>
            The website operator uses Google Ads. Google Ads is an online
            promotional program of Google Ireland Limited
            (&ldquo;Google&rdquo;), Gordon House, Barrow Street, Dublin 4,
            Ireland.
          </p>
          <p>
            Google Ads enables us to display ads in the Google search engine or
            on third party websites, if the user enters certain search terms
            into Google (keyword targeting). It is also possible to place
            targeted ads based on the user data Google has in its possession
            (e.g. location data and interests; target group targeting). As the
            website operator, we can analyze these data quantitatively, for
            instance by analyzing which search terms resulted in the display of
            our ads and how many ads led to respective clicks.
          </p>
          <p>
            The use of Google Ads is based on Art. 6 Sect. 1 lit. et seq. GDPR.
            The website operator has a legitimate interest in marketing the
            operator&rsquo;s services and products as effectively as possible.
          </p>
          <p>Google&nbsp;Remarketing</p>
          <p>
            This website uses the functions of Google Analytics Remarketing. The
            provider of these solutions is Google Ireland Limited
            (&ldquo;Google&rdquo;), Gordon House, Barrow Street, Dublin 4,
            Ireland.
          </p>
          <p>
            Google Remarketing analyzes your user patterns on our website (e.g.
            clicks on specific products), to allocate a certain advertising
            target groups to you and to subsequently display matching online
            offers to you when you visit other online offers (remarketing or
            retargeting).
          </p>
          <p>
            Moreover, it is possible to link the advertising target groups
            generated with Google Remarketing to device encompassing functions
            of Google. This makes it possible to display interest-based
            customized advertising messages, depending on your prior usage and
            browsing patterns on a device (e.g. cell phone) in a manner tailored
            to you as well as on any of your devices (e.g. tablet or PC).
          </p>
          <p>
            If you have a Google account, you have the option to object to
            personalized advertising under the following link:
            https://www.google.com/settings/ads/onweb/. The use of Google
            Remarketing is based on Art. 6 1 lit. et seq. GDPR. The website
            operator has a legitimate interest in the marketing of the
            operator&rsquo;s products that is as effective as possible. If a
            respective declaration of consent was requested, processing shall
            occur exclusively on the basis of Art. 6 Sect. 1 lit. a GDPR; the
            given consent may be revoked at any time.
          </p>
          <p>
            For further information and the pertinent data protection
            regulations, please consult the Data Privacy Policies of Google at:{" "}
            <a href="https://policies.google.com/technologies/ads?hl=en">
              https://policies.google.com/technologies/ads?hl=en
            </a>
          </p>
          <p>Google Conversion-Tracking</p>
          <p>
            This website uses Google Conversion Tracking. The provider of this
            service is Google Ireland Limited (&ldquo;Google&rdquo;), Gordon
            House, Barrow Street, Dublin 4, Ireland.
          </p>
          <p>
            With the assistance of Google Conversion Tracking we are in a
            position to recognize whether the user has completed certain
            actions. For instance, we can analyze the how frequently which
            buttons on our website have been clicked and which products are
            reviewed or purchased with particular frequency. The purpose of this
            information is to compile conversion statistics. We learn how many
            users have clicked on our ads and which actions they have completed.
            We do not receive any information that would allow us to personally
            identify the users. Google as such uses cookies or comparable
            recognition technologies for identification purposes.
          </p>
          <p>
            We use Google Conversion Tracking on the basis of Art. 6 Sect. 1
            lit. et seq. GDPR. The operator of the website has a legitimate
            interest in the analysis of the user patterns with the aim of
            optimizing both, the operator&rsquo;s web presentation and
            advertising. If a respective declaration of consent was requested
            (e.g. concerning the storage of cookies), processing shall occur
            exclusively on the basis of Art. 6 Sect. 1 lit. a GDPR; the given
            consent may be revoked at any time.
          </p>
          <p>
            For more information about Google Conversion Tracking, please review
            Google&rsquo;s data protection policy at:{" "}
            <a href="https://policies.google.com/privacy?hl=en">
              https://policies.google.com/privacy?hl=en
            </a>
          </p>
          <p>Facebook Pixel</p>
          <p>
            To measure conversion rates, this website uses the visitor activity
            pixel of Facebook. The provider of this service is Facebook Ireland
            Limited, 4 Grand Canal Square, Dublin 2, Ireland. According to
            Facebook&rsquo;s statement the collected data will be transferred to
            the USA and other third-party countries too.
          </p>
          <p>
            This tool allows the tracking of page visitors after they have been
            linked to the website of the provider after clicking on a Facebook
            ad. This makes it possible to analyze the effectiveness of Facebook
            ads for statistical and market research purposes and to optimize
            future advertising campaigns.
          </p>
          <p>
            For us as the operators of this website, the collected data is
            anonymous. We are not in a position to arrive at any conclusions as
            to the identity of users. However, Facebook archives the information
            and processes it, so that it is possible to make a connection to the
            respective user profile and Facebook is in a position to use the
            data for its own promotional purposes in compliance with the
            Facebook Data Usage Policy. This enables Facebook to display ads on
            Facebook pages as well as in locations outside of Facebook.
          </p>
          <p>
            &nbsp;We as the operator of this website have no control over the
            use of such data. The use of Facebook Pixel is based on Art. 6 Sect.
            1 lit. f GDPR. The operator of the website has a legitimate interest
            in effective advertising campaigns, which also include social media.
            If a corresponding agreement has been requested (e.g. an agreement
            to the storage of cookies), the processing takes place exclusively
            on the basis of Art. 6 para. 1 lit. a GDPR; the agreement can be
            revoked at any time.
          </p>
          <p>
            In Facebook&rsquo;s Data Privacy Policies, you will find additional
            information about the protection of your privacy at:
            https://www.facebook.com/about/privacy/ You also have the option to
            deactivate the remarketing function &ldquo;Custom Audiences&rdquo;
            in the ad settings section under
            https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
            . To do this, you first have to log into Facebook. If you do not
            have a Facebook account, you can deactivate any user based
            advertising by Facebook on the website of the European Interactive
            Digital Advertising Alliance:{" "}
            <a href="http://www.youronlinechoices.com/de/praferenzmanagement/">
              http://www.youronlinechoices.com/de/praferenzmanagement/
            </a>
            .
          </p>
          <p>12. Newsletter data</p>
          <p>
            If you would like to subscribe to the newsletter offered on this
            website, we will need from you an e-mail address as well as
            information that allow us to verify that you are the owner of the
            e-mail address provided and consent to the receipt of the
            newsletter. No further data shall be collected or shall be collected
            only on a voluntary basis. We shall use such data only for the
            sending of the requested information and shall not share such data
            with any third parties.The processing of the information entered
            into the newsletter subscription form shall occur exclusively on the
            basis of your consent (Art. 6 Sect. 1 lit. a GDPR). You may revoke
            the consent you have given to the archiving of data, the e-mail
            address and the use of this information for the sending of the
            newsletter at any time, for instance by clicking on the
            &ldquo;Unsubscribe&rdquo; link in the newsletter. This shall be
            without prejudice to the lawfulness of any data processing
            transactions that have taken place to date.The data deposited with
            us for the purpose of subscribing to the newsletter will be stored
            by us until you unsubscribe from the newsletter or the newsletter
            service provider and deleted from the newsletter distribution list
            after you unsubscribe from the newsletter. Data stored for other
            purposes with us remain unaffected.After you unsubscribe from the
            newsletter distribution list, your e-mail address may be stored by
            us or the newsletter service provider in a blacklist to prevent
            future mailings. The data from the blacklist is used only for this
            purpose and not merged with other data. This serves both your
            interest and our interest in complying with the legal requirements
            when sending newsletters (legitimate interest within the meaning of
            Art. 6 para. 1 lit. f GDPR). The storage in the blacklist is
            indefinite. You may object to the storage if your interests outweigh
            our legitimate interest.
          </p>
          <p>13.&nbsp;Plugins and tools</p>
          <p>YouTube with enhanced data protection</p>
          <p>
            Our website uses plugins from the YouTube website. The site is
            operated by YouTube, LLC, 901 Cherry Ave, San Bruno, CA 94066, USA.
          </p>
          <p>
            We use YouTube in an advanced privacy mode. According to YouTube,
            this mode means that YouTube does not store any information about
            our visitors to this website before they view the video. However,
            YouTube&apos;s enhanced privacy mode does not necessarily exclude
            the sharing of information with YouTube partners. YouTube connects
            to the Google DoubleClick network whether or not you&apos;re
            watching a video.
          </p>
          <p>
            When you start a YouTube video on our site, it connects to
            YouTube&apos;s servers. This will tell the YouTube server which of
            our pages you have visited. If you are logged in to your YouTube
            account, you can allow YouTube to associate your surfing behaviour
            directly with your personal profile. You can prevent this by logging
            out of your YouTube account.In addition, YouTube may store various
            cookies on your device after you start a video. YouTube can use
            these cookies to obtain information about visitors to our website.
            This information is used, among other things, to collect video
            statistics, improve usability and prevent fraud. The cookies remain
            on your device until you delete them.If necessary, after the start
            of a YouTube video, further data processing operations may be
            triggered over which we have no control.YouTube is used in the
            interest of an appealing presentation of our online services. This
            constitutes a legitimate interest within the meaning of Art. 6 Para.
            1 lit. f DSGVO.
          </p>
          <p>
            Further information on data protection at YouTube can be found in
            its data protection declaration at:{" "}
            <a href="https://policies.google.com/privacy?hl=en">
              https://policies.google.com/privacy?hl=en
            </a>
            .
          </p>
          <p>Google Web Fonts</p>
          <p>
            This page uses so-called web fonts provided by Google for the
            uniform display of fonts. When you call up a page, your browser
            loads the required web fonts into its browser cache in order to
            display texts and fonts correctly.For this purpose, the browser you
            are using must connect to Google&apos;s servers. This enables Google
            to know that your IP address has been used to access our website.
            The use of Google Web Fonts is in the interest of a uniform and
            appealing presentation of our online services. This constitutes a
            legitimate interest within the meaning of Art. 6 para. 1 lit. f
            DSGVO.If your browser does not support web fonts, a standard font
            will be used by your computer.Further information on Google Web
            Fonts can be found
            athttps://developers.google.com/fonts/faq&nbsp;and in Google&apos;s
            privacy policy: https://policies.google.com/privacy?hl=en.Adobe
            Typekit Web FontsOur website uses so-called web fonts from Adobe
            Typekit to uniformly display certain fonts. The provider is Adobe
            Systems Incorporated, 345 Park Avenue, San Jose, CA 95110-2704, USA
            (Adobe).When you access our pages, your browser loads the fonts you
            need directly from Adobe so that it can display them correctly on
            your device. Your browser connects to Adobe&apos;s servers in the
            USA. This will allow Adobe to know that your IP address has been
            used to access our website. According to Adobe, no cookies are
            stored when the fonts are provided.Adobe is certified under the
            EU-US Privacy Shield. The Privacy Shield is an agreement between the
            United States of America and the European Union to ensure compliance
            with European privacy standards. For more information, please visit:
            https://www.adobe.com/de/privacy/eudatatransfers.html.The use of
            Adobe Typekit Web Fonts is required to ensure a consistent look and
            feel on our website. This constitutes a legitimate interest within
            the meaning of Art. 6 para. 1 lit. f DSGVO.Further information on
            Adobe Typekit Web Fonts is available here at:
            https://www.adobe.com/de/privacy/policies/typekit.html.Adobe&apos;s
            privacy policy can be found here at:{" "}
            <a href="https://www.adobe.com/de/privacy/policy/html">
              https://www.adobe.com/de/privacy/policy/html
            </a>
          </p>
          <p>14. External contents and/or processing data outside of the EU</p>
          <p>
            We use active Java script contents from external providers on our
            website. When our website is accessed, these external providers
            receive personal information about your visit to our website when
            appropriate. During this process, information may be processed
            outside of the EU. You can prevent this by installing a Java script
            blocker, such as the &quot;NoScript&quot; browser plugin
            (www.noscript.net) or by deactivating the Java script in your
            browser. However, doing this may limit some of the functions
            available on the websites that you visit.We use the following:&bull;
            Google APIsGoogle APIs from the company Google Inc., 1600
            Amphitheatre Parkway, Mountain View, CA 94043, USA (hereinafter
            referred to as: Google) are used on our website. These are program
            interfaces made available by Google. While they are being used,
            information, such as your IP address, is sent to Google. You can
            prevent your personal data from being collected and transferred to
            Google (especially your IP address) and from being processed by
            Google by deactivating Java script from running on your browser or
            by installing a tool like &quot;NoScript.&quot;
          </p>
          <p>15. Photos and videos at events</p>
          <p>
            We will create photos &amp; video footage during events to provide a
            complete overview of the event. The purpose is e.g. the publication
            on our social media channels and our website, the review/outlook on
            our events, as well as the use in flyers / presentations.
          </p>
          <p>16. Notification of the use of cookies</p>
          <p>
            We use cookies on different web pages in order to make your visit to
            our website more appealing and to enable certain functions to be
            used. So-called &quot;cookies&quot; are small text files which your
            browser can store on your computer. The process of storing a cookie
            file is also called &quot;setting a cookie&quot;. You can set your
            browser according to your own personal wishes so that you can be
            informed when cookies are &quot;set,&quot; or so that you can decide
            to accept them on a case by case basis, or so that the browser
            accepts or blocks cookies as a general rule. Cookies can be used for
            a variety of purposes: for example, to recognize that your computer
            has already been linked to a web offer before (permanent cookies) or
            to save the last offers you viewed (session cookies). We use cookies
            to offer you a higher level of user comfort. To use our
            user-friendly functions, we recommend that you allow cookies to be
            used for our web offers.
          </p>
          <p>17. Server log files</p>
          <p>
            The provider of this website and its pages automatically collects
            and stores information in so-called server log files, which your
            browser communicates to us automatically. The information comprises:
          </p>
          <p>
            The type and version of browser used&middot; The used operating
            systemReferrer URLThe hostname of the accessing computerThe time of
            the server inquiryThe IP addressThis data is not merged with other
            data sources.This data is recorded on the basis of Art. 6 Sect. 1
            lit. f GDPR. The operator of the website has a legitimate interest
            in the technically error free depiction and the optimization of the
            operator&rsquo;s website. In order to achieve this, server log files
            must be recorded.
          </p>
          <p>18. Hosting and content delivery networks (CDN)</p>
          <p>
            This website is hosted by an external service provider (host).
            Personal data collected on this website are stored on the servers of
            the host. These may include, but are not limited to, IP addresses,
            contact requests, metadata and communications, contract information,
            contact information, names, web page access, and other data
            generated through a web site.
          </p>
          <p>
            The host is used for the purpose of fulfilling the contract with our
            potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in
            the interest of secure, fast and efficient provision of our online
            services by a professional provider (Art. 6 para. 1 lit. f GDPR).Our
            host will only process your data to the extent necessary to fulfil
            its performance obligations and to follow our instructions with
            respect to such data.19. Social media
          </p>
          <p>Facebook Plugins (Like &amp; Share Button)</p>
          <p>
            On our pages are plugins from the social network site Facebook, and
            the provider is Facebook Inc., 1 Hacker Way, Menlo Park, California
            94025, USA, integrated. The Facebook plugins are recognisable by the
            Facebook logo or the &quot;Like&quot; button on our page. An
            overview of the Facebook plugins can be found here:
            https://developers.facebook.com/docs/plugins/?locale=en_DE.When you
            visit our pages, the plugin establishes a direct connection between
            your browser and the Facebook server. Facebook receives the
            information that you have visited our site with your IP address. If
            you click the Facebook &quot;Like Button&quot; while logged into
            your Facebook account, you can link the content of our pages to your
            Facebook profile. This allows Facebook to associate visiting our
            pages with your user account. We would like to point out that, as
            the provider of the pages, we do not have any knowledge of the
            content of the data transmitted or its use by Facebook. Further
            information on this can be found in Facebook&apos;s privacy policy
            at:{" "}
            <a href="https://de-de.facebook.com/privacy/explanation">
              https://de-de.facebook.com/privacy/explanation
            </a>
            .
          </p>
          <p>
            If you do not want Facebook to be able to assign visits to our pages
            to your Facebook user account, please log out of your Facebook user
            account. The Facebook plugins are used on the basis of Art. 6 para.
            1 lit. f DSGVO. The website operator has a justified interest in
            having the widest possible visibility on social media.
          </p>
          <p>Twitter Plugin</p>
          <p>
            Our pages, integrate functions of the Twitter service. These
            functions are provided by Twitter Inc., 1355 Market Street, Suite
            900, San Francisco, CA 94103, USA. By using Twitter and the
            &quot;Re-Tweet&quot; function, the websites you visit are linked to
            your Twitter account and made known to other users. Data is also
            transferred to Twitter. We would like to point out that, as the
            provider of the pages, we do not have any knowledge of the content
            of the transmitted data or its use by Twitter. Further information
            on this can be found in Twitter&apos;s privacy policy:{" "}
            <a href="https://twitter.com/de/privacy">
              https://twitter.com/de/privacy
            </a>
            .
          </p>
          <p>
            The Twitter plug-in is used on the basis of Art. 6 para. 1 lit. f
            DSGVO. The website operator has a justified interest in having the
            widest possible visibility on social media.
          </p>
          <p>
            You can change your data protection settings on Twitter in the
            account settings at https://twitter.com/account/settings.LinkedIn
            Plugin.
          </p>
          <p>
            Our website uses features from the LinkedIn network. The provider is
            LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043,
            USA.
          </p>
          <p>
            Each time you access one of our pages that contains LinkedIn
            functions, a connection is established to LinkedIn servers. LinkedIn
            is informed that you have visited our website with your IP address.
            If you click the LinkedIn &quot;Recommend&quot; button and are
            logged into your LinkedIn account, LinkedIn will be able to
            associate your visit to our website with you and your user account.
            We would like to point out that, as the provider of the pages, we
            have no knowledge of the content of the transmitted data or its use
            by LinkedIn.
          </p>
          <p>
            The LinkedIn plug-in is used on the basis of Art. 6 Para. 1 lit. f
            DSGVO. The website operator has a justified interest in having the
            widest possible visibility on social media.
          </p>
          <p>
            Further information can be found in LinkedIn&apos;s data protection
            declaration at: https://www.linkedin.com/legal/privacy-policy.
          </p>
        </div>
        <Footer />
      </main>
      
    </>
  );
}
