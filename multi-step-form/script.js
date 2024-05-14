const userData = [];

class User {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

//Save user input in new Object
const saveUserData = () => {
  userData.push(
    new User(
      document.getElementById('name').value,
      document.getElementById('email').value,
      document.getElementById('phone').value
    )
  );
};

//Validate form
const validateForm = () => {
  let valid = true;
  //check inputs
};

//Move to next step
const goToNextStep = () => {
  //prevent if input is not valid
  if (!validateForm()) {
    return false;
  }
  //go to next step/page
};

const handleBtnClick = () => {
  //validateForm()
  //saveUserData()
  //goToNextStep()
};

//Turn data to JSON

//Save JSON data to local storage

//toggle plan for step 2
const planArray = document.querySelectorAll('.plan');

const togglePlan = (event) => {
  planArray.forEach((item) => {
    if (item == event.target) {
      item.classList.add('plan-selected');
    } else {
      item.classList.remove('plan-selected');
    }
  });
};
