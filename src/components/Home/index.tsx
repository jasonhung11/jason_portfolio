import AboutMe from "@components/AboutMe";
import Certificate from "@components/Certificate";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import Works from "@components/Works";

export default function Home(){
    return (
        <>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Certificate/>
            <Works/>
        </>
    )
}