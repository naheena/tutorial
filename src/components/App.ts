import ViewComponent from "./ViewComponent";
import PopupView from "./PopupView";

export default class App extends ViewComponent {
    private popupView: PopupView;

    constructor(elementId: string) {
        super(elementId);
    }

    protected onCreateView(): void {
        this.container.appendChild(this.makeButton());
    }

    private makeButton(): HTMLButtonElement {
        const button = document.createElement('button');
        button.innerText = '버튼';
        button.addEventListener('click', () => document.body.appendChild(this.getPopupView().getContainer()));
        return button;
    }

    /**
     * 팝업 컴포넌트를 사용할 때 생성.
     */
    private getPopupView(): PopupView {
        if (!this.popupView) this.popupView = new PopupView();
        return this.popupView;
    }
}