import React from "react";

import aboutData from "../data/data.json";
import photo8 from "../assets/photo-8.jpg";
import photo9 from "../assets/photo-9.jpg";
import FestivalBadge from "../components/FestivalBadge";

function About() {
  const { page, partners } = aboutData.about;

  return (
    <section
      className="
                relative
                min-h-[calc(100vh-160px)]
                overflow-hidden
                bg-brand-gradient
                px-5
                py-10
                sm:px-8
                sm:py-12
                md:px-10
                md:py-16
                lg:py-20
            "
    >

      {/* Background Decoration */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
                        absolute
                        left-1/2
                        -top-45
                        h-112.5
                        w-175
                        -translate-x-1/2
                        rounded-full
                        bg-accent/5
                        blur-[120px]
                    "
        />

        <div
          className="
                        absolute
                        -bottom-50
                        left-1/2
                        h-100
                        w-187.5
                        -translate-x-1/2
                        rounded-full
                        bg-primary-light/10
                        blur-[120px]
                    "
        />

      </div>


      {/* Main Container */}

      <div
        className="
                    relative
                    z-10
                    mx-auto
                    flex
                    w-full
                    max-w-250
                    flex-col
                "
      >

        {/* Page Header */}

        <div className="text-center">

          {/* Badge */}

          <div className="flex justify-center">
            <FestivalBadge>
              {page.badge}
            </FestivalBadge>
          </div>


          {/* Title */}

          <h1
            className="
                            cinzel
                            text-3xl
                            font-black
                            uppercase
                            leading-tight
                            tracking-tight
                            text-accent-light
                            [text-shadow:0_0_18px_rgba(237,217,181,0.25),0_0_36px_rgba(237,217,181,0.4)]
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                        "
          >
            {page.title}
          </h1>


          {/* Description */}

          <p
            className="
                            mx-auto
                            mt-5
                            max-w-150
                            font-poppins
                            text-sm
                            leading-5
                            text-accent-light
                            sm:text-base
                            sm:leading-6
                        "
          >
            {page.description}
          </p>

        </div>


        {/* Partners */}

        <div
          className="
                        mt-12
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-12
                        sm:mt-14
                        md:mt-16
                        md:gap-16
                    "
        >

          {partners.map((partner, index) => (

            <div
              key={partner.id}
              className={`
                                flex
                                flex-col
                                items-center
                                gap-6
                                sm:gap-8
                                md:gap-10
                                ${index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
                }
                            `}
            >

              {/* Logo */}

              <div
                className="
                                    group
                                    flex
                                    h-32
                                    w-32
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-[rgba(237,217,181,0.18)]
                                    bg-[rgba(139,46,46,0.10)]
                                    p-4
                                    shadow-[0_16px_48px_rgba(0,0,0,0.35)]
                                    backdrop-blur-md
                                    transition-all
                                    duration-500
                                    ease-out

                                    hover:scale-105
                                    hover:border-[rgba(237,217,181,0.4)]
                                    hover:shadow-[0_30px_70px_rgba(0,0,0,0.5),0_0_28px_rgba(237,217,181,0.12)]

                                    sm:h-36
                                    sm:w-36

                                    md:h-40
                                    md:w-40

                                    lg:h-44
                                    lg:w-44

                                    xl:h-48
                                    xl:w-48
                                "
              >
                <img
                  src={index === 0 ? photo9 : photo8}
                  alt={partner.title}
                  className={`
                                        rounded-sm
                                        object-contain
                                        ${index === 0
                      ? "h-28 w-36 sm:h-32 sm:w-40 md:h-36 md:w-44 lg:h-40 lg:w-48 xl:h-44 xl:w-52"
                      : "max-h-full max-w-full"
                    }
                                    `}
                />
              </div>


              {/* Partner Content */}

              <div
                className="
                                    group
                                    w-150
                                    rounded-2xl
                                    border
                                    border-[rgba(237,217,181,0.15)]
                                    bg-[rgba(139,46,46,0.12)]
                                    p-6
                                    shadow-[0_16px_48px_rgba(0,0,0,0.35)]
                                    backdrop-blur-md
                                    transition-all
                                    duration-500
                                    ease-out
                                    hover:-translate-y-3
                                    hover:border-[rgba(237,217,181,0.35)]
                                    hover:bg-[rgba(139,46,46,0.16)]
                                    hover:shadow-[0_30px_75px_rgba(0,0,0,0.5),0_0_30px_rgba(237,217,181,0.1)]
                                    sm:p-7
                                    md:p-8
                                "
              >

                <h2
                  className="
                                        cinzel
                                        text-base
                                        font-bold
                                        uppercase
                                        leading-6
                                        text-accent-light
                                        transition-all
                                        duration-500
                                        group-hover:[text-shadow:0_0_16px_rgba(237,217,181,0.25)]
                                        sm:text-lg
                                    "
                >
                  {partner.title}
                </h2>


                <div
                  className="
                                        my-3
                                        h-px
                                        w-full
                                        bg-[rgba(237,217,181,0.15)]
                                    "
                />


                <p
                  className="
                                        font-poppins
                                        text-xs
                                        leading-6
                                        text-accent-light/70
                                        sm:text-sm
                                        sm:leading-6
                                    "
                >
                  {partner.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;