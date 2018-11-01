import React from 'react';
import axios from 'axios';

import BudgetLineForm from './BudgetLineForm';
import Auth from '../../../lib/Auth';

class BudgetIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teamId: props.teamId,
      budgetLines: null,
      modalState: false,
      budgetLine: { team_id: props.teamId },
      errors: {},
      totalIncome: null,
      totalExpenses: null

    };
    this.actiosModel = {
      new: 0,
      edit: 1
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal(action) {
    this.setState((prev) => {
      const newState = !prev.modalState;
      let state = { modalState: newState, modelAction: action };
      if (!newState) state = { ...state, budgetLine: { team_id: this.state.teamId } };
      return state;
    });
  }

  componentDidMount() {
    this.getBudgetLines();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  handleChange(e) {
    const budgetLine = { ...this.state.budgetLine, [e.target.name]: e.target.value };
    const errors = { ...this.state.errors, [e.target.name]: null};
    this.setState({ budgetLine, errors });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.budgetLine.id ? this.updateBudgetLine() : this.createBudgetLine();
  }

  createBudgetLine(){
    const token = Auth.getToken();
    axios
      .post('/api/budgets', this.state.budgetLine, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        const budgetLines = this.state.budgetLines.concat(res.data);
        this.setState({ budgetLines });
        this.toggleModal();
      })
      .catch((err) => this.setState({ errors: err.response.data.errors }));
  }

  updateBudgetLine(){
    const token = Auth.getToken();

    console.log(this.state.budgetLines.findIndex((el)=> el.id === this.state.budgetLine.id));
    axios
      .put(`/api/budget/${this.state.budgetLine.id}`, this.state.budgetLine, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => {
        const indexBudgetLine = this.state.budgetLines.findIndex((el)=> el.id === this.state.budgetLine.id);
        const budgetLines = [...this.state.budgetLines];
        budgetLines[indexBudgetLine] = this.state.budgetLine;
        this.setState({budgetLines});
        this.toggleModal();
      })
      .catch((err) => this.setState({ errors: err.response.data.errors }));
  }

  getBudgetLines() {
    const token = Auth.getToken();
    axios.get('/api/budgets',{
      headers: { Authorization: `Bearer ${token}` },
      params: {
        teamId: this.state.teamId
      }
    })
      .then(res => this.setState({ budgetLines: res.data }));
  }



  handleDelete(bl) {
    const token = Auth.getToken();
    axios
      .delete(`/api/budget/${bl.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => {
        const budgetLines = this.state.budgetLines.filter(line => line.id !== bl.id);
        this.setState({ budgetLines });
      });
  }

  render() {
    if(!this.state.budgetLines) return null;
    return (

      <div className="container">

        <div className="card">
          <div className="card-content">
            <p> Current Balance: {this.state.budgetLines && this.state.budgetLines.reduce((accumulator, bl) => accumulator + bl.amount,0)}  ₪ </p>
          </div>
          <button className="button" onClick={() =>this.toggleModal(this.actiosModel.new)}>
             + Add Budget Line
          </button>
        </div>

        <br/> {/* // TODO: delete the br */}

        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>status</th>
                <th>Settings</th>

              </tr>
            </thead>



            <tbody>
              {this.state.budgetLines && this.state.budgetLines.map(bl =>
                <tr key= {bl.id}>
                  <th>{bl.date}</th>
                  <td>{bl.title}</td>
                  <td>{ bl.amount + '₪ '}</td>
                  <td>cals</td>
                  <td>
                    {Auth.isAuthenticated() && <a onClick={() => {
                      const budgetLine = { ...this.state.budgetLine,...bl};
                      this.setState({budgetLine});
                      console.log(this.state.budgetLine);
                      this.toggleModal(this.actiosModel.edit);
                    }}>
                      <span className="icon">
                        <i className="far fa-edit"></i>
                      </span>
                    </a>}
                    {Auth.isAuthenticated() && <a onClick={() => this.handleDelete(bl)} >
                      <span className="icon">
                        <i className="far fa-trash-alt"></i>
                      </span>
                    </a>}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>


        <BudgetLineForm
          closeModal={this.toggleModal}
          tilteModel={this.actiosModel.new===this.state.modelAction?'New Budget Line':'Edit Budget Line'}
          modalState={this.state.modalState}
          teamId={this.state.teamId}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          budgetLine={this.state.budgetLine}
          errors={this.state.errors}
        />

      </div>
    );
  }
}

export default BudgetIndex;
