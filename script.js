function addTodoElem() {
  const inputElement = document.querySelector('[data-test="todo-input"]');
  const todoValue = inputElement.value;

  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      value: todoValue,
    })
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      alert("There was an error, while sending data! " + error);
    });
}

document
  .querySelector('[data-test="todo-add"]')
  .addEventListener("click", addTodoElem);
