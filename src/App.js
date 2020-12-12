import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import Api from './utils/ApiUtils';
import Navbar from './components/Navbar';
import Repository from './components/Repository';
import img from './assets/images/loading.gif';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends Component {

  scollRef;

  state = {
    language: '',
    page: 1,
    repositories: [],
    loading: false
  };

  constructor() {
    super();
    this.scollRef = React.createRef();
  }

  componentDidMount() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const ratio = entries[0].intersectionRatio;
      
      if(ratio > 0 && this.state.language !== '') {
        this.setState({page: this.state.page + 1, loading:true}, () => {
          Api.getRepositoriesGithub(this.state.language, this.state.page).then(({data}) => {
            const repositoriesOld = this.state.repositories;
            repositoriesOld.push(...data.items);
            this.setState({
              repositories: repositoriesOld,
              loading:false
            })
          });
        });
      }

    });

    intersectionObserver.observe(this.scollRef.current);
  }

  _getRepositories = async () => {
    const { language, page } = this.state;

    const repositories = await Api.getRepositoriesGithub(language, page);
    this.setState({repositories: repositories.data.items});

    console.log(repositories);
  };

  render() {
    const {repositories, loading} = this.state;
    return(
      <div>
        <Navbar />
        <div className="container">
          <br/>
          <div>
            <Form className="col s8">
              <div className="row">
                <div className="input-field col s10">
                  <Input onChange={(e) => this.setState({language: e.target.value})}/>
                  <label for="language">Linguagem</label>
                </div>
                <div className="input-field col">
                  <Button className="btn waves-effect waves-light" onClick={this._getRepositories}>Pesquisar</Button>
                </div>
              </div>
            </Form>
          </div>
          <div>
            {repositories.map(repository => (
              <Repository repository={repository} key={repository.id} />
            ))}
          </div>
          <div ref={this.scollRef}></div>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
            {loading && <img src={img} alt="loading..." width={50} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
