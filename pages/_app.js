import PropTypes from 'prop-types'
import Head from 'next/head'
// ThemeProvider para utilizar o theme.js
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// importa o tema
import theme from '../src/theme'

export default function MyApp(props) {
  const { Component, pageProps } = props // Component e pageProps as propriedades da pagina

  return (
    <>
      {/* import Head */}
      <Head>
        <title>Anunx</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {/* injetando o tema */}
      <ThemeProvider theme={theme}>
        {/* Css */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )


}


// import PropType
MyApp.propTypes = {
  Componente: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}