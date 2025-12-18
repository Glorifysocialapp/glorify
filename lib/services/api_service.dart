import 'package:cu_app_glorify/models/account.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:cu_app_glorify/models/bible_verse.dart';
import 'package:cu_app_glorify/models/note.dart';
import 'package:cu_app_glorify/models/post.dart';
import 'package:cu_app_glorify/models/user.dart';
import 'package:cu_app_glorify/models/friend_request.dart';
import 'package:cu_app_glorify/models/activity_item.dart'; // Import ActivityItem
import 'package:cu_app_glorify/models/notification.dart';

class ApiService {
  static const String baseUrl = 'https://glorify-server.onrender.com';

//   Future<String?> _getToken() async {
//     final prefs = await SharedPreferences.getInstance();
//     return prefs.getString('user_token');
//   }

  Future<String?> getUserId() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('user_id');
  }

  Future<String?> getUserName() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('user_name');
  }

  // Bible endpoints
  Future<BibleChapter> getBibleChapter(String book, int chapter) async {
    final response = await http.get(
      Uri.parse('$baseUrl/verses/$book/$chapter'),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      return BibleChapter.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to load bible chapter');
    }
  }

  Future<List<String>> getBibleBooks() async {
    // Returning a static list of books as requested
    return [
      'Genesis',
      'Exodus',
      'Leviticus',
      'Numbers',
      'Deuteronomy',
      'Joshua',
      'Judges',
      'Ruth',
      '1 Samuel',
      '2 Samuel',
      '1 Kings',
      '2 Kings',
      '1 Chronicles',
      '2 Chronicles',
      'Ezra',
      'Nehemiah',
      'Esther',
      'Job',
      'Psalms',
      'Proverbs',
      'Ecclesiastes',
      'Song of Solomon',
      'Isaiah',
      'Jeremiah',
      'Lamentations',
      'Ezekiel',
      'Daniel',
      'Hosea',
      'Joel',
      'Amos',
      'Obadiah',
      'Jonah',
      'Micah',
      'Nahum',
      'Habakkuk',
      'Zephaniah',
      'Haggai',
      'Zechariah',
      'Malachi',
      'Matthew',
      'Mark',
      'Luke',
      'John',
      'Acts',
      'Romans',
      '1 Corinthians',
      '2 Corinthians',
      'Galatians',
      'Ephesians',
      'Philippians',
      'Colossians',
      '1 Thessalonians',
      '2 Thessalonians',
      '1 Timothy',
      '2 Timothy',
      'Titus',
      'Philemon',
      'Hebrews',
      'James',
      '1 Peter',
      '2 Peter',
      '1 John',
      '2 John',
      '3 John',
      'Jude',
      'Revelation'
    ];
  }

  // Authentication endpoints
  Future<List?> login(String username, String password) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/login'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'username': username, 'password': password}),
      );

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString('user_token', data['token']);
        await prefs.setString('user_id', data['user_id']);
        await prefs.setString('user_name', data['username']); // Store user_id
        await prefs.setString('user_profile_image', data['profileImage']);
        return [data['username'], data['token'], data['user_id'], data['profileImage']];
      } else {
        return null; // Login failed
      }
    } catch (e) {
      print('Error during login: $e');
      return null;
    }
  }

  Future<bool> register(String username, String password) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/register'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'username': username, 'password': password}),
      );

      if (response.statusCode == 201) {
        return true; // Registration successful
      } else {
        return false; // Registration failed
      }
    } catch (e) {
      print('Error during registration: $e');
      return false;
    }
  }

  // Notes endpoints
  Future<List<Note>> getUserNotes() async {
    final userId = await getUserId();
    if (userId == null) {
      throw Exception('User not logged in');
    }
    final response = await http.get(
      Uri.parse('$baseUrl/notes/user/$userId'),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      final List<dynamic> notesList = json.decode(response.body);
      return notesList.map((note) => Note.fromJson(note)).toList();
    } else {
      throw Exception('Failed to load notes');
    }
  }

  Future<Note> createNote(Note note) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/notes'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(note.toJson()),
      );

      if (response.statusCode == 201) {
        return Note.fromJson(json.decode(response.body));
      } else {
        throw Exception('Failed to create note');
      }
    } catch (e) {
      return note;
    }
  }

  Future<void> deleteNote(String noteId) async {
    try {
      await http.delete(
        Uri.parse('$baseUrl/notes/$noteId'),
        headers: {'Content-Type': 'application/json'},
      );
    } catch (e) {
      // Handle error silently for demo
    }
  }

  // Posts endpoints
  Future<List<Post>> getFeedPosts(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/posts/feed/$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> postsList = json.decode(response.body);
        return postsList.map((post) => Post.fromJson(post)).toList();
      } else {
        throw Exception('Failed to load posts');
      }
    } catch (e) {
      return _getSamplePosts();
    }
  }

  Future<Post> createPost(Post post) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/posts'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(post.toJson()),
      );

      if (response.statusCode == 201) {
        return Post.fromJson(json.decode(response.body));
      } else {
        throw Exception('Failed to create post');
      }
    } catch (e) {
      return post;
    }
  }

  // Friends endpoints
  Future<List<User>> getFriends(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/friends/$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> friendsList = json.decode(response.body);
        return friendsList.map((friend) => User.fromJson(friend)).toList();
      } else {
        throw Exception('Failed to load friends');
      }
    } catch (e) {
      return _getSampleFriends();
    }
  }

  Future<List<FriendRequest>> getFriendRequests(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/friend-requests/$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> requestsList = json.decode(response.body);
        return requestsList
            .map((request) => FriendRequest.fromJson(request))
            .toList();
      } else {
        throw Exception('Failed to load friend requests');
      }
    } catch (e) {
      return _getSampleFriendRequests();
    }
  }

  Future<User?> getUserDetails(String userName) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/users/$userName'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        return User.fromJson(json.decode(response.body));
      } else if (response.statusCode == 404) {
        return null; // User not found
      } else {
        throw Exception('Failed to load user details');
      }
    } catch (e) {
      print('Error getting user details: $e');
      return null;
    }
  }

  Future<List<ActivityItem>> getUserActivity(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/users/$userId/activity'),
        headers: {'Content-Type': 'application/json'},
      );

      print('Activity API Response: ${response.statusCode}');
      print('Activity API Body: ${response.body}');

      if (response.statusCode == 200) {
        final List<dynamic> activityList = json.decode(response.body);

        // Debug: Print the raw data
        print('Parsed activity list: $activityList');

        return activityList.map((item) {
          try {
            return ActivityItem.fromJson(item as Map<String, dynamic>);
          } catch (e) {
            print('Error parsing activity item: $item, Error: $e');
            // Return a fallback activity item if parsing fails
            return ActivityItem(
              type: ActivityType.noteCreated,
              title: 'Activity',
              subtitle: 'Unable to load details',
              timestamp: DateTime.now(),
            );
          }
        }).toList();
      } else {
        print('Failed to load user activity: ${response.statusCode}');
        throw Exception('Failed to load user activity: ${response.statusCode}');
      }
    } catch (e) {
      print('Error getting user activity: $e');
      return []; // Return empty list instead of throwing
    }
  }

  Future<List<FriendRequest>> getSentFriendRequests(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/friend-requests/sent/$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> requestsList = json.decode(response.body);
        return requestsList
            .map((request) => FriendRequest.fromJson(request))
            .toList();
      } else {
        throw Exception('Failed to load sent friend requests');
      }
    } catch (e) {
      return [];
    }
  }

  Future<void> sendFriendRequest(String fromUserId, String toUserId) async {
    print(
        'Sending friend request from: $fromUserId to: $toUserId'); // Debug print
    try {
      await http.post(
        Uri.parse('$baseUrl/friend-requests'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'fromUserId': fromUserId,
          'toUserId': toUserId,
        }),
      );
    } catch (e) {
      // Handle error silently for demo
    }
  }

  Future<void> respondToFriendRequest(String requestId, String action) async {
    try {
      String url;
      if (action == 'accept') {
        url = '$baseUrl/friend-requests/accept';
      } else if (action == 'reject') {
        url = '$baseUrl/friend-requests/decline';
      } else {
        throw Exception('Invalid action for friend request: $action');
      }

      final response = await http.post(
        Uri.parse(url),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'requestId': requestId}),
      );

      if (response.statusCode != 200) {
        throw Exception(
            'Failed to respond to friend request: ${response.body}');
      }
    } catch (e) {
      print('Error responding to friend request: $e');
      rethrow;
    }
  }

  Future<void> removeFriend(String userId, String friendId) async {
    try {
      await http.delete(
        Uri.parse('$baseUrl/friends/$userId/$friendId'),
        headers: {'Content-Type': 'application/json'},
      );
    } catch (e) {
      print('Error removing friend: $e');
      rethrow;
    }
  }

  Future<List<User>> searchUsers(String query) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/users/search?query=$query'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> usersList = json.decode(response.body);

        // Map the server response to User objects with proper field mapping
        return usersList.map<User>((userData) {
          return User(
            id: userData['_id'] ?? userData['id'] ?? '',
            name: userData['username'] ?? userData['name'] ?? 'Unknown User',
            email: userData['email'] ?? '',
            profileImage:
                userData['profileImage'] ?? userData['profile_image'] ?? '',
            joinDate: userData['joinDate'] != null
                ? DateTime.parse(userData['joinDate'])
                : DateTime.now().subtract(const Duration(days: 30)),
            postsCount: userData['postsCount'] ?? userData['posts_count'] ?? 0,
            notesCount: userData['notesCount'] ?? userData['notes_count'] ?? 0,
          );
        }).toList();
      } else {
        throw Exception('Failed to search users');
      }
    } catch (e) {
      print('Error searching users: $e');
      rethrow;
    }
  }

  Future<void> signOut() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('user_token');
    await prefs.remove('user_id');
  }

  // Sample data methods for demo purposes
  BibleChapter _getSampleBibleChapter(String book, int chapter) {
    return BibleChapter(
      book: book,
      chapter: chapter,
      verses: [
        BibleVerse(
            book: book,
            chapter: chapter,
            verse: 1,
            text:
                "In the beginning was the Word, and the Word was with God, and the Word was God."),
        BibleVerse(
            book: book,
            chapter: chapter,
            verse: 2,
            text: "He was with God in the beginning."),
        BibleVerse(
            book: book,
            chapter: chapter,
            verse: 3,
            text:
                "Through him all things were made; without him nothing was made that has been made."),
        BibleVerse(
            book: book,
            chapter: chapter,
            verse: 4,
            text:
                "In him was life, and that life was the light of all mankind."),
        BibleVerse(
            book: book,
            chapter: chapter,
            verse: 5,
            text:
                "The light shines in the darkness, and the darkness has not overcome it."),
      ],
    );
  }

  List<String> _getSampleBibleBooks() {
    return [
      'Genesis',
      'Exodus',
      'Leviticus',
      'Numbers',
      'Deuteronomy',
      'Joshua',
      'Judges',
      'Ruth',
      '1 Samuel',
      '2 Samuel',
      'Matthew',
      'Mark',
      'Luke',
      'John',
      'Acts',
      'Romans',
      '1 Corinthians',
      '2 Corinthians',
      'Galatians',
      'Ephesians',
    ];
  }

  List<Note> _getSampleNotes(String userId) {
    return [];
  }

  List<Post> _getSamplePosts() {
    return [];
  }

  List<User> _getSampleFriends() {
    return [];
  }

  List<FriendRequest> _getSampleFriendRequests() {
    return [];
  }

  Future<Account> getAccountDetails(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/users/$userId'),
        headers: {
          'Content-Type': 'application/json',
          // Add your auth token here if needed
          // 'Authorization': 'Bearer $token',
        },
      );

      if (response.statusCode == 200) {
        final Map<String, dynamic> jsonMap = jsonDecode(response.body);

        // Ensure required keys are present with defaults
        return Account(
          
          friendIds: List<String>.from(jsonMap['friendIds'] ?? []),
          id: jsonMap['id'] ?? '',
          joinDate: jsonMap['joinDate'] ?? '',
          name: jsonMap['name'] ?? '',
          notesCount: jsonMap['notesCount'] ?? 0,
          postsCount: jsonMap['postsCount'] ?? 0,
          profileImage: jsonMap['profileImage'] ?? '',
        );
      } else {
        throw Exception(
            'Failed to load account details (Code: ${response.statusCode})');
      }
    } catch (e) {
      throw Exception('Error fetching account details: $e');
    }
  }

  // Enhanced messaging methods with better error handling
  Future<Map<String, dynamic>> sendMessage(
      String senderId, String recipientId, String text) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/send_message'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'sender_id': senderId,
          'recipient_id': recipientId,
          'text': text,
        }),
      );

      final responseData = json.decode(response.body);

      if (response.statusCode == 200) {
        return responseData;
      } else {
        throw Exception(
            'Failed to send message: ${responseData['message'] ?? 'Unknown error'}');
      }
    } catch (e) {
      print('Error sending message: $e');
      rethrow;
    }
  }

  Future<List<dynamic>> getMessages(String user1Id, String user2Id) async {
    final response = await http.get(
      Uri.parse(
        '$baseUrl/get_messages?user1_id=$user1Id&user2_id=$user2Id',
      ),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      final List<dynamic> messages = json.decode(response.body);
      return messages.reversed.toList();
    } else {
      throw Exception('Failed to load messages');
    }
  }

  Future<void> markMessagesRead(String senderId, String recipientId) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/mark_messages_read/$recipientId/$senderId'),
        headers: {'Content-Type': 'application/json'},
        
      );

      if (response.statusCode != 200) {
        final errorData = json.decode(response.body);
        throw Exception(
            'Failed to mark messages as read: ${errorData['message'] ?? 'Unknown error'}');
      }
    } catch (e) {
      print('Error marking messages as read: $e');
      rethrow;
    }
  }

  // New method to get unread message count
  Future<int> getUnreadMessageCount(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/get_unread_count?user_id=$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        return data['unread_count'] ?? 0;
      } else {
        throw Exception('Failed to get unread count');
      }
    } catch (e) {
      print('Error getting unread count: $e');
      return 0;
    }
  }

  // Method to check connection status
  Future<bool> checkConnection() async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/'),
        headers: {'Content-Type': 'application/json'},
      ).timeout(const Duration(seconds: 5));

      return response.statusCode == 200;
    } catch (e) {
      print('Connection check failed: $e');
      return false;
    }
  }

    Future<bool> isUserOnline(String userId) async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/is_online/$userId'));
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return data['online'] ?? false;
      }
      return false;
    } catch (e) {
      print('Error checking user online status: $e');
      return false;
    }
  }

  Future<List<Notification>> getNotifications(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/notifications/$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> notificationsList = json.decode(response.body);
        return notificationsList
            .map((notification) => Notification.fromJson(notification))
            .toList();
      } else {
        throw Exception('Failed to load notifications');
      }
    } catch (e) {
      print('Error getting notifications: $e');
      rethrow;
    }
  }

  Future<void> markNotificationAsRead(String notificationId) async {
    try {
      await http.post(
        Uri.parse('$baseUrl/notifications/mark-as-read'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'notification_id': notificationId}),
      );
    } catch (e) {
      print('Error marking notification as read: $e');
      rethrow;
    }
  }

}
