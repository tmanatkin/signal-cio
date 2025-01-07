import ProblemSection from "../ProblemSection";

const About: React.FC = () => {
  return (
    <main className="about">
      <section className="about-title">
        <h1>
          Ensuring your SaaS spend aligns with your business goals while providing expert IT
          leadership that drives growth and mitigates risks.
        </h1>
        {/* <h3>
        Ensuring your SaaS spend aligns with your business goals while providing expert IT leadership that drives growth and mitigates risks.

        </h3> */}
      </section>
      <section className="image-text">
        <img src="/signal-cio/images/gordon.png" alt="Gordon Atkin" />
        <div>
          <p>
            I've had an amazing 20+ year career working in tech with companies like Oracle,
            Ancestry.com, Fusion-io, Instructure, Talkdesk, and Salsify.
          </p>
          <p>
            I've also had some incredible experiences working with Venture Capital, Private Equity,
            and going through 3 IPOs.
          </p>
          <p>
            Each experience has taught me an important lesson that I'm now looking to share and pass
            on to others in my passion for SaaS Management and working as a CIO.
          </p>
        </div>
      </section>
      <ProblemSection
        title="What is it like working together?"
        bubbles={[
          "We win together, we lose together",
          "Customer satisfaction drives me.",
          "It's not about me, it's about you."
        ]}
      />
      <section className="image-text">
        <p>
          Over 30 years ago, my wife and I met working in the Teton National Park at a place called
          Signal Mountain Lodge. The Tetons, the outdoors, skiing, and our Signal Mountain continue
          to hold a special place in our hearts. When we're not skiing (20 min from the resort), you
          might find me golfing, at a Raiders football game, or together with my wife enjoying time
          with our 3 kids, traveling, or enjoying each other's company as we settle into being empty
          nesters.
        </p>
        <img src="/signal-cio/images/signal.png" alt="Signal Mountain Loge" />
      </section>
    </main>
  );
};

export default About;
