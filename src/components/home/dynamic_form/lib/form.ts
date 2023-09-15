import { FormSection,InputProps } from "../types";

export const forms: { [K in FormSection]: InputProps[] } =
{

    register: [
        {
            label: "E-mail address",
            type: "email",
            name: "email",
            placeholder: "xyz@abc.com",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Email is required"
                },
                {
                    type: "isEmail",
                    message: "Email no valid"
                }
            ],

        },
        {
            label: "New username",
            type: "text",
            name: "username",
            placeholder: "New username",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characters",
                },
                {
                    type: "required",
                    message: "Username is required"
                },
            ],

        },
        {
            label: "New Password",
            type: "password",
            name: "password",
            placeholder: "New password",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Password is required"
                },
                {
                    type: "minLength",
                    value: 5,
                    message: "Min. 5 characters",
                }
            ],

        },
        {
            label: 'Repeat your password',
            type: "password",
            name: "repeat_password",
            placeholder: "Repeat password",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Repeat password is required"
                },
                {
                    type: "minLength",
                    value: 5,
                    message: "Min. 5 characters",
                },
                {
                    type: 'oneOf',
                    message: 'Passwords must match',
                    ref: 'password'
                }
            ],

        },

    ],

    another: [
        {
            label: "Name of the Company",
            type: "text",
            name: "company_name",
            placeholder: "Finemake",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Company name is required"
                }
            ],
        },
        {
            label: "Contact Person Name",
            type: "text",
            name: "contact_name",
            placeholder: "Abhishek",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Contact name is required"
                }
            ],
        },
        {
            label: "Address",
            type: "textarea",
            name: "address",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Full Address is required"
                }
            ],
        },
        {
            label: "City",
            type: "text",
            name: "city",
            placeholder: "Enter your city name",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "City name is required"
                }
            ],
        },
        {
            label: "State",
            type: "text",
            name: "state",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: ""
                }
            ],
        },
        {
            label: "Pincode",
            type: "text",
            name: "pincde",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "pincode name is required"
                }
            ],
        },
        {
            label: "E-mail address",
            type: "email",
            name: "email",
            placeholder: "xyz@abc.com",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Email is required"
                },
                {
                    type: "isEmail",
                    message: "Email no valid"
                }
            ],

        },
        {
            label: "Contact Number",
            type: "text",
            name: "contact_number",
            placeholder: "XXX XXX 0069",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Email is required"
                },
                {
                    type: "minLength",
                    message: "Email no valid"
                }
            ],

        },
        {
            type: "radio",
            name: "customer_group",
            label: "Customer Group: ",
            value: "",
            options: [
                {
                    value: 'Architect',
                    desc: "Architect"
                },
                {
                    value: "Interior Designer",
                    desc: "Designer"
                },
                {
                    value: 'Freelancer',
                    desc: "Freelancer"
                },
                {
                    value: 'Showroom',
                    desc: "Showroom"
                },
                {
                    value: "other",
                    desc: "Other"
                },
            ],
            validations: [
                {
                    type: "required",
                    message: "Gender is required"
                }
            ]
        },
        {
            label: "About your Business",
            type: "title",
            name: "blank",
            placeholder: "",
            value: "",
            validations: [],
        },
        {
            label: "How many interior design projects do you typically undertake in a month ?",
            type: "text",
            name: "project_cap",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "This field is required"
                }
            ],

        },
        {
            type: "radio",
            name: "project_size",
            label: "What size of projects do you handle?",
            value: "",
            options: [
                {
                    value: '2bhk/3bhk',
                    desc: "2BHK / 3BHK"
                },
                {
                    value: "villa/Luxurious homes",
                    desc: "Villa / Luxurious homes"
                },
                {
                    value: 'commercial',
                    desc: 'Commercial'
                }
            ],
            validations: [
                {
                    type: "required",
                    message: "Select one of the option provided"
                }
            ]
        },
        {
            type: "radio",
            name: "isStudio",
            label: "Do you have a showroomyStudio?",
            value: "",
            options: [
                {
                    value: "true",
                    desc: "Yes"
                },
                {
                    value: "false",
                    desc: "No"
                }
            ],
            validations: [
                {
                    type: "required",
                    message: "Select one of options provided"
                }
            ]
        },
        {
            label: "How many designers are there in your team?",
            type: "text",
            name: "team_cap",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "This field is required"
                }
            ],

        },
        {
            label: "How many years of combined experience do you have in the interior design industry?",
            type: "text",
            name: "experience",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "This field is required"
                }
            ],

        },
        {
            label: "Which cities are you looking to do projects in?",
            type: "textarea",
            name: "project_cites",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "This field is required"
                }
            ],

        },
        {
            label: "Can you highlight some notable projects you have worked on in the past?",
            type: "textarea",
            name: "experience_des",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "This field is required"
                }
            ],

        },
        {
            label: "Mention some of the key problems you face in your business.",
            type: "textarea",
            name: "key_problems",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "This field is required"
                }
            ],

        },
        {
            type: "checkbox",
            name: "services_finemake",
            label: "What services would you like to avail from Finemake?",
            value: "",
            options: [
                {
                    value: 'showroom support',
                    desc: "Showroom Support"
                },
                {
                    value: "Designer Services",
                    desc: "Designer Services"
                },
                {
                    value: 'Finished Modular Solution',
                    desc: "Finished Modular Solution"
                },
                {
                    value: "Training & Upgradation",
                    desc: "Training & Upgradation"
                },
                {
                    value: 'Lead Support',
                    desc: "Lead Support"
                },
                {
                    value: "Access to skilled Installers & others Service Providers",
                    desc: "Access to skilled Installers & others Service Providers"
                },
                {
                    value: 'Marketing Assistances',
                    desc: "Marketing Assistances"
                },
                {
                    value: "Samples",
                    desc: "Samples"
                }
            ],
            validations: [
                {
                    type: "required",
                    message: "Select one of options provided",
                }
            ]
        },
        {
            label: "Who invited you to the event?",
            type: "text",
            name: "invite_from",
            placeholder: "",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "This field is required"
                }
            ],

        }
        // {
        //     type: "select",
        //     name: "rol",
        //     label: "Select an option: ",
        //     value: "",
        //     options: [
        //         {
        //             value: "admin",
        //             desc: "Admin",
        //         },
        //         {
        //             value: "user",
        //             desc: "User"
        //         },
        //         {
        //             value: "super-admin",
        //             desc: "Super Admin"
        //         }
        //     ],
        //     validations: [
        //         {
        //             type: "required",
        //             message: "Rol is required"
        //         }
        //     ]
        // },
        // {
        //     type: "checkbox",
        //     name: "terms",
        //     typeValue: "boolean",
        //     label: "Terms and Conditions",
        //     value: false,
        //     validations: [
        //         {
        //             type: "isTrue",
        //             message: "Accept the terms!"
        //         }
        //     ]
        // }
    ]
}