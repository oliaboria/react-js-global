import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { App, Wrapper } from './app';
import { Footer } from './src/common/components/footer/footer';
import { configureStore } from './src/store/configureStore';
import history from './src/utils/history';

const store = configureStore();

export class ClientApp extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <Wrapper>
                    <Router history={ history }>
                        <App />
                    </Router>
                    <Footer />
                </Wrapper>
            </Provider>
        );
    }
}

ReactDOM.render((<ClientApp />), document.getElementById('root'));