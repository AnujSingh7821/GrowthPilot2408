const services = {
  "web-development": {
    title: "Web Development",
    subtitle: "Build scalable, high-performance websites",
    description: "We create fast, modern, and conversion-focused websites tailored to your business.",
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
    description: "We craft visually stunning graphics that connect with your audience.",
    image: "/images/graphic.jpg",
    features: [
      "Brand Identity",
      "Social Media Creatives",
      "Marketing Assets",
      "UI Design"
    ]
  },

  // 🔥 UPDATED FULL SOCIAL MEDIA SERVICE
  "social-media": {
    title: "Social Media Growth",
    subtitle: "Real engagement & followers from real accounts",
    description:
      "We help you grow your social media with real engagement, high-quality followers, and powerful growth strategies.",

    image: "/images/social.jpg",

    features: [
      "Real Likes, Comments & Shares",
      "High Video Views",
      "USA Targeted Followers",
      "Monthly Growth Plans"
    ],

    // 🔥 Engagement Packages
    packages: [
      {
        name: "Starter Package",
        price: "$99/month",
        details: [
          "500 Real Likes",
          "30 Real Comments",
          "100 Real Saves",
          "2,000 Video Views"
        ]
      },
      {
        name: "Basic Package",
        price: "$189/month",
        details: [
          "1,000 Real Likes",
          "50 Real Comments",
          "150 Real Saves",
          "4,000 Video Views"
        ]
      },
      {
        name: "Standard Package",
        price: "$249/month",
        details: [
          "1,500 Real Likes",
          "50 Real Comments",
          "250 Shares",
          "10,000 Video Views"
        ]
      },
      {
        name: "Advanced Package",
        price: "$399/month",
        details: [
          "3,000 Real Likes",
          "60 Real Comments",
          "500 Real Shares",
          "20,000 Video Views"
        ]
      },
      {
        name: "Pro Package",
        price: "$999/month",
        details: [
          "10,000 Real Likes",
          "60 Real Comments",
          "500+ Saves",
          "100,000+ Video Views"
        ]
      }
    ],

    // 🔥 Followers Packages
    followers: [
      { name: "1,000 HQ USA Followers", price: "$89" },
      { name: "2,000 HQ USA Followers", price: "$179" },
      { name: "5,000 HQ USA Followers", price: "$449" },
      { name: "10,000 HQ USA Followers", price: "$799" },
      { name: "20,000 HQ USA Followers", price: "$1,499" }
    ]
  },

  "advertising": {
    title: "Advertising",
    subtitle: "Turn clicks into customers",
    description: "We create high-converting ad campaigns that drive real results.",
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