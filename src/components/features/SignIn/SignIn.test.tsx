import React from "react";
import { render } from "@testing-library/react";
import SignIn from "./SignIn";

jest.mock("../../../utils/api/user");
jest.mock("../../../redux/actions");

describe("SignIn", () => {
  test("SignIn component renders without fail", () => {
    render(<SignIn />);
  });
});