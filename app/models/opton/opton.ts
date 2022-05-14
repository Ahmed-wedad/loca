import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const OptonModel = types
  .model("Opton")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type OptonType = Instance<typeof OptonModel>
export interface Opton extends OptonType {}
type OptonSnapshotType = SnapshotOut<typeof OptonModel>
export interface OptonSnapshot extends OptonSnapshotType {}
export const createOptonDefaultModel = () => types.optional(OptonModel, {})
