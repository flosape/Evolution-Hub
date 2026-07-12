export default function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <img
        src="/logo-transparent.png"
        alt="Evolution Hub Logo"
        style={{
          width: "180px",
          marginBottom: "24px",
        }}
      />

      <h1
        style={{
          fontSize: "48px",
          color: "#1565C0",
          marginBottom: "20px",
        }}
      >
        Where Intelligence Meets Opportunity
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "20px",
          lineHeight: "1.7",
          color: "#555",
        }}
      >
        Turn your ideas into opportunities with AI.
        Build faster, learn smarter, and grow your business with Evolution Hub.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            background: "#1565C0",
            color: "#fff",
            padding: "14px 30px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Get Started
        </button>

        <button
          style={{
            background: "#fff",
            color: "#1565C0",
            padding: "14px 30px",
            borderRadius: "10px",
            border: "2px solid #1565C0",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Watch Demo
        </button>
      </div>
    </section>
  );
}
