import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TodoApp from "../components/TodoApp"

describe("filtering todos", () => {
    it("should show completed tasks when completed filter is toggled on", async () => {
        //arrange
        const user = userEvent.setup()
        render(<TodoApp/>)

        const input = screen.getByRole("textbox")
        const addButton = screen.getByRole("button", {name: /lägg till/i})
        const completedButton = screen.getByRole("button", {name: /klara/i})

        //act
        await user.type(input, "todo1")
        await user.click(addButton)
        await user.type(input, "todo2")
        await user.click(addButton)

        const checkboxes = screen.getAllByRole("checkbox")
        await user.click(checkboxes[0])

        await user.click(completedButton)

        //assert
        expect(screen.getByText("todo1")).toBeInTheDocument()
        expect(screen.queryByText("todo2")).not.toBeInTheDocument()
    })
})