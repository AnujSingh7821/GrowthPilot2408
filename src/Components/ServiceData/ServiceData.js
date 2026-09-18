import assets from "../../assets/assets";

const services = {
  /* ================= SEO OPTIMIZATION ================= */

  "seo-optimization": {
    title: "SEO Optimization",

    subtitle:
      "Improve your visibility, rank higher on Google and grow your organic traffic.",

    description:
      "We create data-driven SEO strategies that help your website rank for relevant keywords, attract quality visitors and build long-term online visibility.",

    image: assets.SEO,

    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Competitor Analysis",
      "Content Optimization",
      "Performance Tracking",
    ],
  },

  /* ================= GRAPHIC DESIGN ================= */

  "graphic-design": {
    title: "Graphic Designing",

    subtitle: "Creative designs that make your brand stand out.",

    description:
      "We craft professional and visually engaging graphics that communicate your brand message and connect with your audience.",

    image: assets.social3,

    features: [
      "Brand Identity",
      "Social Media Creatives",
      "Marketing Assets",
      "UI Design",
    ],
  },

  /* ================= SOCIAL MEDIA ================= */

  "social-media": {
    title: "Social Media Growth",

    subtitle:
      "Grow faster on social media with real interactions, higher reach and powerful engagement strategies.",

    description:
      "Our social media growth solutions are designed to improve visibility, engagement and audience reach with consistent strategies.",

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
          "10 Repost",
          "2,000 Video Views",
        ],
      },

      {
        name: "Basic Package",
        price: "$189/month",
        details: [
          "1,000 Real Likes",
          "50 Real Comments",
          "15 Repost",
          "4,000 Video Views",
        ],
      },

      {
        name: "Standard Package",
        price: "$249/month",
        details: [
          "1,500 Real Likes",
          "50 Real Comments",
          "20 Repost",
          "10,000 Video Views",
        ],
      },

      {
        name: "Advanced Package",
        price: "$399/month",
        details: [
          "3,000 Real Likes",
          "60 Real Comments",
          "50 Repost",
          "20,000 Video Views",
        ],
      },

      {
        name: "Pro Package",
        price: "$999/month",
        details: [
          "10,000 Real Likes",
          "60 Real Comments",
          "100+ Repost",
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

    subtitle:
      "Reach the right audience and turn attention into real business results.",

    description:
      "We create targeted advertising campaigns designed to increase visibility, generate leads and improve your return on investment.",

    image: assets.work_dashboard_management,

    features: [
      "Paid Campaigns",
      "Audience Targeting",
      "Lead Generation",
      "Analytics Tracking",
      "Campaign Optimization",
      "ROI Optimization",
    ],
  },
};

export default services;