import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Activity = props => (
    <tr>
      <td>{props.activity.username}</td>
      <td>{props.activity.description}</td>
      <td>{props.activity.duration}</td>
      <td>{props.activity.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.activity._id}>edit</Link> | <a href="/#" onClick={() => { props.deleteActivity(props.activity._id) }}>delete</a>
      </td>
    </tr>
  )

export default class ActivityList extends Component {
    constructor(props){
        super(props);

        this.deleteActivity = this.deleteActivity.bind(this);

        this.state = {activity: []};
    }

    componentDidMount(){
        axios.get('http://localhost:3000/activity/')
            .then(response => {
                this.setState({activity: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteActivity(id) {
        axios.delete('http://localhost:3000/activity/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          activity: this.state.activity.filter(el => el._id !== id)
        })
      }

     activityList() {
        return this.state.activity.map(currentactivity => {
        return <Activity activity={currentactivity} deleteActivity={this.deleteActivity} key={currentactivity._id}/>;
        })
     }

    render(){
        return (
            <div>
            <h3>Logged Activities</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.activityList() }
              </tbody>
            </table>
          </div>
        )
    }
}