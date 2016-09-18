import CurrentUserStore from './../stores/current_user';
import {createCookie} from './../util/cookie';
import Header from './header.js';
import React from 'react';
import Joyride from 'react-joyride';
import JoyrideStore from './../stores/joyride';
import SessionsApiUtil from '../util/sessions_api_util';
import ApiActions from './../actions/api_actions';

var App = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

  getInitialState: function () {
   return { currentUser: null, steps: [] };
  },

  componentDidMount: function () {

    ApiActions.setAddStep(this.addSteps);
    CurrentUserStore.addChangeHandler(this._ensureLoggedIn);
    SessionsApiUtil.fetchCurrentUser();
    if (this.props.location.pathname === "/"){
      this.context.router.push("/feed");
    }
  },

  addSteps: function(steps) {
        var joyride = this.refs.joyride;

        if (!Array.isArray(steps)) {
            steps = [steps];
        }

        if (!steps.length) {
            return false;
        }

        this.setState(function(currentState) {
            currentState.steps = currentState.steps.concat(joyride.parseSteps(steps));
            return currentState;
        });
        this.refs.joyride.start();
    },

    addTooltip: function(data) {
        this.refs.joyride.addTooltip(data);
    },

  _ensureLoggedIn: function () {

    if (!CurrentUserStore.isLoggedIn()) {
      this.context.router.push("/signin");
    }

    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  render: function(){
    return (
        <div>
            <Joyride ref="joyride"
                      callback={(e)=>{if (e.type === 'finished') createCookie('index-walkthrough', 'true');}}
                      debug={true}
                      steps={this.state.steps}
                      type="continuous"
                      showStepsProgress={true}
                      showSkipButton={true}
                      showStepsProgress={true} />
          <Header/>
          {this.props.children}
        </div>
    );
  }
});

export default App;
