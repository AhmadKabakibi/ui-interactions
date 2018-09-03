import React, { Component } from "react";
import Highlight from "react-highlight";
import { TrackerProvider } from "react-tracker"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GroceryStoreApp from "./GroceryStoreApp";
import storeProvider from "../hoc/storeProvider";
import configureStore from "../store/configureStore";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import { Mutation } from 'react-apollo';
//import { Query } from "react-apollo";
import gql from "graphql-tag";

// get the tracker
import trackingMiddleware from "../tracking/trackingMiddleware";
import configuredTracker from "../tracking/configureTracker";

// Configure the store, with tracking middleware.
const store = configureStore({}, trackingMiddleware(configuredTracker));

const provideStore = storeProvider(store);
const GroceryStoreAppWithStore = provideStore(GroceryStoreApp);

//create a new Apollo Client
const client = new ApolloClient({
  uri : "http://localhost:4050"
})

// Component to format JSON and display it!
const DisplayJson = dataLayer => (
  <Highlight className="json">
    {JSON.stringify(dataLayer, null, 2)}
  </Highlight>
)

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLayer: {}
    }
  }

  componentWillMount() {
    configuredTracker.on("*", event => {
      //Post to GraphQL Server

      /* const ADD_EVENT = gql`
      mutation createEvent($type: String!, $productId: Int) {
        createEvent(type: $event, productId: $productId) @client {
          type
          productId
        }
      }
      `;
      Mutation(ADD_EVENT)(this.props) */

      toast.info(`Interaction Tracked: ${event.type} ${event.from ? `from ${event.from}` : ""}`);
      this.setState({
        dataLayer: window.dataLayer,
      });
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
      <div className="wrapper">
        <ToastContainer />
        <section>
          <TrackerProvider tracker={configuredTracker}>
            <GroceryStoreAppWithStore />
          </TrackerProvider>
        </section>
        <section>
          <h3>DataLayer :</h3>
          <DisplayJson data={this.state.dataLayer} />
        </section>
      </div>
      </ApolloProvider>
    );
  }
}