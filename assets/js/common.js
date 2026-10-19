$(document).ready(function () {
  // Native buttons provide Enter/Space activation; keep state exposed to assistive technology.
  $("button.abstract, button.bibtex, a.award").on("click", function () {
    const root = $(this).parent().parent();
    const kind = this.classList.contains("abstract") ? "abstract" : this.classList.contains("bibtex") ? "bibtex" : "award";
    const panel = root.find("." + kind + ".hidden");
    const shouldOpen = !panel.hasClass("open");
    root.find(".abstract.hidden, .bibtex.hidden, .award.hidden").removeClass("open").attr("aria-hidden", "true");
    root.find("button.abstract, button.bibtex").attr("aria-expanded", "false");
    panel.toggleClass("open", shouldOpen).attr("aria-hidden", String(!shouldOpen));
    $(this).attr("aria-expanded", String(shouldOpen));
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
