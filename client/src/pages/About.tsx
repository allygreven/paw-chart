export function About() {
  return (
    <div className="flex bg-background font-grey-body justify-center  h-screen">
      <div className="text-center max-w-lg">
        <h1 className="mt-5 font-heading text-3xl">About us</h1>
        <div>
          <p className="mt-10 font-regular">
            Welcome to PawChart, your trusted companion for managing your pet's
            health! Designed with pet owners in mind, our app provides a
            convenient way to keep track of your pet's health records and
            monitor any symptoms. With our easy-to-use symptom checker, you can
            quickly evaluate your pet’s condition and receive helpful
            suggestions. We aim to make it simpler for you to stay on top of
            your pet’s well-being by offering easy access to important health
            information.
          </p>
          <h2 className="mt-9 font-heading text-2xl">Legal Disclaimer</h2>
          <p className="mt-3 font-regular">
            Please note that while PawChart offers valuable insights into your
            pet's health based on symptoms and records, it is not a substitute
            for professional veterinary care. I am not a veterinarian and do not
            have veterinary training, this is a student project. The information
            and suggestions provided by the app are AI-generated and should be
            used only as a general guide. For a proper diagnosis or treatment,
            always consult with a qualified veterinarian.
          </p>
        </div>
      </div>
    </div>
  );
}
