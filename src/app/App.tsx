import { MainLayout } from '../shared/layouts/MainLayout';
import { PostList } from '../widgets/PostList/PostList';
const App = () => {
  return (
        <MainLayout>
          <h2>Привет</h2>
      <PostList />
    </MainLayout>
  );
};

export default App;
