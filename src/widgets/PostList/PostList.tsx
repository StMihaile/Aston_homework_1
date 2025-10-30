
import { useGetPostsQuery } from '../../entities/post/api';
import { PostCard } from '../../entities/post/ui/PostCard';

const PostList = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка!</div>;

  return (
    <ul>
      {posts?.map(post => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export { PostList };
