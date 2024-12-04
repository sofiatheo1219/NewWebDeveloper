
window.onload = () => {
    document.body.style.opacity = 1;
    document.body.style.transition = "opacity 1s ease-in-out";
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const galleryBtn = document.getElementById('galleryBtn');

    
    function changeImage(imageId) {
        const image = document.getElementById(imageId);
        if (image) {
           
            image.src = "new-image.jpg"; 
        }
    }

    
    function changeGalleryImage() {
        const randomImage = Math.floor(Math.random() * galleryImages.length);
        galleryImages[randomImage].src = "new-image.jpg"; 
    }

    
    galleryBtn.addEventListener('click', changeGalleryImage);
});
