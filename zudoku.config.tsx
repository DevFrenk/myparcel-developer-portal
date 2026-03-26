import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "MyParcel",
      width: "140px",
    },
  },
  metadata: {
    title: "MyParcel Developer Portal",
    description:
      "API documentation for MyParcel shipping, order, and identity services",
  },
  topNavigation: [
    { id: "docs", label: "Guides" },
    { id: "shipping-api", label: "Shipping API" },
    { id: "order-api", label: "Order API" },
    { id: "iam-api", label: "IAM API" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Getting Started",
        icon: "sparkles",
        items: ["/introduction", "/getting-started", "/authentication"],
      },
      {
        type: "category",
        label: "Reference",
        icon: "book",
        items: ["/errors"],
      },
    ],
    "shipping-api": [
      {
        type: "link",
        label: "Shipping API Reference",
        to: "/api/shipping",
        icon: "package",
      },
    ],
    "order-api": [
      {
        type: "link",
        label: "Order API Reference",
        to: "/api/orders",
        icon: "shopping-cart",
      },
    ],
    "iam-api": [
      {
        type: "link",
        label: "IAM API Reference",
        to: "/api/iam",
        icon: "shield",
      },
    ],
  },
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./openapi/shipping-api.json",
      path: "/api/shipping",
      navigationId: "shipping-api",
    },
    {
      type: "file",
      input: "./openapi/order-api.json",
      path: "/api/orders",
      navigationId: "order-api",
    },
    {
      type: "file",
      input: "./openapi/iam-api.json",
      path: "/api/iam",
      navigationId: "iam-api",
    },
  ],
  theme: {
    light: {
      background: "30 20% 98%",
      foreground: "0 0% 10%",
      primary: "0 0% 10%",
      primaryForeground: "30 20% 98%",
      secondary: "30 10% 94%",
      secondaryForeground: "0 0% 10%",
      muted: "30 10% 90%",
      mutedForeground: "0 0% 42%",
      accent: "30 10% 90%",
      accentForeground: "0 0% 10%",
      border: "30 10% 87%",
      card: "0 0% 100%",
      cardForeground: "0 0% 10%",
    },
    dark: {
      background: "0 0% 7%",
      foreground: "0 0% 92%",
      primary: "0 0% 92%",
      primaryForeground: "0 0% 7%",
      secondary: "0 0% 12%",
      secondaryForeground: "0 0% 92%",
      muted: "0 0% 17%",
      mutedForeground: "0 0% 60%",
      accent: "0 0% 17%",
      accentForeground: "0 0% 92%",
      border: "0 0% 20%",
      card: "0 0% 10%",
      cardForeground: "0 0% 92%",
    },
  },
  customCss: `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap');

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Cormorant Garamond', Georgia, serif !important;
      font-weight: 300;
    }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
  `,
};

export default config;
