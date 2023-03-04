const users = [
  {
    id: 1,
    user: "Elon Reeve Musk",
    tweets: 777,
    followers: 100500,
    avatar: "../images/User.png",
  },
  {
    id: 2,
    user: "Nikolai",
    tweets: 500,
    followers: 70000,
    avatar: "../images/User.png",
  },
  {
    id: 3,
    user: "Alex",
    tweets: 100,
    followers: 14300,
    avatar: "../images/User.png",
  },
  {
    id: 4,
    user: "Inokenti",
    tweets: 2,
    followers: 1002,
    avatar: "../images/User.png",
  },
  {
    id: 5,
    user: "Yulia",
    tweets: 25,
    followers: 20000,
    avatar: "../images/User.png",
  },
  {
    id: 6,
    user: "Grigori",
    tweets: 76,
    followers: 87832,
    avatar: "../images/User.png",
  },
];

const withState = users.map(
  (item) =>
    (item.isFollowing = JSON.parse(localStorage.getItem(`user${item.id}`)))
);

const container = document.querySelector(".container");

const markup = users
  .map((item) => {
    return `<div class="card-box">
    <div>
      <img src="./images/Logo.svg" alt="Logo" />
    </div>
    <div class="bg-image"></div>
    <div class="user-container">
      <div class="user-img-box">
        <div class="line"></div>
        <div class="user-img-border">
          <img class="user-img" src=${item.avatar} alt=${item.user} />
        </div>
      </div>
      <p class="user-info-text">${item.tweets} tweets</p>
      <p class="user-info-text">
        <span class="user-subscriptions" followers=${
          item.isFollowing ? item.followers + 1 : item.followers
        } >${
      item.isFollowing
        ? (item.followers + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : item.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }</span> Followers
      </p>
      <button class='follow-btn' style='background-color: ${
        item.isFollowing ? "#5cd3a8" : "#ebd8ff"
      }' id=${item.id} following =${item.isFollowing}>
      ${item.isFollowing ? "Following" : "Follow"}</button>
    </div>
  </div>`;
  })
  .join("");

container.innerHTML = markup;
