import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, X } from "lucide-react";
import photo10 from "../assets/photo-10.png";
import photo5 from "../assets/photo-5.jpg";
import FestivalBadge from "../components/FestivalBadge";
import EventLineUp from "../components/EventLineUp";
import { TiArrowSortedDown } from "react-icons/ti";

import homeData from "../data/data.json";


function EventCalendar({
  year,
  month,
  highlightDay,
  onClose,
}) {
  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });

  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [
    ...Array(firstDayIndex).fill(null),
    ...Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    ),
  ];

  const weekdays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/75
        p-4
        sm:p-6
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-72
          rounded-xl
          border
          border-primary-light
          bg-dark1
          p-5
          shadow-2xl
          backdrop-blur-md
          sm:max-w-80
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Calendar header */}

        <div className="mb-4 flex items-center justify-between">
          <h3
            className="
              cinzel
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-accent
            "
          >
            {monthName} {year}
          </h3>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close calendar"
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-md
              text-accent1
              transition-colors
              hover:bg-accent/10
              hover:text-accent
            "
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Weekdays */}

        <div className="mb-2 flex w-full flex-wrap">
          {weekdays.map((day) => (
            <div
              key={day}
              className="
                flex
                w-[14.2857%]
                items-center
                justify-center
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-wider
                text-accent1
              "
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar dates */}

        <div className="flex w-full flex-wrap">
          {cells.map((day, index) => {
            if (day === null) {
              return (
                <div
                  key={`empty-${index}`}
                  className="aspect-square w-[14.2857%]"
                />
              );
            }

            const isHighlighted = day === highlightDay;

            return (
              <div
                key={day}
                className="
                  flex
                  aspect-square
                  w-[14.2857%]
                  items-center
                  justify-center
                  p-0.5
                "
              >
                <button
                  type="button"
                  className={`
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                    rounded-md
                    text-xs
                    font-medium
                    transition-colors
                    bg-[#ffffff0a]
                    ${isHighlighted
                      ? "bg-primary-light text-accent-light shadow-[0_14px_30px_-3px_var(--glow-brick)]"
                      : "text-accent-light/80 hover:bg-accent/10 hover:text-accent"
                    }
                  `}
                >
                  {day}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);

  const { hero, reel, eventLineup } = homeData.home;

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

  const reelImages = [
    ...reel.images,
    ...reel.images,
  ];

  return (
    <section className="relative overflow-hidden bg-brand-gradient">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

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

        {/* Floating decorative dots */}

        <span
          className="
    absolute
    left-[8%]
    top-[22%]
    h-1.5
    w-1.5
    rounded-full
    bg-accent/35
    animate-bounce
    [animation-duration:6s]
    [animation-delay:0.5s]
  "
        />

        <span
          className="
    absolute
    left-[18%]
    top-[48%]
    h-2
    w-2
    rounded-full
    bg-primary-light/45
    animate-bounce
    [animation-duration:8s]
    [animation-delay:1.2s]
  "
        />

        <span
          className="
    absolute
    left-[31%]
    top-[68%]
    h-1
    w-1
    rounded-full
    bg-accent/25
    animate-bounce
    [animation-duration:7s]
    [animation-delay:2s]
  "
        />

        <span
          className="
    absolute
    left-[43%]
    top-[31%]
    h-2.5
    w-2.5
    rounded-full
    bg-accent/20
    animate-bounce
    [animation-duration:9s]
    [animation-delay:0.8s]
  "
        />

        <span
          className="
    absolute
    left-[52%]
    top-[72%]
    h-1.5
    w-1.5
    rounded-full
    bg-primary-light/35
    animate-bounce
    [animation-duration:7.5s]
    [animation-delay:1.8s]
  "
        />

        <span
          className="
    absolute
    left-[64%]
    top-[24%]
    h-1
    w-1
    rounded-full
    bg-accent/35
    animate-bounce
    [animation-duration:6.5s]
    [animation-delay:2.5s]
  "
        />

        <span
          className="
    absolute
    left-[73%]
    top-[56%]
    h-2
    w-2
    rounded-full
    bg-primary-light/40
    animate-bounce
    [animation-duration:8.5s]
    [animation-delay:1s]
  "
        />

        <span
          className="
    absolute
    left-[82%]
    top-[34%]
    h-1.5
    w-1.5
    rounded-full
    bg-accent/30
    animate-bounce
    [animation-duration:7s]
    [animation-delay:3s]
  "
        />

        <span
          className="
    absolute
    right-[8%]
    top-[70%]
    h-2.5
    w-2.5
    rounded-full
    bg-accent/20
    animate-bounce
    [animation-duration:9.5s]
    [animation-delay:1.5s]
  "
        />

        <span
          className="
    absolute
    right-[3%]
    top-[43%]
    h-1
    w-1
    rounded-full
    bg-primary-light/45
    animate-bounce
    [animation-duration:6s]
    [animation-delay:2.2s]
  "
        />
      </div>


      {/* Hero content */}

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

          {/* Left content */}

          <div
            className="
    relative
    flex
    w-full
    flex-col
    items-start
    lg:w-[102%]
  "
          >
            {/* Background artwork */}

            <img
              src={photo5}
              alt=""
              aria-hidden="true"
              className="
      pointer-events-none
      select-none
      absolute
      bottom-0
      left-0
      z-0
      w-full
      max-h-full
      object-contain
      object-bottom-left
      opacity-60
      mask-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,transparent_100%)]
      filter-[sepia(0.4)_brightness(0.8)]
    "
            />

            <div className="relative z-10 w-full">
              {/* Badge */}

              <FestivalBadge className="">
                {hero.badge}
              </FestivalBadge>

              {/* Heading with animated gradient text */}

              <h1
                className="
        cinzel
        font-black
        uppercase
        leading-[0.92]
        tracking-tight
        text-3xl
        sm:text-4xl
        md:text-5xl
      "
              >
                {hero.title.map((line, index) => (
                  <React.Fragment key={line}>
                    <span
                      className="
              inline
              bg-[linear-gradient(90deg,var(--cream-light),var(--cream),var(--brick-light),var(--cream),var(--cream-light))]
              bg-size-[300%_100%]
              bg-clip-text
              text-transparent
              animate-[gradientShift_6s_ease_infinite]
            "
                      style={{
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      {line}
                    </span>

                    {index < hero.title.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>

              {/* Subtitle */}

              <div
                className="
        cinzel
        mt-3
        font-black
        uppercase
        tracking-[0.12em]
        text-primary-dark
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
        [text-shadow:0_0_20px_rgba(139,46,46,0.6)]
      "
              >
                {hero.subtitle}
              </div>

              {/* Description */}

              <p
                className="
        poppins
        mt-5
        max-w-lg
        text-sm
        leading-relaxed
        text-[rgba(245,237,224,0.65)]
        md:text-base
      "
              >
                {hero.description}
              </p>

              {/* Event + countdown + actions */}

              <div className="mt-7 flex flex-col items-start gap-5">
                {/* Event date */}

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCalendar((prev) => !prev)}
                    className="
                      group
                      relative
                      rounded-xl
                      border
                      border-dark2
                      bg-dark4
                      px-6
                      py-4
                      text-left
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    <div
                      className="
                        mb-1
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.22em]
                        text-accent/40
                      "
                    >
                      {hero.event.label}
                    </div>

                    <div
                      className="
                        cinzel
                        text-lg
                        font-black
                        tracking-tight
                        text-accent
                        [text-shadow:0_0_12px_rgba(237,217,181,0.4)]
                        md:text-xl
                      "
                    >
                      {hero.event.date}
                    </div>

                    <div className="mt-1 text-[13px] font-semibold text-accent-light/75">
                      {hero.event.venue}
                    </div>

                    <div
                      className="
                        mt-1
                        flex
                        items-center
                        gap-1
                        text-[11px]
                        uppercase
                        tracking-wider
                        text-accent/50
                      "
                    >
                      {hero.event.calendarText}
                      <TiArrowSortedDown className="h-3 w-3" />
                    </div>
                  </button>
                </div>

                {showCalendar && (
                  <EventCalendar
                    year={2027}
                    month={0}
                    highlightDay={9}
                    onClose={() => setShowCalendar(false)}
                  />
                )}

                {/* Countdown */}

                <div className="mt-6 flex flex-wrap gap-3">
                  {countdownItems.map((item) => (
                    <div
                      key={item.label}
                      className="
        flex
        min-w-17
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-dark2
        bg-dark4
        px-4
        py-3
        backdrop-blur
      "
                    >
                      <span
                        className="
          cinzel
          font-black
          leading-none
          tabular-nums
          text-accent
          [text-shadow:0_0_18px_rgba(237,217,181,0.6)]
          text-[clamp(1.6rem,4vw,2.4rem)]
        "
                      >
                        {item.value}
                      </span>

                      <span
                        className="
          mt-1
          text-[10px]
          md:text-[11px]
          uppercase
          tracking-[0.18em]
          text-accent1
        "
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-3">
                  {hero.actions.map((action) => (
                    <button
                      key={action.label}
                      type="button"
                      onClick={() => navigate(action.path)}
                      className={`
                        oswald
              rounded-lg
              border
              px-6
              py-3
              text-sm
              font-semibold
              uppercase
              tracking-wide
              
              transition-transform duration-300 hover:-translate-y-0.5
              ${action.type === "primary"
                          ? `
                    border-primary-light
                    bg-primary-light
                    text-accent-light
                    hover:bg-primary
                  `
                          : `
                    border-primary-light1
                    bg-dark4
                    text-accent-light
                    hover:bg-primary-light/20
                    
                  `
                        }
            `}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>

                {/* Previous editions */}

                <button
                  type="button"
                  onClick={() => navigate(hero.previousEditions.path)}
                  className="
          flex
          items-center
          gap-1
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-accent-light/60
          hover:text-accent-light
        "
                >
                  {hero.previousEditions.label}

                  <span aria-hidden="true">▲</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right teaser */}

          <div className="hidden h-full w-full md:flex md:items-center md:justify-end">
            <div className="w-140 animate-[floatUp_5s_ease-in-out_infinite]">
              <figure
                className="
        relative
        aspect-video
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-dark2
        bg-primary
        shadow-[#8b2e2e33_0_0_60px_0,#00000099_0_32px_80px_0]   
      "
              >
                <img
                  src={photo10}
                  alt="Festival Trailer"
                  className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-60
        "
                />

                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/70" />

                <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-black/50" />

                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <div className="flex select-none flex-col items-center gap-6">

                    {/* Teaser / 2027 */}

                    <div className="text-center leading-tight">
                      <div
                        className="
                cinzel
                font-black
                uppercase
                tracking-[0.14em]
                text-accent
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                [text-shadow:0_0_18px_rgba(237,217,181,0.6)]
                text-[clamp(1.2rem,3.5vw,2.4rem)]
              "
                      >
                        TEASER
                      </div>

                      <div
                        className="
                cinzel
                mt-2
                font-black
                uppercase
                tracking-[0.22em]
                text-[rgba(240,234,214,0.85)]
                text-[clamp(1rem,2.8vw,2rem)]
              "
                      >
                        2027
                      </div>
                    </div>

                    {/* Play button */}

                    <button
                      type="button"
                      aria-label="Play trailer"
                      className="
        group
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        border-2
        border-accent-light
        bg-primary-light
        shadow-[0_0_24px_rgba(237,217,181,0.08),0_0_48px_rgba(139,46,46,0.2)]
        transition-transform
        duration-200
        hover:scale-110
        active:scale-95
        focus:outline-none
        sm:h-20
        sm:w-20
    "
                    >
                      {/* Ping animation */}
                      <span
                        className="
            pointer-events-none
            absolute
            h-full
            w-full
            rounded-full
            bg-primary-light
            animate-ping
        "
                      />

                      <Play
                        className="
            relative
            z-10
            ml-1
            h-6
            w-6
            text-accent-light
            transition-transform
            duration-200
            
            sm:h-7
            sm:w-7
        "
                        fill="currentColor"
                        strokeWidth={0}
                      />

                      {/* Ambient glow */}
                      <div
                        className="
            pointer-events-none
            absolute
            -left-8
            -top-8
            h-36
            w-36
            rounded-full
            bg-accent/15
            blur-3xl
        "
                      />

                      <div
                        className="
            pointer-events-none
            absolute
            -bottom-8
            -right-8
            h-36
            w-36
            rounded-full
            bg-accent/15
            blur-3xl
        "
                      />
                    </button>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom film reel */}

      <div className="relative
    z-20
    w-full
    max-w-full
    overflow-x-hidden
    overflow-y-hidden
    border-y
    border-accent/10
    bg-[#1C0A0A]
    py-3
    sm:py-4">
        <div className="relative
      w-full
      max-w-full
      min-w-0
      overflow-hidden
      bg-[#2A1212]
      py-2">
          {/* bg-[#2A1212]  bg-[#1C0A0A] */}
          <div
            className="
        pointer-events-none
        absolute
        inset-x-0
        -top-1
        z-20
        h-5
        w-full
        bg-[radial-gradient(circle,rgba(237,217,181,0.15)_5px,transparent_6px)]
        bg-size-[28px_14px]
      "
          />

          <div
            className="
        flex
        w-max
        gap-3.5
        animate-[logo-marquee_30s_linear_infinite]
        [animation-direction:reverse]
      "
          >
            {reelImages.map((image, index) => (
              <div
                key={`bottom-${image.id}-${index}`}
                className="
            relative
            h-36.25
            w-47.5
            shrink-0
            overflow-hidden
            rounded-lg
            border
            border-accent/10
            bg-[#2A1212]
            sm:h-38.75
            sm:w-50
            md:h-41.25
            md:w-53.75
            lg:h-43.75
            lg:w-57.5
          "
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover opacity-85"
                />
                <div className="pointer-events-none absolute inset-1.5 rounded border border-accent/20" />
              </div>
            ))}
          </div>

          <div
            className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        z-20
        h-5
        w-full
        bg-[radial-gradient(circle,rgba(237,217,181,0.15)_5px,transparent_6px)]
        bg-size-[28px_14px]
      "
          />
        </div>
      </div>

      {/* Event lineup */}

      <div className="relative z-20 w-full bg-[#1C0A0A] px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10">
        <EventLineUp
          title={eventLineup.title}
          subtitle={eventLineup.subtitle}
          events={eventLineup.events}
        />
      </div>
    </section>
  );
}

export default Home;