import { OptonModel } from "./opton"

test("can be created", () => {
  const instance = OptonModel.create({})

  expect(instance).toBeTruthy()
})
