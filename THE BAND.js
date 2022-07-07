const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const $ = document.querySelector('.js-mosal-close')
const modalContainer  = document.querySelector('.js-modal-container')
// Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTicket () {
    modal.classList.add('open')
}

// Hàm ẩn modal mua vé (thêm class remove vào modal)
function hideBuyTicket () {
    modal.classList.remove('open')
}

// lặp qua từng thẻ button và lắng nghe hành vi click
for(const buyBtn of buyBtns ) {
    /* Khi click vào buyBtn  thì hàm showBuyTicket chạy */
   buyBtn.addEventListener('click', showBuyTicket )     /* lắng nghe click */
}

modal.addEventListener('click', hideBuyTicket )
// có 1 close nên ko cần dùng vòng lặp 
$.addEventListener('click', hideBuyTicket ) 

modalContainer.addEventListener('click', function(event) {
// chặn even nổi bọt */
event.stopPropagation()  
})
var header =  document.getElementById('header')
var mobileMenu =  document.getElementById('mobile-menu');
var headerHeight = header.clientHeight
// đóng/ mở
mobileMenu.onclick = function() {
var isClosed = header.clientHeight === headerHeight;
if(isClosed) {
 header.style.height = 'auto';
}else {
 header.style.height = null;
}
}
// Tự động đóng khi chọn menu
// Selector all thẻ a có href chứa dấu #
     var menuItems = document.querySelectorAll('#nav li a[href*="#"' );  
    for (var i = 0; i < menuItems.length; i++) {
       var menuItem = menuItems[i];
       menuItem.onclick = function (event){
       var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
         if(isParentMenu) {
                 event.preventDefault();   // bỏ qua mặc định
         }else {
            header.style.height = null;
       }
    }
}
// khi click vào 1 thẻ thì lấy chính thẻ mà ta click vào rồi ktra cái anh 
// liền kề của nó