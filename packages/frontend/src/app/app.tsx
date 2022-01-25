import styled from 'styled-components';

import { Route, Link } from 'react-router-dom';
import { Home } from './home';
import { Login } from './login';
import { SignUp } from './signup';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/login">登录</Link>
          </li>
          <li>
            <Link to="/sign-up">注册</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <Home/>
        )}
      />
      <Route
        path="/login"
        exact
        render={() => (
          <Login/>
        )}
      />
      <Route
        path="/sign-up"
        exact
        render={() => (
          <SignUp/>
        )}
      />
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
