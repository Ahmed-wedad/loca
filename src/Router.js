import React, {Suspense, lazy} from "react"
import {Router, Switch, Route} from "react-router-dom"
import {history} from "./history"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import SnackbarProvider from 'react-simple-snackbar'
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category"
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions"
import {ContextLayout} from "./utility/context/Layout"

// Route-based code splitting
const ecommerceDashboard = lazy(() =>
  import("./views/dashboard/ecommerce/EcommerceDashboard")
)
const email = lazy(() => import("./views/apps/email/Email"))
const todo = lazy(() => import("./views/apps/todo/Todo"))
const calendar = lazy(() => import("./views/apps/calendar/Calendar"))
const car = lazy(() => import("./views/apps/cars/DataTableExpandable"))
const trip = lazy(() => import("./views/apps/trips/DataTableExpandable"))
const reviews = lazy(() => import("./views/apps/reviews/DataTableExpandable"))
const users = lazy(() => import("./views/apps/users/DataTableCustom"))
const ratings = lazy(() => import("./views/apps/ratings/DataTableExpandable"))
const payments = lazy(() => import("./views/apps/payments/DataTablePagination"))
const licenses = lazy(() => import("./views/apps/licenses/DataTableExpandable"))
const profile = lazy(() => import("./views/pages/profile/Profile"))
const faq = lazy(() => import("./views/pages/faq/FAQ"))
const knowledgeBase = lazy(() =>
  import("./views/pages/knowledge-base/KnowledgeBase")
)
const search = lazy(() => import("./views/pages/search/Search"))
const accountSettings = lazy(() =>
  import("./views/pages/account-settings/AccountSettings")
)
const invoice = lazy(() => import("./views/pages/invoice/Invoice"))
const comingSoon = lazy(() => import("./views/pages/misc/ComingSoon"))
const error404 = lazy(() => import("./views/pages/misc/error/404"))
const error500 = lazy(() => import("./views/pages/misc/error/500"))
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"))
const maintenance = lazy(() => import("./views/pages/misc/Maintenance"))
const forgotPassword = lazy(() =>import("./views/pages/authentication/ForgotPassword")
)
const Login = lazy(() => import("./views/pages/authentication/login/Login"))

const lockScreen = lazy(() => import("./views/pages/authentication/LockScreen"))
const resetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
)
const register = lazy(() =>
  import("./views/pages/authentication/register/Register")
)
// Set Layout and Component Using App Route
const RouteConfig = ({component: Component, fullLayout, auth: {isAuthenticated, loading}, ...rest}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner/>}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.user,
    auth: state.auth.login
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

const AppRouter = ({auth: {isAuthenticated, loading}}) => {
  return (
    // Set the directory path if you are deploying in sub-folder
    <Router history={history}>
      <SnackbarProvider>
        <Switch>
          <AppRoute
            exact
            path="/"
            component={ecommerceDashboard}
          />
          <AppRoute
            path="/email"
            exact
            component={() => <Redirect to="/email/inbox"/>}
          />
          <AppRoute path="/reviews" component={reviews}/>
          <AppRoute path="/users" component={users}/>
          <AppRoute path="/ratings" component={ratings}/>
          <AppRoute path="/payments" component={payments}/>
          <AppRoute path="/licenses" component={licenses}/>
          <AppRoute path="/email/:filter" component={email}/>
          <AppRoute
            path="/todo"
            exact
            component={() => <Redirect to="/todo/all"/>}
          />
          <AppRoute path="/todo/:filter" component={todo}/>
          <AppRoute path="/calendar" component={calendar}/>
          <AppRoute path="/pages/profile" component={profile}/>
          <AppRoute path="/pages/faq" component={faq}/>
          <AppRoute
            path="/pages/knowledge-base"
            component={knowledgeBase}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category"
            component={knowledgeBaseCategory}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category/questions"
            component={knowledgeBaseQuestion}
          />
          <AppRoute path="/pages/search" component={search}/>
          <AppRoute
            path="/pages/account-settings"
            component={accountSettings}
          />
          <AppRoute path="/pages/invoice" component={invoice}/>
          <AppRoute
            path="/misc/coming-soon"
            component={comingSoon}
            fullLayout
          />
          <AppRoute path="/misc/error/404" component={error404} fullLayout/>
          <AppRoute path="/pages/login" component={Login} fullLayout/>
          <AppRoute path="/pages/register" component={register} fullLayout/>
          <AppRoute
            path="/pages/forgot-password"
            component={forgotPassword}
            fullLayout
          />
          <AppRoute
            path="/pages/lock-screen"
            component={lockScreen}
            fullLayout
          />
          <AppRoute
            path="/pages/reset-password"
            component={resetPassword}
            fullLayout
          />
          <AppRoute path="/misc/error/500" component={error500} fullLayout/>
          <AppRoute
            path="/misc/not-authorized"
            component={authorized}
            fullLayout
          />
          <AppRoute
            path="/misc/maintenance"
            component={maintenance}
            fullLayout
          />
          <AppRoute path="/cars" component={car}/>
          <AppRoute path="/trips" component={trip}/>
          <AppRoute component={error404} fullLayout/>
        </Switch>
      </SnackbarProvider>
    </Router>
  )
}

export default connect(mapStateToProps)(AppRouter)
