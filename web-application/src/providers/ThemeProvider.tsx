import React from 'react'

import { ThemeProvider as Provider } from 'styled-components'

const Theme = {
  main: 'mediumseagreen'
}

const ThemeProvider = (props: { children: any }) => (
  <Provider theme={Theme}>
    {props.children}
  </Provider>
)

export default ThemeProvider
