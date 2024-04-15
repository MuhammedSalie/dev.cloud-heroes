import './App.css';
import Sidebar from './Components/Sidebar';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home-content';
import About from './pages/About';
import Resources from './pages/Resources';
import Quiz from './pages/Quiz';
import {Exams, ExamOne, ExamTwo, ExamThree} from './pages/Exam';

function App() {
    return (
        <Router>
            <Sidebar/>
            <Switch>
                <Route path='/home' exact component={Home}/>
                <Route path='/quiz' exact component={Quiz}/>
                <Route path='/exams' exact component={Exams}/>
                <Route path='/exam/exam1' exact component={ExamOne}/>
                <Route path='/exam/exam2' exact component={ExamTwo}/>
                <Route path='/exam/exam3' exact component={ExamThree}/>
                <Route path='/about' exact component={About}/>
                <Route path='/resources' exact component={Resources}/>
            </Switch>
        </Router>
    );
}

export default App;
