import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default App;
