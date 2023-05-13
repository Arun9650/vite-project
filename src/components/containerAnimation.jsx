import { motion, useScroll } from "framer-motion";

const ContainerAnimation = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div className="wrapper">
            <div className="child">
                <div className="subtitle">
                    <svg width="18" height="18" style={{ marginRight: '10px' }} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#A594FD"></path></svg>
                    Workflow</div>
                <div className="title">

                    Create at the speed of thought.

                </div>
                <div className="discription">
                    Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you
                </div>
            </div>
            <div className="child child-2">
                <motion.div style={{scaleX: scrollYProgress}}  className="scroll"/>
            {/* <div className="scroll-tracker">
                <div className="scroll"></div>
            </div> */}
            {/* <div className="scroll"></div> */}

                <div className="box box-1">

                    <div className="InnerChild">
                        <div> <img src="/shift-img.svg" alt="img" /></div>
                        <div className="innerChild__title">
                            A keyboard
                            <br />
                            first experience.
                        </div>
                        <div className="innerChild__discription">
                            Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!
                        </div>
                    </div>

                   

                </div>

                <div className="box">

                    <div className="InnerChild">
                        <div> <img src="/shift-img.svg" alt="img" /></div>
                        <div className="innerChild__title">
                            A keyboard
                            <br />
                            first experience.
                        </div>
                        <div className="innerChild__discription">
                            Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!
                        </div>
                    </div>


                </div>
                <div className="box">

                    <div className="InnerChild">
                        <div> <img src="/shift-img.svg" alt="img" /></div>
                        <div className="innerChild__title">
                            A keyboard
                            <br />
                            first experience.
                        </div>
                        <div className="innerChild__discription">
                            Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!
                        </div>
                    </div>


                </div>

                
            </div>
        </div>
    )
}

export default ContainerAnimation