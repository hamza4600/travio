'use client'

import { ThemeProvider } from 'styled-components'

import Them, { GlobalStyle } from '.'
import StyledComponentsRegistry from './registry'

// Pages provider
const MainThemeProvider = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={Them.light}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  )
}

export default MainThemeProvider

// App theme provider

export const AppThemeProvider = ({ children }) => {
  return (
    <StyledComponentsRegistry>
        {children}
    </StyledComponentsRegistry>
  )
}
