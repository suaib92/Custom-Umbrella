window.onload = function() {
  // Set initial state for background color
  changeBackgroundColor("blue");
  // Hide logo preview
  hideLogoPreview();
};

function changeSlide(index) {
  const slider = document.getElementById("slider");
  const slideWidth = document.querySelector(".slide").offsetWidth;
  const slides = document.querySelectorAll(".slide");
  const logoPreview = document.getElementById('logoPreview');

  // Hide logo preview during slide change loading
  logoPreview.style.display = "none";

  // Show loader
  showLoader();



  // Delay showing the current slide after the slide transition
  setTimeout(() => {
    // Update slider position
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    // Show the current slide
    slides[index].style.display = "block";

    hideLoader();

    // Show logo preview after slide transition and loading is complete
    setTimeout(() => {
      logoPreview.style.display = "block";
    }, 1000); // Adjust as needed for the slide transition delay

    // Optionally, you may want to upload logo here after the slide transition
    uploadLogo();
  }, 1000); // 1-second delay for slide transition
}



function changeBackgroundColor(color) {
  // Show loader
  showLoader();

  // Delay changing background color after slide transition
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    hideLoader();
  }, 1000); // 2-second delay for slide transition
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    // Hide logo preview initially
    const logoPreview = document.getElementById('logoPreview');
    logoPreview.style.display = "none";

    // Show loader while processing image
    showLoader();

    reader.onload = function(e) {
      const logoUrl = e.target.result;
      logoPreview.style.backgroundImage = `url('${logoUrl}')`;

      // Display logo preview after image processing
      setTimeout(() => {
        logoPreview.style.display = "block";
        hideLoader(); // Hide loader after displaying logo preview
      }, 2000); // 2-second delay for logo processing

      // Upload logo after loading completes
      setTimeout(() => {
        uploadLogo();
      }, 2000); // 2-second delay for logo processing
    }
    reader.readAsDataURL(file);
  }
}

function showLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
}

function hideLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
}

function hideLogoPreview() {
  const logoPreview = document.getElementById("logoPreview");
  logoPreview.style.display = "none";
}

function uploadLogo() {
  // Here you can write your logic to actually upload the logo to your server
  console.log("Logo uploaded successfully!");
}