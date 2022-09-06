const img = document.querySelectorAll("div");
for (const element of img) {
  element.ondragstart = () => {
    return false;
  };
}

const inActiveItem = document.querySelector(".inactive-item");
const inActiveSvg = document
  .querySelector(".inactive-item")
  .querySelector("svg");
inActiveSvg.style.display = "none";

const burgerIcon = document.querySelector(".material-icons");

function burger_click() {
  const burgerOpen = document.querySelector(".burger-open");
  const burgerItems = document.querySelector(".burger-items");

  if (burgerOpen.classList != "burger-open") {
    burgerOpen.classList.remove("clicked");
    burgerItems.classList.remove("show");
  } else {
    burgerOpen.classList.add("clicked");
    setTimeout(function () {
      burgerItems.classList.add("show");
    }, 300);
  }
}

function customAlert() {
  const emailForm = document.querySelector(".email-form");
  if (emailForm.classList == "email-form") {
    emailForm.classList.add("open");
  }
}

function signIn() {
  const signInForm = document.querySelector(".sign-in");
  if (signInForm.classList == "sign-in") {
    signInForm.classList.add("open");
  } else{
    signInForm.classList = "sign-in";
  }
}

function closeForm() {
  const emailForm = document.querySelector(".email-form");
  emailForm.classList = "email-form";
}

function successSend() {
  const emailForm = document.querySelector(".email-form");
  emailForm.innerHTML = "<i class='fa-regular fa-circle-check'></i> <h3>با موفقیت ارسال شد</h3>";
  setTimeout(function () {
    emailForm.classList = "email-form";
  }, 800);
  setTimeout(function () {
    emailForm.innerHTML = "<h3>ارسال ایمیل</h3><textarea name='' id='' cols='30' rows='10' placeholder='پیام خود را تایپ کنید...'></textarea><div class='btn-container'><a class='send-btn' onclick='successSend()'>ارسال</a><a class='cancel-btn' onclick='closeForm()'>لغو</a></div>"
  }, 1000);
}