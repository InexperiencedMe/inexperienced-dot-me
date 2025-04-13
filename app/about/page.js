import Image from "next/image";

export const metadata = {
  title: "About Inexperienced Me",
  description: "About Inexperienced Me",
};

export default function AboutPage () {
  return (

    <div class="p-4 max-w-screen-md space-y-12">

        <h1 class="text-4xl font-bold text-center">Who is this guy????</h1>

        <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="text-2xl">
                Heeeey, it's so nice to meet you. <br/><br/>
                Call me Ben.
            </div>
            <div class="sm:w-1/2 w-full aspect-square rounded-md relative border-2 border-foreground-secondary">
                <Image
                    src={"/mainFiles/mainPic.png"}
                    alt={"Ben's picture"}
                    fill={true}
                    className="rounded-sm"
                    priority={true}
                />
            </div>
        </div>

        <div class="text-base sm:text-lg leading-relaxed text-justify space-y-4 mb-8">
            I'm the Inexperienced Me, meaning, that no matter how much experience I have, it is still not enough.
            I will always suck at something, and there will always be new things to learn.<br/><br/>
            
            I resonate with hacker culture, that's about playful cleverness, exploration and experimentation.
            I like to play around to see what's possible.<br/><br/><br/>


            My main career is in Machine Learning with specialization in Reinforcement Learning.
            I build agents, that will one day beat all games imaginable.
            By the day, I work as Machine Learning Engineer and deploy AI models for businesses.<br/><br/><br/>


            I studied Electrical and Computer Engineering and I got a max grade on my diploma,
            despite attending roughly 0 lectures and skipping as many classes as I could.<br/><br/>

            Self-raised, self-taught, self-made. That's what the game is now.<br/><br/>

            That way, I know what to do when nobody has any idea about what to do.
            I know well how to step through the fog of war and make progress in any circumstances.
            I am antifragile.<br/><br/><br/>


            Check out my Blog and YouTube Channel and other socials to see what
            I'm currently up to and what I was working on in the past. There's a lot out there,
            so you can see for yourself what got me here.<br/><br/>

            I also have a Newsletter for people, that would like to stay in touch and build a beautiful community.
        </div>
    </div>

  );
}