import {
  quickLinks,
  socialLinks,
  contactInfo,
  legalLinks,
} from "../data/footerData";


function Footer() {
  return (
    <footer
      className="
        footer
        w-full
        bg-primary-dark
        text-white

        lg:h-[525px]
        xl:h-[525px]
    "
    >

      {/* =================================================
                            TOP DECORATIVE LINE
                ================================================= */}

      <div className="footer-top-line" />


      {/* =================================================
                            MAIN FOOTER
                ================================================= */}

      <div
        className="
                    mx-auto
                    w-full
                    max-w-[1200px]
                    px-4
                    sm:px-6
                    md:px-8
                    lg:px-0
                    xl:px-0
                "
      >

        <div
          className="
        flex
        flex-col
        gap-10
        py-10

        sm:gap-12
        sm:py-12

        md:flex-row
        md:flex-wrap
        md:gap-y-12

        lg:h-[445px]
        lg:flex-nowrap
        lg:items-start
        lg:justify-between
        lg:gap-8
        lg:py-14

        xl:h-[445px]
        xl:gap-12
        xl:py-16
    "
        >

          {/* =================================================
                                    ABOUT CFCCF
                        ================================================= */}

          <div
            className="
                            w-full

                            sm:max-w-[500px]

                            md:w-[48%]
                            md:max-w-none

                            lg:w-[26%]

                            xl:w-[27%]
                        "
          >

            <h3
              className="
                                mb-5
                                font-serif
                                text-lg
                                font-semibold
                                uppercase
                                tracking-wide
                                text-accent-light

                                sm:text-xl
                                md:mb-6
                            "
            >
              About CFCCF
            </h3>


            <p
              className="
                                text-sm
                                leading-6
                                text-white/70

                                sm:text-[15px]
                            "
            >
              A collaboration between Forum for Film Studies
              &amp; Allied Arts, &amp; SMART Society —
              celebrating the art of filmmaking and digital
              content creation in the City of Joy.
            </p>


            {/* =========================
                                SOCIAL LINKS
                            ========================= */}

            <div className="mt-6 flex gap-3 sm:mt-7">

              {socialLinks.map((social) => {

                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.path}
                    aria-label={social.label}
                    className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-md
                                            border
                                            border-accent
                                            text-accent-light
                                            transition

                                            hover:bg-primary
                                            hover:text-white

                                            sm:h-11
                                            sm:w-11
                                        "
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </a>
                );
              })}

            </div>


            {/* =========================
                                CREDITS
                            ========================= */}

            <p
              className="
                                mt-5
                                text-xs
                                leading-5
                                text-gray
                            "
            >
              Made with love by{" "}

              <b className="text-accent-light">
                Souherdya Sarkar, Debangkita Saha, Aramya Rath
              </b>
            </p>

          </div>


          {/* =================================================
                                    QUICK LINKS
                        ================================================= */}

          <div
            className="
                            w-full

                            sm:w-auto

                            md:w-[48%]

                            lg:w-[17%]

                            xl:w-[17%]
                        "
          >

            <h3
              className="
                                mb-5
                                font-serif
                                text-lg
                                font-semibold
                                uppercase
                                tracking-wide
                                text-accent-light

                                sm:text-xl
                                md:mb-6
                            "
            >
              Quick Links
            </h3>


            <nav>

              <ul className="ml-4 flex flex-col gap-3">

                {quickLinks.map((link) => (

                  <li key={link.label}>

                    <a
                      href={link.path}
                      className="
                                                text-sm
                                                font-medium
                                                text-white/70
                                                transition

                                                hover:text-accent-light

                                                sm:text-base
                                            "
                    >
                      {link.label}
                    </a>

                  </li>

                ))}

              </ul>

            </nav>

          </div>


          {/* =================================================
                                    GET IN TOUCH
                        ================================================= */}

          <div
            className="
                            w-full

                            sm:w-auto

                            md:w-[48%]

                            lg:w-[25%]

                            xl:w-[26%]
                        "
          >

            <h3
              className="
                                mb-5
                                font-serif
                                text-lg
                                font-semibold
                                uppercase
                                tracking-wide
                                text-accent-light

                                sm:text-xl
                                md:mb-6
                            "
            >
              Get In Touch
            </h3>


            {/* =========================
                                    EMAILS
                            ========================= */}

            <div className="mb-6 flex gap-4 sm:mb-7">

              <span
                className="
                                    mt-1
                                    shrink-0
                                    text-accent-light
                                "
              >

                {(() => {
                  const Icon = contactInfo.emails.icon;

                  return (
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  );
                })()}

              </span>


              <div
                className="
                                    flex
                                    flex-col
                                    gap-2
                                    text-sm
                                    font-medium
                                    text-white/70

                                    sm:text-[15px]
                                "
              >

                {contactInfo.emails.items.map((email) => (

                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="
                                            transition
                                            hover:text-accent-light
                                        "
                  >
                    {email}
                  </a>

                ))}

              </div>

            </div>


            {/* =========================
                                    PHONE
                            ========================= */}

            <div className="mb-6 flex gap-4 sm:mb-7">

              <span
                className="
                                    shrink-0
                                    text-accent-light
                                "
              >

                {(() => {
                  const Icon = contactInfo.phone.icon;

                  return (
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  );
                })()}

              </span>


              <a
                href={`tel:${contactInfo.phone.number}`}
                className="
                                    text-sm
                                    font-medium
                                    text-white/70
                                    transition

                                    hover:text-accent-light

                                    sm:text-[15px]
                                "
              >
                {contactInfo.phone.number}
              </a>

            </div>


            {/* =========================
                                    LOCATION
                            ========================= */}

            <div className="flex gap-4">

              <span
                className="
                                    shrink-0
                                    text-accent-light
                                "
              >

                {(() => {
                  const Icon = contactInfo.address.icon;

                  return (
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  );
                })()}

              </span>


              <p
                className="
                                    text-sm
                                    font-medium
                                    leading-5
                                    text-white/70

                                    sm:text-[15px]
                                "
              >

                {contactInfo.address.text.map((line) => (

                  <span
                    key={line}
                    className="block"
                  >
                    {line}
                  </span>

                ))}

              </p>

            </div>

          </div>


          {/* =================================================
                                    EVENT INFO
                        ================================================= */}

          <div
            className="
                            w-full

                            sm:max-w-[500px]

                            md:w-[48%]
                            md:max-w-none

                            lg:w-[27%]

                            xl:w-[26%]
                        "
          >

            <h3
              className="
                                mb-5
                                font-serif
                                text-lg
                                font-semibold
                                uppercase
                                tracking-wide
                                text-accent-light

                                sm:text-xl
                                md:mb-6
                            "
            >
              Event Info
            </h3>


            <div
              className="
                                h-[220px]
                                w-full
                                overflow-hidden
                                rounded-xl
                                border
                                border-accent

                                sm:h-[240px]

                                md:h-[230px]

                                lg:h-[250px]

                                xl:h-[255px]
                            "
            >

              <iframe
                title="Nandan Kolkata Location"
                src="https://www.google.com/maps?q=Nandan,Kolkata,West+Bengal&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
                            BOTTOM FOOTER
                ================================================= */}

      <div
        className="
        footer-divider
        lg:h-[80px]
        xl:h-[80px]
    "
      >

        <div
          className="
                        mx-auto
                        flex
                        w-full
                        max-w-[1200px]
                        flex-col
                        gap-4
                        px-4
                        py-5

                        sm:px-6
                        sm:py-6

                        md:px-8

                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        lg:px-0

                        xl:px-0
                    "
        >

          {/* =========================
                                LEGAL LINKS
                        ========================= */}

          <div
            className="
                            flex
                            flex-wrap
                            gap-x-5
                            gap-y-2
                            justify-center 
                            items-center
                            sm:gap-x-6
                        "
          >

            {legalLinks.map((link) => (

              <a
                key={link.label}
                href={link.path}
                className="
                                    text-xs
                                    text-accent-light
                                    transition

                                    hover:text-accent-light

                                    sm:text-sm
                                "
              >
                {link.label}
              </a>

            ))}

          </div>
          <p
            className=" flex justify-center
                            font-serif
                            text-xs
                            tracking-wide
                            text-accent-light

                            sm:text-sm
                        "
          >
            © CFCCF 2027 IN KOLKATA
          </p>


        </div>

      </div>

    </footer>
  );
}


export default Footer;