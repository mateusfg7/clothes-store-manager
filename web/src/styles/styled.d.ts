/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import lightTheme from './theme/light'

export type Theme = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
