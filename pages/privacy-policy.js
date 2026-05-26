import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta
              title="Privacy Policy | Wave Earth Infratech"
              description="Read the privacy policy of Wave Earth Infratech, covering how we collect, use, and protect your information."
            />

            <Header />

            <Sidebar />

            <Footer />

            <Js />
        </>
    )
}