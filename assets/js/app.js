let inputSearch = document.getElementById("input-search");
let sectionCardContent = document.querySelector(".section__card-content");
let body = document.querySelector("body");
let theme = document.querySelector(".header__content-theme");
let spanTheme = document.querySelector(".header__content-theme-text");

function githubUser(user) {
  fetch("https://api.github.com/users/" + user)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // sectionCardContent.innerHTML = "";
      sectionCardContent.innerHTML = `
    <div class="section__card-content-img">
    <img src="${data.avatar_url}" alt="Photo" />
  </div>
  <div class="section__card-content-info">
    <div class="section__card-content-title">
      <h3>${data.name}</h3>
      <a href="#">@${data.login} </a>
      <p class="text-first">${data.bio}</p>
      <p>${data.created_at}</p>
    </div>
    <div class="section__card-main">
      <div class="section__card-repos">
        <p>Repos</p>
        <span>${data.public_repos}</span>
      </div>
      <div class="section__card-follow">
        <p>Following</p>
        <span>${data.following}</span>
      </div>
      <div class="section__card-following">
        <p>Following</p>
        <span>${data.followers}</span>
      </div>
    </div>
    <div class="section__card-footer">
      <ul>
        <li>
          <i class="fa-solid fa-location-dot"></i>
          ${data.location}
        </li>
        <li>
          <i class="fa-solid fa-link"></i>
          <a href="#">${data.url}</a>
        </li>
        <li>
          <i class="fa-brands fa-twitter"></i>
          Twitter
        </li>
        <li>
          <i class="fa-solid fa-hotel"></i>
          @github
        </li>
      </ul>
    </div>
  </div>
</div>
    `;
    });
}
inputSearch.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    githubUser(e.target.value);
  }
});

theme.addEventListener("click", function () {
  body.classList.toggle("theme");
  if (spanTheme.innerHTML == "LIGHT") {
    spanTheme.innerHTML = "DARK"
  }else{
    spanTheme.innerHTML = "LIGHT"
  }
});
