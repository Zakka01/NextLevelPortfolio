import GradualBlur from './GradualBlur';


export default function Hero() {

    return (
        <section className="w-full h-full px-8 md:px-10 relative">
            <div className="max-w-[1920px] mx-auto py-25">
                <h1 className="cursor-default text-[8rem] mix-blend-difference w-[70%] tracking-tight leading-28">
                    Designing clarity <span className="text-neutral-500"> in noisy spaces.</span>
                </h1>
                {/* <p className='text-2qxl'>Designing branding materials and advertising visuals, with a sharp focus on social media and YouTube thumbnails that actually convert.</p> */}
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