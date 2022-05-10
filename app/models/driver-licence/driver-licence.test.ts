import { DriverLicenceModel } from "./driver-licence"

test("can be created", () => {
  const instance = DriverLicenceModel.create({})

  expect(instance).toBeTruthy()
})
