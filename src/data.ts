interface MenuLinksTypes {
  text: string;
  link: string;
}

interface BenefitsTypes {
  icon: string;
  text: string;
}

export const menuLinks: MenuLinksTypes[] = [
  {
    text: "Home",
    link: "#hero",
  },
  {
    text: "Find Doctors",
    link: "/find-doctors",
  },
  {
    text: "About Us",
    link: "/about-us",
  },
];

export const benefits: BenefitsTypes[] = [
  {
    icon: "/speech-bubble.svg",
    text: "Convenient Online & In-Clinic Consultations",
  },
  {
    icon: "/shield.svg",
    text: `Safe and Effective Treatment`,
  },
  {
    icon: "/doctor.svg",
    text: "Experienced Ayurvedic Practitioners ",
  },
  {
    icon: "/prescription.svg",
    text: "Personalized Treatment Plans & Guidance",
  },
];

export const ayurvedaMagicBenefits = [
  {
    icon: "/central-logo-1.svg",
    heading: "Personalized Wellness",
    text: "Get treatements made just for you based on your individual doshas (body type)",
    bgColor: "#EDF5FA",
    position:"top-0 left-5"
  },
  {
    icon: "/central-logo-2.svg",
    heading: "Focus on prevention",
    text: "Stop problems even before they start",
    bgColor: "#EAF2EA",
    position:""
  },
  {
    icon: "/central-logo-3.svg",
    heading: "Mind-Body Connection",
    text: "Keep your mind and body in sync for a happy life.",
    bgColor: "#FCF1F1",
    position:""
  },
  {
    icon: "/central-logo-4.svg",
    heading: "Mind-Body Connection",
    text: "Get treatements made just for you based on your individual doshas (body type)",
    bgColor: "#EDF5FA",
    position:""
  },
  {
    icon: "/central-logo-5.svg",
    heading: "Personalized Wellness",
    text: "Get treatements made just for you based on your individual doshas (body type)",
    bgColor: "#EDF5FA",
    position:""
  },
  {
    icon: "/central-logo-6.svg",
    heading: "Personalized Wellness",
    text: "Get treatements made just for you based on your individual doshas (body type)",
    bgColor: "#EDF5FA",
    position:""
  },
];

export const approachSteps = [
  {
    approachStep: 1,
    heading: "Make Appointment",
    text:"You must make an appointment in advance, to choose the service and date."
  },
  {
    approachStep: 2,
    heading: "Consultations",
    text:"The next stage involves a thorough consultation with an Ayurveda practitioner."
  },
  {
    approachStep: 3,
    heading: "Treatment Planning",
    text:"The Ayurvedic practitioner creates a personalized treatment plan for you."
  },
  {
    approachStep: 4,
    heading: "Maintenance",
    text:"These visits allow for assessment of progress, adjustments to the treatment."
  },
]
