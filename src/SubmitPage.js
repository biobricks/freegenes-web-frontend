import React, { Component } from 'react';
import './SubmitPage.css';

class SubmitPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        submissionType: 'single',
        name: '',
        email: '',
        partType: '',
        description: '',
        links: '',
        tags: '',
        genbankFile: '',
        genbankZip: '',
        csvFile: ''
      }
    };
    this.onChangeField = this.onChangeField.bind(this);
  }

  onChangeField(e) {
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({ form });
  }

  render() {
    return (
      <div className="SubmitPage bg-2">
        <div className="columns">
          <div className="column is-12-mobile is-6 desktop">
            <div className="panel">
              {(this.state.form.submissionType === 'single') ? (
                <div className="panel-heading">
                  Submit Single
                </div>
              ) : (
                <div className="panel-heading">
                  Submit Bulk
                </div>
              )}
              <div className="panel-block">
                <form>
                  
                  <div className="field">
                    <label className="label">Submission Type</label>
                    <div className="control">
                      <label className="radio">
                        {(this.state.form.submissionType === 'single') ? (
                          <div>
                            <input 
                              type="radio" 
                              name="submissionType" 
                              checked={true} 
                              value="single"
                              onChange={this.onChangeField}
                            />&nbsp;Single
                          </div>
                        ) : (
                          <div>
                            <input 
                              type="radio" 
                              name="submissionType" 
                              value="single"
                              onChange={this.onChangeField}
                            />&nbsp;Single
                          </div>
                        )} 
                      </label>
                      <label className="radio">
                        {(this.state.form.submissionType === 'bulk') ? (
                          <div>
                            <input 
                              type="radio" 
                              name="submissionType" 
                              checked={true} 
                              value="bulk"
                              onChange={this.onChangeField}
                            />&nbsp;Bulk
                          </div>
                        ) : (
                          <div>
                            <input 
                              type="radio" 
                              name="submissionType" 
                              value="bulk"
                              onChange={this.onChangeField}
                            />&nbsp;Bulk
                          </div>
                        )}
                      </label>
                    </div>  
                  </div>                    
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left">
                      <input 
                        className="input" 
                        type="text" 
                        name="name"
                        placeholder="Your Name"
                      />
                      <span className="icon is-small is-left">
                        <i className="mdi mdi-account"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input 
                        className="input" 
                        type="text"
                        name="email" 
                        placeholder="youremailaddress@example.com"
                      />
                      <span className="icon is-small is-left">
                        <i className="mdi mdi-email"></i>
                      </span>
                    </div>
                  </div>

                  {(this.state.form.submissionType === 'single') ? (
                    <div>
                      <div className="field">
                        <label className="label">Part Type</label>
                        <div className="control">
                          <label className="radio">
                            <input type="radio" name="partType" />
                            &nbsp;Prokaryotic Promoter
                          </label><br/>
                          <label className="radio">
                            <input type="radio" name="partType" />
                            &nbsp;RBS
                          </label><br/>
                          <label className="radio">
                            <input type="radio" name="partType" />
                            &nbsp;Eukaryotic Promoter
                          </label><br/>
                          <label className="radio">
                            <input type="radio" name="partType" />
                            &nbsp;CDS
                          </label><br/>
                          <label className="radio">
                            <input type="radio" name="partType" />
                            &nbsp;Terminator
                          </label><br/>
                          <label className="radio">
                            <input type="radio" name="partType" />
                            &nbsp;Operon
                          </label>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                          <textarea className="textarea" name="description" placeholder="A short description."></textarea>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Links</label>
                        <div className="control has-icons-left">
                          <input 
                            className="input" 
                            type="text" 
                            name="links"
                            placeholder="Links"
                          />
                          <span className="icon is-small is-left">
                            <i className="mdi mdi-link"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Tags</label>
                        <div className="control has-icons-left">
                          <input 
                            className="input" 
                            type="text" 
                            name="tags"
                            placeholder="#example"
                          />
                          <span className="icon is-small is-left">
                            <i className="mdi mdi-pound"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Genbank File</label>
                        <div className="control">
                          <button className="button is-primary">Upload File</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="field">
                        <label className="label">CSV File</label>
                        <div className="control">
                          <button className="button is-primary">Upload File</button>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Genbank Zip</label>
                        <div className="control">
                          <button className="button is-primary">Upload File</button>
                        </div>
                      </div>
                    </div>
                  )}

                  <hr/>
                  <div className="field">
                    <div className="control">
                      <button type="submit" className="button is-primary">Submit</button>
                    </div>
                  </div>            
                </form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default SubmitPage;
