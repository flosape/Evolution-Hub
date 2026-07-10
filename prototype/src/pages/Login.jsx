function Login() {
  return (
    <main className="login-page">
      <h1>Welcome Back</h1>
      <p>Sign in to your Evolution Hub account.</p>

      <form className="login-form">
        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button type="submit">
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
