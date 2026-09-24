import {
  quickLinks,
  socialLinks,
  contactInfo,
  legalLinks,
} from "../data/footerData";

import { FaExternalLinkAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer
    id="footer"
      className="
                footer
                w-full
                bg-primary-dark
                text-white

                lg:h-131.25
                xl:h-131.25
            "
    >
      {/* Top Decorative Line */}

      <div className="footer-top-line" />

      {/* Main Footer */}

      <div
        className="
                    mx-auto
                    w-full
                    max-w-300
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

                        lg:h-111.25
                        lg:flex-nowrap
                        lg:items-start
                        lg:justify-between
                        lg:gap-8
                        lg:py-14

                        xl:h-111.25
                        xl:gap-12
                        xl:py-16
                    "
        >
          {/* About CFCCF */}

          <div
            className="
                            w-full

                            sm:max-w-125

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
                                text-shadow-[0_0_10px_rgba(245,237,224,0.45)]

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

            {/* Social Links */}

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

                                            transition-all
                                            duration-300
                                            ease-in-out

                                            hover:scale-110
                                            hover:bg-primary
                                            hover:text-white

                                            sm:h-11
                                            sm:w-11
                                        "
                  >
                    <Icon
                      className="
                                                h-6
                                                w-6
                                            "
                      strokeWidth={1.8}
                    />
                  </a>
                );
              })}
            </div>

            {/* Credits */}

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
                Souherdya Sarkar, Debangkita Saha, Aranya Rath
              </b>
            </p>
          </div>

          {/* Quick Links */}

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
      text-shadow-[0_0_10px_rgba(245,237,224,0.45)]

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
                      href="#"
                      className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-(--text-muted)
              transition-colors
              duration-300
              ease-in-out
              hover:text-(--cream-light)
              sm:text-base
            "
                    >
                      <FaExternalLinkAlt
                        className="
                h-2.5
                w-2.5
                shrink-0
                opacity-0
                transition-opacity
                duration-300
                ease-in-out
                group-hover:opacity-100
              "
                      />

                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Get In Touch */}

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
                                text-shadow-[0_0_10px_rgba(245,237,224,0.45)]

                                sm:text-xl
                                md:mb-6
                            "
            >
              Get In Touch
            </h3>

            {/* Emails */}

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
    text-(--text-muted)
    sm:text-[15px]
  "
              >
                {contactInfo.emails.items.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="
        transition-colors
        duration-300
        ease-in-out
        hover:text-(--cream-light)
      "
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Phone */}

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

                                    transition-colors
                                    duration-300
                                    hover:text-accent-light

                                    sm:text-[15px]
                                "
              >
                {contactInfo.phone.number}
              </a>
            </div>

            {/* Location */}

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

          {/* Event Info */}

          <div
            className="
                            w-full

                            sm:max-w-125

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
                                text-shadow-[0_0_10px_rgba(245,237,224,0.45)]

                                sm:text-xl
                                md:mb-6
                            "
            >
              Event Info
            </h3>

            <div
              className="
                                h-55
                                w-full
                                overflow-hidden
                                rounded-xl
                                border
                                border-accent

                                sm:h-60

                                md:h-57.5

                                lg:h-62.5

                                xl:h-63.75
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

      {/* Bottom Footer */}

      <div
        className="
                    footer-divider
                    lg:h-20
                    xl:h-20
                "
      >
        <div
          className="
                        mx-auto
                        flex
                        w-full
                        max-w-300
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
          {/* Legal Links */}
          <div
            className="
    flex
    flex-wrap
    items-center
    justify-center
    gap-x-5
    gap-y-2

    sm:gap-x-6
  "
          >
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="
        text-xs
        font-semibold
        text-(--text-muted)
        transition-colors
        duration-300
        ease-in-out
        hover:text-(--cream-light)
        sm:text-sm
      "
              >
                {link.label}
              </a>
            ))}
          </div>

          <p
            className="
                            flex
                            justify-center
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
    </footer >
  );
}

export default Footer;