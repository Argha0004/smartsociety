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
  {
    id: 5,
    name: "JURY MEMBER 05",
    designation: "DIRECTOR & PRODUCER",
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

function UserPlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-primary-dark">
      <UserRound
        className="h-20 w-20 text-accent-light/30"
        strokeWidth={1}
      />
    </div>
  );
}

function MemberImage({ member }) {
  if (!member.image) {
    return <UserPlaceholder />;
  }

  return (
    <img
      src={member.image}
      alt={member.name}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

function FeaturedCard({ member }) {
  return (
    <div
      className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-[rgba(237,217,181,0.15)]
                bg-[rgba(139,46,46,0.12)]
                shadow-[0_16px_48px_rgba(0,0,0,0.35)]
                backdrop-blur-md
                transition-all
                duration-500
                ease-out
                hover:-translate-y-3
                hover:border-[rgba(237,217,181,0.35)]
                hover:bg-[rgba(139,46,46,0.16)]
                hover:shadow-[0_30px_75px_rgba(0,0,0,0.5),0_0_30px_rgba(237,217,181,0.1)]
            "
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative h-72 overflow-hidden md:h-96 md:w-1/2">
          <MemberImage member={member} />

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            {member.designation}
          </p>

          <h2 className="text-2xl font-semibold uppercase tracking-wide text-primary-light sm:text-3xl">
            {member.name}
          </h2>

          <div className="my-4 h-px w-full bg-[rgba(237,217,181,0.15)]" />

          <p className="text-sm leading-7 text-primary-light/60">
            Bringing experience, perspective and a deep appreciation
            for cinema to the festival jury.
          </p>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ member }) {
  return (
    <div
      className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-[rgba(237,217,181,0.15)]
                bg-[rgba(139,46,46,0.12)]
                shadow-[0_16px_48px_rgba(0,0,0,0.35)]
                backdrop-blur-md
                transition-all
                duration-500
                ease-out
                hover:-translate-y-3
                hover:border-[rgba(237,217,181,0.35)]
                hover:bg-[rgba(139,46,46,0.16)]
                hover:shadow-[0_30px_75px_rgba(0,0,0,0.5),0_0_30px_rgba(237,217,181,0.1)]
            "
    >
      <div className="relative h-64 overflow-hidden">
        <MemberImage member={member} />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="p-5 sm:p-6">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-light sm:text-xs">
          {member.designation}
        </p>

        <h3 className="text-lg font-semibold uppercase tracking-wide text-primary-light">
          {member.name}
        </h3>

        <div className="my-3 h-px w-full bg-[rgba(237,217,181,0.15)]" />
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
    <main className="min-h-screen bg-primary-dark text-primary-light">
      <section className="mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-8 md:px-10 md:py-24 lg:px-14 xl:px-20">
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
                            text-4xl
                            font-semibold
                            uppercase
                            tracking-[0.08em]
                            text-primary-light
                            [text-shadow:0_0_18px_rgba(237,217,181,0.25),0_0_36px_rgba(237,217,181,0.4)]
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
          >
            JURY
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-primary-light/60 sm:text-base sm:leading-8">
            Meet the distinguished members of the jury who will
            bring their knowledge, experience and passion for
            cinema to CFCCF 2027.
          </p>
        </div>

        <div className="mt-16">
          <FilmStrip />
        </div>

        {featuredMember && (
          <div className="mx-auto mt-16 max-w-6xl">
            <FeaturedCard member={featuredMember} />
          </div>
        )}

        {otherMembers.length > 0 && (
          <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-6 md:gap-8">
            {otherMembers.map((member) => (
              <div
                key={member.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
              >
                <SmallCard member={member} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Jury;