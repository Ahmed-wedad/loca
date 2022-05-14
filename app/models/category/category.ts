import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const CategoryModel = types
  .model("Category")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type CategoryType = Instance<typeof CategoryModel>
export interface Category extends CategoryType {}
type CategorySnapshotType = SnapshotOut<typeof CategoryModel>
export interface CategorySnapshot extends CategorySnapshotType {}
export const createCategoryDefaultModel = () => types.optional(CategoryModel, {})
