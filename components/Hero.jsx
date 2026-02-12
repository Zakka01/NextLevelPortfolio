import GradualBlur from './GradualBlur';


export default function Hero() {

    return (
        <section className="w-full h-full px-8 md:px-10 relative top-12">
            <div className='flex flex-row justify-end w-full pr-12 pt-18 h-full'>
                <p className='text-[0.7rem] w-80 text-right uppercase text-neutral-400'>Designing branding materials and advertising visuals, with a sharp focus on social media and YouTube thumbnails that actually convert.</p>
            </div>
            <div className="max-w-[1920px] mx-auto pt-0">
                <h1 className="cursor-default text-[9rem] text-neutral-100 mix-blend-difference w-[75%] tracking-tight leading-28">
                    Designing clarity <span className="text-neutral-500"> in noisy spaces.</span>
                </h1>
            </div>

            <GradualBlur
                target="page"
                position="bottom"
                height="7rem"
                strength={1}
                divCount={5}
                curve="bezier"
                exponential
                opacity={1}
            />
        </section>
    );
}