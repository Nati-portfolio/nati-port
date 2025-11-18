"use client"
import { LayoutGroup, motion } from "motion/react"
import TextRotate from "./fancy/text/text-rotate"

const HeroCard = () => {
    return (
        <LayoutGroup>
            <motion.div className="flex whitespace-pre" layout>
                <TextRotate
                    texts={[
                        "Product Manager",
                        "AI Systems",
                        "Data Analytics",
                        "Web & Mobile Strategy"
                    ]}
                    mainClassName="text-black text-m font-agdasima px-2 md:px-2 bg-white overflow-hidden py-0.5 md:py-2 justify-center rounded-full"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </motion.div>
        </LayoutGroup>
    )
}

export default HeroCard