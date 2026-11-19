import "./MicroGardening.css";

const topics = [
  {
    image: "🪴",
    title: "Container Gardening",
    description:
      "Grow vegetables, flowers and herbs in pots, buckets and containers.",
    plants: "Tomato, Chilli, Mint"
  },
  {
    image: "🏡",
    title: "Balcony Gardening",
    description:
      "Turn your balcony into a beautiful green space using small pots.",
    plants: "Tulsi, Rose, Coriander"
  },
  {
    image: "🌿",
    title: "Vertical Gardening",
    description:
      "Use walls, stands and hanging containers to grow plants vertically.",
    plants: "Money Plant, Spinach"
  },
  {
    image: "🥬",
    title: "Kitchen Gardening",
    description:
      "Grow fresh vegetables and herbs near your kitchen for daily use.",
    plants: "Curry Leaves, Tomato"
  },
  {
    image: "🌱",
    title: "Terrace Gardening",
    description:
      "Make use of terrace space to grow vegetables, fruits and flowers.",
    plants: "Brinjal, Chilli, Okra"
  },
  {
    image: "♻️",
    title: "Recycled Container Gardening",
    description:
      "Reuse suitable bottles, buckets and old containers for growing plants.",
    plants: "Mint, Coriander, Spinach"
  }
];

function MicroGardening() {
  return (
    <section className="micro-page" id="micro-section">

      <header className="micro-hero">
        <p>GROW MORE IN LESS SPACE</p>
        <h1>🌱 Micro Gardening</h1>
        <p>
          Discover simple ways to grow plants in small spaces.
          Even a balcony, terrace or small corner can become
          a beautiful home garden.
        </p>
      </header>

      <div className="micro-intro">
        <h2>What is Micro Gardening?</h2>
        <p>
          Micro gardening is the practice of growing vegetables,
          fruits, herbs and flowers in small available spaces.
          It is useful for families living in houses with limited
          outdoor space. By using pots, containers, shelves and
          vertical arrangements, people can enjoy home gardening.
        </p>
      </div>

      <div className="micro-grid">
        {topics.map((topic) => (
          <article className="micro-card" key={topic.title}>
            <div className="micro-icon">{topic.image}</div>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <div className="micro-plants">
              <strong>Suitable plants:</strong>
              <span>{topic.plants}</span>
            </div>
          </article>
        ))}
      </div>

      <section className="micro-tips">
        <h2>🌿 Tips for Successful Micro Gardening</h2>
        <ul>
          <li>Choose containers with proper drainage holes.</li>
          <li>Use healthy soil mixed with organic compost.</li>
          <li>Select plants according to available sunlight.</li>
          <li>Water plants according to their requirements.</li>
          <li>Remove dry leaves and check plants regularly.</li>
          <li>Use available space carefully and creatively.</li>
        </ul>
      </section>

      <section className="micro-conclusion">
        <h2>Small Space, Big Green Dreams!</h2>
        <p>
          Micro gardening shows that we do not need a large
          garden to grow plants. With simple methods and
          regular care, every home can become greener.
        </p>
      </section>

    </section>
  );
}

export default MicroGardening;