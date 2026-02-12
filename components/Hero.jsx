import GradualBlur from './GradualBlur';
import Threads from './Threads'


export default function Hero() {

    return (
        <section className="flex flex-col gap-28">
            <div className='w-full h-full px-8 md:px-8 relative top-26'>
                <div className='flex flex-row justify-end w-full h-full'>
                    <p className='text-[0.7rem] w-80 text-right uppercase text-neutral-400'>Designing branding materials and advertising visuals, with a sharp focus on social media and YouTube thumbnails that actually convert.</p>
                </div>
                <div className="flex flex-row items-end max-w-[1920px] mx-auto">
                    <h1 className="cursor-default text-[9rem] text-neutral-100 mix-blend-difference w-[75%] tracking-tight leading-28">
                        Designing clarity <span className="text-neutral-500"> in noisy spaces</span>
                    </h1>
                    <div className='absolute left-[40%] -bottom-4 h-30 w-60 bg-neutral-100 rounded-xs'></div>
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
            </div>
        </section>
    );
}