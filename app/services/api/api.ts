import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { DriverSnapshot } from "../../models/driver-licence/driver-licence"
/**
 * Manages all requests to the API.
 */
 const API_PAGE_SIZE = 50
 
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

   /**
   * verify the driver licence
   */

    async getVeriFeedBack(): Promise<Types.GetDriverLicenseVerifResult> {
      // make the api call
      const response: ApiResponse<any> = await this.apisauce.get("/verify",{ amount: API_PAGE_SIZE })
  
      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
  
      // transform the data into the format we are expecting
      try {
        const rawQuestions = response.data.results
       // const convertedQuestions: DriverSnapshot[] = rawQuestions.map(convertDriver)
       // return { kind: "ok", questions: convertedQuestions }
      } catch (e) {
        __DEV__ && console.tron.log(e.message)
        return { kind: "bad-data" }
      }
    }
  
}
