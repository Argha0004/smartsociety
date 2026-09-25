import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../assets/LOGO.png";

import {
  topBarItems,
  navLinks,
  headerButtons,
} from "../data/HeaderData";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">

      {/* Top Marquee */}

      <div
        className="
          flex
          h-7
          w-full
          items-center
          overflow-hidden
          bg-primary-light
          text-accent-light

          sm:h-8
        "
      >
        <div className="flex h-full w-max items-center animate-header-marquee">

          {topBarItems.map((item) => {
            const Icon = item.icon;

            return (
              <span
                key={item.text}
                className="
                  mx-8
                  flex
                  shrink-0
                  items-center
                  gap-2 
                  whitespace-nowrap
                  text-base
                  font-semibold
                  uppercase
                  tracking-wider

                  sm:mx-10
                  sm:text-xs
                "
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />

                <span>
                  {item.text}
                </span>

                <span className="ml-3 text-accent">
                  ◆
                </span>
              </span>
            );
          })}

          {/* Duplicate for continuous scrolling */}

          {topBarItems.map((item) => {
            const Icon = item.icon;

            return (
              <span
                key={`duplicate-${item.text}`}
                className="
                  mx-8
                  flex
                  shrink-0
                  items-center
                  gap-2
                  whitespace-nowrap
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wider

                  sm:mx-10
                  sm:text-xs
                "
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />

                <span>
                  {item.text}
                </span>

                <span className="ml-6 text-accent">
                  ◆
                </span>
              </span>
            );
          })}

        </div>
      </div>

      {/* Navigation */}

      <nav className="w-full bg-dark5 backdrop-blur-xl backdrop-saturate-180 border-b border-dark2">

        <div
          className="
            mx-auto
            flex
            min-h-20.5
            w-full
            max-w-300
            items-center
            justify-between
            px-4

            sm:px-6

            md:px-8

            lg:px-0
            xl:px-0
          "
        >

          {/* Logo */}

          <Link
            to="/"
            className="
              flex
              shrink-0
              items-center
              gap-3
            "
          >
            <img
              src={logo}
              alt="CFCCF Logo"
              className="
                h-12
                w-12
                object-contain

                sm:h-14
                sm:w-14
              "
            />

            <div className="flex flex-col">

              <span
                className="
                  text-sm
                  font-medium
                  leading-5
                  text-accent-light

                  sm:text-base
                  sm:leading-6

                  md:text-lg
                "
              >
                CONSORTIUM OF FILM &amp; CONTENT
              </span>

              <span
                className="
                  text-sm
                  font-medium
                  leading-5
                  text-accent-light

                  sm:text-base
                  sm:leading-6

                  md:text-lg
                "
              >
                CREATORS FESTIVAL 2027
              </span>

            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center lg:flex">

            <div
              className="
                flex
                items-center
                gap-6

                xl:gap-8
              "
            >

              {navLinks.map((link) =>
                link.path.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.path}
                    className="
                group
                relative
                py-1
                text-sm
                font-medium
                tracking-wide
                transition-all
                duration-300
                ease-in-out
                text-primary1
                hover:-translate-y-0.5
                hover:text-primary2
                xl:text-base
            "
                  >
                    {link.label}

                    <span
                      className="
                    pointer-events-none
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    w-0
                    rounded
                    bg-[linear-gradient(90deg,var(--cream),var(--brick-light))]
                    shadow-[0_0_8px_rgba(237,217,181,0.5)]
                    transition-[width]
                    duration-300
                    ease-out
                    group-hover:w-full
                "
                    />
                  </a>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `
                group
                relative
                py-1
                text-sm
                font-medium
                tracking-wide
                transition-all
                duration-300
                ease-in-out
                xl:text-base
                ${isActive
                        ? "text-primary2"
                        : "text-primary1"
                      }
                hover:-translate-y-0.5
                hover:text-primary2
                `
                    }
                  >
                    <>
                      {link.label}

                      <span
                        className="
                        pointer-events-none
                        absolute
                        -bottom-1
                        left-0
                        h-px
                        w-0
                        rounded
                        bg-[linear-gradient(90deg,var(--cream),var(--brick-light))]
                        shadow-[0_0_8px_rgba(237,217,181,0.5)]
                        transition-[width]
                        duration-300
                        ease-out
                        group-hover:w-full
                    "
                      />
                    </>
                  </NavLink>
                )
              )}
              {/* Header Buttons */}

              {headerButtons.map((button) => (
                <Link
                  key={button.label}
                  to={button.path}
                  className={`
      oswald              
      rounded-lg
      border
      px-5
      py-2.5
      text-sm
      font-semibold
      tracking-wide
      
      backdrop-blur-sm
      transition-all
      duration-300
      ease-in-out
      hover:-translate-y-0.5
      hover:shadow-[0_14px_30px_-3px_var(--glow-brick)]
      bg-secondery-dark

      ${button.type === "primary"
                      ? `
            border-[#edd9b52e]
            bg-primary-light
            text-accent-light
            hover:bg-primary
            hover:border-primary
          `
                      : `
            border-primary-light1
            bg-transparent
            text-accent-light
            hover:border-accent
            hover:bg-primary
          `
                    }
    `}
                >
                  {button.label}
                </Link>
              ))}

            </div>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              border
              border-accent/50
              text-accent-light
              transition-all
              duration-300
              ease-in-out

              hover:border-accent
              hover:bg-primary-light

              lg:hidden
            "
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}

        {isMenuOpen && (
          <div
            className="
              border-t
              border-primary-light
              bg-primary-dark
              px-4
              py-5

              sm:px-6

              md:px-8

              lg:hidden
            "
          >
            <div
              className="
                mx-auto
                flex
                w-full
                max-w-300
                flex-col
                gap-2
              "
            >

              {/* Mobile Nav Links */}

              {navLinks.map((link) =>
                link.path.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="
                rounded-md
                px-4
                py-2.5
                text-sm
                font-medium
                tracking-wide
                text-primary1
                transition-all
                duration-300
                ease-in-out
                hover:-translate-y-0.5
                hover:bg-purple
                hover:text-primary2
            "
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                rounded-md
                px-4
                py-2.5
                text-sm
                font-medium
                tracking-wide
                transition-all
                duration-300
                ease-in-out
                ${isActive
                        ? "bg-purple text-accent-light"
                        : "text-primary1"
                      }
                
                hover:bg-purple
                hover:text-primary2
                `
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}

              {/* Mobile Buttons */}

              <div
                className="
                  mt-3
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                "
              >

                {headerButtons.map((button) => (
                  <Link
                    key={button.label}
                    to={button.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      w-full
                      rounded-lg
                      border
                      px-5
                      py-2.5
                      text-center
                      text-sm
                      font-semibold
                      tracking-wide
                      transition-all
                      duration-300
                      ease-in-out

                      ${button.type === "primary"
                        ? `
                            border-primary-light
                            bg-primary-light
                            text-accent-light
                            hover:bg-primary
                            hover:border-primary
                          `
                        : `
                            border-primary-light
                            bg-primary-light
                            text-accent-light
                            hover:bg-primary
                            hover:border-primary
                          `
                      }
                    `}
                  >
                    {button.label}
                  </Link>
                ))}

              </div>

            </div>
          </div>
        )}

      </nav>

    </header>
  );
}

export default Header;