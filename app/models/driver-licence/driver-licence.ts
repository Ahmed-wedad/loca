import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Model description here for TypeScript hints.
 * this is a driver model 
 */
export const DriverLicenseModel = types
  .model("Driver")
  .props({
    id:types.identifier,
    document:types.maybe(types.string),
 nom:types.maybe(types.string),
prenom:types.maybe(types.string),
dob:types.Date,
licencenumber:types.string,
pays:types.maybe(types.string),
exp:types.Date,
region:types.string,
 })
 .extend(withEnvironment)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type DriverType = Instance<typeof DriverLicenseModel>
export interface Driver extends DriverType {}
type DriverSnapshotType = SnapshotOut<typeof DriverLicenseModel>
export interface DriverSnapshot extends DriverSnapshotType {}
export const createDriverDefaultModel = () => types.optional(DriverLicenseModel, {})
