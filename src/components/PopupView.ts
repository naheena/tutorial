import ViewComponent from "./ViewComponent";

export default class PopupView extends ViewComponent {
    constructor() {
        super();
    }

    protected onCreateView(): void {
        this.container.classList.add('popup');
        this.container.addEventListener('click', () => this.close());
        this.container.appendChild(this.makeContents());
    }

    private makeContents(): HTMLElement {
        const contents = document.createElement('div');
        contents.addEventListener('click', e => e.stopPropagation());
        contents.classList.add('contents');
        contents.innerText = '나는 팝업';
        return contents;
    }

    private close(): void {
        if (!this.container.parentElement) return;
        this.container.parentElement.removeChild(this.container);
    }
}