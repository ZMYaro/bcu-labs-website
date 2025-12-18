export class ImageCarouselElement extends HTMLElement {
	
	static styles = new CSSStyleSheet();
	
	/**
	 * Construct a new <image-carousel> element.
	 */
	constructor() {
		super();
		
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.adoptedStyleSheets = [this.constructor.styles];
		
		this.shadowRoot.innerHTML += `<slot></slot>`;
	}
}

ImageCarouselElement.styles.replace(`
:host {
	display: grid;
	grid-auto-columns: 100%;
	grid-template-rows: 480px auto;
	row-gap: 0.5em;
	align-items: stretch;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
}
::slotted(figure) {
	grid-row: 1 / -1;
	display: grid;
	grid-template-rows: subgrid;
	
	scroll-snap-stop: always;
	scroll-snap-align: center;
}
`);

customElements.define('image-carousel', ImageCarouselElement);
