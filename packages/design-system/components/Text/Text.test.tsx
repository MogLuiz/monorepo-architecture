import { customRender } from "@monorepo/test-commons/react-testing-library";
import { Text } from "./index";

const render = customRender();

describe("<Text />", () => {
  it("ensure render Text correctly", () => {
    const { container } = render(<Text tag="h1">Sample text</Text>);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });
});
