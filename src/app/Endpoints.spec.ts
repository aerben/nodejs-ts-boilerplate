import ExpressMocks from "expressmocks";
import { Endpoints } from "./Endpoints";

describe("Endpoints", () => {
  it("Should display default message", () => {
    let defaultMessage = { message: "Hello world" };
    let uut = new Endpoints(defaultMessage);
    return ExpressMocks.create()
      .test(uut.root.bind(uut))
      .expectStatus(200)
      .expectJson(defaultMessage);
  });
});
