var special_case=document.querySelectorAll('.special-case');
var normal_case=document.querySelector('.width-fix');
var width=1200;
window.addEventListener('resize', function() {
  if (window.innerWidth < width) {
    normal_case.classList.replace('d-block','d-none');
    special_case.forEach(element => {
      element.classList.replace('d-none','d-block');
    });
  }
});
