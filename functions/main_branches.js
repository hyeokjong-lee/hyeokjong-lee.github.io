
const branchesCarousel = document.getElementById("branchesCarousel");
const numberOfBranches = document.querySelectorAll('.branch-container').length;
const indicators = document.querySelector('.carousel-indicators');


let indicatorContent = '';
for (let i = 0; i < numberOfBranches; i += 1) {
    if (i === 0) {
        indicatorContent += `<div class="current" data-index="${i}"></div>`
    }
    else {
        indicatorContent += `<div data-index="${i}"></div>`
    }
}
indicators.innerHTML = indicatorContent;

const indicatorItems = document.querySelectorAll('.carousel-indicators div')
indicatorItems.forEach(function (item) {
    item.addEventListener('click', function () {
        currentIndex = parseInt(item.getAttribute('data-index'));
        updateSlide(currentIndex);
    })
})

let currentIndex = 0;


document.getElementById('arrowLeft').addEventListener('click', function() {
    previousSlide();
})
document.getElementById('arrowRight').addEventListener('click', function() {
    nextSlide();
})


function updateSlide(index) {
    branchesCarousel.style.transform = `translateX(-${index*100}%)`;
    indicatorItems.forEach(function (idx) {
        idx.classList.remove('current');
    });
    indicatorItems[index].classList.add('current');

}

function nextSlide() {
    currentIndex += 1;
    currentIndex = currentIndex % numberOfBranches;
    updateSlide(currentIndex);
}

function previousSlide() {
    currentIndex -= 1;
    currentIndex += numberOfBranches;
    currentIndex = currentIndex % numberOfBranches;
    updateSlide(currentIndex);
}
