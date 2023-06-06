import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { ChatService } from 'src/app/services/chat.service';
import { SocketWebService } from 'src/app/services/socket-web.service';
@Component({
  selector: 'app-draw2',
  templateUrl: './draw2.component.html',
  styleUrls: ['./draw2.component.scss']
})
export class Draw2Component {
  @ViewChild('canvasRef', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private cx!: CanvasRenderingContext2D;
  private isDrawing: boolean = false;
  private emit: boolean = true;
  private drawnPoints: { x: number, y: number }[] = [];


  constructor(private chatService: ChatService) {

    chatService.callBack.subscribe(res => {
      // Obtener los puntos dibujados del otro canvas
      const receivedPoints = res;
    
      // Agregar los puntos recibidos al arreglo drawnPoints del canvas actual
      this.drawnPoints.push(...[receivedPoints]);
      
      this.drawLine(receivedPoints.x, receivedPoints.y,false) //que no emita


      
    })
  }


  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.cx = canvasEl.getContext('2d')!;
    canvasEl.width = canvasEl.clientWidth;
    canvasEl.height = canvasEl.clientHeight;

    if (this.drawnPoints.length > 0) {
      this.drawLine(this.drawnPoints[0].x, this.drawnPoints[0].y, false);

      for (let i = 1; i < this.drawnPoints.length; i++) {
        const point = this.drawnPoints[i];
        this.drawLine(point.x, point.y, true);
      }
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDrawing = true;
    const { offsetX, offsetY } = event;
    this.empezar(offsetX,offsetY)
  
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDrawing) return;
    const { offsetX, offsetY } = event;
    this.drawLine(offsetX, offsetY,true);
    
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isDrawing = false;
  }

  private empezar(x:number, y:number){
    this.cx.beginPath();
    this.cx.moveTo(x, y);
  }

  private drawLine(x: number, y: number, emit :boolean) {

    
    this.cx.lineTo(x, y); // Dibuja un segmento de línea desde la posición actual hasta (x, y)
    this.cx.stroke();
    
    if (emit){
      this.chatService.emitEvent({x,y});
    }
  }




  public clearCanvas() {
    const canvasEl: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.cx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }







}
