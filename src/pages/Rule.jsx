import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import rulesData from "../data/data.json";
import { Button } from "../components/FormComponent";
import FestivalBadge from "../components/FestivalBadge";

function Rule() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState(
    rulesData.rules.sections[0].id
  );

  const currentSection = rulesData.rules.sections.find(
    (section) => section.id === activeSection
  );

  return (
    <section
      className="
                relative
                min-h-[calc(100vh-160px)]
                overflow-hidden
                bg-brand-gradient
                py-10
                sm:py-12
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
                    mx-auto
                    flex
                    w-full
                    max-w-[1000px]
                    flex-col
                    px-5
                    sm:px-8
                    md:px-10
                "
      >
        {/* Page Header */}
        <div className="text-center">
          {/* Festival Badge */}
          <div className="flex justify-center">
            <FestivalBadge>
              {rulesData.rules.page.badge}
            </FestivalBadge>
          </div>

          {/* Title */}
          <h1
            className="
                            cinzel
                            mt-1
                            text-3xl
                            font-bold
                            uppercase
                            leading-tight
                            tracking-normal
                            text-accent-light
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                        "
          >
            {rulesData.rules.page.title}
          </h1>

          {/* Description */}
          <p
            className="
                            mx-auto
                            mt-5
                            max-w-[720px]
                            font-poppins
                            text-xs
                            leading-5
                            text-accent-light/70
                            sm:text-sm
                            sm:leading-6
                        "
          >
            {rulesData.rules.page.description}
          </p>
        </div>

        {/* Section Switcher */}
        <div className="mt-8 flex justify-center sm:mt-9">
          <div
            className="
                            flex
                            items-center
                            rounded-full
                            border
                            border-accent-light
                            bg-transparent
                            p-0.5
                        "
          >
            {rulesData.rules.sections.map((section) => (
              <Button
                key={section.id}
                type="button"
                onClick={() =>
                  setActiveSection(section.id)
                }
                className={`
                                    min-w-[155px]
                                    rounded-full
                                    border-0
                                    px-5
                                    py-2.5
                                    font-poppins
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    transition-all
                                    duration-300
                                    sm:min-w-[175px]
                                    sm:px-7
                                    sm:text-xs

                                    ${activeSection === section.id
                    ? `
                                                bg-primary-light
                                                text-accent-light
                                                shadow-none
                                            `
                    : `
                                                bg-transparent
                                                text-accent-light
                                                hover:bg-primary-light/20
                                            `
                  }
                                `}
              >
                {section.buttonLabel}
              </Button>
            ))}
          </div>
        </div>

        {/* Rules Content Card */}
        <div
          className="
                        mt-8
                        overflow-hidden
                        rounded-[15px]
                        border
                        border-accent-light/70
                        bg-primary-dark/20
                        sm:mt-9
                    "
        >
          <div
            className="
                            flex
                            flex-col
                            gap-5
                            p-4
                            sm:p-5
                            md:p-6
                            lg:flex-row
                            lg:gap-6
                        "
          >
            {/* LEFT — RULES */}
            <div className="min-w-0 flex-1">
              {/* Intro */}
              <p
                className="
                                    border-b
                                    border-accent-light/40
                                    pb-4
                                    font-poppins
                                    text-xs
                                    leading-5
                                    text-accent-light/80
                                    sm:text-sm
                                    sm:leading-6
                                "
              >
                {currentSection.intro}
              </p>

              {/* Section Heading */}
              <h2
                className="
                                    cinzel
                                    mt-5
                                    text-xl
                                    font-semibold
                                    uppercase
                                    tracking-normal
                                    text-accent-light
                                    sm:text-2xl
                                "
              >
                {currentSection.heading}
              </h2>

              {/* Rules */}
              <div className="mt-3">
                {currentSection.rules.map(
                  (rule, index) => (
                    <div
                      key={index}
                      className="
                                                border-b
                                                border-accent-light/20
                                                px-1
                                                py-3
                                                font-poppins
                                                text-xs
                                                leading-5
                                                text-accent-light/80
                                                sm:text-sm
                                                sm:leading-6
                                            "
                    >
                      <span
                        className="
                                                    mr-1
                                                    font-semibold
                                                    text-accent-light
                                                "
                      >
                        {index + 1}.
                      </span>

                      {rule}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* RIGHT — KEY DATES */}
            <aside
              className="
                                w-full
                                rounded-xl
                                border
                                border-accent-light/40
                                bg-primary-dark/20
                                p-4
                                sm:p-5
                                lg:w-66.25
                                lg:shrink-0
                            "
            >
              <h3
                className="
                                    font-poppins
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-accent-light
                                "
              >
                Key Dates
              </h3>

              {/* Submission Deadline */}
              <div
                className="
                                    mt-5
                                    rounded-xl
                                    border
                                    border-accent-light/60
                                    bg-primary-light/20
                                    p-4
                                "
              >
                <p
                  className="
                                        font-poppins
                                        text-[9px]
                                        font-medium
                                        uppercase
                                        tracking-wide
                                        text-accent-light/70
                                    "
                >
                  {
                    rulesData.rules.keyDates
                      .submissionDeadline.label
                  }
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
                  {
                    rulesData.rules.keyDates
                      .submissionDeadline.date
                  }
                </p>
              </div>

              {/* Festival Date */}
              <div
                className="
                                    mt-3
                                    rounded-xl
                                    border
                                    border-accent-light/40
                                    bg-transparent
                                    p-4
                                "
              >
                <p
                  className="
                                        font-poppins
                                        text-[9px]
                                        font-medium
                                        uppercase
                                        tracking-wide
                                        text-accent-light/70
                                    "
                >
                  {
                    rulesData.rules.keyDates
                      .festivalDate.label
                  }
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
                  {
                    rulesData.rules.keyDates
                      .festivalDate.date
                  }
                </p>

                <p
                  className="
                                        mt-1
                                        font-poppins
                                        text-[9px]
                                        text-accent-light/60
                                    "
                >
                  {
                    rulesData.rules.keyDates
                      .festivalDate.location
                  }
                </p>
              </div>

              {/* Register */}
              <Button
                type="button"
                onClick={() =>
                  navigate(
                    rulesData.rules.keyDates
                      .registerButton.path
                  )
                }
                className="
                                    mt-4
                                    w-full
                                    rounded-xl
                                    border-0
                                    bg-primary-light
                                    px-4
                                    py-3
                                    font-poppins
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-accent-light
                                    transition-all
                                    duration-300
                                    hover:bg-rose-dark
                                "
              >
                {
                  rulesData.rules.keyDates
                    .registerButton.label
                }
              </Button>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rule;