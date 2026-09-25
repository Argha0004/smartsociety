import React, { useState } from "react";
import {
    CalendarDays,
    Clock3,
    MapPin,
} from "lucide-react";
import visitorPassData from "../../data/data.json";

function VisitorPass() {
    const { page, eventInfo, form } = visitorPassData.visitorPass;

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Visitor Pass Data:", formData);
    };

    const eventIcons = {
        calendar: CalendarDays,
        location: MapPin,
        clock: Clock3,
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#150e0e] text-accent-light">
            {/* Main section */}

            <section className="relative py-16 md:py-20">
                {/* Background */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_50%_50%,rgba(139,46,46,0.08),transparent_55%)]
                    "
                />

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        flex
                        w-full
                        max-w-300
                        flex-col
                        gap-10
                        px-4
                        sm:px-6
                        md:px-8
                        lg:flex-row
                        lg:items-start
                        lg:gap-16
                        lg:px-0
                    "
                >
                    {/* Left content */}

                    <div
                        className="
                            flex
                            w-full
                            flex-col
                            lg:w-[40%]
                        "
                    >
                        <h1
                            className="
                                font-black
                                uppercase
                                leading-[0.95]
                                tracking-tight
                                text-accent-light
                                text-3xl
                                sm:text-4xl
                                md:text-5xl
                            "
                        >
                            {page.title.map((line, index) => (
                                <React.Fragment key={line}>
                                    {line}

                                    {index < page.title.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h1>

                        <div className="mt-5 flex flex-col gap-4">
                            {page.description.map((text) => (
                                <p
                                    key={text}
                                    className="
                                        max-w-xl
                                        text-sm
                                        leading-relaxed
                                        text-accent-light/75
                                        md:text-base
                                    "
                                >
                                    {text}
                                </p>
                            ))}
                        </div>

                        {/* Event information */}

                        <div className="mt-8 flex flex-wrap gap-3">
                            {eventInfo.map((item) => {
                                const Icon = eventIcons[item.icon];

                                return (
                                    <div
                                        key={item.text}
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-md
                                            border
                                            border-[#edd9b50f]
                                            bg-[#edd9b508]
                                            px-3
                                            py-2
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wide
                                            text-accent-light/80
                                            backdrop-blur-sm
                                        "
                                    >
                                        <Icon className="h-4 w-4 text-accent-light" />

                                        <span>{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right form */}

                    <div
                        className="
                            relative
                            w-full
                            lg:w-[60%]
                        "
                    >
                        {/* Decorative left shape */}

                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                -left-7
                                top-12
                                hidden
                                h-85
                                w-14
                                rounded-l-xl
                                border
                                border-primary-light1
                                bg-accent-light/[0.02]
                                lg:block
                            "
                        />

                        <div
                            className="
                                relative
                                rounded-2xl
                                border
                                border-primary-light
                                bg-primary-dark
                                p-5
                                shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                                backdrop-blur-md
                                sm:p-6
                                md:p-7
                            "
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4"
                            >
                                {/* Form heading */}

                                <div>
                                    <h2
                                        className="
                                            text-2xl
                                            font-black
                                            tracking-tight
                                            text-accent-light
                                        "
                                    >
                                        {form.title}
                                    </h2>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            text-accent-light/50
                                        "
                                    >
                                        {form.subtitle}
                                    </p>
                                </div>

                                {/* Full Name */}

                                <div>
                                    <label
                                        htmlFor={form.fullName.name}
                                        className="
                                            mb-2
                                            block
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wide
                                            text-accent-light
                                        "
                                    >
                                        {form.fullName.label}
                                    </label>

                                    <input
                                        id={form.fullName.name}
                                        name={form.fullName.name}
                                        type={form.fullName.type}
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder={form.fullName.placeholder}
                                        required
                                        className="
                                            flex
                                            h-10
                                            w-full
                                            rounded-md
                                            border
                                            border-[#edd9b526]
                                            bg-transparent
                                            px-3
                                            py-2
                                            text-sm
                                            text-accent-light
                                            outline-none
                                            ring-offset-[#2a1212]
                                            placeholder:text-accent-light/35
                                            transition-[transform,box-shadow,border-color]
                                            duration-200
                                            ease-out
                                            focus-visible:border-accent-light
                                            focus-visible:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-[#edd9b540]
                                            focus-visible:ring-offset-2
                                            focus:-translate-y-0.75
                                            focus:scale-[1.02]
                                            focus:shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                                        "
                                    />
                                </div>

                                {/* Email */}

                                <div>
                                    <label
                                        htmlFor={form.email.name}
                                        className="
                                            mb-2
                                            block
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wide
                                            text-accent-light
                                        "
                                    >
                                        {form.email.label}
                                    </label>

                                    <input
                                        id={form.email.name}
                                        name={form.email.name}
                                        type={form.email.type}
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={form.email.placeholder}
                                        required
                                        className="
                                            flex
                                            h-10
                                            w-full
                                            rounded-md
                                            border
                                            border-[#edd9b526]
                                            bg-transparent
                                            px-3
                                            py-2
                                            text-sm
                                            text-accent-light
                                            outline-none
                                            ring-offset-[#2a1212]
                                            placeholder:text-accent-light/35
                                            transition-[transform,box-shadow,border-color]
                                            duration-200
                                            ease-out
                                            focus-visible:border-accent-light
                                            focus-visible:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-[#edd9b540]
                                            focus-visible:ring-offset-2
                                            focus:-translate-y-0.75
                                            focus:scale-[1.02]
                                            focus:shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                                        "
                                    />
                                </div>

                                {/* Phone */}

                                <div>
                                    <label
                                        htmlFor={form.phone.name}
                                        className="
                                            mb-2
                                            block
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wide
                                            text-accent-light
                                        "
                                    >
                                        {form.phone.label}
                                    </label>

                                    <input
                                        id={form.phone.name}
                                        name={form.phone.name}
                                        type={form.phone.type}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={form.phone.placeholder}
                                        required
                                        className="
                                            flex
                                            h-10
                                            w-full
                                            rounded-md
                                            border
                                            border-[#edd9b526]
                                            bg-transparent
                                            px-3
                                            py-2
                                            text-sm
                                            text-accent-light
                                            outline-none
                                            ring-offset-[#2a1212]
                                            placeholder:text-accent-light/35
                                            transition-[transform,box-shadow,border-color]
                                            duration-200
                                            ease-out
                                            focus-visible:border-accent-light
                                            focus-visible:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-[#edd9b540]
                                            focus-visible:ring-offset-2
                                            focus:-translate-y-0.75
                                            focus:scale-[1.02]
                                            focus:shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                                        "
                                    />
                                </div>

                                {/* Submit */}

                                <button
                                    type="submit"
                                    className="
                                        mt-1
                                        w-fit
                                        rounded-md
                                        border
                                        border-primary-light
                                        bg-primary-light
                                        px-4
                                        py-2
                                        text-xs
                                        font-bold
                                        text-accent-light
                                        transition-all
                                        duration-300
                                        hover:bg-primary
                                        hover:-translate-y-0.5
                                        hover:shadow-[0_8px_20px_rgba(139,46,46,0.3)]
                                        active:scale-95
                                    "
                                >
                                    {form.submitButton}
                                </button>

                                {/* Terms */}

                                <p
                                    className="
                                        mt-1
                                        text-[10px]
                                        leading-relaxed
                                        text-accent-light/45
                                    "
                                >
                                    {form.terms}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default VisitorPass;