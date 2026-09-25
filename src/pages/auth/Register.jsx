import { useState } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { TriangleAlert } from "lucide-react";
import { GoCreditCard } from "react-icons/go";

import {
    InputField,
    Button,
} from "../../components/FormComponent";


function Register() {
    const [formData, setFormData] = useState({
        filmmakerName: "",
        projectTitle: "",
        hours: "",
        minutes: "",
        seconds: "",
        productionDate: "",
        trailerDriveLink: "",
        fullFilmDriveLink: "",
        castDetails: "",
        producerDetails: "",
        directorsNote: "",
        transactionUtr: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    const inputClassName = `
        border-[rgba(237,217,181,0.15)]
        bg-[rgba(255,255,255,0.03)]
        text-accent-light
    `;

    const durationInputClassName = `
        w-full
        text-center
        border-[rgba(237,217,181,0.15)]
        bg-[rgba(255,255,255,0.03)]
        text-accent-light
        placeholder:text-white/40
    `;

    return (
        <main className="min-h-screen bg-brand-gradient">

            <section
                className="
                    w-full
                    bg-linear-to-b
                    from-primary-light
                    via-primary
                    to-primary-dark
                    px-4
                    py-16
                    sm:px-6
                    sm:py-20
                    md:px-8
                    lg:py-20
                "
            >

                <div
                    className="
                        mx-auto
                        flex
                        w-full
                        max-w-300
                        flex-col
                        items-center
                    "
                >

                    {/* Label */}

                    <div
                        className="
                            mb-8
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

                            {/* Animated outer light */}

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

                            {/* Static center light */}

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

                        CFCCF 2027 · KOLKATA CHAPTER
                    </div>


                    {/* Heading */}

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
                        Official Film Submission
                    </h1>


                    {/* Subtitle */}

                    <p
                        className="
                            mt-3
                            text-center
                            text-sm
                            text-accent1
                            sm:text-base
                        "
                    >
                        Submit your work to the CFCCF Festival — Kolkata Chapter 2027
                    </p>


                    {/* Registration Form */}

                    <form
                        onSubmit={handleSubmit}
                        className="
                            relative
                            mt-12
                            w-full
                            max-w-207.5
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[rgba(237,217,181,0.15)]
                            bg-[rgba(255,255,255,0.03)]
                            p-6
                            shadow-[0_24px_80px_rgba(0,0,0,0.5)]
                            backdrop-blur-lg
                            sm:mt-10
                            sm:p-8
                            md:p-10
                        "
                    >

                        {/* Form top light */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-10
                                right-10
                                top-0
                                h-px
                                bg-linear-to-r
                                from-transparent
                                via-[rgba(237,217,181,0.5)]
                                to-transparent
                            "
                        />


                        {/* Name of Filmmaker */}

                        <InputField
                            label="Name of Filmmaker"
                            name="filmmakerName"
                            value={formData.filmmakerName}
                            onChange={handleChange}
                            helperText="Enter the primary filmmaker name."
                            inputClassName={inputClassName}
                        />


                        {/* Title of Project */}

                        <InputField
                            label="Title of Project"
                            name="projectTitle"
                            value={formData.projectTitle}
                            onChange={handleChange}
                            helperText="Official title of your film."
                            className="mt-6"
                            inputClassName={inputClassName}
                        />


                        {/* Duration */}

                        <div className="mt-6">

                            <label
                                className="
                                    mb-2
                                    block
                                    text-[11px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-accent-light
                                "
                            >
                                Duration (HH : MM : SS)
                            </label>

                            <div
                                className="
                                    flex
                                    w-full
                                    gap-2
                                    sm:gap-3
                                "
                            >

                                {/* Hours */}

                                <InputField
                                    name="hours"
                                    type="text"
                                    value={formData.hours}
                                    onChange={handleChange}
                                    placeholder="HH"
                                    inputClassName={`
                                        ${durationInputClassName}
                                        [appearance:textfield]
                                    `}
                                    className="w-full"
                                />

                                {/* Minutes */}

                                <InputField
                                    name="minutes"
                                    type="text"
                                    value={formData.minutes}
                                    onChange={handleChange}
                                    placeholder="MM"
                                    inputClassName={`
                                        ${durationInputClassName}
                                        [appearance:textfield]
                                    `}
                                    className="w-full"
                                />

                                {/* Seconds */}

                                <InputField
                                    name="seconds"
                                    type="text"
                                    value={formData.seconds}
                                    onChange={handleChange}
                                    placeholder="SS"
                                    inputClassName={`
                                        ${durationInputClassName}
                                        [appearance:textfield]
                                    `}
                                    className="w-full"
                                />

                            </div>

                        </div>


                        {/* Production Date */}

                        <InputField
                            label="Production Date"
                            name="productionDate"
                            type="date"
                            value={formData.productionDate}
                            onChange={handleChange}
                            className="mt-6"
                            inputClassName="
                                text-accent-light
                                uppercase
                                [color-scheme:dark]
                                [&::-webkit-calendar-picker-indicator]:opacity-100
                                [&::-webkit-calendar-picker-indicator]:invert
                            "
                        />


                        {/* Trailer Drive Link */}

                        <InputField
                            label="Trailer Drive Link"
                            name="trailerDriveLink"
                            type="url"
                            value={formData.trailerDriveLink}
                            onChange={handleChange}
                            helperText="Google Drive links only."
                            className="mt-6"
                            inputClassName={inputClassName}
                        />


                        {/* Full Film Drive Link */}

                        <InputField
                            label="Full Film Drive Link"
                            name="fullFilmDriveLink"
                            type="url"
                            value={formData.fullFilmDriveLink}
                            onChange={handleChange}
                            helperText="Upload privately and share link."
                            className="mt-6"
                            inputClassName={inputClassName}
                        />


                        {/* Cast Details */}

                        <InputField
                            label="Cast Details"
                            name="castDetails"
                            value={formData.castDetails}
                            onChange={handleChange}
                            className="mt-6"
                            inputClassName={inputClassName}
                        />


                        {/* Producer Details */}

                        <InputField
                            label="Producer Details"
                            name="producerDetails"
                            value={formData.producerDetails}
                            onChange={handleChange}
                            className="mt-6"
                            inputClassName={inputClassName}
                        />


                        {/* Director's Note */}

                        <InputField
                            label="Director's Note"
                            name="directorsNote"
                            type="textarea"
                            value={formData.directorsNote}
                            onChange={handleChange}
                            className="mt-6"
                            inputClassName="
                                min-h-[150px]
                                w-full
                                resize-none
                                px-4
                                py-3
                            "
                        />


                        {/* Payment & Verification */}

                        <div
                            className="
                                mt-6
                                rounded-xl
                                border
                                border-[rgba(237,217,181,0.15)]
                                bg-[rgba(255,255,255,0.03)]
                                p-6
                                backdrop-blur-md
                            "
                        >

                            <h2
                                className="
                                    cinzel
                                    flex
                                    items-center
                                    gap-3
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-primary2
                                "
                            >

                                <span
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-primary-dark1
                                        bg-rose-dark1
                                        text-accent-light
                                    "
                                >
                                    <GoCreditCard size={17} />
                                </span>

                                Payment & Verification

                            </h2>


                            {/* Step 1 */}

                            <div
                                className="
                                    mt-6
                                    rounded-lg
                                    border
                                    border-[rgba(237,217,181,0.15)]
                                    bg-[rgba(255,255,255,0.03)]
                                    p-5
                                    backdrop-blur-md
                                "
                            >

                                <p
                                    className="
                                        text-[13px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-brown
                                    "
                                >
                                    Step 1 — Complete Payment Form
                                </p>


                                <p
                                    className="
                                        cinzel
                                        mt-3
                                        text-sm
                                        leading-6
                                        text-white/60
                                    "
                                >
                                    Click the button below to open the official
                                    payment form. Complete the payment, note down
                                    your Transaction UTR number, then return here
                                    to finish your registration.
                                </p>


                                <Button
                                    type="button"
                                    className="
                                        mt-4
                                        flex
                                        items-center
                                        gap-3
                                        border-secondary-dark
                                        bg-blue
                                        px-5
                                        py-2.5
                                        text-sm
                                        text-blue
                                        hover:bg-primary
                                    "
                                >
                                    <FaExternalLinkAlt size={13} />

                                    <span>
                                        OPEN PAYMENT FORM
                                    </span>
                                </Button>

                            </div>


                            {/* Step 2 */}

                            <div className="mt-6">

                                <InputField
                                    label="Step 2 — Enter Transaction UTR Number"
                                    name="transactionUtr"
                                    value={formData.transactionUtr}
                                    onChange={handleChange}
                                    placeholder="e.g. 123456789012"
                                    inputClassName={inputClassName}
                                />

                            </div>


                            {/* Warning */}

                            <div
                                className="
                                    mt-4
                                    flex
                                    gap-3
                                    rounded-lg
                                    border
                                    border-orange
                                    bg-orange
                                    p-4
                                "
                            >

                                <TriangleAlert
                                    className="mt-0.5 shrink-0 text-accent"
                                    size={20}
                                    strokeWidth={2}
                                />

                                <p
                                    className="
                                        text-xs
                                        leading-5
                                        text-orange
                                    "
                                >
                                    <strong>
                                        Be careful while filling this up.
                                    </strong>{" "}
                                    Payments made will be verified through the
                                    UTR ID, and only upon finding a valid match
                                    with your submitted film proceed for further
                                    judgments. Incorrect or mismatched IDs may
                                    result in your submission being disqualified.
                                </p>

                            </div>

                        </div>


                        {/* Register Button */}

                        <Button
                            type="submit"
                            className="
                                cinzel
                                mt-6
                                w-full
                                border-primary-light
                                bg-primary-light
                                px-6
                                py-3
                                text-sm
                                font-bold
                                tracking-widest
                                text-accent-light
                                hover:-translate-y-0.5
                                hover:bg-primary-light
                                hover:shadow-[0_10px_30px_rgba(139,46,46,0.35)]
                            "
                        >
                            REGISTER NOW
                        </Button>

                    </form>

                </div>

            </section>

        </main>
    );
}

export default Register;