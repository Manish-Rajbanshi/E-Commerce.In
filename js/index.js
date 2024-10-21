const contentMarkup = document.querySelector(".markup");
const menLink = document.querySelector(".men");
const womenLink = document.querySelector(".women");
const kidsLink = document.querySelector(".kids");

function renderMen(e) {
  e.preventDefault();
  const markup = `
        <div class="card">
        <img
          src="https://nb.scene7.com/is/image/NB/u574mgh_nb_02_i?$pdpflexf2$&wid=464&hei=464"
          class="card-img-top"
          alt="..."
        />
        <span>$99.99</span>
        <h5 class="card-title">574</h5>
      </div>
      <div class="card" >
        <img
          src="https://nb.scene7.com/is/image/NB/mp41061bk_nb_55_i?$pdpflexf2$&wid=464&hei=464"
          class="card-img-top"
          alt="..."
        />
        <span>$89.99</span>
        <h5 class="card-title">AC Tapered Pant</h5>
      </div>
      <div class="card" >
        <img
          src="https://nb.scene7.com/is/image/NB/mvngocm6_nb_02_i?$pdpflexf2$&wid=464&hei=464"
          class="card-img-top"
          alt="..."
        />
        <span>$164.99</span>
        <h5 class="card-title">Fresh Foam X Vongo v6</h5>
      </div>`;
  contentMarkup.innerHTML = "";
  contentMarkup.insertAdjacentHTML("afterbegin", markup);
}
function renderWomen(e) {
  e.preventDefault();
  const markup = `
        <div class="card">
        <img
          src="https://nb.scene7.com/is/image/NB/bbw550bh_nb_02_i?$pdpflexf2$&wid=464&hei=464"
          class="card-img-top"
          alt="..."
        />
        <span>$109.99</span>
        <h5 class="card-title">550</h5>
      </div>
      <div class="card" >
        <img
          src="https://nb.scene7.com/is/image/NB/wvngocm6_nb_02_i?$pdpflexf2$&wid=464&hei=464"
          class="card-img-top"
          alt="..."
        />
        <span>$164.99</span>
        <h5 class="card-title">Fresh Foam X Vongo</h5>
      </div>
      <div class="card" >
        <img
          src="https://nb.scene7.com/is/image/NB/wp41126bk_nb_70_i?$pdpflexf2$&wid=464&hei=464"
          class="card-img-top"
          alt="..."
        />
        <span>$59.99</span>
        <h5 class="card-title">NB Harmony High Rise Leggings</h5>
      </div>`;
  contentMarkup.innerHTML = "";
  contentMarkup.insertAdjacentHTML("afterbegin", markup);
}
function renderKids(e) {
  e.preventDefault();
  const markup = `
        <div class="card" >
        <img
          src="https://nb.scene7.com/is/image/NB/g1080v13_nb_02_i?$pdpflexf2$&wid=464&hei=464"
          class="card-img-top"
          alt="..."
        />
        <span>$109.99</span>
        <h5 class="card-title">Fresh Foam X 1080v13</h5>
      </div>
      <div class="card" >
        <img
          src="https://nb.scene7.com/is/image/NB/gsb550pb_nb_02_i?$pdpflexf2$&wid=464&hei=464"
          class="card-img-top"
          alt="..."
        />
        <span>$94.99</span>
        <h5 class="card-title">550</h5>
      </div>
      <div class="card" >
        <img
          src="https://nb.scene7.com/is/image/NB/gr530ka_nb_02_i?$pdpflexf2$&wid=464&hei=464"
          class="card-img-top"
          alt="..."
        />
        <span>$79.99</span>
        <h5 class="card-title">530</h5>
      </div>`;
  contentMarkup.innerHTML = "";
  contentMarkup.insertAdjacentHTML("afterbegin", markup);
}

menLink.addEventListener("click", renderMen);
womenLink.addEventListener("click", renderWomen);
kidsLink.addEventListener("click", renderKids);

const copyright = document.querySelector(".date");
const date = new Date();
copyright.insertAdjacentText("afterbegin", date.getFullYear());

$(".fade").waypoint(
  function () {
    $(".fade").addClass("animate__animated animate__fadeInUp");
  },
  { offset: "80%" }
);
