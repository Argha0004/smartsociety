import React, { useEffect, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

function FlipCard({ event, index }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [inView, setInView] = useState(false);

    const cardRef = useRef(null);

    useEffect(() => {
        const element = cardRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <li ref={cardRef} className="w-full">
            <button
                type="button"
                aria-expanded={isFlipped}
                onClick={() => setIsFlipped((prev) => !prev)}
                className={`
          block
          w-full
          text-left
          opacity-0
          ${inView
                        ? "animate-[slideInRight_0.65s_cubic-bezier(0.21,0.68,0.18,1)_forwards]"
                        : ""
                    }
        `}
                style={{
                    animationDelay: inView ? `${index * 100}ms` : undefined,
                }}
            >
                <div className="perspective-distant">
                    <div
                        className="
            
              relative
              w-full
              rounded-xl
              shadow-xl
              transition-transform
              duration-600
              transform-3d
              ease-[cubic-bezier(0.21,0.68,0.18,1)]
            "
                        style={{
                            transform: isFlipped
                                ? "rotateY(180deg)"
                                : "rotateY(0deg)",
                        }}
                    >
                        {/* Front */}

                        <div
                            className="
                            
                w-full
                rounded-xl
                border
                border-primary-dark1
                bg-dark3
                p-4
                text-center
                backdrop-blur-md
                backface-hidden
                md:p-5
              "
                        >
                            <div
                                className="
                  text-sm
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-accent/40
                "
                            >
                                {event.category}
                            </div>

                            <h3
                                className="
                  mt-1
                  text-lg
                  font-bold
                  leading-snug
                  text-accent-light
                  md:text-xl
                "
                            >
                                {event.title}
                            </h3>

                            <div
                                className="
                  mt-1
                  text-sm
                  text-accent-light/60
                "
                            >
                                {event.meta}
                            </div>

                            <div
                                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-1
                  text-sm
                  text-accent/50
                "
                            >
                                Click to flip for details
                                <MoveRight className="h-4 w-4" />
                            </div>
                        </div>

                        {/* Back */}

                        <div
                            className="
                absolute
                inset-0
                w-full
                rounded-xl
                border
                border-dark2
                bg-dark4
                p-4
                text-center
                backdrop-blur-md
                backface-hidden
                md:p-5
              "
                            style={{
                                transform: "rotateY(180deg)",
                            }}
                        >
                            <h3
                                className="
                  text-lg
                  font-bold
                  leading-snug
                  text-accent
                  md:text-xl
                "
                            >
                                {event.title}
                            </h3>

                            <p
                                className="
                  mt-2
                  text-base
                  text-accent-light/85
                "
                            >
                                {event.details}
                            </p>

                            <div className="mt-3 flex items-center justify-center">
                                <span
                                    className="
                    flex
                    items-center
                    gap-1
                    rounded-md
                    border
                    border-accent/25
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-accent1
                    transition-colors
                    hover:border-accent/40
                    hover:bg-accent/10
                    hover:text-accent
                  "
                                >
                                    Tap to flip back
                                    <MoveLeft className="h-4 w-4" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </li>
    );
}

function EventLineUp({
    title,
    subtitle,
    events,
}) {
    return (
        <section className="w-full">
            <div className="container mx-auto px-4">
                {/* Heading */}

                <div className="mb-10 flex flex-col items-center text-center">
                    <h2
                        className="
              cinzel
              font-black
              uppercase
              tracking-tight
              text-accent
              [text-shadow:0_0_24px_rgba(237,217,181,0.4)]
              text-[clamp(1.8rem,4vw,3rem)]
            "
                    >
                        {title}
                    </h2>

                    <p
                        className="
              mt-2
              text-sm
              uppercase
              tracking-widest
              text-accent-light/40
            "
                    >
                        {subtitle}
                    </p>
                </div>

                {/* Event cards */}

                <ul className="mt-6 flex w-full flex-col gap-4">
                    {events.map((event, index) => (
                        <FlipCard
                            key={`${event.category}-${index}`}
                            event={event}
                            index={index}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default EventLineUp;