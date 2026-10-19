document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("bibsearch");
  if (!input) return;
  const entries = [...document.querySelectorAll(".bibliography > li")];
  const filter = () => {
    const term = input.value.trim().toLocaleLowerCase();
    let count = 0;
    entries.forEach((entry) => {
      const matches = entry.textContent.toLocaleLowerCase().includes(term);
      entry.classList.toggle("unloaded", !matches);
      if (matches) count++;
    });
    document.querySelectorAll("h2.bibliography").forEach((heading) => {
      let current = heading.nextElementSibling;
      let found = false;
      while (current && current.tagName !== "H2") {
        if (current.matches("ol.bibliography")) {
          const visible = current.querySelector("li:not(.unloaded)") !== null;
          current.classList.toggle("unloaded", !visible);
          found ||= visible;
        }
        current = current.nextElementSibling;
      }
      heading.classList.toggle("unloaded", !found);
    });
    document.getElementById("bibsearch-results").textContent =
      count === 0 ? "No publications match. Try a different title, author, or keyword." : `${count} of ${entries.length} publications shown`;
  };
  let timer;
  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(filter, 150);
  });
  filter();
});
