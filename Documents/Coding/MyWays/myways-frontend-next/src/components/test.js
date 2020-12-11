;[
    {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        title: internship.title,
        description: `<p>${internship.description}</p>`,
        identifier: {
            "@type": "PropertyValue",
            name: internship.recruiter[0].name,
            value: internship._id,
        },
        datePosted: toISOString(new Date(internship.created)),
        validThrough: toISOString(new Date(internship.startDate)),
        employmentType: internship.type,
        hiringOrganization: {
            "@type": "Organization",
            name: internship.recruiter[0].name,
            sameAs: internship.recruiter[0].website,
            logo: internship.recruiter[0].logo,
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "",
                addressRegion: internship.city,
                postalCode: "",
                addressCountry: "IN",
            },
        },
        baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
                "@type": "QuantitativeValue",
                value: internship.stipend.amount.minimum,
                unitText: internship.stipend.amount.duration.slice(1),
            },
        },
    },
]
