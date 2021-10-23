let galleryImages = document.querySelectorAll(".image");
let latestImage;
let winWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function (img, index) {
    img.onclick = function () {
      latestImage = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let closeImage = document.createElement("h2");
      let closeImageText = document.createTextNode("Click Anywhere to Close");
      closeImage.appendChild(closeImageText);
      newImgWindow.appendChild(closeImage);
      
      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "/images/gallery/Main/image" + latestImage + `.jpg`);
      newImg.setAttribute("id", "current-img");
      
      
      //Buttons`````

      newImg.onload = function () {
        // let imgWidth = this.width;
        // let calcImgToEdge = (winWidth - imgWidth) / 2 - 80;
        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode(">");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        // newNextBtn.style.cssText = "right:" + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("<");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        // newPrevBtn.style.cssText = "left:" + calcImgToEdge + "px;";
      };
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if (changeDir === 1) {
    calcNewImg = latestImage + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    calcNewImg = latestImage - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }
  newImg.setAttribute("src", "/images/gallery/Main/image" + calcNewImg + ".jpg");
  newImg.setAttribute("id", "current-img");

  latestImage=calcNewImg;

  // newImg.onload=function(){
  //     let imgWidth =this.width;
  //     let calcImgToEdge = (winWidth - imgWidth) / 2 - 80;

  //     let nextBtn = document.querySelector(".img-btn-next");
  //     nextBtn.style.cssText="right:"+calcImgToEdge+"px;";

  //     let prevBtn = document.querySelector(".img-btn-prev");
  //     prevBtn.style.cssText="left:"+calcImgToEdge+"px;";
  // }
}
