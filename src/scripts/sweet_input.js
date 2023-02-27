import Swal from "sweetalert2";

let isRunning = false;

function get_comment() {
  if (isRunning) {
    return Promise.resolve(); // Return a resolved Promise if the function is already running
  }

  isRunning = true;

  return new Promise((resolve) => {
    // Return a Promise that resolves when the function has completed
    (async () => {
      const { value: formValues } = await Swal.fire({
        title: "Suggest a movie",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Your name..." maxlength={20}>' +
          '<input id="swal-input2" class="swal2-input" placeholder="Movie name..." maxlength={25}>',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
          ];
        },
      });

      if (formValues) {
        if (formValues[0] !== "" && formValues[1] !== "") {
          localStorage.setItem("name", formValues[0]);
          localStorage.setItem("comment", formValues[1]);
          success(formValues[0]);
        } else {
          Swal.fire("Please fill in all the fields!", "", "warning");
        }
      }

      isRunning = false;
      resolve(); // Resolve the Promise once the function has completed
    })();
  });
}

function success(x) {
  let timerInterval;
  Swal.fire({
    title: "Success!",
    html: "Auto-closing in <b></b> milliseconds.",
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      // console.log("I was closed by the timer");
    }
  });
}

export default get_comment;
