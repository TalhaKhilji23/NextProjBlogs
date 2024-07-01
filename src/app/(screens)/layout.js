import Header from '../components/Header'
export default function RootLayout({ children }) {
  return (
    <>
     <div className='px-20'>
     <Header />
      <main className="body-container">{children}</main>
     </div>
    </>
  )
}