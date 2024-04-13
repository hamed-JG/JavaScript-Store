const errors = document.querySelectorAll("#error");

const validateUserName = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};

const validatePassword = (password) => {
  const regex = /^.{4,20}$/;
  const result = regex.test(password);
  return result;
};

const validateForm = (username, password) => {
  const usernameResult = validateUserName(username);
  const passwordResult = validatePassword(password);
  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    errors[0].innerText = "User Name isn't correct";
  } else if (!passwordResult) {
    errors[1].innerText = "Should be between 4 and 20 characters";
  }
};

export default validateForm;
