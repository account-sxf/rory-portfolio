import { useRef, useState } from 'react'
import Head from 'next/head'

import thumbsLight from '../public/images/thumbs-light512.png'
import thumbsDark from '../public/images/thumbs-dark512.png'
import code from '../public/images/code512.png'
import design from '../public/images/design512.png'
import analysis from '../public/images/analysis512.png'
import work1 from "../public/images/work1_xp3ns.png"
import work2 from "../public/images/work2_decisions.png"

import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'
import DetailCardSection from '../components/DetailCardSection'
import DetailCard from '../components/DetailCard'
import PortfolioSection from '../components/PortfolioSection'
import PortfolioCard from '../components/PortfolioCard'

export default function Home() {
    const [dark, setDark] = useState("")
    const [mainImg, setMainImg] = useState(thumbsLight)

    const detailSection = useRef(null)

    function handleScrollClick() {
        detailSection?.current.scrollIntoView({ behavior: 'smooth' })
    }

    const toggleDark = () => {
        setDark(prevDark => {
            console.log(prevDark)
            if (prevDark) {
                setMainImg(thumbsLight)
                return ""
            } else {
                setMainImg(thumbsDark)
                return "dark"
            }
        })
    }

    return (
        <div className={dark}>
            <Head>
                <title>Rory Coded This</title>
                <meta name="description" content="Rory's website and portfolio - Rory coded this" />
                <meta name="author" content="Rory Samson" />
                <meta name="keywords" content="HTML, CSS, Javascript, Portfolio, Rory Samson" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='bg-white dark:bg-stone-900 dark:text-white font-asap transition'>
                <NavBar {...{ toggleDark }} />
                <PageIntro {...{
                    title: "Rory Samson",
                    subtitle: "Front-to-back developer and IT business analyst",
                    para: "Hi, _I'm Rory_.\n\nI am looking for my _next developer job_. Please _check out my work_.\nCould I be a good fit for your team?",
                    mainImg,
                    handleScrollClick
                }} />
                <div ref={detailSection} className="h-24"></div>
                <DetailCardSection {...{
                    title: "What I can do",
                    para: "I am a _developer_ and competent _operations_ _analyst_ with a passion for\nGNU/Linux, FOSS, art and design.\n\nCheck out my CV to learn more.\nHere is a taste:",
                }} >
                    <DetailCard {...{
                        title: "Develop and Automate",
                        img: code,
                        body: "I design and maintain _python automation_ for a fast-paced enterprise service centre\nand build _apps and websites_ on proven modern frameworks.",
                        detailHeading: "Dev tools I use",
                        detailPara: [
                            "Javascript, HTML and CSS",
                            "Python",
                            "Next.js",
                            "React",
                            "Jest",
                            "C++",
                            "GNU/Linux!"
                        ]
                    }} />
                    <DetailCard {...{
                        title: "Illustration and Design",
                        img: design,
                        body: "I create _audiovisual, 2D and 3D assets_, with skill in a wide range of tools.",
                        detailHeading: "Dev tools I use",
                        detailPara: [
                            "Inkscape/Illustrator",
                            "Gimp/Photoshop",
                            "Blender",
                            "Penpot",
                            "DaVinci Resolve",
                            "Presonus Studio One",
                            "FL Studio"
                        ]
                    }} />
                    <DetailCard {...{
                        title: "IT operations analysis",
                        img: analysis,
                        body: "I have _years of experience_ as an _IT operations analyst_ for a telco.\nI provide deep _insights_ and effective recommendations.",
                        detailHeading: "Analytical tools I use",
                        detailPara: [
                            "Excel",
                            "PowerBI",
                            "Python"
                        ]
                    }} />
                </DetailCardSection>
                <PortfolioSection title="Portfolio" subtitle="Check out a sample of my latest projects!">
                    <PortfolioCard {...{ title: "Expense Tracker", img: work1, url: "https://xp3ns.herokuapp.com/" }} />
                    <PortfolioCard {...{ title: "Decision Maker", img: work2, url: "https://limitless-mountain-91728.herokuapp.com/" }} />
                </PortfolioSection>

            </main >
        </div>
    )
}
