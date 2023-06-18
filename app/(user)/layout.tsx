import Banner from "@/components/Banner"
import Header from "@/components/Header"
import Nav from "@/components/Nav"
import "../../styles/globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
      <Header/>
      <Banner/>
        {children}
        <Nav/>
      </body>
    </html>
  )
}
