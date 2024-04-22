interface MenuLinksTypes {
  text: string;
  link: string;
}

interface BenefitsTypes {
  icon: string;
  text: string;
}

interface ApproachStepsTypes {
  approachStep: number;
  heading: string;
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

export const approachSteps: ApproachStepsTypes[] = [
  {
    approachStep: 1,
    heading: "Make Appointment",
    text: "You must make an appointment in advance, to choose the service and date.",
  },
  {
    approachStep: 2,
    heading: "Consultations",
    text: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
  },
  {
    approachStep: 3,
    heading: "Treatment Planning",
    text: "The Ayurvedic practitioner creates a personalized treatment plan for you.",
  },
  {
    approachStep: 4,
    heading: "Maintenance",
    text: "These visits allow for assessment of progress, adjustments to the treatment.",
  },
];

export const reviews = [
  {
    reviewType: "Skin",
    reviewerName: "Sophie Moore",
    reviewerImage: "/reviewer.png",
    reviewerLocation: "Chennai",
    reviewDate: "17/02/24",
    reviewStars: 4,
    reviewHeadline: "One of a kind service",
    reviewContent:
      "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    reviewType: "hair",
    reviewerName: "Sophie Moore",
    reviewerImage: "/reviewer.png",
    reviewerLocation: "Chennai",
    reviewDate: "19/02/24",
    reviewStars: 5,
    reviewHeadline: "One of a kind service",
    reviewContent:
      "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    reviewType: "Skin",
    reviewerName: "Sophie Moore",
    reviewerImage: "/reviewer.png",
    reviewerLocation: "Chennai",
    reviewDate: "17/02/24",
    reviewStars: 4,
    reviewHeadline: "One of a kind service",
    reviewContent:
      "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    reviewType: "Skin",
    reviewerName: "Sophie Moore",
    reviewerImage: "/reviewer.png",
    reviewerLocation: "Chennai",
    reviewDate: "17/02/24",
    reviewStars: 4,
    reviewHeadline: "One of a kind service",
    reviewContent:
      "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    reviewType: "Skin",
    reviewerName: "Sophie Moore",
    reviewerImage: "/reviewer.png",
    reviewerLocation: "Chennai",
    reviewDate: "17/02/24",
    reviewStars: 4,
    reviewHeadline: "One of a kind service",
    reviewContent:
      "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
];
