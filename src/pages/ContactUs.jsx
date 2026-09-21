import React, { useEffect } from "react";
import { UserRound } from "lucide-react";

const committeeMembers = [
  {
    id: 1,
    name: "COMING SOON...",
  },
  {
    id: 2,
    name: "COMING SOON...",
  },
  {
    id: 3,
    name: "COMING SOON...",
  },
  {
    id: 4,
    name: "COMING SOON...",
  },
];

/* -------------------------------------------------
   FILM STRIP
------------------------------------------------- */

function FilmStrip({ position = "bottom" }) {
  return (
    <div
      className={`
                pointer-events-none
                absolute
                left-0
                right-0
                ${position === "top" ? "top-2" : "bottom-2"}
                z-20
                flex
                items-center
                justify-center
                gap-2.25
                overflow-hidden
                px-4
            `}
    >
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="
                        h-2.25
                        w-2.25
                        shrink-0
                        rounded-[3px]
                        bg-primary-light/35
                        transition-all
                        duration-500
                    "
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------
   USER PLACEHOLDER
------------------------------------------------- */

function UserPlaceholder({ large = false }) {
  return (
    <div
      className="
                absolute
                inset-0
                flex
                items-center
                justify-center
            "
    >
      <UserRound
        className={`
                    relative
                    z-10
                    text-accent-light
                    transition-all
                    duration-700
                    ease-out
                    ${large
            ? "h-17 w-17 group-hover:h-20.5 group-hover:w-20.5"
            : "h-12 w-12 group-hover:h-14.5 group-hover:w-14.5"
          }
                `}
        strokeWidth={1.5}
      />
    </div>
  );
}

/* -------------------------------------------------
   IMAGE AREA
------------------------------------------------- */

function MemberImage({ large = false }) {
  return (
    <div
      className={`
                relative
                overflow-hidden
                rounded-[10px]
                border
                border-primary-light/60
                bg-primary
                shadow-[inset_0_-30px_35px_rgba(36,5,6,0.45)]
                ${large
          ? "h-61.25 sm:h-68.75 md:h-75"
          : "h-60 sm:h-62.5"
        }
            `}
    >
      {/* Background glow */}
      <div
        className="
                    absolute
                    inset-0
                    bg-brand-gradient
                    opacity-30
                    transition-all
                    duration-700
                    group-hover:opacity-50
                "
      />

      {/* Bottom cinematic shadow */}
      <div
        className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/2
                    bg-linear-to-t
                    from-primary-dark/50
                    to-transparent
                    opacity-70
                "
      />

      <UserPlaceholder large={large} />
    </div>
  );
}

/* =================================================
   FEATURED COMMITTEE CARD
   DIFFERENT HOVER ANIMATION
================================================= */

function FeaturedCard() {
  return (
    <article
      className="
                group
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-primary-light/70
                bg-primary-dark/50
                p-2.5
                shadow-[0_15px_45px_rgba(36,5,6,0.35)]
                transition-all
                duration-700
                ease-out

                hover:-translate-y-2
                hover:border-accent/60
                hover:shadow-[0_25px_65px_rgba(36,5,6,0.5)]

                sm:p-3
            "
    >
      {/* Film strip */}
      <FilmStrip position="top" />

      {/* Main content */}
      <div
        className="
                    relative
                    z-10
                    flex
                    flex-col
                    gap-4
                    md:flex-row
                    md:items-stretch
                "
      >
        {/* -------------------------------------
                    IMAGE
                -------------------------------------- */}

        <div
          className="
                        relative
                        w-full
                        overflow-hidden
                        rounded-[11px]
                        md:w-[56%]
                    "
        >
          <MemberImage large />

          {/* Featured hover overlay */}
          <div
            className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-accent/10
                            opacity-0
                            transition-all
                            duration-700
                            group-hover:opacity-100
                        "
          />

          {/* Animated cinematic light */}
          <div
            className="
                            pointer-events-none
                            absolute
                            -left-full
                            top-0
                            h-full
                            w-1/3
                            skew-x-[-20deg]
                            bg-linear-to-r
                            from-transparent
                            via-accent-light/15
                            to-transparent
                            transition-all
                            duration-1000
                            group-hover:left-[130%]
                        "
          />
        </div>

        {/* -------------------------------------
                    CONTENT
                -------------------------------------- */}

        <div
          className="
                        relative
                        flex
                        min-h-47.5
                        flex-1
                        flex-col
                        items-center
                        justify-center
                        overflow-hidden
                        px-5
                        py-8
                        text-center
                        md:min-h-0
                        md:px-8
                    "
        >
          {/* Content glow */}
          <div
            className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-1/2
                            h-32
                            w-32
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-accent/10
                            opacity-0
                            blur-3xl
                            transition-all
                            duration-700
                            group-hover:opacity-100
                        "
          />

          <h2
            className="
                            cinzel
                            relative
                            z-10
                            text-xl
                            font-semibold
                            uppercase
                            tracking-wide
                            text-accent-light
                            transition-all
                            duration-700
                            ease-out
                            group-hover:scale-105
                            group-hover:text-accent
                            sm:text-2xl
                            md:text-3xl
                        "
          >
            {committeeMembers[0].name}
          </h2>

          {/* Animated divider */}
          <div
            className="
                            relative
                            z-10
                            mt-5
                            h-px
                            w-12
                            bg-accent/50
                            transition-all
                            duration-700
                            group-hover:w-28
                            group-hover:bg-accent
                        "
          />

          <p
            className="
                            relative
                            z-10
                            mt-5
                            font-poppins
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-accent-light/50
                            transition-all
                            duration-700
                            group-hover:text-accent-light/80
                        "
          >
            Committee Member
          </p>
        </div>
      </div>

      {/* Bottom film strip */}
      <FilmStrip position="bottom" />
    </article>
  );
}

/* =================================================
   SMALL COMMITTEE CARD
   DIFFERENT HOVER ANIMATION
================================================= */

function SmallCard({ member }) {
  return (
    <article
      className="
                group
                relative
                w-full
                overflow-hidden
                rounded-[15px]
                border
                border-primary-light/70
                bg-primary-dark/55
                p-2.25
                shadow-[0_12px_35px_rgba(36,5,6,0.3)]
                transition-all
                duration-500
                ease-out

                sm:w-[calc(50%-12px)]
                lg:w-[calc(33.333%-22px)]

                hover:-translate-y-3
                hover:border-accent/55
                hover:shadow-[0_22px_50px_rgba(36,5,6,0.45)]
            "
    >
      {/* Top film strip */}
      <FilmStrip position="top" />

      {/* -------------------------------------
                IMAGE
            -------------------------------------- */}

      <div className="relative z-10">
        <MemberImage />
      </div>

      {/* -------------------------------------
                TEXT
            -------------------------------------- */}

      <div
        className="
                    relative
                    z-10
                    flex
                    min-h-18
                    items-center
                    justify-center
                    px-2
                    text-center
                "
      >
        <h3
          className="
                        cinzel
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-accent-light
                        transition-all
                        duration-500
                        group-hover:scale-105
                        group-hover:text-accent
                        sm:text-xs
                    "
        >
          {member.name}
        </h3>
      </div>

      {/* Bottom film strip */}
      <FilmStrip position="bottom" />

      {/* -------------------------------------
                HOVER REVEAL
            -------------------------------------- */}

      <div
        className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-30
                    flex
                    items-center
                    justify-center
                    rounded-[15px]
                    bg-primary-dark/75
                    opacity-0
                    backdrop-blur-[2px]
                    transition-all
                    duration-500
                    group-hover:opacity-100
                "
      >
        <div
          className="
                        translate-y-5
                        text-center
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                    "
        >
          <p
            className="
                            cinzel
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wider
                            text-accent-light
                        "
          >
            Coming Soon...
          </p>

          <div
            className="
                            mx-auto
                            mt-3
                            h-px
                            w-8
                            bg-accent
                            transition-all
                            duration-500
                            group-hover:w-14
                        "
          />
        </div>
      </div>
    </article>
  );
}

/* =================================================
   JURY PAGE
================================================= */

function Jury() {
  return (
    <section
      className="
                relative
                min-h-[calc(100vh-160px)]
                overflow-hidden
                bg-brand-gradient
                py-12
                sm:py-14
                md:py-16
                lg:py-20
            "
    >
      {/* -------------------------------------
                BACKGROUND
            -------------------------------------- */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top glow */}
        <div
          className="
                        absolute
                        left-1/2
                        top-0
                        h-100
                        w-150
                        -translate-x-1/2
                        rounded-full
                        bg-accent/5
                        blur-[100px]
                    "
        />

        {/* Bottom glow */}
        <div
          className="
                        absolute
                        bottom-37.5
                        left-1/2
                        h-87.5
                        w-175
                        -translate-x-1/2
                        rounded-full
                        bg-primary-light/10
                        blur-[100px]
                    "
        />
      </div>

      {/* -------------------------------------
                MAIN CONTAINER
            -------------------------------------- */}

      <div
        className="
                    relative
                    mx-auto
                    flex
                    w-full
                    max-w-300
                    flex-col
                    px-5
                    sm:px-8
                    md:px-10
                    lg:px-12
                "
      >
        {/* -------------------------------------
                    HEADING
                -------------------------------------- */}

        <div className="mb-10 text-center sm:mb-12 md:mb-14">
          <h1
            className="
                            cinzel
                            text-3xl
                            font-bold
                            uppercase
                            tracking-wide
                            text-accent-light
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                        "
          >
            Committee Members
          </h1>

          <p
            className="
                            mt-2
                            font-poppins
                            text-[10px]
                            text-accent-light/55
                            sm:text-xs
                        "
          >
            Hover or tap a card to reveal their cinematic journey.
          </p>
        </div>

        {/* -------------------------------------
                    FEATURED CARD
                -------------------------------------- */}

        <FeaturedCard />

        {/* -------------------------------------
                    THREE SMALL CARDS
                -------------------------------------- */}

        <div
          className="
                        mt-8
                        flex
                        flex-wrap
                        items-stretch
                        justify-center
                        gap-6
                        sm:gap-7
                        md:mt-9
                        md:gap-8
                    "
        >
          {committeeMembers.slice(1).map((member) => (
            <SmallCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jury;