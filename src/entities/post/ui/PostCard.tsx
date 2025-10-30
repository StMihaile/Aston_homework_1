type PostType = {
  id: number,
  title: string,
  content: string,
};

const PostCard = ({ post }: { post: PostType }) => {
  const { id, title, content } = post;
  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export { PostCard };


