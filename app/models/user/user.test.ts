import { UserModel } from "./usermodel"

test("can be created", () => {
  const instance = UserModel.create({})

  expect(instance).toBeTruthy()
})
