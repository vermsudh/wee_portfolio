export const contactInfo = {
  name: "Vanshika Verma",
  email: "vanshikaverma0201@gmail.com",
  phone: "+91 92054 35221",
  phoneRaw: "919205435221",
  location: "New Delhi, India",
  availability: "Available for work",
  responseTime: "Replies within 24hrs",
  remote: "Open to remote collaborations",
  whatsappMessage: "Hi Vanshika! I'd love to work with you.",
  instagram: "https://www.instagram.com/bas.kar.vanshikaa/",
  youtube: "https://www.youtube.com/@baskarvanshikaa/",
}

export const services = [
  "Content Creation",
  "Social Media Management",
  "Modeling & On-Camera",
  "Brand Strategy",
  "Full Package"
]

export const contactFormConfig = {
  intents: [
    { id: 'brand',    label: 'Brand Collaboration', icon: 'Handshake'      },
    { id: 'modeling', label: 'Modeling Gig',         icon: 'Camera'         },
    { id: 'other',    label: 'Just Saying Hi',       icon: 'MessageCircle'  },
  ],

  pathQuestions: {
    brand: [
      {
        key:      'collabType',
        question: 'What kind of collaboration are you looking for?',
        type:     'multi',
        options:  [
          { id: 'content-creation',    label: 'Content Creation'         },
          { id: 'social-media',        label: 'Social Media Management'  },
          { id: 'brand-shoot',         label: 'Brand Shoot/Modeling'     },
          { id: 'ugc',                 label: 'UGC'                      },
          { id: 'full-campaign',       label: 'Full Campaign'            },
        ],
      },
    ],

    modeling: [
      {
        key:      'shootType',
        question: "What type of shoot is this for?",
        type:     'single',
        options:  [
          { id: 'ethnic-wear',  label: 'Ethnic Wear'         },
          { id: 'jewellery',    label: 'Jewellery'           },
          { id: 'fashion',      label: 'Fashion'             },
          { id: 'lifestyle',    label: 'Lifestyle/Commercial' },
          { id: 'other',        label: 'Other'               },
        ],
      },
      {
        key:      'location',
        question: "Where's the shoot located?",
        type:     'single',
        options:  [
          { id: 'delhi-ncr',      label: 'Delhi/NCR'       },
          { id: 'outstation',     label: 'Outstation'      },
          { id: 'doesnt-matter',  label: "Doesn't matter"  },
        ],
      },
    ],

    other: [],
  },

  finalStepFields: {
    name:    { label: 'Name',          placeholder: 'Riya Kapoor',   required: true },
    contact: { label: 'Email or Phone', placeholder: 'email address', required: true },
  },
}