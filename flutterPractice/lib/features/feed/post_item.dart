import 'package:flutter/material.dart';

class PostItem extends StatelessWidget {
  const PostItem({
    super.key,
    required this.post,
    required this.photo,
    required this.user,
  });
  final Map<String, dynamic> post;
  final String photo;
  final Map<String, dynamic> user;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: InkWell(
        onTap: () {
          showModalBottomSheet(
            context: context,
            builder: (context) {
              return Column(
                children: [
                  ListTile(
                    leading: CircleAvatar(backgroundImage: NetworkImage(photo)),
                    title: Text(user['name']),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: SizedBox(
                      width: double.infinity,
                      child: Text(post['title']),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Text(post['body']),
                  ),
                ],
              );
            },
          );
        },
        child: Column(
          children: [
            ListTile(
              leading: CircleAvatar(backgroundImage: NetworkImage(photo)),
              title: Text(user['name']),
              onTap: () {
                print('user: ${user['email']}');
              },
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: SizedBox(
                width: double.infinity,
                child: Text(post['title']),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
