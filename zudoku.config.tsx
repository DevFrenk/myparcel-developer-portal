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
          title: "Documentatie",
          links: [
            { label: "Aan de slag", href: "/getting-started" },
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
            { label: "Neem contact op", href: "https://developer.myparcel.nl/contact.html" },
            { label: "Chat op Slack", href: "https://join.slack.com/t/myparcel-dev/shared_invite/zt-2zvk9gfs1-h6koDUduK6ZM_kZcc247AQ" },
            { label: "Word partner", href: "https://www.myparcel.nl/partner-worden/" },
          ],
        },
        {
          title: "Links",
          links: [
            { label: "Status", href: "https://status.myparcel.nl/" },
            { label: "Over ons", href: "https://developer.myparcel.nl/about.html" },
            { label: "Vacatures", href: "https://www.myparcel.nl/vacature/development/" },
            { label: "GitHub", href: "https://github.com/myparcelnl/" },
            { label: "MyParcel", href: "https://www.myparcel.nl/" },
            { label: "SendMyParcel", href: "https://www.sendmyparcel.be/" },
          ],
        },
        {
          title: "Juridisch",
          position: "end",
          links: [
            { label: "Voorwaarden & beleid", href: "https://backoffice.myparcel.nl/static/myparcel-nederland/documentatie/voorwaarden/myparcel-algemene-voorwaarden.pdf" },
            { label: "Cookiestatement", href: "https://backoffice.myparcel.nl/static/myparcel-nederland/documentatie/voorwaarden/myparcel-cookie-statement.pdf" },
            { label: "Privacyverklaring", href: "https://backoffice.myparcel.nl/static/myparcel-nederland/documentatie/voorwaarden/myparcel-privacy-statement.pdf" },
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
  },
  topNavigation: [
    { id: "docs", label: "Guides" },
    { id: "shipping-api", label: "Shipping API" },
    { id: "order-api", label: "Order API" },
    { id: "iam-api", label: "IAM API" },
    { id: "rule-api", label: "Rule API" },
    { id: "address-api", label: "Address API" },
    { id: "printing-api", label: "Printing API" },
    { id: "product-api", label: "Product API" },
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
      { type: "link", label: "Shipping API Reference", to: "/api/shipping", icon: "package" },
    ],
    "order-api": [
      { type: "link", label: "Order API Reference", to: "/api/orders", icon: "shopping-cart" },
    ],
    "iam-api": [
      { type: "link", label: "IAM API Reference", to: "/api/iam", icon: "shield" },
    ],
    "rule-api": [
      { type: "link", label: "Rule API Reference", to: "/api/rules", icon: "settings" },
    ],
    "address-api": [
      { type: "link", label: "Address API Reference", to: "/api/address", icon: "map-pin" },
    ],
    "printing-api": [
      { type: "link", label: "Printing API Reference", to: "/api/printing", icon: "printer" },
    ],
    "product-api": [
      { type: "link", label: "Product API Reference", to: "/api/products", icon: "box" },
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
    {
      type: "file",
      input: "./openapi/rule-api.json",
      path: "/api/rules",
      navigationId: "rule-api",
    },
    {
      type: "file",
      input: "./openapi/address-api.json",
      path: "/api/address",
      navigationId: "address-api",
    },
    {
      type: "file",
      input: "./openapi/printing-api.json",
      path: "/api/printing",
      navigationId: "printing-api",
    },
    {
      type: "file",
      input: "./openapi/product-api.json",
      path: "/api/products",
      navigationId: "product-api",
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
