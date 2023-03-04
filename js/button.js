const button = document.querySelector(".follow-btn");
const subscriptions = document.querySelector(".user-subscriptions");

const onFollowBtnClick = (e) => {
  const button = e.target;
  const followers = e.target.parentNode.children[2].children[0];
  if (button.nodeName !== "BUTTON") {
    return;
  }

  if (button.getAttribute("following") !== "true") {
    button.textContent = "Following";
    const newSubscriberAmount = (
      Number(followers.getAttribute("followers")) + 1
    )
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    followers.setAttribute(
      "followers",
      Number(followers.getAttribute("followers")) + 1
    );
    followers.textContent = newSubscriberAmount;
    button.setAttribute("following", "true");
    button.style.backgroundColor = "#5cd3a8";
    return localStorage.setItem(`user${button.getAttribute("id")}`, true);
  }

  if (button.getAttribute("following") === "true") {
    button.textContent = "Follow";
    const newSubscriberAmount = (
      Number(followers.getAttribute("followers")) - 1
    )
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    followers.setAttribute(
      "followers",
      Number(followers.getAttribute("followers")) - 1
    );
    followers.textContent = newSubscriberAmount;
    button.setAttribute("following", "false");
    button.style.backgroundColor = "#ebd8ff";
    return localStorage.setItem(`user${button.getAttribute("id")}`, false);
  }
};

container.addEventListener("click", onFollowBtnClick);
