document.addEventListener("DOMContentLoaded", function () {
  const accessKey = "X_STxksu9jF-nz_7i3N52MV1D6ApAP_6ODsRB1x3ypg";
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

  const photoElement = document.getElementById("photo");
  const photographerNameElement = document.getElementById("photographer-name");
  const likeButton = document.getElementById("like-button");
  const likeCountElement = document.getElementById("like-count");
  let likeCount = 0;

  function loadRandomPhoto() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const photoUrl = data.urls.regular;
        const photographerName = data.user.name;

        photoElement.src = photoUrl;
        photographerNameElement.textContent = `Фотограф: ${photographerName}`;
      })
      .catch((error) => console.error("Ошибка при загрузке фото:", error));
  }

  likeButton.addEventListener("click", function () {
    likeCount++;
    likeCountElement.textContent = likeCount;
  });

  loadRandomPhoto();
});
