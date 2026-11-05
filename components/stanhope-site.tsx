"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { ArrowUpRight, Moon, Sun } from "lucide-react"
import { podcastEpisodes, pressQuotes, standUpGroups, storeProducts } from "./stanhope-content"

const images = {
  hero: "/images/stanhope/hero.webp",
  podcast: "/images/stanhope/podcast-cover.webp",
  portrait: "/images/stanhope/portrait.webp",
}

const navItems = [
  { label: "Tour", href: "#tour" },
  { label: "Podcast", href: "#podcast" },
  { label: "Work", href: "#work" },
  { label: "Bio", href: "#bio" },
  { label: "Store", href: "#store" },
]

const podcastLinks = [
  {
    label: "ALL THINGS COMEDY",
    title: "Listen to the show",
    description: "Podcast feed and available episodes.",
    action: "Listen",
    href: "https://allthingscomedy.com/podcast/doug-stanhope",
  },
  {
    label: "APPLE PODCASTS",
    title: "Subscribe",
    description: "Follow the podcast in Apple Podcasts.",
    action: "Open",
    href: "https://podcasts.apple.com/us/podcast/the-doug-stanhope-podcast/id610821246",
  },
]

const workItems = [
  {
    number: "01",
    type: "MEMOIR",
    title: "Digging Up Mother",
    description:
      "A deeply personal, darkly comic memoir about Stanhope’s relationship with his mother, Bonnie.",
    action: "Publisher & book info",
    href: "https://www.hachettebookgroup.com/contributor/doug-stanhope/",
  },
  {
    number: "02",
    type: "MEMOIR",
    title: "This Is Not Fame",
    description:
      "A “from what I re-memoir” about the strange route through comedy, touring and an unconventional career.",
    action: "Publisher & book info",
    href: "https://www.hachettebookgroup.com/contributor/doug-stanhope/",
  },
  {
    number: "03",
    type: "SPECIAL",
    title: "No Place Like Home",
    description:
      "A hometown-style performance filmed in Bisbee, Arizona, among friends and familiar surroundings.",
    action: "",
    href: "",
  },
  {
    number: "04",
    type: "SPECIAL",
    title: "The Dying of a Last Breed",
    description:
      "A 2020 stand-up special filmed at the Plaza Hotel & Casino in Las Vegas.",
    action: "",
    href: "",
  },
  {
    number: "05",
    type: "BOOK",
    title: "No Encore for the Donkey",
    description:
      "A later book project in Stanhope’s growing catalogue of writing.",
    action: "",
    href: "",
  },
]

const timeline = [
  {
    year: "1990",
    text: "Begins performing stand-up, developing his act on the club circuit.",
  },
  {
    year: "1995",
    text: "Wins the San Francisco International Comedy Competition.",
  },
  {
    year: "2016",
    text: "Publishes Digging Up Mother: A Love Story, a memoir centered on his mother and their relationship.",
  },
  {
    year: "2017",
    text: "Publishes This Is Not Fame, a memoir of the road and the career.",
  },
  {
    year: "2020",
    text: "Releases the stand-up special The Dying of a Last Breed.",
  },
]

const sources = [
  {
    type: "LONG-FORM PROFILE",
    title: "The New Yorker — “Doug Stanhope, Miles from Where the Action Is”",
    description:
      "A reported profile of Stanhope’s life in Bisbee, the FunHouse, his circle of comics and his decision to build a career away from the mainstream spotlight.",
    action: "Read",
    href: "https://www.newyorker.com/culture/culture-desk/doug-stanhope-miles-from-where-the-action-is",
  },
  {
    type: "LIFE STORY / INTERVIEW",
    title: "The Boston Globe — “Doug Stanhope’s life is a little twisted…”",
    description:
      "A detailed 2016 feature about growing up in Worcester, his mother Bonnie, the origins of his dark humor and the book Digging Up Mother.",
    action: "Read",
    href: "https://www.bostonglobe.com/arts/books/2016/05/10/doug-stanhope-life-little-twisted-little-morbid-but-has-such-good-material/3PAqFctfOFD6SGuvGyCckJ/story.html",
  },
  {
    type: "PUBLISHER / BOOKS",
    title: "Hachette Book Group — Doug Stanhope",
    description:
      "Publisher biography and book listings for Digging Up Mother and This Is Not Fame.",
    action: "Explore",
    href: "https://www.hachettebookgroup.com/contributor/doug-stanhope/",
  },
]

const socialLinks = [
  { label: "X", href: "https://x.com/DougStanhope" },
  { label: "Instagram", href: "https://www.instagram.com/realstanhope/" },
  { label: "Facebook", href: "https://www.facebook.com/officialstanhope/" },
  { label: "YouTube", href: "https://www.youtube.com/@stanhopetv" },
]

