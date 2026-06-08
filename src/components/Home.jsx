import React from 'react';
import Heading from './Heading';
import './Home.css';

function Home() {
  return (
    <div>

      <Heading title="Home" />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="hero-content">

                <p className="hero-tag">
                  Professor • Department of Mathematics • Jadavpur University
                </p>

                <h1 className="hero-title">
                  Prof. Priti Kumar Roy
                </h1>

                <h3 className="hero-subtitle">
                  Mathematical Biology • Epidemiology • Complex Systems
                </h3>

                <p className="hero-description">
                  Research interests include mathematical epidemiology,
                  ecological dynamics, nonlinear systems, optimal control,
                  biological modelling and complex systems analysis.
                </p>

                <div className="hero-buttons">
                  <a href="/research" className="btn btn-primary me-3">
                    Research
                  </a>

                  <a href="/publications" className="btn btn-outline-primary">
                    Publications
                  </a>
                </div>

              </div>
            </div>

            <div className="col-lg-5 text-center">
              <img
                src="/photo.jpg"
                alt="Prof. Priti Kumar Roy"
                className="hero-photo"
              />
            </div>

          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}

      <section className="impact-section">

        <div className="impact-card">
          <h2>250+</h2>
          <p>Publications</p>
        </div>

        <div className="impact-card">
          <h2>7000+</h2>
          <p>Citations</p>
        </div>

        <div className="impact-card">
          <h2>20+</h2>
          <p>Research Scholars</p>
        </div>

        <div className="impact-card">
          <h2>25+</h2>
          <p>Years of Research</p>
        </div>

      </section>

      {/* HIGHLIGHTS */}

      <section className="research-highlight">

        <h2>Research Focus</h2>

        <div className="row">

          <div className="col-md-4">
            <div className="highlight-card">
              <h4>Mathematical Epidemiology</h4>
              <p>
                Disease transmission modelling, outbreak prediction,
                vaccination strategies and control mechanisms.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="highlight-card">
              <h4>Ecological Dynamics</h4>
              <p>
                Population interactions, biodiversity,
                predator-prey systems and ecosystem stability.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="highlight-card">
              <h4>Complex Systems</h4>
              <p>
                Nonlinear dynamics, network structures,
                self-organization and emergent behaviour.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* EDITORIAL ROLE */}

      <section className="editor-section">

        <h2>Editorial Activities</h2>

        <div className="editor-card">
          <h4>
            Associate Editor
          </h4>

          <p>
            Mathematical Biosciences (Elsevier)
          </p>

          <a
            href="https://www.sciencedirect.com/journal/mathematical-biosciences"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Journal
          </a>

        </div>

      </section>

      {/* POSTDOC ANNOUNCEMENT */}

      <section className="opportunity-section">

        <h2>Research Opportunities</h2>

        <div className="opportunity-card">

          <h4>
            Postdoctoral Fellowship Opportunity
          </h4>

          <p>
            Applications are invited from highly motivated researchers
            interested in Mathematical Biology and Complex Systems.
          </p>

          <a href="mailto:pritiju@gmail.com">
            Contact: pritiju@gmail.com
          </a>

        </div>

      </section>

    </div>
  );
}

export default Home;
