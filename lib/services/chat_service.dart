import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:http/http.dart' as http;
import 'dart:convert';

class ChatService {
  IO.Socket? socket;

  void connect(String room, String username) {
    socket = IO.io('http://localhost:5000', <String, dynamic>{
      'transports': ['websocket'],
      'autoConnect': false,
    });
    socket!.connect();
    socket!.onConnect((_) {
      socket!.emit('join', {'room': room, 'username': username});
    });
  }

  void sendMessage(String room, String username, String text) {
    socket?.emit('send_message', {
      'room': room,
      'username': username,
      'text': text
    });
  }

  void onMessage(Function(Map) callback) {
    socket?.on('receive_message', (data) => callback(data));
  }

  Future<List<Map>> fetchMessages(String room) async {
    final response = await http.get(Uri.parse('http://localhost:5000/messages/$room'));
    if (response.statusCode == 200) {
      return List<Map>.from(json.decode(response.body));
    }
    return [];
  }

  void disconnect() {
    socket?.disconnect();
  }
}