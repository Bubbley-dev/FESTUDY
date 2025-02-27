import 'package:flutter/material.dart';
import 'package:flutter_app/features/feed/post_list.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          leading: Image(image: AssetImage('assets/DP5.jpg')),
          leadingWidth: 120,
          actions: [IconButton(icon: Icon(Icons.menu), onPressed: () {})],
        ),
        body: PostList(),
      ),
    );
  }
}
