import { render, screen } from "@testing-library/react"
import TodoStats from "../components/TodoStats"

describe("TodoStats", () => {
    it("Should show correctly amount of remaning todos", () => {
        //arrange
        type Todo = {
            id: number,
            text: string,
            completed: boolean
        }

        const todos: Todo[] = [
            {
                id: 1,
                text: "todo1",
                completed: false,
            },
            {
                id: 2,
                text: "todo2",
                completed: true,
            },
            {
                id: 3,
                text: "todo3",
                completed: false,
            }
        ]

        //act
        render(<TodoStats todos={todos}/>)

        //assert
        expect(screen.getByText("2 kvar av 3")).toBeInTheDocument();
    })
})