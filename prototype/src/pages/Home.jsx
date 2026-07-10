import { Link } from "react-router-dom";
import logo from "../assets/logo-transparent.png";

function Home() {
  return (
    <main className="home">

      <header className="hero">

        <img
          src={logo}
          alt="Evolution Hub Logo"
          className="hero-logo"
        />

        <h1>Where Intelligence Meets Opportunity</h1>

        <p className="hero-text">
          Turn Your Ideas into Opportunities with AI.
          Build faster, learn smarter and grow your business with Evolution Hub.
        </p>

        <div className="hero-buttons">
          <Link to="/signup" className="primary-btn">
            Get Started
          </Link>

          <button className="secondary-btn">
            Watch Demo
          </button>
        </div>

      </header>

      <section className="features">

        <div className="card">
          <h3>🤖 AI Business Assistant</h3>
          <p>Receive intelligent guidance for every stage of your business.</p>
        </div>

        <div className="card">
          <h3>📄 Business Plan Generator</h3>
          <p>Create professional business plans in minutes.</p>
        </div>

        <div className="card">
          <h3>✍ Proposal Writer</h3>
          <p>Generate winning proposals with AI assistance.</p>
        </div>

        <div className="card">
          <h3>📈 Marketing Studio</h3>
          <p>Create campaigns, content and branding effortlessly.</p>
        </div>

        <div className="card">
          <h3>💼 Smart Workspace</h3>
          <p>Manage projects, documents and collaboration in one place.</p>
        </div>

      </section>

      <section className="about">

        <h2>About Evolution Hub</h2>

        <p>
          Evolution Hub is an AI-powered innovation platform designed for
          entrepreneurs, startups, creators and businesses. We combine artificial
          intelligence with productivity tools to help transform ideas into
          successful opportunities.
        </p>

      </section>

    </main>
  );
}

export default Home;
