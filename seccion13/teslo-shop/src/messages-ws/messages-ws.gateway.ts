import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { MessagesWsService } from './messages-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/new-message.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interface/jwt.interface';

@WebSocketGateway( { cors:true })
export class MessagesWsGateway implements OnGatewayConnection, OnGatewayDisconnect{

  @WebSocketServer() wss:Server


  constructor(private readonly messagesWsService: MessagesWsService,
    private readonly jwtService: JwtService
  ) {}


  handleConnection(client: Socket) {
    const token = client.handshake.headers.authentication as string 
    
    let payload: JwtPayload

    try {
      payload = this.jwtService.verify( token )
    } catch (error) {
      client.disconnect()
      return 
    }

    console.log({payload});

    this.messagesWsService.registerClient(client)
    this.wss.emit('clients-updated', this.messagesWsService.getConnectedClients() )
  }

  handleDisconnect(client: Socket) {
    this.messagesWsService.removeClient(client.id)
    this.wss.emit('clients-updated', this.messagesWsService.getConnectedClients() )
  }

  @SubscribeMessage('message-from-client')
  async handleMessageFromClient( client: Socket, payload: NewMessageDto){
    
    // unicamente al cliente
    // client.emit( 'message-from-server', {
    //   fullName: 'Soy Yo',
    //   message: payload.message || 'No message!!'
    // } );

    // emitir a todos Menos al lciente inicial
    // client.broadcast.emit( 'message-from-server', {
    //   fullName: 'Soy Yo',
    //   message: payload.message || 'No message!!'
    // } );

    this.wss.to('')


    this.wss.emit( 'message-from-server', {
      fullName: 'Soy Yo',
      message: payload.message || 'No message!!'
    } );


  }
  


} 
