import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, ChevronDown, Play } from "lucide-react";

import homeData from "../data/data.json";

function Home() {
  const navigate = useNavigate();

  const { hero } = homeData.home;

  const calculateTimeLeft = () => {
    const festivalDate = new Date("2027-01-09T00:00:00");
    const now = new Date();

    const difference = festivalDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),

      hours: String(
        Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        )
      ).padStart(2, "0"),

      minutes: String(
        Math.floor(
          (difference / (1000 * 60)) % 60
        )
      ).padStart(2, "0"),

      seconds: String(
        Math.floor(
          (difference / 1000) % 60
        )
      ).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    {
      value: timeLeft.days,
      label: "DAYS",
    },
    {
      value: timeLeft.hours,
      label: "HOURS",
    },
    {
      value: timeLeft.minutes,
      label: "MINS",
    },
    {
      value: timeLeft.seconds,
      label: "SECS",
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-brand-gradient">

      {/* =========================================================
                BACKGROUND
            ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Original CFCCF Kolkata artwork */}
        <img
          src={hero.background.src}
          alt={hero.background.alt}
          className="
                        absolute
                        bottom-0
                        left-0
                        z-0
                        h-full
                        w-full
                        max-w-175
                        object-contain
                        object-bottom-left
                        opacity-60
                        grayscale-[0.8]
                        mask-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,transparent_100%)]
                    "
        />

        {/* Top glow */}
        <div
          className="
                        absolute
                        left-1/2
                        top-0
                        z-0
                        h-100
                        w-175
                        -translate-x-1/2
                        rounded-full
                        bg-primary-light/20
                        blur-[120px]
                    "
        />

        {/* Decorative dots */}
        <span className="absolute right-3 top-1/3 h-1.5 w-1.5 rounded-full bg-accent/40" />
        <span className="absolute right-[12%] top-[52%] h-2 w-2 rounded-full bg-accent/30" />
        <span className="absolute left-[10%] top-[70%] h-1.5 w-1.5 rounded-full bg-accent/30" />
        <span className="absolute left-[4%] bottom-[20%] h-1 w-1 rounded-full bg-accent/30" />
      </div>


      {/* =========================================================
                HERO CONTENT
            ========================================================== */}

      <div
        className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[calc(100vh-100px)]
                    w-full
                    max-w-300
                    flex-col
                    justify-center
                    px-5
                    py-12
                    sm:px-8
                    md:px-10
                    lg:px-0
                    lg:py-16
                "
      >

        <div
          className="
                        flex
                        w-full
                        flex-col
                        gap-10
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        lg:gap-12
                    "
        >

          {/* =================================================
                        LEFT CONTENT
                    ================================================== */}

          <div
            className="
                            flex
                            w-full
                            flex-col
                            items-start
                            lg:w-[52%]
                        "
          >

            {/* Badge */}
            <div
              className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-accent/30
                                bg-primary-light/10
                                px-4
                                py-1.5
                                outfit
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-accent
                            "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />

              {hero.badge}
            </div>


            {/* Main Title */}
            <h1
              className="
                                mt-5
                                font-cinzel
                                text-4xl
                                font-black
                                uppercase
                                leading-[0.92]
                                tracking-tight
                                sm:text-5xl
                                md:text-6xl
                                lg:text-[3.5rem]
                                xl:text-[4.2rem]
                            "
            >
              {hero.title.map((line, index) => (
                <React.Fragment key={line}>
                  <span className="hero-gradient-text">
                    {line}
                  </span>

                  {index < hero.title.length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </h1>


            {/* Subtitle */}
            <h2
              className="
                                mt-4
                                font-cinzel
                                text-xl
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-accent
                                sm:text-2xl
                                md:text-3xl
                            "
            >
              {hero.subtitle}
            </h2>


            {/* Description */}
            <p
              className="
                                mt-5
                                max-w-xl
                                font-poppins
                                text-sm
                                leading-6
                                text-accent-light/65
                                sm:text-base
                            "
            >
              {hero.description}
            </p>


            {/* Event Card */}
            <div
              className="
                                mt-7
                                w-full
                                max-w-63.75
                                rounded-xl
                                border
                                border-accent/25
                                bg-primary-light/20
                                px-5
                                py-4
                                backdrop-blur-sm
                            "
            >
              <p
                className="
                                    outfit
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-accent/70
                                "
              >
                {hero.event.label}
              </p>

              <p
                className="
                                    cinzel
                                    mt-2
                                    text-sm
                                    font-semibold
                                    text-accent-light
                                "
              >
                {hero.event.date}
              </p>

              <p
                className="
                                    mt-1
                                    font-poppins
                                    text-[10px]
                                    text-accent-light/70
                                "
              >
                {hero.event.venue}
              </p>

              <button
                type="button"
                className="
                                    mt-2
                                    flex
                                    items-center
                                    gap-1
                                    outfit
                                    text-[9px]
                                    uppercase
                                    tracking-wide
                                    text-accent/70
                                    transition-colors
                                    hover:text-accent
                                "
              >
                {hero.event.calendarText}

                <ChevronDown size={12} />
              </button>
            </div>


            {/* Countdown */}
            <div
              className="
                                mt-8
                                flex
                                flex-wrap
                                gap-2
                                sm:gap-3
                            "
            >
              {countdownItems.map((item) => (
                <div
                  key={item.label}
                  className="
                                        flex
                                        h-19
                                        w-16
                                        flex-col
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-accent/20
                                        bg-primary-light/20
                                    "
                >
                  <span
                    className="
                                            cinzel
                                            text-2xl
                                            font-bold
                                            leading-none
                                            text-accent-light
                                        "
                  >
                    {item.value}
                  </span>

                  <span
                    className="
                                            mt-1
                                            outfit
                                            text-[8px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.15em]
                                            text-accent-light/60
                                        "
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>


            {/* Main Actions */}
            <div
              className="
                                mt-6
                                flex
                                flex-wrap
                                items-center
                                gap-3
                            "
            >
              {hero.actions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  onClick={() => navigate(action.path)}
                  className={`
                                        rounded-xl
                                        border
                                        px-5
                                        py-3
                                        outfit
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        transition-all
                                        duration-300
                                        ${action.type === "primary"
                      ? `
                                                    border-primary-light
                                                    bg-primary-light
                                                    text-accent-light
                                                    hover:bg-rose-dark
                                                `
                      : `
                                                    border-accent/30
                                                    bg-transparent
                                                    text-accent
                                                    hover:bg-primary-light
                                                `
                    }
                                    `}
                >
                  {action.label}
                </button>
              ))}
            </div>


            {/* Previous Editions */}
            <button
              type="button"
              onClick={() =>
                navigate(hero.previousEditions.path)
              }
              className="
                                mt-5
                                rounded-lg
                                border
                                border-accent/25
                                bg-primary-light/10
                                px-4
                                py-2
                                outfit
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-wide
                                text-accent
                                transition-all
                                duration-300
                                hover:bg-primary-light/30
                            "
            >
              {hero.previousEditions.label}

              <span className="ml-2">⌃</span>
            </button>

          </div>


          {/* =================================================
                        RIGHT — TEASER
                    ================================================== */}

          <div
            className="
                            relative
                            w-full
                            lg:w-[48%]
                        "
          >
            <div
              className="
                                relative
                                aspect-video
                                w-full
                                overflow-hidden
                                rounded-2xl
                                border
                                border-accent/30
                                bg-primary-dark
                                shadow-[0_0_30px_rgba(0,0,0,0.25)]
                            "
            >

              {/* Dark teaser background */}
              <div
                className="
                                    absolute
                                    inset-0
                                    bg-[radial-gradient(circle_at_35%_45%,rgba(237,217,181,0.25),transparent_30%),linear-gradient(135deg,#2A1212,#100606)]
                                "
              />

              {/* Lens effect */}
              <div
                className="
                                    absolute
                                    left-[20%]
                                    top-1/2
                                    h-40
                                    w-40
                                    -translate-y-1/2
                                    rounded-full
                                    border
                                    border-accent/10
                                    bg-accent/10
                                    blur-2xl
                                "
              />

              {/* Teaser text */}
              <div
                className="
                                    absolute
                                    inset-0
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    text-center
                                "
              >
                <p
                  className="
                                        cinzel
                                        text-3xl
                                        font-bold
                                        tracking-[0.08em]
                                        text-accent-light
                                        sm:text-4xl
                                    "
                >
                  {hero.teaser.label}
                </p>

                <p
                  className="
                                        cinzel
                                        mt-3
                                        text-2xl
                                        font-semibold
                                        tracking-[0.15em]
                                        text-accent-light
                                        sm:text-3xl
                                    "
                >
                  {hero.teaser.year}
                </p>

                <button
                  type="button"
                  className="
                                        mt-6
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-accent/60
                                        bg-primary-light/70
                                        text-accent-light
                                        transition-all
                                        duration-300
                                        hover:scale-110
                                        hover:bg-primary-light
                                    "
                  aria-label={hero.teaser.playLabel}
                >
                  <Play
                    size={22}
                    fill="currentColor"
                  />
                </button>

                <p
                  className="
                                        mt-5
                                        font-poppins
                                        text-xs
                                        text-accent-light/50
                                    "
                >
                  Institute of Engineering
                  <br />
                  & Management
                </p>

                <p
                  className="
                                        mt-2
                                        border
                                        border-accent/20
                                        px-3
                                        py-1
                                        font-poppins
                                        text-[8px]
                                        uppercase
                                        tracking-wide
                                        text-accent-light/50
                                    "
                >
                  Presents
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;