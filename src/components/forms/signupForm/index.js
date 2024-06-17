async function submitForm(username, email, password, passwordConfirm) {
  try {
    const response = await fetch(
      "https://www.greatfrontend.com/api/questions/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      }
    );

    const { message } = await response.json();
    alert(message);
  } catch (_) {
    alert("Error submitting form!");
  }
}

(() => {
  // store form, password confirm input, and error dialog
  const form = document.querySelector(".signup-form");
  const passwordConfirmInput = document.querySelector("#password-confirm-input");
  const passwordMismatchError = document.querySelector(
    "#password-mismatch-error"
  );

  // assign submit event listener to form
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    passwordConfirmInput.removeAttribute("aria-invalid");
    passwordMismatchError.classList.add("hidden");

    // construct a FormData object using form values
    const formData = new FormData(form);

    const password = formData.get("password");
    const passwordConfirm = formData.get("password-confirm");

    if (password !== passwordConfirm) {
      passwordMismatchError.setAttribute("aria-invalid", "true");
      passwordMismatchError.classList.toggle("hidden");
      return;
    }

    await submitForm(
      formData.get('username'),
      formData.get('email'),
      formData.get('password'),
      formData.get('password-confirm')
    );
  });
})();
