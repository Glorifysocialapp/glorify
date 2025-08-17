import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import '../services/api_service.dart';
import 'package:cu_app/screens/terms_screen.dart';
import 'package:cu_app/screens/auth_screen.dart';
import 'package:cu_app/screens/edit_profile_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen>
    with TickerProviderStateMixin {
  late AnimationController _fadeController;
  late Animation<double> _fadeAnimation;

  // Settings state variables
  bool _notificationsEnabled = true;
  bool _pushNotifications = true;
  bool _emailNotifications = false;
  bool _darkMode = false;
  bool _privateProfile = false;
  bool _showOnlineStatus = true;
  bool _allowFriendRequests = true;
  double _fontSize = 16.0;
  String _selectedLanguage = 'English';
  bool _autoBackup = true;

  final List<String> _languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Portuguese',
    'Italian',
  ];

  @override
  void initState() {
    super.initState();
    _fadeController = AnimationController(
      duration: const Duration(milliseconds: 600),
      vsync: this,
    );
    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _fadeController, curve: Curves.easeInOut),
    );
    _fadeController.forward();
    _loadSettings();
  }

  @override
  void dispose() {
    _fadeController.dispose();
    super.dispose();
  }

  void _loadSettings() {
    // TODO: Load settings from SharedPreferences or API
    // For now, using default values
  }

  void _saveSettings() async {
    // TODO: Save settings to SharedPreferences or API
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: const Row(
          children: [
            Icon(Icons.check_circle, color: Colors.white),
            SizedBox(width: 12),
            Text('Settings saved successfully'),
          ],
        ),
        backgroundColor: Colors.green,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Row(
          children: [
            Icon(Icons.settings, color: Colors.white),
            SizedBox(width: 8),
            Text(
              'Settings',
              style:
                  TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
            ),
          ],
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.white),
          onPressed: () => Navigator.pop(context),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.save, color: Colors.white),
            onPressed: _saveSettings,
            tooltip: 'Save Settings',
          ),
        ],
      ),
      body: FadeTransition(
        opacity: _fadeAnimation,
        child: SingleChildScrollView(
          child: Column(
            children: [
              // Header with gradient
              Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [
                      Theme.of(context).colorScheme.primary,
                      Theme.of(context).colorScheme.primaryContainer,
                    ],
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                  ),
                ),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.2),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: const Icon(
                        Icons.tune,
                        size: 32,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(width: 16),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Customize Your Experience',
                            style: Theme.of(context)
                                .textTheme
                                .titleLarge
                                ?.copyWith(
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold,
                                ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            'Personalize your app settings and preferences',
                            style: Theme.of(context)
                                .textTheme
                                .bodyMedium
                                ?.copyWith(
                                  color: Colors.white.withOpacity(0.9),
                                ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 16),

              // Notifications Section
              _buildSettingsSection(
                context,
                'Notifications',
                Icons.notifications,
                [
                  _buildSwitchTile(
                    'Enable Notifications',
                    'Receive app notifications',
                    _notificationsEnabled,
                    (value) {
                      setState(() {
                        _notificationsEnabled = value;
                        if (!value) {
                          _pushNotifications = false;
                          _emailNotifications = false;
                        }
                      });
                    },
                  ),
                  _buildSwitchTile(
                    'Push Notifications',
                    'Get instant push notifications',
                    _pushNotifications && _notificationsEnabled,
                    (value) => setState(() => _pushNotifications = value),
                    enabled: _notificationsEnabled,
                  ),
                  _buildSwitchTile(
                    'Email Notifications',
                    'Receive notifications via email',
                    _emailNotifications && _notificationsEnabled,
                    (value) => setState(() => _emailNotifications = value),
                    enabled: _notificationsEnabled,
                  ),
                ],
              ),

              // Appearance Section
              _buildSettingsSection(
                context,
                'Appearance',
                Icons.palette,
                [
                  _buildSwitchTile(
                    'Dark Mode',
                    'Use dark theme',
                    _darkMode,
                    (value) => setState(() => _darkMode = value),
                  ),
                  _buildSliderTile(
                    'Font Size',
                    'Adjust text size',
                    _fontSize,
                    12.0,
                    24.0,
                    (value) => setState(() => _fontSize = value),
                  ),
                  _buildDropdownTile(
                    'Language',
                    'Choose your preferred language',
                    _selectedLanguage,
                    _languages,
                    (value) => setState(() => _selectedLanguage = value!),
                  ),
                ],
              ),

              // Privacy Section
              _buildSettingsSection(
                context,
                'Privacy & Security',
                Icons.security,
                [
                  _buildSwitchTile(
                    'Private Profile',
                    'Make your profile private',
                    _privateProfile,
                    (value) => setState(() => _privateProfile = value),
                  ),
                  _buildSwitchTile(
                    'Show Online Status',
                    'Let others see when you\'re online',
                    _showOnlineStatus,
                    (value) => setState(() => _showOnlineStatus = value),
                  ),
                  _buildSwitchTile(
                    'Allow Friend Requests',
                    'Receive friend requests from others',
                    _allowFriendRequests,
                    (value) => setState(() => _allowFriendRequests = value),
                  ),
                  _buildActionTile(
                    'Change Password',
                    'Update your account password',
                    Icons.lock,
                    () => _changePassword(),
                  ),
                  _buildActionTile(
                    'Two-Factor Authentication',
                    'Add an extra layer of security',
                    Icons.security,
                    () => _setupTwoFactor(),
                  ),
                ],
              ),

              // Data & Storage Section
              _buildSettingsSection(
                context,
                'Data & Storage',
                Icons.storage,
                [
                  _buildSwitchTile(
                    'Auto Backup',
                    'Automatically backup your data',
                    _autoBackup,
                    (value) => setState(() => _autoBackup = value),
                  ),
                  _buildActionTile(
                    'Export Data',
                    'Download your data',
                    Icons.download,
                    () => _exportData(),
                  ),
                  _buildActionTile(
                    'Clear Cache',
                    'Free up storage space',
                    Icons.cleaning_services,
                    () => _clearCache(),
                  ),
                ],
              ),

              // Account Section
              _buildSettingsSection(
                context,
                'Account',
                Icons.account_circle,
                [
                  _buildActionTile(
                    'Edit Profile',
                    'Update your profile information',
                    Icons.edit,
                    () => _editProfile(),
                  ),
                  _buildActionTile(
                    'Manage Subscriptions',
                    'View and manage your subscriptions',
                    Icons.subscriptions,
                    () => _manageSubscriptions(),
                  ),
                  _buildActionTile(
                    'Account Deletion',
                    'Permanently delete your account',
                    Icons.delete_forever,
                    () => _deleteAccount(),
                    isDestructive: true,
                  ),
                  _buildActionTile(
                    'Logout',
                    'Sign out of your account',
                    Icons.logout,
                    () => _logout(),
                  ),
                ],
              ),

              // Support Section
              _buildSettingsSection(
                context,
                'Support',
                Icons.help,
                [
                  _buildActionTile(
                    'Help Center',
                    'Get help and support',
                    Icons.help_center,
                    () => _openHelpCenter(),
                  ),
                  _buildActionTile(
                    'Contact Us',
                    'Send us your feedback',
                    Icons.contact_support,
                    () => _contactSupport(),
                  ),
                  _buildActionTile(
                    'Report a Bug',
                    'Report issues with the app',
                    Icons.bug_report,
                    () => _reportBug(),
                  ),
                ],
              ),

              // App Info Section
              _buildSettingsSection(
                context,
                'About',
                Icons.info,
                [
                  _buildInfoTile('Version', '1.0.0'),
                  _buildInfoTile('Build', '2024.01.15'),
                  _buildActionTile(
                    'Privacy Policy',
                    'Read our privacy policy',
                    Icons.privacy_tip,
                    () => _openPrivacyPolicy(),
                  ),
                  _buildActionTile(
                    'Terms of Service',
                    'Read our terms of service',
                    Icons.description,
                    () => _openTermsOfService(),
                  ),
                ],
              ),

              const SizedBox(height: 32),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSettingsSection(
    BuildContext context,
    String title,
    IconData icon,
    List<Widget> children,
  ) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 8),
            child: Row(
              children: [
                Icon(
                  icon,
                  color: Theme.of(context).colorScheme.primary,
                  size: 20,
                ),
                const SizedBox(width: 8),
                Text(
                  title,
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                        color: Theme.of(context).colorScheme.primary,
                      ),
                ),
              ],
            ),
          ),
          Container(
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.surface,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(
                color: Theme.of(context).colorScheme.outline.withOpacity(0.2),
              ),
            ),
            child: Column(children: children),
          ),
        ],
      ),
    );
  }

  Widget _buildSwitchTile(
    String title,
    String subtitle,
    bool value,
    ValueChanged<bool> onChanged, {
    bool enabled = true,
  }) {
    return ListTile(
      title: Text(
        title,
        style: TextStyle(
          fontWeight: FontWeight.w600,
          color: enabled ? null : Theme.of(context).disabledColor,
        ),
      ),
      subtitle: Text(
        subtitle,
        style: TextStyle(
          color: enabled
              ? Theme.of(context).colorScheme.onSurface.withOpacity(0.7)
              : Theme.of(context).disabledColor,
        ),
      ),
      trailing: Switch.adaptive(
        value: value,
        onChanged: enabled ? onChanged : null,
        activeColor: Theme.of(context).colorScheme.primary,
      ),
    );
  }

  Widget _buildSliderTile(
    String title,
    String subtitle,
    double value,
    double min,
    double max,
    ValueChanged<double> onChanged,
  ) {
    return ListTile(
      title: Text(
        title,
        style: const TextStyle(fontWeight: FontWeight.w600),
      ),
      subtitle: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            subtitle,
            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color:
                      Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
                ),
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              Text('${min.toInt()}'),
              Expanded(
                child: Slider(
                  value: value,
                  min: min,
                  max: max,
                  divisions: ((max - min) / 2).round(),
                  onChanged: onChanged,
                  activeColor: Theme.of(context).colorScheme.primary,
                ),
              ),
              Text('${max.toInt()}'),
            ],
          ),
          Text(
            'Current: ${value.toInt()}px',
            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color: Theme.of(context).colorScheme.primary,
                  fontWeight: FontWeight.w500,
                ),
          ),
        ],
      ),
    );
  }

  Widget _buildDropdownTile(
    String title,
    String subtitle,
    String value,
    List<String> items,
    ValueChanged<String?> onChanged,
  ) {
    return ListTile(
      title: Text(
        title,
        style: const TextStyle(fontWeight: FontWeight.w600),
      ),
      subtitle: Text(
        subtitle,
        style: Theme.of(context).textTheme.bodySmall?.copyWith(
              color: Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
            ),
      ),
      trailing: DropdownButton<String>(
        value: value,
        onChanged: onChanged,
        items: items.map((item) {
          return DropdownMenuItem(
            value: item,
            child: Text(item),
          );
        }).toList(),
        underline: Container(),
        icon: Icon(
          Icons.arrow_drop_down,
          color: Theme.of(context).colorScheme.primary,
        ),
      ),
    );
  }

  Widget _buildActionTile(
    String title,
    String subtitle,
    IconData icon,
    VoidCallback onTap, {
    bool isDestructive = false,
  }) {
    return ListTile(
      leading: Icon(
        icon,
        color:
            isDestructive ? Colors.red : Theme.of(context).colorScheme.primary,
      ),
      title: Text(
        title,
        style: TextStyle(
          fontWeight: FontWeight.w600,
          color: isDestructive ? Colors.red : null,
        ),
      ),
      subtitle: Text(
        subtitle,
        style: Theme.of(context).textTheme.bodySmall?.copyWith(
              color: isDestructive
                  ? Colors.red.withOpacity(0.7)
                  : Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
            ),
      ),
      trailing: Icon(
        Icons.arrow_forward_ios,
        size: 16,
        color: Theme.of(context).colorScheme.onSurface.withOpacity(0.5),
      ),
      onTap: onTap,
    );
  }

  Widget _buildInfoTile(String title, String value) {
    return ListTile(
      title: Text(
        title,
        style: const TextStyle(fontWeight: FontWeight.w600),
      ),
      trailing: Text(
        value,
        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
            ),
      ),
    );
  }

  // Action handlers
  void _changePassword() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Change Password'),
        content:
            const Text('This will redirect you to the password change screen.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              // TODO: Navigate to password change screen
            },
            child: const Text('Continue'),
          ),
        ],
      ),
    );
  }

  void _setupTwoFactor() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Two-factor authentication setup coming soon!'),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _exportData() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Data export feature coming soon!'),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _clearCache() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Clear Cache'),
        content: const Text(
            'This will clear all cached data and may slow down the app temporarily. Continue?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Cache cleared successfully!'),
                  behavior: SnackBarBehavior.floating,
                ),
              );
            },
            child: const Text('Clear'),
          ),
        ],
      ),
    );
  }

  void _editProfile() {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => EditProfileScreen()),
    );
  }

  void _manageSubscriptions() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Subscription management coming soon!'),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _deleteAccount() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Delete Account'),
        content: const Text(
          'This action cannot be undone. All your data will be permanently deleted. Are you sure?',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              // TODO: Implement account deletion
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.red,
              foregroundColor: Colors.white,
            ),
            child: const Text('Delete'),
          ),
        ],
      ),
    );
  }

  void _logout() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Logout'),
        content: const Text('Are you sure you want to logout?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              setState(() {
                // Clear user session data
                SharedPreferences.getInstance().then((prefs) {
                  prefs.remove('userId');
                  prefs.remove('userName');
                  prefs.remove('userProfileImage');
                  prefs.remove('authToken');
                  prefs.remove('userToken');
                  prefs.clear();
                });
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => const AuthScreen()),
                );
              });
            },
            child: const Text('Logout'),
          ),
        ],
      ),
    );
  }

  void _openHelpCenter() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Help center coming soon!'),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _contactSupport() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Contact support feature coming soon!'),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _reportBug() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Bug reporting feature coming soon!'),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _openPrivacyPolicy() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Privacy policy coming soon!'),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _openTermsOfService() {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => TermsScreen()),
    );
  }
}
