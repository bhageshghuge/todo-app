document.addEventListener("DOMContentLoaded", () => {
	const todoForm = document.getElementById("todo-form")
	const todoInput = document.getElementById("todo-input")
	const todoList = document.getElementById("todo-list")

	todoForm.addEventListener("submit", (e) => {
		e.preventDefault()
		addTodo(todoInput.value)
		todoInput.value = ""
	})

	function addTodo(task) {
		const li = document.createElement("li")

		const taskText = document.createElement("span")
		taskText.textContent = task
		li.appendChild(taskText)

		const completeButton = document.createElement("button")
		completeButton.textContent = "Complete"
		completeButton.addEventListener("click", () => {
			li.classList.toggle("completed")
		})
		li.appendChild(completeButton)

		const deleteButton = document.createElement("button")
		deleteButton.textContent = "Delete"
		deleteButton.classList.add("delete")
		deleteButton.addEventListener("click", () => {
			todoList.removeChild(li)
		})
		li.appendChild(deleteButton)

		todoList.appendChild(li)
	}
})
