// Toggle classlist active
const navbarList = document.querySelector(".navbar-list");

// ketika hamberger menu di klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarList.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
  }
});

// Item detail modal
const itemDetailModal = document.querySelector("#item-modal-detail-satu");
const itemDetailModalDua = document.querySelector("#item-modal-detail-dua");
const itemDetailModalTiga = document.querySelector("#item-modal-detail-tiga");
const itemDetailModalEmpat = document.querySelector("#item-modal-detail-empat");
const itemDetailButton = document.querySelectorAll(".card-caption.satu");
const itemDetailButtonDua = document.querySelectorAll(".card-caption.dua");
const itemDetailButtonTiga = document.querySelectorAll(".card-caption.tiga");
const itemDetailButtonEmpat = document.querySelectorAll(".card-caption.empat");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtonDua.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalDua.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtonTiga.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalTiga.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtonEmpat.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalEmpat.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
document.querySelector(".modal .close-icon-satu").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon-dua").onclick = (e) => {
  itemDetailModalDua.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon-tiga").onclick = (e) => {
  itemDetailModalTiga.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon-empat").onclick = (e) => {
  itemDetailModalEmpat.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
    e.preventDefault();
  }
};

window.onclick = (e) => {
  if (e.target === itemDetailModalDua) {
    itemDetailModalDua.style.display = "none";
    e.preventDefault();
  }
};

window.onclick = (e) => {
  if (e.target === itemDetailModalTiga) {
    itemDetailModalTiga.style.display = "none";
    e.preventDefault();
  }
};

window.onclick = (e) => {
  if (e.target === itemDetailModalEmpat) {
    itemDetailModalEmpat.style.display = "none";
    e.preventDefault();
  }
};
