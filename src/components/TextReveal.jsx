import   {useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


const TextReveal = () => {

    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null);

    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
    
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];  
    }

    gsap.registerPlugin(ScrollTrigger);

    const text = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold."

    useEffect(() => {
        const anim = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "center center",
                    end : "bottom top",
                    pin: true,  
                },
                color: '#fff',
               
            duration: 2,
            stagger: 1,
            scrub: true,
            markers: true,
        }
        );
        return (() => {
            anim.kill()
        })
    }, []);

  return (
    <>
        <div className='spacing-small'></div>
        <div className='reveal'>
            <div  ref={triggerRef}>
            {text.split(" ").map((letter, index) => (
                        <span className="reveal-text" style={{margin: '0 10px',display:"inline-flex"}} key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
            </div>
        </div>
        <div className="spacing"></div>
    </>
  )
}
export  default TextReveal;