import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { DriverLicenseModel } from "../driver-licence/driver-licence"
import { PaymentcardModel } from "../paymentcard/paymentcard"

/**
 * this is the model for verifying a driver 
 */
export const DrivingApprouveModel = types
  .model("DrivingApprouve")
  .props({
 })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type DrivingApprouveType = Instance<typeof DrivingApprouveModel>
export interface DrivingApprouve extends DrivingApprouveType {}
type DrivingApprouveSnapshotType = SnapshotOut<typeof DrivingApprouveModel>
export interface DrivingApprouveSnapshot extends DrivingApprouveSnapshotType {}
export const createDrivingApprouveDefaultModel = () => types.optional(DrivingApprouveModel, {})
