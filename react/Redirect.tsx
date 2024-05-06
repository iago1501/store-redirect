import { canUseDOM, useRuntime } from 'vtex.render-runtime'

const APP_LOCATOR = 'koestore.store-redirect'

function Redirect() {

  const { getSettings, navigate } = useRuntime()

  const { urlRedirect } = getSettings(APP_LOCATOR) || {}

  canUseDOM && urlRedirect && navigate({to: urlRedirect})

  return null
}

export default Redirect
