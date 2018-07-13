import React, { Component } from 'react';
import './StatusPage.css';

class StatusPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statuses: []
    };
  }

  render() {
    return (
      <div className="StatusPage bg-2">
        <div className="columns">
          <div className="column is-12-mobile is-6-tablet is-6-desktop">
            <div className="panel">
              <div className="panel-heading">
               Foo
              </div>
              <div className="panel-block">
                <div className="is-block">
                  <label>Email:</label> FooBarBaz@example.com<br/>
                  <label>Part Type:</label> Prokaryotic Promoter<br/>
                  <label>Description:</label>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default StatusPage;
