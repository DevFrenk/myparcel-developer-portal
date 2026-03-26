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
            { label: "Neem contact op", href: "/contact" },
            { label: "Chat op Slack", href: "https://join.slack.com/t/myparcel-dev/shared_invite/zt-2zvk9gfs1-h6koDUduK6ZM_kZcc247AQ" },
            { label: "Word partner", href: "https://www.myparcel.nl/partner-worden/" },
          ],
        },
        {
          title: "Links",
          links: [
            { label: "Status", href: "https://status.myparcel.nl/" },
            { label: "Over ons", href: "/about" },
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
      "API documentatie voor MyParcel shipping, order en identity services",
    favicon: "/favicon.ico",
  },
  search: {
    type: "pagefind",
  },
  header: {
    navigation: [
      { label: "GitHub", to: "https://github.com/myparcelnl/", icon: "github" },
    ],
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Aan de slag",
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
          label: "Documentatie",
          icon: "book-open",
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
          label: "Informatie",
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
      items: [
        { type: "link", label: "Shipping API", to: "/api/shipping", icon: "package" },
        { type: "link", label: "Order API", to: "/api/orders", icon: "shopping-cart" },
        { type: "link", label: "IAM API", to: "/api/iam", icon: "shield" },
        { type: "link", label: "Rule API", to: "/api/rules", icon: "settings" },
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
