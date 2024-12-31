import React, { useState, useEffect } from "react";
import BlogPoints from "./BlogPoints.jsx";
import Confetti from "react-confetti";
import "./App.css"; // Import custom CSS for background image

function App() {
  const blog1 = {
    header: "1. Master the Identity-Based Goal System",
    description:
      "Achieve growth by aligning habits with your desired identity and tracking progress using tools like Notion. Set bold goals with the 10X Rule, prioritize top goals using Buffett’s 5/25 Rule, and focus on high-impact skills with the greatest ROI. Structure your day with balance and consistency to build lasting success.",
    img: "./1.jpg",
  };
  const blog2 = {
    header: "2. Build a Personal Growth Dashboard:",
    description:
      "Growth becomes tangible when you track it. Use tools like Notion, Google Sheets, or a journal to monitor your daily habits, such as study hours or fitness routines. Conduct weekly reflections on what worked and what didn’t, and track monthly progress in key areas. This dashboard will act as your personal map, guiding you through your journey toward self-improvement.",
    img: "./2.jpg",
  };
  const blog3 = {
    header: "3. Use the 10X Rule:",
    description:
      "Push yourself to think and act bigger by setting goals that are ten times larger than what feels comfortable. If you aim for one client, target ten instead. Match your actions to this ambitious scale by learning faster, networking harder, and adopting innovative approaches. This rule forces you to break limits and operate at a level that guarantees remarkable results.",
    img: "./3.jpg",
  };
  const blog4 = {
    header: "4. Adopt the Warren Buffett 5/25 Rule:",
    description:
      "List the 25 goals you want to achieve in 2025, then narrow it down to the five most important ones. Focus exclusively on these top five and disregard the rest. This approach prevents distraction, ensuring your energy is channeled into what truly matters and yields the highest impact.",
    img: "./4.jpg",
  };
  const blog5 = {
    header: "5. High-Impact Learning Framework:",
    description:
      "Prioritize acquiring skills that have a high return on investment, such as coding, persuasive communication, or financial literacy. Focus on the 20% of learning that brings 80% of results and invest in premium resources like books, courses, or coaching. Becoming a lifelong learner is essential to staying ahead and achieving sustainable success.",
    img: "./5.jpg",
  };
  const blog6 = {
    header: "6. Build the Ultimate Daily Routine:",
    description:
      "Design a routine that ensures balance, productivity, and growth. Dedicate mornings to high-focus tasks like studying or problem-solving, midday to creative work or collaboration, and evenings to reflection and planning. Follow the 1-3-5 rule: accomplish one big, three medium, and five small tasks daily. This structured approach maximizes productivity while preventing burnout.",
    img: "./6.png",
  };
  const blog7 = {
    header: "7. Focus on Relationship Capital:",
    description:
      "Success is often about who you know as much as what you know. Build meaningful connections with mentors who inspire you, collaborate with peers to grow together, and help those behind you, as teaching reinforces your own knowledge. Networking strategically can unlock opportunities and accelerate your growth in all areas of life.",
    img: "./7.jpg",
  };
  const blog8 = {
    header: "Final Tip: Be Relentlessly Consistent",
    description:
      "Even the best strategies won’t work without consistent action. Commit to showing up daily, no matter how small the effort.",
    img: "https://images.pexels.com/photos/1134190/pexels-photo-1134190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNameChange = (newName) => {
    if (newName && newName !== name) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      localStorage.setItem("name", newName);
    }
    setName(newName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = e.target.name.value.trim();
    handleNameChange(newName);
  };

  return (
    <div className="min-h-screen text-gray-950 font-montserrat bg-cover bg-center bg-no-repeat">
      {showConfetti && <Confetti />}
      <div className="text-center">
        {!name ? (
          <>
            <div className="flex flex-col items-center justify-center h-screen custom-bg">
              <h1 className="text-4xl md:text-4xl lg:text-6xl uppercase font-black mb-6 text-emerald-950">
                Hey! What’s your{" "}
                <span className="bg-emerald-950 px-3 text-white rotate-2 italic rounded-md">
                  name?
                </span>
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex flex-row gap-2 justify-center items-center"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="border border-emerald-700 p-2 rounded-md text-left placeholder-gray-500  w-52 md:w-64 focus:outline-none focus:ring focus:ring-emerald-950 bg-{#8CA39D}"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-950 text-white rounded-md hover:bg-emerald-800 font-medium"
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-center text-3xl md:text-5xl mb-0.1 mt-28 happy text-emerald-950">
              Happy
            </h3>
            <h1 className="text-5xl md:text-8xl font-black new-year mb-1 text-emerald-950">
              New Year 2025!
            </h1>
            <h2 className="name text-3xl md:text-5xl text-emerald-950">
              {name}
            </h2>
            <button
              onClick={() => handleNameChange("")}
              className="mt-4 px-4 py-2 bg-emerald-950 text-white rounded-lg hover:bg-emerald-800"
            >
              Change Name
            </button>
            <div className="blog-section mt-48">
              <h3 className="blog-subHeader font-regular text-lg md:text-2xl mb-3">
                Make this year your masterpiece!
              </h3>
              <h1 className="blog-header font-black text-3xl md:text-4xl lg:text-6xl text-emerald-950">
                2025: The Year You Transform and <br /> Elevate Your Life.
              </h1>

              <img
                src="./vision.png"
                alt=""
                className="mx-auto mt-10 w-72 md:w-96 lg:w-auto"
              />

              <BlogPoints
                blogHeader={blog1.header}
                blogDescription={blog1.description}
                blogImg={blog1.img}
              />

              <BlogPoints
                blogHeader={blog2.header}
                blogDescription={blog2.description}
                blogImg={blog2.img}
              />

              <BlogPoints
                blogHeader={blog3.header}
                blogDescription={blog3.description}
                blogImg={blog3.img}
              />

              <BlogPoints
                blogHeader={blog4.header}
                blogDescription={blog4.description}
                blogImg={blog4.img}
              />

              <BlogPoints
                blogHeader={blog5.header}
                blogDescription={blog5.description}
                blogImg={blog5.img}
              />

              <BlogPoints
                blogHeader={blog6.header}
                blogDescription={blog6.description}
                blogImg={blog6.img}
              />

              <BlogPoints
                blogHeader={blog7.header}
                blogDescription={blog7.description}
                blogImg={blog7.img}
              />

              <BlogPoints
                blogHeader={blog8.header}
                blogDescription={blog8.description}
              />
            </div>
          </>
        )}
        {name && (
          <div className="value-proposition text-center mt-16 px-4">
            <h2 className="text-4xl font-extrabold mb-4">
              Transform Your Online Presence with TechShabaka
            </h2>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              At{" "}
              <span className="text-emerald-900 font-semibold">
                TechShabaka
              </span>
              , we specialize in creating modern, user-friendly, and
              high-performing websites that leave a lasting impression. Whether
              you need a brand-new website or want to revamp your existing one,
              our team is here to help you achieve your goals.
            </p>

            <div className="contact-info space-y-4">
              <p className="text-gray-800 text-lg">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@techshabaka.com"
                  className="text-emerald-900 hover:underline"
                >
                  info@techshabaka.com
                </a>
              </p>
              <p className="text-gray-800 text-lg">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-emerald-900 hover:underline"
                >
                  +1 234 567 890
                </a>
              </p>

              <div className="social-media flex justify-center gap-6 mt-4">
                <a
                  href="https://twitter.com/youragency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 text-xl hover:text-emerald-700 transition"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a
                  href="https://instagram.com/youragency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 text-xl hover:text-emerald-700 transition"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
        )}
        <button className="fixed top-1 flex  p-2 rounded-md m-2 gap-1 text-emerald-50 bg-emerald-950">
          Powered by{" "}
          <a
            href="https://www.instagram.com/techshabaka"
            target="_blank"
            className="text-emerald-400"
          >
            @techShabaka
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
