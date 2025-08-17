import 'package:flutter/material.dart';
import 'package:cu_app/theme.dart';
import 'package:cu_app/screens/auth_screen.dart';
import 'package:cu_app/services/notification_service.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await NotificationService.initialize();
  runApp(const ChurchApp());
}
class ChurchApp extends StatelessWidget {
  const ChurchApp({super.key});
  
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Church Community',
      debugShowCheckedModeBanner: false,
      theme: lightTheme,
      darkTheme: darkTheme,
      themeMode: ThemeMode.system,
      home: const AuthScreen(),
    );
  }
}
