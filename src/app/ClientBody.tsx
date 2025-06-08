'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ClientBody() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Update clock
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/New_York'
      });
      setCurrentTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    // Remove the locked class to enable scrolling after initial load
    const timer = setTimeout(() => {
      document.body.classList.remove('locked');
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="locked">
      <nav className="navigation-bar">
        <div id="w-node-ea6ef790-80a4-27e4-bceb-3f7632997f31-edcdc691" className="navigation-bar__logo-flex">
          <Link href="/" aria-current="page" className="navigation-bar__home-link w-inline-block w--current">
            <img
              src="https://ext.same-assets.com/2208276496/2015582364.svg"
              loading="eager"
              id="w-node-bde58cee-d53f-8ed0-80a7-8cd4edcdc692-edcdc691"
              alt="Loverboy Logo Icon"
              className="navigation-bar__logo"
            />
          </Link>
          <div className="navigation-bar__links">
            <a href="/collections" className="navigation-bar__link w-inline-block">
              <div>COLLECTIONS</div>
            </a>
            <a href="/about" className="navigation-bar__link w-inline-block">
              <div>About</div>
            </a>
            <a href="/contact" className="navigation-bar__link w-inline-block">
              <div>Contact</div>
            </a>
          </div>
        </div>
        <div>
          <a href="https://www.instagram.com/loverboyclothing/" target="_blank" className="navigation-bar__link is--social w-inline-block" rel="noreferrer">
            <div>IG</div>
          </a>
          <a href="https://twitter.com/loverboyclothing" target="_blank" className="navigation-bar__link is--social w-inline-block" rel="noreferrer">
            <div>X</div>
          </a>
          <a href="https://www.tiktok.com/@loverboyclothing" target="_blank" className="navigation-bar__link is--social w-inline-block" rel="noreferrer">
            <div>TIKTOK</div>
          </a>
        </div>
        <div id="w-node-ad5dbab7-b813-0da7-3412-d834e3ad87b6-edcdc691" className="div-block-23">
          <div id="w-node-bde58cee-d53f-8ed0-80a7-8cd4edcdc6a7-edcdc691" className="navigation-bar__text">
            <span id="clock">{currentTime}</span> — NEW YORK, NY (EST)
          </div>
          <a href="/collections" className="navigation-bar__btap-button w-inline-block">
            <div>VIEW ALL COLLECTIONS</div>
          </a>
        </div>
        <div id="w-node-bde58cee-d53f-8ed0-80a7-8cd4edcdc6a9-edcdc691" className="navigation-bar__text is--copyright">©2025</div>
        <div id="w-node-bde58cee-d53f-8ed0-80a7-8cd4edcdc6ab-edcdc691" className="html-embed w-embed">
          <div className="gradient-blur">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </nav>

      <main data-barba-namespace="home" data-barba="container" className="page-container is--top-padding">
        <div id="top" className="section__hero">
          <div className="hero-video__embed w-embed">
            <video width="100%" height="100%" muted autoPlay loop playsInline>
              <source src="https://ext.same-assets.com/2208276496/1686550547.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="hero-video___embed w-embed">
            <video width="100%" height="100%" muted autoPlay loop playsInline>
              <source src="https://ext.same-assets.com/2208276496/1686550547.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <section data-w-id="34e40bbf-fb1a-9ce0-e5b9-0a1dc6420561" className="section__ethos">
          <h1 className="hero-heading">
            <strong>Clothing that speaks to your soul, made for those who dare to love boldly.</strong><br />
          </h1>
          <div className="w-layout-grid grid">
            <div>
              <p className="hero__paragraph">
                We create elevated streetwear for the modern romantic. Each piece tells a story of passion, rebellion, and authentic self-expression.<br />
              </p>
              <div className="flex-horizontal">
                <a href="/contact" className="arrow-button w-inline-block">
                  <div className="arrow-button__text">Contact</div>
                </a>
                <a href="/collections" className="arrow-button is--no-side-pad w-inline-block">
                  <div className="arrow-button__text">Shop Now</div>
                </a>
              </div>
            </div>
            <div id="w-node-_42ce8e00-e377-86c5-aac1-e486b5d7c3fa-a5490b59" className="hero-animation-container w-embed">
              <canvas id="hero-lightpass" />
            </div>
          </div>
        </section>

        <div className="section__projects">
          <h1 className="hero-heading is--projects is--full-width">FEATURED COLLECTIONS</h1>
          <div className="w-layout-grid project-grid">
            <a id="w-node-_15e72983-e9f3-4515-374d-320cce59624d-a5490b59" href="/collections/heartbreak-hoodie" className="project-grid__item w-inline-block">
              <div className="project-grid__image-container">
                <img
                  src="https://ext.same-assets.com/2208276496/3382213949.webp"
                  loading="lazy"
                  id="w-node-_15e72983-e9f3-4515-374d-320cce59624f-a5490b59"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 98vw, (max-width: 991px) 97vw, 100vw"
                  alt="Heartbreak Hoodie Collection"
                  className="project-grid__image"
                />
                <div
                  data-poster-url="https://ext.same-assets.com/2208276496/324891599.jpeg"
                  data-video-urls="https://ext.same-assets.com/2208276496/649170544.mp4"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="background-video w-background-video w-background-video-atom"
                >
                  <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover">
                    <source src="https://ext.same-assets.com/2208276496/649170544.mp4" data-wf-ignore="true" />
                  </video>
                </div>
              </div>
              <div className="project-grid__item-split">
                <div className="project-grid__item-text">HEARTBREAK HOODIE</div>
                <div className="project-grid__item-text is--alt">STREETWEAR / ROMANCE</div>
              </div>
              <div className="project-grid__item-text is--alt">Love Hurts, Look Good</div>
            </a>

            <a href="/collections/midnight-denim" className="project-grid__item w-inline-block">
              <div className="project-grid__image-container">
                <img
                  src="https://ext.same-assets.com/2208276496/298533806.webp"
                  loading="eager"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 98vw, (max-width: 991px) 97vw, 100vw"
                  alt="Midnight Denim Collection"
                  className="project-grid__image"
                />
                <div
                  data-poster-url="https://ext.same-assets.com/2208276496/2753722306.jpeg"
                  data-video-urls="https://ext.same-assets.com/2208276496/1621317449.mp4"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="background-video w-background-video w-background-video-atom"
                >
                  <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover">
                    <source src="https://ext.same-assets.com/2208276496/1621317449.mp4" data-wf-ignore="true" />
                  </video>
                </div>
              </div>
              <div className="project-grid__item-split">
                <div className="project-grid__item-text">MIDNIGHT DENIM</div>
                <div className="project-grid__item-text is--alt">DENIM / PREMIUM</div>
              </div>
              <div className="project-grid__item-text is--alt">Dark Nights, Bright Dreams</div>
            </a>

            <a href="/collections/romantic-rebellion" className="project-grid__item w-inline-block">
              <div className="project-grid__image-container">
                <img
                  src="https://ext.same-assets.com/2208276496/874062270.webp"
                  loading="eager"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 98vw, (max-width: 991px) 97vw, 100vw"
                  alt="Romantic Rebellion Collection"
                  className="project-grid__image"
                />
                <div
                  data-poster-url="https://ext.same-assets.com/2208276496/1026114315.jpeg"
                  data-video-urls="https://ext.same-assets.com/2208276496/3617818973.mp4"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="background-video w-background-video w-background-video-atom"
                >
                  <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover">
                    <source src="https://ext.same-assets.com/2208276496/3617818973.mp4" data-wf-ignore="true" />
                  </video>
                </div>
              </div>
              <div className="project-grid__item-split">
                <div className="project-grid__item-text">ROMANTIC REBELLION</div>
                <div className="project-grid__item-text is--alt">UNISEX / LIMITED</div>
              </div>
              <div className="project-grid__item-text is--alt">Love Without Rules</div>
            </a>

            <a href="/collections/soft-grunge" className="project-grid__item w-inline-block">
              <div className="project-grid__image-container">
                <img
                  src="https://ext.same-assets.com/2208276496/2864624022.webp"
                  loading="eager"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 98vw, (max-width: 991px) 97vw, 100vw"
                  alt="Soft Grunge Collection"
                  className="project-grid__image"
                />
                <div
                  data-poster-url="https://ext.same-assets.com/2208276496/3256841202.jpeg"
                  data-video-urls="https://ext.same-assets.com/2208276496/568551834.mp4"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="background-video w-background-video w-background-video-atom"
                >
                  <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover">
                    <source src="https://ext.same-assets.com/2208276496/568551834.mp4" data-wf-ignore="true" />
                  </video>
                </div>
              </div>
              <div className="project-grid__item-split">
                <div className="project-grid__item-text">SOFT GRUNGE</div>
                <div className="project-grid__item-text is--alt">VINTAGE / REWORKED</div>
              </div>
              <div className="project-grid__item-text is--alt">Tender Chaos</div>
            </a>
          </div>

          <a data-w-id="ce458883-ca75-b61a-cff1-01f94616714e" href="/collections" className="section__projects-lg-button w-inline-block">
            <div className="text-block-4">VIEW ALL COLLECTIONS</div>
            <div className="arrow-button__arrow-2 is--lg w-embed">
              <svg width="100%" height="auto" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 5.35355L14.6464 0.707107L15.3536 0L21.2071 5.85355L15.3536 11.7071L14.6464 11L19.2929 6.35355H0V5.35355H19.2929Z" fill="currentColor" />
              </svg>
            </div>
          </a>
        </div>

        <div data-w-id="a39d5730-d72e-9cd8-a24f-de8f8e4b786f" className="section__services">
          <h1 className="hero-heading is--services is--full-width">SERVICES</h1>
          <div className="services__text-wrapper is--right">
            <div className="count-pill">
              <div className="arrow-button__text">01</div>
            </div>
            <div id="service-2" className="services__text is--right">Custom Design</div>
          </div>
          <div className="services__text-wrapper">
            <div className="count-pill">
              <div className="arrow-button__text">02</div>
            </div>
            <div id="service-3" className="services__text">Personal Styling</div>
          </div>
          <div className="services__text-wrapper is--right">
            <div className="count-pill">
              <div className="arrow-button__text">03</div>
            </div>
            <div id="service-4" className="services__text is--right">Sustainable Production</div>
          </div>
          <div className="services__text-wrapper">
            <div className="count-pill">
              <div className="arrow-button__text">04</div>
            </div>
            <div id="service-5" className="services__text">Limited Editions</div>
          </div>
          <div className="services__text-wrapper is--right">
            <div className="count-pill">
              <div className="arrow-button__text">05</div>
            </div>
            <div id="service-6" className="services__text is--right">Wardrobe Curation</div>
          </div>
          <div className="services__text-wrapper">
            <div className="count-pill">
              <div className="arrow-button__text">06</div>
            </div>
            <div id="service-7" className="services__text">Brand Collaborations</div>
          </div>
        </div>

        <div data-w-id="ce01c573-e624-ef5c-9e7a-121cbeb7560e" className="section__cta">
          <h1 className="hero-heading is--ctsa is--full-width">JOIN THE MOVEMENT</h1>
          <div className="w-layout-grid section__cta-grid">
            <div id="w-node-_00add70c-a024-d2a6-64ff-caa9132ff553-a5490b59" className="hero-animation-container is--helmet is--hidden w-embed">
              <canvas id="moto-helmet" />
            </div>
            <div id="w-node-e2ef907f-171b-a926-4d77-b263a1ee7f65-a5490b59" className="w-embed">
              <video width="100%" height="100%" playsInline muted autoPlay loop>
                <source src="https://ext.same-assets.com/2208276496/1320858607.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div id="w-node-_89ac5ea9-b93b-1651-2272-e48350502a97-a5490b59">
              <p className="hero__paragraph">
                Ready to wear your heart on your sleeve? Say <a href="mailto:hello@loverboyclothing.com">hello</a>!
              </p>
              <div className="flex-horizontal">
                <a href="/about" className="arrow-button w-inline-block">
                  <div className="arrow-button__text">Our Story</div>
                </a>
                <a href="/contact" className="arrow-button is--no-side-pad w-inline-block">
                  <div className="arrow-button__text">Get In Touch</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div id="w-node-_6322d75e-8d2d-763d-688f-d36d1778d806-1778d805" className="div-block-24">
            <Link href="/" aria-current="page" className="footer__main-link w--current">Home</Link>
            <a href="/about" className="footer__main-link">About</a>
            <a href="/collections" className="footer__main-link">Collections</a>
            <a href="/contact" className="footer__main-link is--last">Contact</a>
          </div>
          <div id="w-node-_6322d75e-8d2d-763d-688f-d36d1778d80f-1778d805">
            <div id="w-node-_6322d75e-8d2d-763d-688f-d36d1778d810-1778d805" className="footer__link-wrap">
              <div className="footer__caption">Socials</div>
              <a href="https://www.tiktok.com/@loverboyclothing" target="_blank" className="arrow-button is--footer-social w-inline-block" rel="noreferrer">
                <div className="arrow-button__text">TikTok</div>
              </a>
              <a href="https://www.instagram.com/loverboyclothing/" target="_blank" className="arrow-button is--footer-social w-inline-block" rel="noreferrer">
                <div className="arrow-button__text">Instagram</div>
              </a>
              <a href="https://twitter.com/loverboyclothing" target="_blank" className="arrow-button is--footer-social w-inline-block" rel="noreferrer">
                <div className="arrow-button__text">X</div>
              </a>
            </div>
            <div id="w-node-_6322d75e-8d2d-763d-688f-d36d1778d81f-1778d805" className="footer__link-wrap">
              <div className="footer__caption">Contact</div>
              <a href="mailto:hello@loverboyclothing.com" className="arrow-button is--footer-social w-inline-block">
                <div className="arrow-button__text">hello@loverboyclothing.com</div>
              </a>
              <a href="tel:+12129998888" className="arrow-button is--footer-social w-inline-block">
                <div className="arrow-button__text">212.999.8888</div>
              </a>
            </div>
          </div>
          <div id="w-node-_6322d75e-8d2d-763d-688f-d36d1778d82a-1778d805" className="div-block">
            <div className="div-block-22">
              <div id="w-node-e915edb3-65f8-4564-0fa7-60e61a2fdfd7-1778d805" className="footer__cycle-text">
                Loverboy, Wear Your Heart.
              </div>
            </div>
            <div className="flex-horizontal-opposite">
              <div className="footer__caption is--copyright">©2025 LOVERBOY CLOTHING. ALL RIGHTS RESERVED.</div>
              <button type="button" className="footer__btt-button w-button" aria-label="Back to top" />
            </div>
          </div>
        </footer>
      </main>

      <div className="global">
        <div data-w-id="c739f1fb-9094-7aaa-6d6a-219f2f506d88" className="preloader">
          <div className="preloader__logo-wrapper">
            <div className="preloader__logo-overflow">
              <img
                src="https://ext.same-assets.com/2208276496/1131281350.svg"
                loading="eager"
                width="830"
                alt="Loverboy Logo"
                className="preloader__logo"
              />
            </div>
          </div>
        </div>
        <div className="transition-wrapper">
          <div className="video-transition__shade" />
          <div className="project-header-video is--flip-transition" />
        </div>
        <div className="loading-overlay" />
      </div>
    </div>
  );
}
