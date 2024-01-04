import {describe, it, expect} from "vitest";
import App from "./App";
import { render } from "@testing-library/react";

describe("something truthy and falsy", () =>{
    it("true to be true",()=>{
        expect(true).toBe(true);
    });
    it('false to be false', () =>{
        expect(false).toBe(false);
    });
});

describe('App',() =>{
    it('renders headline',() =>{
        render(<App title="React" />);
        screen.debug();
        //check if App renders a headline
    });
});