import 'package:cu_app/services/theme_provider.dart';
import 'package:flutter/material.dart';
import 'package:cu_app/theme.dart';
import 'package:cu_app/screens/auth_screen.dart';
import 'package:cu_app/services/notification_service.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:cu_app/screens/main_navigation.dart'; // Import MainNavigation

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await NotificationService.initialize();

  final prefs = await SharedPreferences.getInstance();
  final isLoggedIn = prefs.getBool('isLoggedIn') ?? false;
  print('DEBUG: isLoggedIn on app start: $isLoggedIn'); // Debug print

  runApp(
    ChangeNotifierProvider(
      create: (context) => ThemeProvider(),
      child: ChurchApp(isLoggedIn: isLoggedIn),
    ),
  );
}

class ChurchApp extends StatelessWidget {
  final bool? isLoggedIn;

  const ChurchApp({super.key, this.isLoggedIn});

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);

    return MaterialApp(
      title: 'Church Community',
      debugShowCheckedModeBanner: false,
      theme: lightTheme,
      darkTheme: darkTheme,
      themeMode: themeProvider.themeMode,
      home: (isLoggedIn ?? false) ? const MainNavigation() : const AuthScreen(),
    );
  }
}
