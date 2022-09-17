let show = document.getElementById("show");
let me = document.getElementById("me");
let arr = [1, 2, 3, 4, 5, 6];
show.innerHTML = arr
  .map(
    (val) => `<li class='btn' value=${val} onclick="remove(this)">${val}</li>`
  )
  .join("");
let remove = (elem) => {
  let edit = document.createElement("button");
  edit.textContent = "Edit";
  let dlt = document.createElement("button");
  dlt.textContent = "Remove";
  me.appendChild(edit);
  me.appendChild(dlt);
  dlt.addEventListener('click',function(){
    removeElem(elem,dlt,edit)
  })
  edit.addEventListener("click", function () {
    update(elem);
  });
};
let removeElem = (elem,dlt,edit)=>{
    elem.parentNode.removeChild(elem);
    dlt.style.display = 'none'
    edit.style.display = 'none'
}
let update = (elem) => {
//   let inp = document.createElement("input");
//   let btn = document.createElement("button");
//   btn.setAttribute("value", '1');
//   btn.textContent = "submit";
//   me.appendChild(inp);
//   me.appendChild(btn);
let p = prompt('enter')
  elem.innerHTML = p;
//   inp.value = "";
//   console.log(inp.value);
};
