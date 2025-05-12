import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

// testing component
import ComContainer from "@/components/common/Container";

describe("Container component", () => {
  it("Pass type attribute should render correct class", () => {
    render(<ComContainer>This is container</ComContainer>);
    expect(screen.getByRole("container")).toHaveClass("container-type__box");
  });
});
