import Footer from '@/components/organisms/footer'
import Meta from '@/components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
