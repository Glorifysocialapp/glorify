import 'package:flutter/material.dart';
import '../models/post.dart';
import '../services/api_service.dart';
import 'create_post_screen.dart';
import '../widgets/post_card.dart';

class FeedScreen extends StatefulWidget {
  const FeedScreen({super.key});

  @override
  State<FeedScreen> createState() => _FeedScreenState();
}

class _FeedScreenState extends State<FeedScreen> {
  final ApiService _apiService = ApiService();
  List<Post> _posts = [];
  bool _loading = true;

  Future<void> _loadFeed() async {
    final userId = await _apiService.getUserId();
    final posts = await _apiService.getFeedPosts(userId!);
    setState(() {
      _posts = posts;
      _loading = false;
    });
  }

  @override
  void initState() {
    super.initState();
    _loadFeed();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Feed')),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          await Navigator.push(
            context,
            MaterialPageRoute(builder: (_) => const CreatePostScreen()),
          );
          _loadFeed();
        },
        child: const Icon(Icons.add),
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : RefreshIndicator(
              onRefresh: _loadFeed,
              child: ListView.builder(
                itemCount: _posts.length,
                itemBuilder: (_, i) => PostCard(post: _posts[i]),
              ),
            ),
    );
  }
}
