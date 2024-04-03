import { createEffect, type Component, createMemo, createSignal } from 'solid-js';
import {
  Router,
  useSearchParams,
  Route,
  Params
} from '@solidjs/router';

import {decompressFromEncodedURIComponent} from 'lz-string';

type User = {
  name: string;
  username: string;
  link: string;
  icon: string;
  id: string,
};

function getSettings(p: Partial<Params>): User[] | undefined {
  const common = { ...p };
  const settings = common.params;

  if (settings) {
    const decompressed = decompressFromEncodedURIComponent(settings);
    console.log(decompressed);
    
    try {
      return JSON.parse(decompressed);
    } catch (error) {
      return undefined;
    }
  }

  return undefined;
};

const Table = ({users}: {users: User[]}) => {
  return <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Name</th>
        <th>Link</th>
      </tr> 
    </thead>
    <tbody>
      {users.map((user) => 
        <tr>
          <td>{user.username}</td>
          <td>{user.name}</td>
          <td>
            <a href={user.link} target="_blank">Profile</a>
          </td>
        </tr>
      )}
    </tbody>
  </table>;
};

const Home = () => {
  const [params, setParams] = useSearchParams();

  const settings = getSettings(params);

  console.log(settings);
  
  

  return <div>
  <main class="container">
    {settings ? <Table users={settings} /> : 'No Data'}
  </main>
</div>;
};

const App: Component = () => {
  

  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default App;
