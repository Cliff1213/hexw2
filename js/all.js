console.clear();
const back2top = document.querySelector('.back2top');
const domHeader = document.querySelector('.header');

window.addEventListener('scroll', showArrow);
function showArrow() {
  if(window.scrollY > domHeader.offsetHeight) {
    back2top.classList.add('active');
    // console.log('run')
  }else{
    back2top.classList.remove('active');
  }
}

back2top.addEventListener('click', scrollHandler);
function scrollHandler() {

  let timer = setInterval(function() {
    let scrollUnit = document.documentElement.scrollTop;
    let scrollSpeed = scrollUnit / 15;

    document.documentElement.scrollTop = scrollUnit - scrollSpeed;
    // console.log(window.scrollY)

    if(window.scrollY == 0) {
      clearInterval(timer);
    }
  }, 10)
}
