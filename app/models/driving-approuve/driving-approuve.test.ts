import { DrivingApprouveModel } from "./driving-approuve"

test("can be created", () => {
  const instance = DrivingApprouveModel.create({})

  expect(instance).toBeTruthy()
})
