const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('#load-more');

loadMoreBtn.addEventListener('click', () => {
  gallery.scrollTop -= 1000;
});
window.onscroll = function(ev){
   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      infiniteScroll();
   }
};