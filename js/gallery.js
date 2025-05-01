// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo > img");
    // 更新される画像情報
    let galleryInfo = document.querySelector("#gallery-info");
    let title = galleryInfo.querySelector(".title");
    let description = galleryInfo.querySelector(".description");
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener("click", function() {
        // クリックされたサムネイル画像をメイン画像として設定する
        let newImageSrc = thumbnail.dataset.largeVersion;
        mainImage.setAttribute("src", newImageSrc);
        mainImage.setAttribute("alt", thumbnail.alt);

        const currentClass = "current";
        // 現在の画像を変更する
        document.querySelector(".current").classList.remove(currentClass);
        thumbnail.parentNode.classList.add(currentClass);

        // 画像のタイトルと説明を変更する
        title.innerHTML = thumbnail.dataset.title;
        description.innerHTML = thumbnail.dataset.description;
      });
    });
  }
