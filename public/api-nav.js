// Inject API navigation links into the sidebar on API spec pages
(function() {
  var apiLinks = [
    { label: "API Overview", href: "/api-overview" },
    { label: "Shipment API", href: "/api/shipping" },
    { label: "Order API", href: "/api/orders" },
    { label: "IAM API", href: "/api/iam" },
    { label: "Rule API", href: "/api/rules" },
    { label: "Address API", href: "/api/address" },
    { label: "Printing API", href: "/api/printing" },
    { label: "Product API", href: "/api/products" },
  ];

  var NAV_ID = "api-quick-nav";

  function isApiSpecPage() {
    var path = window.location.pathname;
    return path.startsWith("/api/") && path !== "/api-overview";
  }

  function getCurrentApi() {
    var match = window.location.pathname.match(/^\/api\/([^/]+)/);
    return match ? "/api/" + match[1] : null;
  }

  function createNavElement() {
    var nav = document.createElement("div");
    nav.id = NAV_ID;
    nav.style.cssText = "padding:0.25rem 0 0.5rem;border-bottom:1px solid hsl(var(--border));margin-bottom:0.25rem;";

    var title = document.createElement("div");
    title.textContent = "APIs";
    title.style.cssText = "font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:hsl(var(--muted-foreground));padding:0.25rem 0.75rem 0.35rem;";
    nav.appendChild(title);

    var currentApi = getCurrentApi();

    apiLinks.forEach(function(link) {
      var a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.label;
      var isActive = link.href === currentApi;
      a.style.cssText = "display:flex;align-items:center;gap:0.5rem;padding:0.3rem 0.75rem;font-size:0.82rem;color:" +
        (isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))") +
        ";font-weight:" + (isActive ? "600" : "400") +
        ";text-decoration:none;border-radius:0.375rem;transition:color 0.15s;";
      a.onmouseenter = function() { a.style.color = "hsl(var(--foreground))"; };
      a.onmouseleave = function() { if (!isActive) a.style.color = "hsl(var(--muted-foreground))"; };
      nav.appendChild(a);
    });

    return nav;
  }

  function tryInject() {
    var existing = document.getElementById(NAV_ID);
    if (existing) existing.remove();

    if (!isApiSpecPage()) return;

    var sidebar = document.querySelector(".grid.sticky");
    if (!sidebar) return;

    var navEl = sidebar.querySelector("nav");
    if (!navEl || navEl.querySelectorAll("a").length === 0) return;

    navEl.insertBefore(createNavElement(), navEl.firstChild);
  }

  // Use MutationObserver to detect when sidebar content is rendered
  var sidebarObserver = null;

  function watchSidebar() {
    if (sidebarObserver) sidebarObserver.disconnect();

    if (!isApiSpecPage()) return;

    sidebarObserver = new MutationObserver(function() {
      var sidebar = document.querySelector(".grid.sticky");
      if (!sidebar) return;

      var navEl = sidebar.querySelector("nav");
      if (!navEl || navEl.querySelectorAll("a").length === 0) return;

      // Sidebar has content, inject if not already there
      if (!document.getElementById(NAV_ID)) {
        navEl.insertBefore(createNavElement(), navEl.firstChild);
      }
    });

    sidebarObserver.observe(document.body, { childList: true, subtree: true });

    // Also try immediately
    tryInject();
  }

  // Watch for SPA route changes
  var lastUrl = location.href;
  var routeObserver = new MutationObserver(function() {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      // Remove old nav and re-watch
      var existing = document.getElementById(NAV_ID);
      if (existing) existing.remove();
      watchSidebar();
    }
  });

  function init() {
    watchSidebar();
    routeObserver.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
