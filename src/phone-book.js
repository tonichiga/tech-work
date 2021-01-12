import template from "./template/template.hbs";

const refs = {
  createBtn: document.querySelector(".main-btn-create"),
  loginInput: document.querySelector(".form-login"),
  passwordInput: document.querySelector(".form-password"),
  getItem: document.querySelector(".phonebook__list-item"),
  getItemList: document.querySelector(".phonebook-list"),
  loginBtn: document.querySelector(".main-btn-login"),
  createName: document.querySelector(".form-create-name"),
  createNumber: document.querySelector(".form-create-number"),
  createUserBtn: document.querySelector(".create-btn"),
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZjZDg4M2I3MjliNDAwMTc0ZjQyNzMiLCJpYXQiOjE2MTA0NDUyOTF9.OphgquM_rUIzaRjmeRL5Mqc_AMJuyh3Ix_sKbrcBBtg";

const token2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZkNzMxOWRkMWQwMjAwMTc1Y2QxOWEiLCJpYXQiOjE2MTA0NDU1OTN9.XgthA6bCq0fOxYZrk0f9fLimH1uT0_Xav-eLnTBfMxE";

const newUser = {
  name: "user",
  password: "1234567",
  email: "tonichiga@gmail1.com",
};

refs.loginInput.addEventListener("input", (e) => {
  return (user.name = e.target.value);
});

refs.passwordInput.addEventListener("input", (e) => {
  return (user.password = e.target.value);
});
refs.createUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
// refs.createBtn.addEventListener("click", (e) => {
//   fetch(`https://goit-phonebook-api.herokuapp.com/users/signup`, options)
//     .then((responsed) => responsed.json())
//     .then(console.log);
// });

// refs.loginBtn.addEventListener("click", (e) => {

// });

const user = {
  name: "anton",
  number: "123-123",
};

const options = {
  method: "POST",
  body: JSON.stringify(newUser),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};
const headers = {
  Authorization: `Bearer ${token2}`,
};
// refs.loginBtn.addEventListener("click", (e) => {

//   fetch(`https://goit-phonebook-api.herokuapp.com/users/login`, options)
//     .then((responsed) => responsed.json())
//     .then(({ token, user }) => {
//       refs.getItemName.textContent = user.name;
//       refs.getItemLastName.textContent = user.email;
//     });
// });

refs.createName.addEventListener("input", (e) => {
  user.name = e.target.value;
});
refs.createNumber.addEventListener("input", (e) => {
  user.number = e.target.value;
});

const createContact = (name, number) => {
  const optionsAddItem = {
    method: "POST",
    body: JSON.stringify({ name, number }),
    headers: {
      ...headers,
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetch(
    `https://goit-phonebook-api.herokuapp.com/contacts`,
    optionsAddItem
  )
    .then((res) => res.json())
    .then((contacts) => {});
};
// createContact();

const fetchContact = () => {
  return fetch(`https://goit-phonebook-api.herokuapp.com/contacts`, { headers })
    .then((res) => res.json())

    .then((contacts) => {
      console.log(contacts);
      let array = [...contacts];
      const markup = template(array);
      refs.getItemList.insertAdjacentHTML("beforeend", markup);
    });
};
fetchContact();
