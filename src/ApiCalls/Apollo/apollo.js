import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://your-graphql-endpoint.com/graphql",
  cache: new InMemoryCache(),
});

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
      description
    }
  }
`;

const ADD_ITEM = gql`
  mutation AddItem($name: String!, $description: String!) {
    addItem(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const ItemsList = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.items.map((item) => (
        <li key={item.id}>
          {item.name}: {item.description}
        </li>
      ))}
    </ul>
  );
};

const AddItem = () => {
  let inputName, inputDescription;
  const [addItem] = useMutation(ADD_ITEM);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addItem({
          variables: {
            name: inputName.value,
            description: inputDescription.value,
          },
        });
      }}
    >
      <input
        ref={(node) => {
          inputName = node;
        }}
        placeholder="Name"
      />
      <input
        ref={(node) => {
          inputDescription = node;
        }}
        placeholder="Description"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <h1>My Items</h1>
    <ItemsList />
    <AddItem />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
