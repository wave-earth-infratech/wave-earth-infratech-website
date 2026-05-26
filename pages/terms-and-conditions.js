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
              title="Terms & Conditions | Wave Earth Infratech"
              description="Read the terms and conditions governing the use of Wave Earth Infratech's website and services."
            />

            <Header />

            <Sidebar />

            <Footer />

            <Js />
        </>
    )
}