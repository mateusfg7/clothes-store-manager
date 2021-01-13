import styled from 'styled-components'

import { Main } from '@styles/global-components'

export const ExtendedMain = styled(Main)`
  form fieldset button.size-button {
    opacity: 0.5;

    &.active {
      opacity: 1;
    }
  }
`
