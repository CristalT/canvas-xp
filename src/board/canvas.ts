export class Canvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  constructor(
    private selector: HTMLDivElement,
    private width: number = 1024,
    private height: number = 768
  ) {
    this.create();
  }

  private create(): void {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d")!;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.selector.appendChild(this.canvas);
  }

  public setBackground(color: string) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  get el() {
    return this.canvas;
  }

  get ctx() {
    return this.context;
  }
}
