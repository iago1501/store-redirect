import { canUseDOM, useRuntime } from 'vtex.render-runtime'

const APP_LOCATOR = 'vtex.store-redirect'

function Redirect() {

  const { getSettings, navigate } = useRuntime()

  const { urlRedirect } = getSettings(APP_LOCATOR) || {}

  const shouldRedirect = canUseDOM
  ? navigate(urlRedirect)
  : null


  return shouldRedirect

}

export default Redirect
