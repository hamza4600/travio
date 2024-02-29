import { createGlobalStyle } from 'styled-components'

const breakPoints = {
  mobile: '576px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
  desktopL: '1440px',
  desktopXL: '1920px',
}

const lightThem = {
  navbar: {
    background: '#fff',
    borderColor: '#091E4224',
    textColor: '#172B4D',
    hoverBackground: '#091E420F',
    activeBackground: '#E9F2FF',
    activeColor: '#0C66E4',
    closeBox: 'white',
  },
  // used
  maxWidth: '1920px',
  background: '#fff',
  color: {
    gray: '#726E83', // for nav text
    blue: '#3FA9F5', // active color
    bgFooter: '#1A4767', // footer bg
    borderColor: 'rgba(26, 71, 103, 0.2)',
  },
  font: 'DM Sans, sans-serif',
  fontDmSan: 'var(--dm-sans)',
  fontOutfit: 'var(--outfit)',
  fontSatoshi: 'var(--font-satoshi)',
  pageText: '#016089',
  MediaDevices: {
    mobile: `@media screen and (max-width: ${breakPoints.mobile})`,
    tablet: `@media screen and (max-width: ${breakPoints.tablet})`,
    laptop: `@media screen and (max-width: ${breakPoints.laptop})`,
    desktop: `@media screen and (max-width: ${breakPoints.desktop})`,
    desktopL: `@media screen and (max-width: ${breakPoints.desktopL})`,
    desktopXL: `@media screen and (max-width: ${breakPoints.desktopXL})`,
  },
}

const Them = {
  light: lightThem,
}

export default Them

export const GlobalStyle = createGlobalStyle`

  * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
   
    body {
        background: ${({ theme }) => theme.background};
        font-family: ${({ theme }) => theme.font} !important;
        font-style: normal;
    }

    input, textarea, button {font-family: inherit}
    
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    button {
        cursor: pointer;
    }

    // style scroll bar
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.background};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.color.borderColor};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.color.borderColor};
    }
    ::-webkit-scrollbar-thumb:active {
        background: ${({ theme }) => theme.color.borderColor};
    }
    ::-webkit-scrollbar-corner {
        background: ${({ theme }) => theme.background};
    }
    ::-webkit-scrollbar-button {
        display: none;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`
