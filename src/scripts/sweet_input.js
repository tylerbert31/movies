import Swal from "sweetalert2"

function get_comment() {
  ;(async () => {
    const { value: formValues } = await Swal.fire({
      title: "Suggest a movie",
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Your name..." required>' +
        '<input id="swal-input2" class="swal2-input" placeholder="Movie name...">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ]
      },
    })

    if (formValues) {
      if (formValues[0] !== "" && formValues[1] !== "") {
        localStorage.setItem("name", formValues[0])
        localStorage.setItem("comment", formValues[1])
        Swal.fire("Thank you " + formValues[0] + "!")

        return true
      } else {
        Swal.fire("Please fill in all the fields!", "", "warning")
      }
    }
  })()
}

export default get_comment
