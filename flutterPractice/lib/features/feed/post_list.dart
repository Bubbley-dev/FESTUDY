import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_app/features/feed/post_item.dart';
import 'package:http/http.dart' as http;

class PostList extends StatefulWidget {
  const PostList({super.key});

  @override
  State<PostList> createState() => _PostListState();
}

class _PostListState extends State<PostList> {
  List<Map<String, dynamic>> posts = [];
  List<Map<String, dynamic>> photos = [];
  List<Map<String, dynamic>> users = [];

  void _getPosts() async {
    var url = Uri.parse('https://jsonplaceholder.typicode.com/posts');
    var response = await http.get(url);
    print('response.statusCode: ${response.statusCode}');
    // print('response.body: ${response.body}');
    try {
      if (response.statusCode == 200) {
        List<dynamic> jsonData = json.decode(response.body);
        setState(() {
          posts =
              jsonData
                  .cast<
                    Map<String, dynamic>
                  >(); // List<Map<String, dynamic>>로 변환
        });
      }
    } catch (e) {
      print('error: $e');
    }
  }

  void _getPhotos() async {
    var url = Uri.parse('https://picsum.photos/v2/list?page=1&limit=100');
    var response = await http.get(url);
    print('response.statusCode: ${response.statusCode}');
    // print('response.body: ${response.body}');
    try {
      if (response.statusCode == 200) {
        List<dynamic> jsonData = json.decode(response.body); // JSON을 List로 변환
        setState(() {
          photos =
              jsonData
                  .cast<
                    Map<String, dynamic>
                  >(); // List<Map<String, dynamic>>로 변환
        });
      }
    } catch (e) {
      print('error: $e');
    }
  }

  void _getUsers() async {
    var url = Uri.parse('https://jsonplaceholder.typicode.com/users');
    var response = await http.get(url);
    print('response.statusCode: ${response.statusCode}');
    // print('response.body: ${response.body}');
    try {
      if (response.statusCode == 200) {
        List<dynamic> jsonData = json.decode(response.body); // JSON을 List로 변환
        setState(() {
          users =
              jsonData
                  .cast<
                    Map<String, dynamic>
                  >(); // List<Map<String, dynamic>>로 변환
        });
      }
    } catch (e) {
      print('error: $e');
    }
  }

  @override
  void initState() {
    super.initState();
    _getPosts();
    _getPhotos();
    _getUsers();
  }

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: ListView.builder(
        itemCount: posts.length,
        itemBuilder: (context, index) {
          return PostItem(
            post: posts[index],
            photo: photos[index]['download_url'],
            user: users.firstWhere(
              (user) => user['id'] == posts[index]['userId'],
            ),
          );
        },
      ),
    );
  }
}
