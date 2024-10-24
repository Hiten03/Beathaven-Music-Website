document.addEventListener("DOMContentLoaded", function() {
    const lessmore = document.querySelector(".lessmore");
    const point = document.querySelector("#point");
  
    if (lessmore && point) {
      lessmore.addEventListener("mousemove", function(dets) {
        point.style.left = `${dets.x}px`;
        point.style.top = `${dets.y}px`;
      });
    }
  });
  