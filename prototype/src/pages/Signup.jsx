function Signup() {
  return (
    <main className="signup-page">
      <h1>Create Your Account</h1>
      <p>Join Evolution Hub and start building with AI.</p>

      <form className="signup-form">
        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Create Password"
        />

        <button type="submit">
          Create Account
        </button>
      </form>
    </main>
  );
}

export default Signup;
