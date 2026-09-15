import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TodoList from "../components/TodoList"

describe("Todo Toggle", () => {
    it("should mark correct todo as done", async () => {
        //arrange
        const user = userEvent.setup()

        type Todo = {
            id: number,
            text: string,
            completed: boolean
        }

        const todos: Todo[] = [
            {
                id: 77,
                text: "Todo1",
                completed: false
            }
        ]

        const onToggle = vi.fn()
        const onDelete = vi.fn()

        //act
        render(<TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>) 
        await user.click(screen.getByRole("checkbox"))

        //assert
        expect(onToggle).toHaveBeenCalledWith(77)
    })
})