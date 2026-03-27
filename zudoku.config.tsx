import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "MyParcel",
      width: "180px",
    },
    footer: {
      columns: [
        {
          title: "Documentation",
          links: [
            { label: "Getting Started", href: "/getting-started" },
            { label: "WooCommerce", href: "https://developer.myparcel.nl/nl/documentatie/10.woocommerce.html" },
            { label: "Prestashop", href: "https://developer.myparcel.nl/nl/documentatie/11.prestashop.html" },
            { label: "Magento 2", href: "https://developer.myparcel.nl/nl/documentatie/13.magento2.html" },
            { label: "Shopify", href: "https://developer.myparcel.nl/nl/documentatie/14.shopify.html" },
            { label: "Shopware", href: "https://developer.myparcel.nl/nl/documentatie/15.shopware.html" },
            { label: "PHP SDK", href: "https://developer.myparcel.nl/documentation/50.php-sdk.html" },
            { label: "JS SDK", href: "https://developer.myparcel.nl/documentation/51.javascript-sdk.html" },
            { label: "Delivery Options", href: "https://developer.myparcel.nl/documentation/60.delivery-options.html" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: "Get in touch", href: "/contact" },
            { label: "Chat on Slack", href: "https://join.slack.com/t/myparcel-dev/shared_invite/zt-2zvk9gfs1-h6koDUduK6ZM_kZcc247AQ" },
            { label: "Become a partner", href: "https://www.myparcel.nl/partner-worden/" },
          ],
        },
        {
          title: "Links",
          links: [
            { label: "Status", href: "https://status.myparcel.nl/" },
            { label: "About us", href: "/about" },
            { label: "Careers", href: "https://www.myparcel.nl/vacature/development/" },
            { label: "GitHub", href: "https://github.com/myparcelnl/" },
            { label: "MyParcel", href: "https://www.myparcel.nl/" },
            { label: "SendMyParcel", href: "https://www.sendmyparcel.be/" },
            { label: "MyParcel Italy", href: "https://www.myparcel.com/" },
          ],
        },
        {
          title: "Legal",
          position: "end",
          links: [
            { label: "Terms & Conditions", href: "https://backoffice.myparcel.nl/static/myparcel-nederland/documentatie/voorwaarden/myparcel-algemene-voorwaarden.pdf" },
            { label: "Cookie Statement", href: "https://backoffice.myparcel.nl/static/myparcel-nederland/documentatie/voorwaarden/myparcel-cookie-statement.pdf" },
            { label: "Privacy Policy", href: "https://backoffice.myparcel.nl/static/myparcel-nederland/documentatie/voorwaarden/myparcel-privacy-statement.pdf" },
          ],
        },
      ],
      social: [
        { icon: "github", href: "https://github.com/myparcelnl/" },
      ],
    },
  },
  metadata: {
    title: "MyParcel Developer Portal",
    description:
      "API documentation for MyParcel shipping, order, and identity services",
    favicon: "/favicon.ico",
  },
  search: {
    type: "pagefind",
  },
  header: {
    navigation: [
      { label: "Sign up for free", to: "https://www.myparcel.com/registration/", icon: "user-plus" },
      { label: "GitHub", to: "https://github.com/myparcelnl/", icon: "github" },
    ],
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      icon: "book-open",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "rocket",
          items: [
            "/introduction",
            "/getting-started",
            "/authentication",
            "/errors",
          ],
        },
        {
          type: "category",
          label: "Integrations",
          icon: "puzzle",
          collapsed: true,
          items: [
            { type: "link", label: "WooCommerce", to: "https://developer.myparcel.nl/nl/documentatie/10.woocommerce.html" },
            { type: "link", label: "Prestashop", to: "https://developer.myparcel.nl/nl/documentatie/11.prestashop.html" },
            { type: "link", label: "Magento 2", to: "https://developer.myparcel.nl/nl/documentatie/13.magento2.html" },
            { type: "link", label: "Shopify", to: "https://developer.myparcel.nl/nl/documentatie/14.shopify.html" },
            { type: "link", label: "Shopware", to: "https://developer.myparcel.nl/nl/documentatie/15.shopware.html" },
            { type: "link", label: "PHP SDK", to: "https://developer.myparcel.nl/documentation/50.php-sdk.html" },
            { type: "link", label: "JS SDK", to: "https://developer.myparcel.nl/documentation/51.javascript-sdk.html" },
            { type: "link", label: "Delivery Options", to: "https://developer.myparcel.nl/documentation/60.delivery-options.html" },
          ],
        },
        {
          type: "category",
          label: "Information",
          icon: "info",
          collapsed: true,
          items: [
            "/about",
            "/contact",
            { type: "link", label: "Status", to: "https://status.myparcel.nl/", icon: "activity" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      icon: "code",
      items: [
        "/api-overview",
        { type: "link", label: "Shipment API", to: "/api/shipping", icon: "package" },
        { type: "link", label: "Order API", to: "/api/orders", icon: "shopping-cart" },
        { type: "link", label: "IAM API", to: "/api/iam", icon: "shield" },
        { type: "link", label: "Rules API", to: "/api/rules", icon: "settings" },
        { type: "link", label: "Address API", to: "/api/address", icon: "map-pin" },
        { type: "link", label: "Printing API", to: "/api/printing", icon: "printer" },
        { type: "link", label: "Product API", to: "/api/products", icon: "box" },
      ],
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./openapi/shipping-api.json",
      path: "/api/shipping",
    },
    {
      type: "file",
      input: "./openapi/order-api.json",
      path: "/api/orders",
    },
    {
      type: "file",
      input: "./openapi/iam-api.json",
      path: "/api/iam",
    },
    {
      type: "file",
      input: "./openapi/rule-api.json",
      path: "/api/rules",
    },
    {
      type: "file",
      input: "./openapi/address-api.json",
      path: "/api/address",
    },
    {
      type: "file",
      input: "./openapi/printing-api.json",
      path: "/api/printing",
    },
    {
      type: "file",
      input: "./openapi/product-api.json",
      path: "/api/products",
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
