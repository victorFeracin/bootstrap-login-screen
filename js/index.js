let alert = document.getElementById("alertLogin");
let signIn = document.getElementById("signIn");
let reset = document.getElementById("reset");


signIn.onclick = (event) => {
  alert.innerHTML = `
  <div class="d-flex justify-content-between alert alert-info" role="alert">
    <strong>Login successful!</strong>
    <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
};

reset.onclick = (event) => {
  alert.innerHTML = '';
};