type OutboundLinkProps = {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
}

function OutboundLink({
  href,
  children,
  className = "text-link",
  ariaLabel,
}: OutboundLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="link-arrow" size={16} />
    </a>
  )
}

function SiteHeader({
  isNight,
  onToggleNight,
}: {
  isNight: boolean
  onToggleNight: () => void
}) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a aria-label="Doug Stanhope home" className="wordmark" href="#home">
          DOUG STANHOPE<span className="wordmark__period">.</span>
        </a>
        <nav aria-label="Main navigation" className="site-nav">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          aria-label={`Switch to ${isNight ? "day" : "night"} mode`}
          aria-pressed={isNight}
          className="theme-toggle"
          onClick={onToggleNight}
          type="button"
        >
          {isNight ? (
            <Sun aria-hidden="true" size={15} />
          ) : (
            <Moon aria-hidden="true" size={15} />
          )}
          <span>{isNight ? "DAY" : "NIGHT"}</span>
        </button>
      </div>
    </header>
  )
}

function SectionHeading({
  label,
  number,
  title,
  id,
}: {
  label: string
  number: string
  title: ReactNode
  id?: string
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-heading__eyebrow">
          {label} <span>/ {number}</span>
        </p>
        <h2 className="section-heading__title" id={id}>
          {title}
        </h2>
      </div>
      <span aria-hidden="true" className="section-heading__slash">
        //
      </span>
    </div>
  )
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="home">
      <img
        alt="Doug Stanhope performing stand-up on stage"
        className="hero__image"
        fetchPriority="high"
        height="675"
        src={images.hero}
        width="1200"
      />
      <div aria-hidden="true" className="hero__shade" />
      <div className="hero__content">
        <p className="hero__eyebrow">COMEDIAN · AUTHOR · PODCAST HOST</p>
        <h1 className="hero__title" id="hero-title">
          <span>Doug</span>
          <span>
            Stanhope<span className="hero__period">.</span>
          </span>
        </h1>
        <p className="hero__description">
          Stand-up, stories from the road, books, recordings — whatever comes next.
        </p>
        <div className="hero__actions">
          <a className="button button--red" href="#tour">
            Tour dates
          </a>
          <a className="button button--outline" href="#podcast">
            Listen to the podcast
          </a>
        </div>
        <div aria-label="Performing stand-up since 1990" className="hero-stamp">
          <span className="hero-stamp__small">OFF THE CUFF</span>
          <span className="hero-stamp__year">’90</span>
          <span className="hero-stamp__small">STILL ON THE ROAD</span>
        </div>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section aria-labelledby="intro-title" className="intro-section">
      <h2 className="intro-section__title" id="intro-title">
        A life spent telling the <mark>truth</mark> the long way around.
      </h2>
      <div className="intro-section__copy">
        <p>
          Welcome to the work of Doug Stanhope: stand-up from decades on the road,
          books drawn from real life, recordings, interviews and the podcast. Start
          anywhere. Stay awhile.
        </p>
        <p className="intro-section__aside">
          <span>THE SHORT PITCH</span>
          No polish. Plenty of mileage.
        </p>
      </div>
    </section>
  )
}

function TourSection() {
  return (
    <section aria-labelledby="tour-heading" className="content-section" id="tour">
      <div className="section-wrap">
        <SectionHeading
          id="tour-heading"
          label="LIVE DATES"
          number="01"
          title={
            <>
              On the <mark>road</mark>
            </>
          }
        />
        <div className="tour-card">
          <div className="tour-card__copy">
            <p className="micro-label">2026 TOUR CALENDAR</p>
            <h3>No dates are posted.</h3>
            <p>
              The current schedule has no confirmed appearances. This local calendar
              stays empty until a date is published.
            </p>
          </div>
          <div className="tour-card__ticket">
            <div className="tour-card__ticket-copy">
              <span>PAST GIGS</span>
              <strong>ARCHIVE</strong>
              <span>Not available</span>
            </div>
            <a className="button button--red" href="#past-gigs">
              Archive status
            </a>
          </div>
        </div>
        <div className="past-gigs-note" id="past-gigs">
          <p className="micro-label">PAST GIGS</p>
          <h3>Archive not available.</h3>
          <p>
            The public archive page currently returns a not-found response, so no
            past dates are invented here.
          </p>
        </div>
      </div>
    </section>
  )
}

