// rating start
const stars = document.querySelectorAll('.star i');
    const ratingValue = document.getElementById('rating-value');
    const resetButton = document.getElementById('reset-button');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', highlightStars);
        star.addEventListener('click', selectRating);
        star.addEventListener('mouseout', resetStars);
    });

    function highlightStars(event) {
        const currentStar = event.target;
        resetStars();

        currentStar.style.color = '#9B0400';
        let prevStar = currentStar.previousElementSibling;
        while (prevStar) {
            prevStar.style.color = '#9B0400';
            prevStar = prevStar.previousElementSibling;
        }
    }

    function selectRating(event) {
        const currentStar = event.target;
        selectedRating = currentStar.getAttribute('data-value');
        ratingValue.textContent = selectedRating;
        resetStars();
        highlightStars(event);
    }

    function resetStars() {
        stars.forEach(star => star.style.color = 'gray');
        for (let i = 0; i < selectedRating; i++) {
            stars[i].style.color = '#9B0400';
        }
    }

    resetButton.addEventListener('click', () => {
        selectedRating = 0;
        ratingValue.textContent = selectedRating;
        resetStars();
    });

    // function register() {
    //     alert("Thank you for signing up!");
    // }
    
    // function star() {
    //     alert("Thank you for your review!");
    // }
// rating end