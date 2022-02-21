const starRating = document.querySelectorAll('.rating-star'); 

starRating.forEach((star, index) => {
    
    star.addEventListener('click', () => {
        for(let i=0; i < 5; i++) {
            starRating[i].classList.remove('bxs-star');
        }

        for(let i=0; i <= index; i++) {
            starRating[i].classList.add('bxs-star');
        }
    });
})
