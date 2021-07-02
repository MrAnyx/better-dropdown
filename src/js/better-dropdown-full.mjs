// var x = document.getElementById("item1").nextElementSibling

// $('.dropdown-toggle').dropdown()

// $(document).ready(function(){
//    $('.dropdown-submenu a.test').on("click", function(e){
//      $(this).next('ul').toggle();
//      e.stopPropagation();
//      e.preventDefault();
//    });
//  });

//  document.querySelectorAll(".dropdown-submenu ")


document.querySelectorAll(".dropdown-item.item-nested ~ span").forEach((el) => {
   let node = document.createElement("i");
   node.setAttribute("class", "eva eva-github");
   el.appendChild(node);
});