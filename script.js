document
.getElementById("btnStart")
.addEventListener("click",()=>{

  const nama =
  document.getElementById("nama").value;

  const email =
  document.getElementById("email").value;

  alert(
    `Nama: ${nama}\nEmail: ${email}`
  );

});
