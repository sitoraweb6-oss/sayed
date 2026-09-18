import React from 'react';
import { Helmet } from 'react-helmet-async';
import FounderStoryHero from '../components/founder-story/FounderStoryHero';
import StoryChapter from '../components/founder-story/StoryChapter';
import StoryQuote from '../components/founder-story/StoryQuote';
import JourneyTimeline from '../components/founder-story/JourneyTimeline';
import StrategyConstellation from '../components/founder-story/StrategyConstellation';
import TechLeverageBlock from '../components/founder-story/TechLeverageBlock';
import ClientCaseNarrative from '../components/founder-story/ClientCaseNarrative';
import SitoraWebBlock from '../components/founder-story/SitoraWebBlock';
import PhilosophyBlock from '../components/founder-story/PhilosophyBlock';
import FounderStoryClosing from '../components/founder-story/FounderStoryClosing';
import LocalImage from '../components/founder-story/LocalImage';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Sayed Ahmad — Founder Story & Web Development Journey</title>
        <meta 
          name="description" 
          content="Read Sayed Ahmad’s journey from marketing to web development, AI-assisted digital solutions, WordPress, WooCommerce, and building purposeful websites for real businesses." 
        />
        <meta property="og:title" content="About Sayed Ahmad — Founder Story & Web Development Journey" />
        <meta 
          property="og:description" 
          content="Read Sayed Ahmad’s journey from marketing to web development, AI-assisted digital solutions, WordPress, WooCommerce, and building purposeful websites for real businesses." 
        />
      </Helmet>

      <div className="bg-stone-50 min-h-screen text-stone-800">
        {/* SECTION 1: Story Hero */}
        <FounderStoryHero />

        {/* SECTION 2: The Beginning — Marketing */}
        <StoryChapter
          chapterNumber="01"
          chapterTitle="WHERE IT STARTED"
          heading="Marketing Taught Me to Look Beyond the Website."
          sideElement={
            <div className="space-y-4">
              <LocalImage
                src="/images/founder-story/marketing-background.webp"
                alt="Marketing and Strategy Origins"
                aspectRatio="aspect-[4/3]"
                fallbackTitle="CAMPAIGN ORIGINS"
                fallbackSubtitle="Digital Marketing & Discovery Insights"
                className="border border-stone-200 shadow-sm"
              />
              <div className="p-4 rounded-xl bg-stone-100/80 border border-stone-200 text-xs font-mono text-stone-500 text-center">
                SOCIAL REACH CAN DISCOVER • OWNED WEBSITES CONVERT
              </div>
            </div>
          }
        >
          <p>
            My journey into web development began with marketing.
          </p>
          <p>
            In the early stages, I worked with businesses on social media marketing, campaigns, and digital promotion. That experience taught me something important: getting attention is only one part of building a business online.
          </p>
          <p>
            A brand can have an active social media presence and still lack a strong digital foundation.
          </p>
          <p>
            Social platforms are useful for discovery and engagement, but businesses should not have to depend entirely on platforms they do not control. Over time, I began to see a website differently—not simply as another marketing channel, but as a business’s owned digital home.
          </p>
          <p>
            A place where a brand communicates its value, establishes credibility, builds trust, explains its offerings, and guides visitors toward becoming customers.
          </p>
          <p>
            That realization changed the direction of my career.
          </p>

          <StoryQuote
            quote="A website is not just another marketing channel. It is a business’s owned digital home."
            attribution="Sayed Ahmad"
          />
        </StoryChapter>

        {/* SECTION 3: Understanding the Digital Foundation */}
        <StoryChapter
          chapterNumber="02"
          chapterTitle="CHANGING DIRECTION"
          heading="I Wanted to Understand Why Websites Work."
        >
          <p>
            I started studying web development seriously, with a particular focus on WordPress and business-focused website development. For nearly two years, I invested in structured learning, attended courses at reputed IT training centres in Dhaka, and continued observing how businesses actually operate in the market.
          </p>
          <p>
            At one point, I was attending classes at two different institutes while travelling long distances from home every week. It was not always easy, but I wanted to understand more than just how to build a website. I wanted to understand why a website works, why another fails, and how digital experiences influence the way people perceive a business.
          </p>

          <JourneyTimeline />
        </StoryChapter>

        {/* SECTION 4: Learning Beyond the Code */}
        <StoryChapter
          chapterNumber="03"
          chapterTitle="THE CONNECTION"
          heading="A Website Is Where Strategy Becomes Experience."
        >
          <p>
            Over time, I became increasingly interested in the delicate connection between brand positioning, user intent, and technological execution.
          </p>

          <StrategyConstellation />

          <div className="space-y-4 pt-4">
            <p>
              I learned that a website can look impressive and still fail to serve the business behind it.
            </p>
            <p>
              A slow website, unclear messaging, poorly positioned information, confusing navigation, weak calls to action, or an ineffective mobile experience can quietly damage a brand’s credibility and lose potential customers.
            </p>
            <p>
              That is why my approach to web development has never been limited to making websites look attractive. I focus on how the entire experience works—from the first impression to the moment a visitor decides to take action.
            </p>
          </div>
        </StoryChapter>

        {/* SECTION 5: Technology as Leverage */}
        <StoryChapter
          chapterNumber="04"
          chapterTitle="MY TECHNICAL APPROACH"
          heading="Using Technology as Leverage, Not as a Shortcut."
        >
          <p>
            As AI-assisted development tools began evolving rapidly, I saw an opportunity rather than a limitation.
          </p>
          <p>
            I already had a practical understanding of website structures, repositories, Git and GitHub, hosting, deployment, technical workflows, and the way websites connect with databases and external services. I also developed a working understanding of database structures and platforms such as Firebase.
          </p>
          <p>
            AI allowed me to turn that understanding into functional solutions much faster.
          </p>

          <TechLeverageBlock />

          <div className="space-y-4">
            <p>
              I do not see AI as a replacement for technical judgement. I use it as an acceleration layer—while remaining responsible for the architecture, functionality, integrations, user experience, testing, refinement, and final quality of the work.
            </p>
            <p>
              This approach has helped me work independently, move from ideas to implementation efficiently, and deliver a wider range of projects within shorter timelines without losing sight of the actual business requirements.
            </p>
          </div>
        </StoryChapter>

        {/* SECTION 6: Real Client Problems */}
        <StoryChapter
          chapterNumber="05"
          chapterTitle="BUILT THROUGH REAL PROBLEMS"
          heading="The Best Lessons Came From Actual Businesses."
        >
          <ClientCaseNarrative />
        </StoryChapter>

        {/* SECTION 7: Building Sitora Web */}
        <StoryChapter
          chapterNumber="06"
          chapterTitle="BUILDING SOMETHING OF MY OWN"
          heading="From Independent Work to Sitora Web."
        >
          <SitoraWebBlock />
        </StoryChapter>

        {/* SECTION 8: My Working Philosophy */}
        <StoryChapter
          chapterNumber="07"
          chapterTitle="WHAT I BELIEVE"
          heading={
            <>
              <span>Understand the Business First.</span>
              <span className="block text-stone-500">Build With Purpose.</span>
            </>
          }
        >
          <div className="space-y-4">
            <p>
              Whether I am working on a WordPress website, a WooCommerce store, a custom landing page, or a database-connected web platform, I try to approach every project with the same mindset:
            </p>
            <p className="font-medium text-stone-900 text-lg sm:text-xl">
              Understand the business first. Build with purpose. Refine the details. Deliver something people can actually use and trust.
            </p>
            <p>
              I believe the best websites are not necessarily the ones with the most effects, the most complicated features, or the loudest visual design. They are the ones that communicate clearly, perform reliably, represent the business properly, and help visitors move from curiosity to confidence.
            </p>
          </div>

          <PhilosophyBlock />
        </StoryChapter>

        {/* SECTION 9: Current Journey / Closing */}
        <div className="max-w-[1140px] mx-auto px-5 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <FounderStoryClosing />
        </div>
      </div>
    </>
  );
}
