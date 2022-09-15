const ImagesArray = [
  "cover-1.jpg",
  "cover-2.jpg",
  "cover-3.jpg",
  "cover-4.jpg",
  "cover-5.jpg",
  "cover-6.jpg",
  "cover-7.jpg",
];

const carousalFunc = () => {
  let imageIndex = 0;
  setInterval(() => {
    const imageCatch = document.getElementById("imageId");
    console.log(imageCatch);

    imageCatch.setAttribute("src", ImagesArray[imageIndex]);
    imageIndex++;
    if (imageIndex === 7) {
      imageIndex = 0;
    }
  }, 3000);
};

carousalFunc();
