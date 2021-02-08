window.addEventListener("DOMContentLoaded", function () {
  const githubTopicsItems = Array.prototype.slice.call(
    document.querySelectorAll(".github-topics")
  );

  function reqError(err) {
    console.log("Fetch Error", err);
  }

  githubTopicsItems.forEach((item, idx) => {
    const url = `https://api.github.com/repos/${item.dataset.owner}/${item.dataset.repo}/topics`;
    const currentRequest = new XMLHttpRequest();
    currentRequest.onload = function () {
      if (this.status != 200) {
        console.log(`STATUS ${JSON.stringify(this.status)}`);
      } else {
        var data = JSON.parse(this.responseText);
        const currentTopics = data.names;

        let htmlToAdd = "";

        currentTopics.map((i,idx) => {
          if (idx <= 2 ) {
          htmlToAdd += `
              <a 
                href="https://github.com/topics/${i}" 
                class="d-inline-block badge-pill bg-lightblue text-primary topic-link mb-1">
              ${i}</a>
            `;
          }
        });

        item.innerHTML = htmlToAdd;
      }
    };
    currentRequest.onerror = reqError;
    currentRequest.open("get", url, true);
    currentRequest.setRequestHeader(
      "Accept",
      "application/vnd.github.mercy-preview+json"
    );
    currentRequest.send();
  });
});
window.addEventListener("load", function () {
  const navbar = document.querySelector("nav.navbar");
  const navbarHeight = navbar.offsetHeight;

  function checkPosition() {
    const winnY = window.scrollY;
    const hasBgClass = navbar.classList.contains("bg-white");
    const scrolledThrough = winnY >= navbarHeight;
    if (scrolledThrough && !hasBgClass) {
      document.body.classList.add("nav-bg-white");
    } else {
      document.body.classList.remove("nav-bg-white");
    }
  }

  window.addEventListener("scroll", checkPosition);
  checkPosition();
});