function PodcastSection() {
  return (
    <section
      aria-labelledby="podcast-heading"
      className="content-section content-section--lined"
      id="podcast"
    >
      <div className="section-wrap">
        <SectionHeading
          id="podcast-heading"
          label="FROM BISBEE"
          number="02"
          title={
            <>
              The <mark>podcast</mark>
            </>
          }
        />
        <div className="podcast-layout">
          <a
            aria-label="Browse the local podcast archive"
            className="podcast-art"
            href="#podcast-archive"
          >
            <img
              alt="The Doug Stanhope Podcast artwork"
              height="640"
              loading="lazy"
              src={images.podcast}
              width="640"
            />
            <span aria-hidden="true" className="podcast-art__corner">
              PLAY IT LOUD
            </span>
          </a>
          <div className="podcast-copy">
            <p className="micro-label">DEPP&apos;S RUM &amp; KENNY&apos;S SCUM</p>
            <h3>The Doug Stanhope Podcast</h3>
            <p className="podcast-copy__description">
              Conversations with friends, comics, neighbors and fellow travelers.
              The show notes and cover art below are kept on this site; audio remains
              available through the listening platforms.
            </p>
            <div className="podcast-links">
              {podcastLinks.map((link) => (
                <div className="podcast-link-row" key={link.label}>
                  <span className="podcast-link-row__label">{link.label}</span>
                  <div className="podcast-link-row__copy">
                    <strong>{link.title}</strong>
                    <span>{link.description}</span>
                  </div>
                  <OutboundLink href={link.href}>{link.action}</OutboundLink>
                </div>
              ))}
            </div>
            <a className="button button--outline" href="#podcast-archive">
              Browse {podcastEpisodes.length} local entries
            </a>
            <OutboundLink
              className="button button--red podcast-support"
              href="https://www.patreon.com/stanhopepodcast"
            >
              Support on Patreon
            </OutboundLink>
          </div>
        </div>
        <div className="podcast-archive" id="podcast-archive">
          <div className="podcast-archive__heading">
            <div>
              <p className="micro-label">ARCHIVE / 2016</p>
              <h3>Episode notes, kept local.</h3>
              <p>
                Public episode titles, notes, dates and artwork from the visible
                archive, collected here in one place.
              </p>
            </div>
            <a className="text-link" href="#podcast">
              Back to podcast overview
            </a>
          </div>
          <div className="podcast-archive__grid">
            {podcastEpisodes.map((episode) => (
              <article className="episode-card" key={episode.title}>
                <img
                  alt=""
                  height="500"
                  loading="lazy"
                  src={episode.image}
                  width="500"
                />
                <div className="episode-card__copy">
                  <p className="episode-card__date">{episode.date}</p>
                  <h4>{episode.title}</h4>
                  <p>{episode.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkSection() {
  return (
    <section
      aria-labelledby="work-heading"
      className="content-section content-section--lined"
      id="work"
    >
      <div className="section-wrap">
        <SectionHeading
          id="work-heading"
          label="SELECTED WORK"
          number="03"
          title={
            <>
              Books &amp; <mark>stand-up</mark>
            </>
          }
        />
        <div className="work-grid">
          {workItems.map((item) => (
            <article className="work-card" key={item.number}>
              <p className="work-card__meta">
                <span>{item.number}</span> / {item.type}
              </p>
              <h3>{item.title}</h3>
              <p className="work-card__description">{item.description}</p>
              {item.href ? (
                <OutboundLink href={item.href}>{item.action}</OutboundLink>
              ) : null}
            </article>
          ))}
        </div>
        <div className="video-archive" id="stand-up">
          <div className="video-archive__heading">
            <p className="micro-label">VIDEO ARCHIVE</p>
            <h3>Clips, specials &amp; appearances.</h3>
            <p>
              Local thumbnails and titles from the public video page. Playback opens
              on YouTube.
            </p>
          </div>
          {standUpGroups.map((group) => (
            <div className="video-group" key={group.title}>
              <h4>{group.title}</h4>
              <div className="video-grid">
                {group.videos.map((video) => (
                  <OutboundLink
                    ariaLabel={`Watch ${video.title} on YouTube`}
                    className="video-card"
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    key={video.id}
                  >
                    <img
                      alt=""
                      height="360"
                      loading="lazy"
                      src={`/images/stanhope/videos/${video.id}.jpg`}
                      width="640"
                    />
                    <strong>{video.title}</strong>
                  </OutboundLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BioSection() {
  return (
    <section
      aria-labelledby="bio-heading"
      className="content-section content-section--lined"
      id="bio"
    >
      <div className="section-wrap">
        <SectionHeading
          id="bio-heading"
          label="A LIFE IN PROGRESS"
          number="04"
          title={
            <>
              The short <mark>version</mark>
            </>
          }
        />
        <div className="bio-layout">
          <figure className="bio-portrait">
            <img
              alt="Doug Stanhope in a bright green jacket"
              height="720"
              loading="lazy"
              src={images.portrait}
              width="1280"
            />
            <figcaption>Worcester to Bisbee. The scenic route.</figcaption>
          </figure>
          <div className="bio-copy">
            <p>
              Born in Worcester, Massachusetts, Doug Stanhope started performing
              stand-up in 1990. He built a following through relentless touring and
              a confrontational, deeply personal style that mixes black comedy,
              social criticism and stories drawn from his own life.
            </p>
            <p>
              His career has moved through comedy clubs, television, albums,
              specials, books and podcasting. He has made his home in Bisbee,
              Arizona, where the FunHouse became a gathering place for friends,
              collaborators and podcast recordings.
            </p>
            <p>
              His memoir <em>Digging Up Mother</em> tells the story of his close
              relationship with his mother, Bonnie. Later writing includes
              <em> This Is Not Fame</em> and <em>No Encore for the Donkey</em>. This
              site brings those threads together rather than flattening them into a
              conventional press biography.
            </p>
            <ol aria-label="Selected career milestones" className="timeline">
              {timeline.map((item) => (
                <li className="timeline__item" key={item.year}>
                  <span className="timeline__year">{item.year}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ol>
            <div className="press-archive">
              <p className="micro-label">PRESS / ORIGINAL BIO PAGE</p>
              <h3>What the critics wrote.</h3>
              <details>
                <summary>Open {pressQuotes.length} press excerpts</summary>
                <div className="press-grid">
                  {pressQuotes.map((item) => (
                    <figure className="press-quote" key={item.source}>
                      <blockquote>
                        <p>{item.quote}</p>
                      </blockquote>
                      <figcaption>{item.source}</figcaption>
                    </figure>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SourcesSection() {
  return (
    <section
      aria-labelledby="sources-heading"
      className="content-section content-section--lined"
      id="sources"
    >
      <div className="section-wrap">
        <SectionHeading
          id="sources-heading"
          label="READING / WATCHING / LISTENING"
          number="05"
          title={
            <>
              Go <mark>deeper</mark>
            </>
          }
        />
        <div className="source-list">
          {sources.map((source) => (
            <article className="source-row" key={source.title}>
              <p className="source-row__type">{source.type}</p>
              <div className="source-row__copy">
                <h3>{source.title}</h3>
                <p>{source.description}</p>
              </div>
              <OutboundLink href={source.href}>{source.action}</OutboundLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoreSection() {
  return (
    <section
      aria-labelledby="store-heading"
      className="content-section content-section--lined"
      id="store"
    >
      <div className="section-wrap">
        <SectionHeading
          id="store-heading"
          label="LOCAL CATALOG"
          number="06"
          title={
            <>
              The <mark>store</mark>
            </>
          }
        />
        <p className="store-intro">
          Product names, photos, and listed prices collected from the public
          catalog. Availability can change.
        </p>
        <div className="store-grid">
          {storeProducts.map((product) => (
            <article className="store-card" key={product.name}>
              <img
                alt=""
                height="500"
                loading="lazy"
                src={product.image}
                width="500"
              />
              <div className="store-card__copy">
                <h3>{product.name}</h3>
                <p className="store-card__price">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="store-note">
          <p>
            The catalog points shoppers to eBay for additional listings and
            international shipping. Confirm live inventory and pricing before
            ordering.
          </p>
          <OutboundLink
            className="button button--ink"
            href="https://www.ebay.com/usr/stinkchicken"
          >
            Browse eBay listings
          </OutboundLink>
        </div>
      </div>
    </section>
  )
}

function FollowSection() {
  return (
    <section
      aria-labelledby="follow-heading"
      className="content-section content-section--lined follow-section"
      id="follow"
    >
      <div className="section-wrap">
        <SectionHeading
          id="follow-heading"
          label="SOCIAL / UPDATES"
          number="07"
          title={
            <>
              Follow <mark>along</mark>
            </>
          }
        />
        <p className="follow-copy">
          Find the latest posts and updates on the channels below.
        </p>
        <nav aria-label="Social media" className="social-links">
          {socialLinks.map((link) => (
            <OutboundLink href={link.href} key={link.label}>
              {link.label}
            </OutboundLink>
          ))}
        </nav>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a className="wordmark wordmark--footer" href="#home">
          DOUG STANHOPE<span className="wordmark__period">.</span>
        </a>
        <p>Local catalog of public pages. Playback and checkout remain on their platforms.</p>
        <a className="back-to-top" href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export function StanhopeSite() {
  const [isNight, setIsNight] = useState(false)

  return (
    <div className={`stanhope-site${isNight ? " theme-night" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader isNight={isNight} onToggleNight={() => setIsNight((current) => !current)} />
      <main id="main-content">
        <Hero />
        <Intro />
        <TourSection />
        <PodcastSection />
        <WorkSection />
        <BioSection />
        <SourcesSection />
        <StoreSection />
        <FollowSection />
      </main>
      <SiteFooter />
    </div>
  )
}
