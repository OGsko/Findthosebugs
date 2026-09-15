import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TodoApp from "../components/TodoApp"

describe("Add todos", () => {
    it("should not be possible to add empty todo", async () => {
        //arrange
        const user = userEvent.setup()
        render(<TodoApp/>)
        const input = screen.getByLabelText("Ny uppgift")
        const addButton = screen.getByRole("button", {name: /lägg till/i})

        //act
        await user.click(addButton)
        await user.type(input, " ")
        await user.click(addButton)

        const todos = screen.queryAllByRole("listitem")

        //assert
        expect(todos.length).toEqual(0)
    })
})