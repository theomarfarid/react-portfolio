import { motion } from "framer-motion";

const Skill = ({name, x, y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold
                bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
            whileHover={{ scale: 1.05 }}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y}}
            transition={{duration:1.5}}
            viewport={{once:true}}>
            {name}
        </motion.div>
    )
}

export default function Skills() {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                {/* <motion.div className='flex items-center justify-center rounded-full font-semibold
                bg-dark text-light p-8 shadow-dark cursor-pointer'
                whileHover={{scale:1.05}}>
                    Web
                </motion.div> */}
                <Skill name='Web'/>
                <Skill name="HTML" x="-19vw" y='2vw' />
                <Skill name="CSS" x="-5vw" y='-11vw' />
                <Skill name="JavaScript" x="19vw" y='-2vw' />
                <Skill name="ReactJS" x="0vw" y='15vw' />
                <Skill name="NextJS" x="-22vw" y='-8vw' />
                <Skill name="Web Design" x="28vw" y='-8vw' />
                <Skill name="Figma" x="5vw" y='-19vw' />
                <Skill name="Firebase" x="-25vw" y='12vw' />
                <Skill name="TailWind Css" x="28vw" y='10vw' />
                <Skill name="GIT" x="-28vw" y='-16vw' />
            </div>
        </>
    )
}
