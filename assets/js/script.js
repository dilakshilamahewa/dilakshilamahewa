//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId =el.getAttribute('data-pages');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

//contact me button click
const pages =document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick =() => {
    pages.forEach((page,index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}
// create reverse index fuction
let totalpages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalpages -1;
    }
}

const backprofileBtn = document.querySelector('.back-profile');

backprofileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                pages[pageNumber].classList.remove('turn');
            })
        }, (index+1) * 200 +100)
    })
}