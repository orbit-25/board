<script>
  function searchInPage(query) {
    if (!query) return;

    // Remove any old highlights
    document.querySelectorAll(".highlighted").forEach(el => {
      el.classList.remove("highlighted");
    });

    const regex = new RegExp(query, "i");
    const elements = document.querySelectorAll("h4, p, h3, h2");

    for (let el of elements) {
      if (regex.test(el.textContent)) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("highlighted");
        return;
      }
    }

    alert("No results found for: " + query);
  }

  window.searchInPage = searchInPage;
</script>
