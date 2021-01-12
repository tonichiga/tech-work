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

// const newUser = {
//   name: "user",
//   password: "1234567",
//   email: "tonichiga@gmail1.com",
// };
const allContacts = [];

const user = {
  name: "",
  number: "",
};

// const options = {
//   method: "POST",
//   body: JSON.stringify(newUser),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

const headers = {
  Authorization: `Bearer ${token2}`,
};

const createContact = (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Authorization: `Bearer ${token2}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetch(`https://goit-phonebook-api.herokuapp.com/contacts`, options)
    .then((res) => res.json())
    .then((contacts) => {
      console.log;
      fetchContact();
    });
};

refs.createUserBtn.addEventListener("click", (e) => {
  createContact(user);

  e.preventDefault();
});

refs.createName.addEventListener("input", (e) => {
  user.name = e.target.value;
});

refs.createNumber.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  user.number = e.target.value;
});

refs.getItemList.addEventListener("click", (e) => {
  let deleteId = "";

  if (e.target.nodeName === "BUTTON") {
    refs.getItemList.innerHTML = "";
    deleteId = e.target.dataset.id;
    deleteContact(deleteId);
    getContacts().then((contacts) => {
      let array = [...contacts];
      //   allContacts.push(...array);

      getMarkup(array, contacts);
    });
  }
});
const deleteContact = (id) => {
  const headers = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token2}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetch(
    `https://goit-phonebook-api.herokuapp.com/contacts/${id}`,
    headers
  ).then((res) => res.json());
};

const fetchContact = () => {
  refs.getItemList.innerHTML = "";

  getContacts().then((contacts) => {
    let array = [...contacts];
    // allContacts.push(...array);
    getMarkup(array, contacts);
  });
};

const getContacts = () => {
  return fetch(`https://goit-phonebook-api.herokuapp.com/contacts`, {
    headers,
  }).then((res) => res.json());
};

const getMarkup = (array, contacts) => {
  const markup = template(array);
  refs.getItemList.insertAdjacentHTML("beforeend", markup);
};

fetchContact();
