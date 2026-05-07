import assets from "../../assets/assets";

const services = {
  "web-development": {
    title: "Web Development",
    subtitle: "Build scalable, high-performance websites",
    description:
      "We create fast, modern, and conversion-focused websites tailored to your business.",
    image: "/images/web.jpg",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "High Performance",
      "Custom Development"
    ]
  },

  "graphic-design": {
    title: "Graphic Designing",
    subtitle: "Designs that speak your brand",
    description:
      "We craft visually stunning graphics that connect with your audience.",
    image: "/images/graphic.jpg",
    features: [
      "Brand Identity",
      "Social Media Creatives",
      "Marketing Assets",
      "UI Design"
    ]
  },

  // 🔥 UPDATED SOCIAL MEDIA SERVICE
  "social-media": {
    title: "Social Media Growth",
    subtitle: "All 100% real engagement from real accounts",
    description:
      "We provide consistent growth with real engagement including likes, comments, reposts and high video views. (20 posts per month)",

    image: assets.social2,

    features: [
      "Real Likes & Comments",
      "High Video Views",
      "Reposts Included",
      "Monthly Growth (20 Posts)"
    ],

    // 🔥 Engagement Packages
    packages: [
      {
        name: "Starter Package",
        price: "$99/month",
        details: [
          "500 Real Likes",
          "30 Real Comments",
          "10 Repost",
          "2,000 Video Views"
        ]
      },
      {
        name: "Basic Package",
        price: "$189/month",
        details: [
          "1,000 Real Likes",
          "50 Real Comments",
          "15 Repost",
          "4,000 Video Views"
        ]
      },
      {
        name: "Standard Package",
        price: "$249/month",
        details: [
          "1,500 Real Likes",
          "50 Real Comments",
          "20 Repost",
          "10,000 Video Views"
        ]
      },
      {
        name: "Advanced Package",
        price: "$399/month",
        details: [
          "3,000 Real Likes",
          "60 Real Comments",
          "50 Repost",
          "20,000 Video Views"
        ]
      },
      {
        name: "Pro Package",
        price: "$999/month",
        details: [
          "10,000 Real Likes",
          "60 Real Comments",
          "100+ Repost",
          "100,000+ Video Views"
        ]
      }
    ],

    // 🔥 USA Followers Section
    usaFollowers: [
      { name: "1,000 USA Followers", price: "$89" },
      { name: "2,000 USA Followers", price: "$179" },
      { name: "5,000 USA Followers", price: "$449" },
      { name: "10,000 USA Followers", price: "$799" },
      { name: "20,000 USA Followers", price: "$1,499" }
    ],

    // 🔥 International Followers Section
    internationalFollowers: [
      { name: "10,000 International Followers", price: "$299" },
      { name: "20,000 International Followers", price: "$549" },
      { name: "50,000 International Followers", price: "$999" },
      { name: "100,000 International Followers", price: "$1,799" },
      { name: "200,000 International Followers", price: "$2,999" }
    ]
  },

  "advertising": {
    title: "Advertising",
    subtitle: "Turn clicks into customers",
    description:
      "We create high-converting ad campaigns that drive real results.",
    image: "/images/ads.jpg",
    features: [
      "Paid Campaigns",
      "Lead Generation",
      "Analytics Tracking",
      "ROI Optimization"
    ]
  }
};

export default services;