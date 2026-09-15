import { render } from "@testing-library/react"
import Post from "../components/Post"

describe("Post", () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn()
    })

    afterEach(() => {
        vi.resetAllMocks()
    })

    it("should fetch correct post accordning to ID", () => {
        //arrange
        vi.mocked(globalThis.fetch).mockResolvedValue({
            json: async () => ({}),
        } as Response)

        render(<Post id={5}/>)
        //act
        //?????

        //assert
        expect(globalThis.fetch).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/posts/5"
        )
    })
})