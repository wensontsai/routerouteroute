'use strict';

var React = require('react-native');

var {
  AppRegistry, 
  StyleSheet,
  Text,
  View
} = React;

var {
  Router, 
  Route, 
  Container, 
  Actions, 
  Animations, 
  Schema
} = require('react-native-router-flux');

var {
  NavBar, 
  NavBarModal
} = require('./src/components/NavBar');

var Launch = require('./src/components/Launch');
var Register = require('./src/components/Register');
var Login = require('./src/components/Login');
var Error = require('./src/components/Error');
var Home = require('./src/components/Home');
var TabView = require('./src/components/TabView');
var TabIcon = require('./src/components/TabIcon');
var TabBarFlux = require('./src/components/TabBarFlux');

class Example extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.main} />
                <Router>
                    <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal}/>
                    <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar}/>
                    <Schema name="withoutAnimation" navBar={NavBar}/>
                    <Schema name="tab" navBar={NavBar}/>

                    <Route name="launch" component={Launch} initial={true} hideNavBar={true} title="Launch"/>
                    <Route name="register" component={Register} title="Register"/>
                    <Route name="home" component={Home} title="Home" type="replace"/>
                    <Route name="login" component={Login} schema="modal"/>
                    <Route name="register2" component={Register} schema="withoutAnimation"/>
                    <Route name="error" component={Error} schema="popup"/>
                    <Route name="tabbar" hideNavBar={false} >
                        <Container component={TabBarFlux}>
                            <Route name="tab1" component={TabView} title="Tab #1" icon={TabIcon} schema="tab"/>
                            <Route name="tab2" component={TabView} title="Tab #2" icon={TabIcon} schema="tab"/>
                            <Route name="tab3" component={TabView} title="Tab #3" icon={TabIcon} schema="tab"/>
                            <Route name="tab4" component={TabView} title="Tab #4" icon={TabIcon} schema="tab"/>
                            <Route name="tab5" component={TabView} title="Tab #5" icon={TabIcon} schema="tab"/>
                        </Container>
                    </Route>
                </Router>

            </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    position:'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#F5FCFF'
  }

});

AppRegistry.registerComponent('stopwatch', () => Example);