class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        footer {
            background: rgb(0, 140, 140);
            color: white;
            text-align: center;
            font-weight: bold;
            padding: 2rem;
        }
        p {
          margin: 0;
        }
      </style>
      <footer>
        <p>&copy; 2025 Muhammad Rafli.</p>
      </footer>
    `;
  }
}

customElements.define("footer-bar", FooterBar);