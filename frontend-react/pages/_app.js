import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      This is main app
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
