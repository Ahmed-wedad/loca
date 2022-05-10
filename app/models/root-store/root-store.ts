import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { DrivingApprouveModel } from "../driving-approuve/driving-approuve"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  verificationstore: types.optional(DrivingApprouveModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
