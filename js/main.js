$(function () {
  $(".project-column-body").sortable({
    connectWith: ".project-column-body",
    containment: ".project-details-columns",
    revert: 300,
    // opacity: 0.95,
  })
  $(".project-column-body").droppable({
    accept: ".project-item",
  })
  //   $(".project-item").draggable({
  //     // refreshPositions: true,
  //     revert: "invalid",
  //     snap: ".project-column-body",
  //     appendTo: "body",
  //   })
})
// var docWidth = document.documentElement.offsetWidth

// ;[].forEach.call(document.querySelectorAll("*"), function (el) {
//   if (el.offsetWidth > docWidth) {
//     console.log(el)
//   }
// })
