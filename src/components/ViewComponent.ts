export default abstract class ViewComponent {
    protected readonly container: HTMLElement;

    protected constructor (elementId?: string) {
        this.container = elementId ? document.getElementById(elementId) : document.createElement('div');
        setTimeout(this.onCreateView.bind(this), 0);
    }

    protected onCreateView(): void {
    }

    public getContainer(): HTMLElement {
        return this.container;
    }
}