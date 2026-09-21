import { useState } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { TriangleAlert, CreditCard } from "lucide-react";

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


    return (
        <main className="min-h-screen bg-primary-dark">

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
                            text-center
                            font-serif
                            text-4xl
                            font-bold
                            uppercase
                            leading-tight
                            tracking-wide
                            text-accent-light
                            sm:text-5xl
                            md:text-6xl
                            lg:text-[58px]
                        "
                    >
                        Official Film Submission
                    </h1>


                    {/* Subtitle */}

                    <p
                        className="
                            mt-5
                            text-center
                            text-sm
                            text-white/60
                            sm:text-base
                        "
                    >
                        Submit your work to the CFCCF Festival — Kolkata Chapter 2027
                    </p>


                    {/* Registration Form */}

                    <form
                        onSubmit={handleSubmit}
                        className="
                            mt-12
                            w-full
                            max-w-207.5
                            rounded-2xl
                            border
                            border-primary-light
                            bg-primary-light/40
                            p-6
                            sm:mt-14
                            sm:p-8
                            md:p-10
                        "
                    >

                        {/* Name of Filmmaker */}

                        <InputField
                            label="Name of Filmmaker"
                            name="filmmakerName"
                            value={formData.filmmakerName}
                            onChange={handleChange}
                            helperText="Enter the primary filmmaker name."
                            inputClassName="
                                h-11
                                w-full
                                px-4
                                text-sm
                            "
                        />


                        {/* Title of Project */}

                        <InputField
                            label="Title of Project"
                            name="projectTitle"
                            value={formData.projectTitle}
                            onChange={handleChange}
                            helperText="Official title of your film."
                            className="mt-6"
                            inputClassName="
                                h-11
                                w-full
                                px-4
                                text-sm
                            "
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

                            <div className="flex w-full gap-2 sm:gap-3">

                                <InputField
                                    name="hours"
                                    type="number"
                                    value={formData.hours}
                                    onChange={handleChange}
                                    placeholder="HH"
                                    inputClassName="
                h-11
                w-full
                px-3
                text-center
                text-sm
            "
                                />

                                <InputField
                                    name="minutes"
                                    type="number"
                                    value={formData.minutes}
                                    onChange={handleChange}
                                    placeholder="MM"
                                    inputClassName="
                h-11
                w-full
                px-3
                text-center
                text-sm
            "
                                />

                                <InputField
                                    name="seconds"
                                    type="number"
                                    value={formData.seconds}
                                    onChange={handleChange}
                                    placeholder="SS"
                                    inputClassName="
                h-11
                w-full
                px-3
                text-center
                text-sm
            "
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
                                h-11
                                w-full
                                px-4
                                text-sm
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
                            inputClassName="
                                h-11
                                w-full
                                px-4
                                text-sm
                            "
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
                            inputClassName="
                                h-11
                                w-full
                                px-4
                                text-sm
                            "
                        />


                        {/* Cast Details */}

                        <InputField
                            label="Cast Details"
                            name="castDetails"
                            value={formData.castDetails}
                            onChange={handleChange}
                            className="mt-6"
                            inputClassName="
                                h-11
                                w-full
                                px-4
                                text-sm
                            "
                        />


                        {/* Producer Details */}

                        <InputField
                            label="Producer Details"
                            name="producerDetails"
                            value={formData.producerDetails}
                            onChange={handleChange}
                            className="mt-6"
                            inputClassName="
                                h-11
                                w-full
                                px-4
                                text-sm
                            "
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
        px-4
        py-3
        text-sm
        resize-none
    "
                        />


                        {/* Payment & Verification */}

                        <div
                            className="
                                mt-2
                                rounded-xl
                                border
                                border-primary-light
                                bg-primary-light/20
                                p-6
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
                                    text-accent-light
                                "
                            >
                                <span
                                    className="
        flex
        h-7
        w-7
        items-center
        justify-center
        rounded-full
        border
        border-accent/40
        text-accent-light
    "
                                >
                                    <CreditCard size={15} strokeWidth={1.8} />
                                </span>

                                Payment & Verification
                            </h2>


                            {/* Step 1 */}

                            <div
                                className="
                                    mt-6
                                    rounded-lg
                                    border
                                    border-primary-light
                                    bg-primary-light/20
                                    p-5
                                "
                            >

                                <p
                                    className="
                                        text-[11px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-accent-light
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
        bg-primary-light
        px-5
        py-2.5
        text-sm
        text-accent-light!
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
                                    inputClassName="
                                        h-11
                                        w-full
                                        px-4
                                        text-sm
                                    "
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
                                    border-accent/40
                                    bg-accent/10
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
                                        text-accent-light
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
        px-6
        py-3
        text-sm
        font-bold
        tracking-widest
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