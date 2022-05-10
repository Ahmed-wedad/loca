import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const PaymentcardModel = types
  .model("Paymentcard")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type PaymentcardType = Instance<typeof PaymentcardModel>
export interface Paymentcard extends PaymentcardType {}
type PaymentcardSnapshotType = SnapshotOut<typeof PaymentcardModel>
export interface PaymentcardSnapshot extends PaymentcardSnapshotType {}
export const createPaymentcardDefaultModel = () => types.optional(PaymentcardModel, {})
