import { Container } from "reactstrap";
import { PostDetails } from "../../components/postDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface PostProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  createdAt: Date;
}

function PostPage() {
  const [post, setPost] = useState<PostProps | undefined>();
  const { id } = useParams();

  useEffect(() => {
    fetch("/posts.json")
      .then((resp) => resp.json())
      .then((resp: PostProps[]) => {
        const currentPost = resp.find((item) => item.id === id);
        setPost(currentPost);
      });
  }, [id]);

  if (!post) {
    return <div>Post não existe</div>;
  }

  return (
    <Container>
      <PostDetails
        imageUrl="https://picsum.photos/200/300"
        title="Card Title"
        description='"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",'
      />
    </Container>
  );
}

export default PostPage;
