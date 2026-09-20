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


      <nav className="w-full bg-primary-dark">

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


          <div className="hidden items-center lg:flex">

            <div
              className="
                                flex
                                items-center
                                gap-6

                                xl:gap-8
                            "
            >

              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    [
                      "relative",
                      "py-2",
                      "text-sm",
                      "font-medium",
                      "tracking-wide",
                      "transition",
                      "hover:text-accent-light",
                      "xl:text-base",
                      "after:absolute",
                      "after:bottom-0",
                      "after:left-0",
                      "after:h-0.5",
                      "after:bg-accent",
                      "after:transition-all",
                      "after:duration-300",
                      "hover:after:w-full",
                      isActive
                        ? "text-accent-light after:w-full"
                        : "text-white/70 after:w-0",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}


              {headerButtons.map((button) => (

                <Link
                  key={button.label}
                  to={button.path}
                  className={`
            rounded-lg
            border
            px-5
            py-2.5
            text-sm
            font-semibold
            tracking-wide
            transition

            ${button.type === "primary"
                      ? `
                        border-primary-light
                        bg-primary-light
                        text-accent-light
                        hover:bg-primary
                    `
                      : `
                        border-accent/50
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
                                max-w-[1200px]
                                flex-col
                                gap-4
                            "
            >

              {navLinks.map((link) => (

                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                                        text-sm
                                        font-medium
                                        tracking-wide
                                        text-white/70
                                        transition

                                        hover:text-accent-light
                                    "
                >
                  {link.label}
                </Link>

              ))}


              <div
                className="
                                    mt-2
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
                                            rounded-lg
                                            border
                                            px-5
                                            py-2.5
                                            text-center
                                            text-sm
                                            font-semibold
                                            tracking-wide
                                            transition

                                            ${button.type === "primary"
                        ? `
                                                        border-primary-light
                                                        bg-primary-light
                                                        text-accent-light
                                                        hover:bg-primary
                                                    `
                        : `
                                                        border-accent/50
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

          </div>

        )}

      </nav>

    </header>
  );
}


export default Header;