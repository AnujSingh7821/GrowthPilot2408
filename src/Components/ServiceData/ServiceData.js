import assets from "../../assets/assets";

const services = {
  /* ================= GRAPHIC DESIGN ================= */

  "graphic-design": {
    title: "Graphic Designing",

    subtitle: "Creative visuals that strengthen your brand.",

    description:
      "We create professional and engaging designs that help your brand communicate clearly and stand out across digital platforms.",

    image: "/images/graphic.jpg",

    features: [
      "Brand Identity",
      "Social Media Creatives",
      "Marketing Assets",
      "Creative Visual Design",
    ],
  },

  /* ================= SOCIAL MEDIA ================= */

  "social-media": {
    title: "Social Media Growth",

    subtitle:
      "Grow faster on social media with stronger reach, engagement and consistent growth strategies.",

    description:
      "Our social media growth solutions are designed to help improve visibility, engagement and audience reach.",

    image: assets.social3,

    features: [
      "Real Likes & Comments",
      "High Video Views",
      "Reposts Included",
      "Monthly Growth (20 Posts)",
    ],

    /* ENGAGEMENT PACKAGES */

    packages: [
      {
        name: "Starter Package",
        price: "$99/month",
        details: [
          "500 Real Likes",
          "30 Real Comments",
          "10 Reposts",
          "2,000 Video Views",
        ],
      },

      {
        name: "Basic Package",
        price: "$189/month",
        details: [
          "1,000 Real Likes",
          "50 Real Comments",
          "15 Reposts",
          "4,000 Video Views",
        ],
      },

      {
        name: "Standard Package",
        price: "$249/month",
        details: [
          "1,500 Real Likes",
          "50 Real Comments",
          "20 Reposts",
          "10,000 Video Views",
        ],
      },

      {
        name: "Advanced Package",
        price: "$399/month",
        details: [
          "3,000 Real Likes",
          "60 Real Comments",
          "50 Reposts",
          "20,000 Video Views",
        ],
      },

      {
        name: "Pro Package",
        price: "$999/month",
        details: [
          "10,000 Real Likes",
          "60 Real Comments",
          "100+ Reposts",
          "100,000+ Video Views",
        ],
      },
    ],

    /* USA FOLLOWERS */

    usaFollowers: [
      {
        name: "1,000 USA Followers",
        price: "$89",
      },
      {
        name: "2,000 USA Followers",
        price: "$179",
      },
      {
        name: "5,000 USA Followers",
        price: "$449",
      },
      {
        name: "10,000 USA Followers",
        price: "$799",
      },
      {
        name: "20,000 USA Followers",
        price: "$1,499",
      },
    ],

    /* INTERNATIONAL FOLLOWERS */

    internationalFollowers: [
      {
        name: "10,000 International Followers",
        price: "$299",
      },
      {
        name: "20,000 International Followers",
        price: "$549",
      },
      {
        name: "50,000 International Followers",
        price: "$999",
      },
      {
        name: "100,000 International Followers",
        price: "$1,799",
      },
      {
        name: "200,000 International Followers",
        price: "$2,999",
      },
    ],
  },

  /* ================= ADVERTISING ================= */

  advertising: {
    title: "Advertising",

    subtitle: "Reach the right audience and turn attention into results.",

    description:
      "We create strategic advertising campaigns focused on visibility, audience targeting, lead generation and measurable business growth.",

    image: "/images/ads.jpg",

    features: [
      "Paid Campaigns",
      "Audience Targeting",
      "Lead Generation",
      "Performance Optimization",
    ],
  },
};

export default services;