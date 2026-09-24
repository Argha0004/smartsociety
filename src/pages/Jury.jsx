
import React, { useEffect } from "react";
import { UserRound } from "lucide-react";

const committeeMembers = [
  {
    id: 1,
    name: "JURY MEMBER 01",
    designation: "FILMMAKER & DIRECTOR",
    image: null,
    featured: true,
  },
  {
    id: 2,
    name: "JURY MEMBER 02",
    designation: "FILM CRITIC & SCHOLAR",
    image: null,
    featured: false,
  },
  {
    id: 3,
    name: "JURY MEMBER 03",
    designation: "ACTOR & ARTIST",
    image: null,
    featured: false,
  },
  {
    id: 4,
    name: "JURY MEMBER 04",
    designation: "CINEMA RESEARCHER",
    image: null,
    featured: false,
  },
];

function FilmStrip() {
  return (
    <div className="flex w-full items-center justify-center gap-2 overflow-hidden opacity-30">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="h-3 w-6 shrink-0 rounded-sm bg-accent-light"
        />
      ))}
    </div>
  );
}

function JuryCard({ member }) {
  const isFeatured = member.featured;

  return (
    <div
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-[20px]
        border
        border-primary-light
        bg-[rgba(139,46,46,0.08)]
        shadow-[0_24px_80px_rgba(0,0,0,0.5)]
        backdrop-blur-md
        transition-all
        duration-500
        ease-out
        hover:-translate-y-3
        hover:border-accent-light/35
        hover:bg-[rgba(139,46,46,0.16)]
        hover:shadow-[0_30px_75px_rgba(0,0,0,0.5),0_0_30px_rgba(237,217,181,0.1)]
      "
    >
      {/* Top film perforation */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-[6%]
          top-[4%]
          z-10
          h-4
          -translate-y-3
          opacity-35
          bg-[radial-gradient(circle_at_6px_6px,rgba(237,217,181,0.12)_0_32%,transparent_34%)]
          bg-repeat-x
          bg-size-[28px_16px]
        "
      />

      {/* Bottom film perforation */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-[6%]
          bottom-[5%]
          z-10
          h-4
          translate-y-3
          opacity-35
          bg-[radial-gradient(circle_at_6px_6px,rgba(237,217,181,0.12)_0_32%,transparent_34%)]
          bg-repeat-x
          bg-size-[28px_16px]
        "
      />

      <div
        className={`
          flex
          w-full
          flex-col
          ${isFeatured ? "md:flex-row md:items-center" : ""}
        `}
      >
        {/* Member image */}
        <div
          className={`
            w-full
            shrink-0
            ${isFeatured
              ? "p-4 sm:p-6 md:w-[52%]"
              : "p-4 pb-0"
            }
          `}
        >
          <div
            className="
              relative
              aspect-square
              w-full
              overflow-hidden
              rounded-2xl
              bg-primary-dark
            "
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary-dark">
                <UserRound
                  className="h-16 w-16 text-accent-light sm:h-20 sm:w-20"
                  strokeWidth={1}
                />
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/80 to-transparent" />
          </div>
        </div>

        {/* Member information */}
        <div
          className={`
            flex
            w-full
            min-w-0
            flex-col
            items-center
            justify-center
            text-center
            ${isFeatured
              ? "p-5 sm:p-8 md:w-[48%] md:items-start md:p-10 md:text-left"
              : "p-4 sm:p-6"
            }
          `}
        >
          <p
            className={`
              font-semibold
              uppercase
              tracking-[0.2em]
              text-accent-light
              ${isFeatured
                ? "mb-3 text-xs"
                : "mb-2 text-[10px] sm:text-xs"
              }
            `}
          >
            {member.designation}
          </p>

          <h2
            className={`
              font-semibold
              uppercase
              tracking-wide
              text-primary-light
              ${isFeatured
                ? "text-2xl sm:text-3xl"
                : "text-lg"
              }
            `}
          >
            {member.name}
          </h2>

          {isFeatured && (
            <>
              <div className="my-4 h-px w-full bg-primary-light" />

              <p className="text-sm leading-7 text-primary-light/60">
                Bringing experience, perspective and a deep
                appreciation for cinema to the festival jury.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Jury() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredMember = committeeMembers.find(
    (member) => member.featured
  );

  const otherMembers = committeeMembers.filter(
    (member) => !member.featured
  );

  return (
    <main className="min-h-screen bg-brand-gradient text-primary-light">
      <section
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-6
          py-20
          sm:px-8
          md:px-10
          md:py-24
          lg:px-14
          xl:px-20
        "
      >
        {/* Page heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="
              mb-8
              inline-flex
              items-center
              rounded-full
              border
              border-primary-light
              bg-primary-light/20
              px-5
              py-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-accent-light
              sm:text-xs
            "
          >
            <span className="relative mr-2 inline-flex size-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-primary-light
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  size-2.5
                  rounded-full
                  bg-primary-light
                "
              />
            </span>

            CFCCF 2027 · KOLKATA, INDIA
          </div>

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
            Committee Members
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-primary-light/60 sm:text-base sm:leading-8">
            Meet the distinguished members of the jury who will
            bring their knowledge, experience and passion for
            cinema to CFCCF 2027.
          </p>
        </div>

        {/* Film strip */}
        <div className="mt-16">
          <FilmStrip />
        </div>

        {/* Featured jury member */}
        {featuredMember && (
          <div className="mx-auto mt-16 w-full max-w-245">
            <JuryCard member={featuredMember} />
          </div>
        )}

        {/* Other jury members */}
        {otherMembers.length > 0 && (
          <div
            className="
              mx-auto
              mt-10
              flex
              w-full
              max-w-6xl
              flex-wrap
              justify-center
              gap-6
              md:gap-8
            "
          >
            {otherMembers.map((member) => (
              <div
                key={member.id}
                className="
                  w-full
                  min-w-0
                  sm:w-[calc(50%-12px)]
                  lg:w-[calc(33.333%-22px)]
                "
              >
                <JuryCard member={member} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Jury;
