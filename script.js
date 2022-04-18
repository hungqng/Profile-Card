// const template = document.createElement('template');

class ProfileCard extends HTMLElement{
  constructor(){
      super();
      this.attachShadow({ mode: 'open'});
      document.querySelector(".card-btn").addEventListener("click", () => {
        document.querySelector(".container").classList.toggle("change");
        });
  }
  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return [/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }
} 
customElements.define('profile-card', ProfileCard);