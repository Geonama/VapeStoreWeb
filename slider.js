let featureSlideIndex = 0;
const featureSlides = document.querySelector('.feature-slide');
const totalFeatureSlides = 4; // Total number of feature slides

function showFeatureSlides() {
    featureSlides.innerHTML = `<img src="${featureSlideIndex + 1}.png" alt="Feature Slide ${featureSlideIndex + 1}">`;
}

function plusFeatureSlides(n) {
    featureSlideIndex += n;
    if (featureSlideIndex >= totalFeatureSlides) {
        featureSlideIndex = 0;
    } else if (featureSlideIndex < 0) {
        featureSlideIndex = totalFeatureSlides - 1;
    }
    showFeatureSlides();
}
