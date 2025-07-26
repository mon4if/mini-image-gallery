const thumbnails = document.querySelectorAll(".thumb");
const displayImage = document.getElementById("displayImage");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Replace width param to get high-res version
    const highRes = thumb.src.replace("w=200", "w=800");
    displayImage.src = highRes;
  });
});
