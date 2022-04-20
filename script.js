document.querySelector(".card-btn").addEventListener("click", () => {document.querySelector(".container").classList.toggle("change");});
class ProfileCard extends HTMLElement{
  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    this.innerHTML = `
      <div class="card-social email">
        <div class="icon-wrapper">
          <i class="fa fa-envelope"></i>
        </div>
        <div class="contact-details">
          <h4>Email</h4>
          <p>hung.qng04@gmail.com</p>
        </div>
      </div>

      <a href="https://www.linkedin.com/in/hungqn04/">
        <div class="card-social linkedin">
          <div class="icon-wrapper">
            <i class="fa fa-linkedin"></i>
          </div>
          <div class="contact-details">
            <h4>LinkedIn</h4>
            <p>@hungqn04</p>
          </div>
        </div>
      </a>

      <a href="https://github.com/hungqng">
        <div class="card-social github">
          <div class="icon-wrapper">
            <i class="fa fa-github"></i>
          </div>
          <div class="contact-details">
            <h4>GitHub</h4>
            <p>@hungqng</p>
          </div>
        </div>
      </a>
    `;
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }
} 
customElements.define('profile-card', ProfileCard);