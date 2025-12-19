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
  final ScrollController _scrollController = ScrollController();

  List<Post> _posts = [];
  bool _isLoading = false;
  bool _hasMore = true;
  // ignore: unused_field
  int _currentPage = 1;
  final int _limit = 10;

  @override
  void initState() {
    super.initState();
    _loadFeed();
    _scrollController.addListener(_onScroll);
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  // Triggered whenever the user scrolls
  void _onScroll() {
    if (_isLoading || !_hasMore) return;

    // Check if we are near the bottom.
    // This logic triggers when we are within the range of the last 2-3 items.
    if (_scrollController.position.pixels >=
        _scrollController.position.maxScrollExtent * 0.8) {
      _loadFeed();
    }
  }

  Future<void> _loadFeed({bool isRefresh = false}) async {
    if (isRefresh) {
      setState(() {
        _currentPage = 1;
        _hasMore = true;
        _posts = [];
      });
    }

    if (!_hasMore) return;

    setState(() => _isLoading = true);

    try {
      final userId = await _apiService.getUserId();
      // Assuming your API service accepts page and limit parameters
      final newPosts = await _apiService.getFeedPosts(userId!);

      setState(() {
        _isLoading = false;
        _posts.addAll(newPosts);
        _currentPage++;

        // If the API returns fewer than the limit, we've reached the end
        if (newPosts.length < _limit) {
          _hasMore = false;
        }
      });
    } catch (e) {
      setState(() => _isLoading = false);
      // Handle errors (e.g., show a SnackBar)
    }
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
          _loadFeed(isRefresh: true);
        },
        child: const Icon(Icons.add),
      ),
      body: _posts.isEmpty && _isLoading
          ? const Center(child: CircularProgressIndicator())
          : RefreshIndicator(
              onRefresh: () => _loadFeed(isRefresh: true),
              child: ListView.builder(
                controller: _scrollController,
                itemCount: _posts.length + (_hasMore ? 1 : 0),
                itemBuilder: (context, i) {
                  if (i < _posts.length) {
                    return PostCard(post: _posts[i]);
                  } else {
                    return const Padding(
                      padding: EdgeInsets.symmetric(vertical: 32),
                      child: Center(child: CircularProgressIndicator()),
                    );
                  }
                },
              ),
            ),
    );
  }
}
