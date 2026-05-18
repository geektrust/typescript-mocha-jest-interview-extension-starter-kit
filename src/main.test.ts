// We support Mocha + Chai for unit testing by default.
//
// If you prefer using Jest instead, run `npm run init:jest` in the terminal to setup Jest dependencies.
// This will switch your project to use Jest which includes built-in assertions and mocking capabilities.

import { assert } from "chai";

import { handle } from "./main";

describe("TravelCost Test Suite", function () {
  function getOutput(input: string): string {
    let output = "";

    const originalLog = console.log;

    console.log = (message: string): void => {
      output += message;
    };

    handle(input);

    console.log = originalLog;

    return output.trim();
  }

  it("should calculate Paris round trip cost", function () {
    const input = "3 Paris round";
    const expected = "Total Flight Cost: 1500";

    assert.equal(getOutput(input), expected);
  });

  it("should calculate Tokyo one-way cost", function () {
    const input = "2 Tokyo one-way";
    const expected = "Total Flight Cost: 900";

    assert.equal(getOutput(input), expected);
  });

  it("should calculate Cairo round trip cost", function () {
    const input = "5 Cairo round";
    const expected = "Total Flight Cost: 3000";

    assert.equal(getOutput(input), expected);
  });

  it("should handle invalid destination", function () {
    const input = "3 London round";
    const expected = "INVALID DESTINATION";

    assert.equal(getOutput(input), expected);
  });
});
