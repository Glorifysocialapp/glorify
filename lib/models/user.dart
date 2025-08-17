class User {
  final String id;
  final String name;
  final String email;
  final String profileImage;
  final DateTime joinDate;
  final List<String> friendIds;
  final int postsCount;
  final int notesCount;
  final bool hasUnreadMessages;

  User({
    required this.id,
    required this.name,
    required this.email,
    required this.profileImage,
    required this.joinDate,
    this.friendIds = const [],
    this.postsCount = 0,
    this.notesCount = 0,
    this.hasUnreadMessages = false,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['_id'], // Map _id to id
      name: json['username'], // Map username to name
      email: json['email'] ?? '', // Provide default for email
      profileImage: json['profileImage'] ?? '', // Provide default for profileImage
      joinDate: json['joinDate'] != null ? DateTime.parse(json['joinDate']) : DateTime.now(), // Provide default for joinDate
      friendIds: List<String>.from(json['friendIds'] ?? []),
      postsCount: json['postsCount'] ?? 0,
      notesCount: json['notesCount'] ?? 0,
      hasUnreadMessages: json['hasUnreadMessages'] ?? false,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'profileImage': profileImage,
      'joinDate': joinDate.toIso8601String(),
      'friendIds': friendIds,
      'postsCount': postsCount,
      'notesCount': notesCount,
      'hasUnreadMessages': hasUnreadMessages,
    };
  }
}