export function Register() {
  return (
    <>
      <form>
        <label>Pet's Name</label>
        <input type="text" name="name" placeholder="Bella"></input>
        <label>Age</label>
        <input type="number" name="age" placeholder="in human years"></input>
        <label>Dog</label>
        <input type="radio" name="type"></input>
        <label>or Cat</label>
        <input type="radio" name="type"></input>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button type="submit">Register</button>
      </form>
      <div>Already have an account? Click here</div>
    </>
  );
}
