import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter, Switch,Redirect } from 'react-router-dom';
// import './index.css';
import HomePage from './HomePage/homepage'
import * as serviceWorker from './serviceWorker';
import Landing from './landing/landing';
import Register from './register/register';
import Search from './Search/search';
import Xiaoshuo from './xiaoshuo/xiaoshuo';
import Kan from './kan/kan';
import comment from './comment/comment';
import Writing from './Writing/writing';

class IndexPage extends React.Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <Switch>
                        
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/landing" component={Landing} history={this.props.history}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/search" component={Search}></Route>
                        <Route path="/kan" component={Kan}></Route>
                        <Route path="/comment" component={comment}></Route>
                        <Route path="/writing" component={Writing}></Route>
                        <Redirect to="/homepage"></Redirect>
                    </Switch>

                </BrowserRouter>
            </div>
        )
    }
}
export default withRouter(IndexPage)
ReactDOM.render(<IndexPage />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
