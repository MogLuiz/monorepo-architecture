import { customRender } from "@monorepo/test-commons/react-testing-library";
import { HomeScreen } from "./HomeScreen";

const render = customRender();

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);
    expect(container).toMatchSnapshot();
  });
});
