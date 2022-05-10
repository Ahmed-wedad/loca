import { PaymentcardModel } from "./paymentcard"

test("can be created", () => {
  const instance = PaymentcardModel.create({})

  expect(instance).toBeTruthy()
})
