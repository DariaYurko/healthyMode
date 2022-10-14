// // // Добавляем класс active для всех элементов с классном menu-item, а если класс active есть - удаляем

// const linkInMenu = document.querySelectorAll('.menu-item')
// linkInMenu.forEach(function(i) {
//    if (i.classList.contains('active') == false) {
//       i.classList.add('active')
//    } else {
//       i.classList.remove('active')
//    }
// })



// // Добавляем класс active для одного первого элемента menu-item, а если класс active есть - удаляем

// const linkInMenu = document.querySelector('.menu-item')

// if (linkInMenu.classList.contains('active') == false) {
//    linkInMenu.classList.add('active')
// }



// const itemWork = document.querySelector(".item-work")

// if (itemWork) {
//    itemWork.addEventListener("click", function() {
//       itemWork.classList.toggle("active");
//    })
// }


const itemWorks = document.querySelectorAll(".item-work")

if (itemWorks.length) {
   itemWorks.forEach(function(element) {
      element.addEventListener("click", function(e) {
         element.classList.toggle('active')
         e.preventDefault()
      })
   })
}








