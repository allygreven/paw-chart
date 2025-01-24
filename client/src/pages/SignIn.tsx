export function SignIn() {
  return (
    <>
      <form>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button type="submit">Sign-in</button>
      </form>
      <div>Don't have an account? Click here</div>
    </>
  );
}
