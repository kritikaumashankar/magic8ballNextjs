import React from 'react';

class Answer extends React.Component{
  state= {
    ans: '',
  }

 clickedSubmit = (e) => {
   e.preventDefault()
    if(e.target != null){

      this.answer()
    }
  }

  answer = async function() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://magic8ball-app.herokuapp.com/rest/";
    const res = await fetch
    (proxyurl+url);
    const data = await res.text();
    this.setState({ans: data})
    // return(data)
    // fetch(`http://magic8ball-app.herokuapp.com/rest/`)
    // .then( r=>r.json())
    // .then(data => {
    //   console.log(`data:${data}`)
    //     this.setState({ans : data})
    // })
    
   }

  render(){
    let resultDiv = '';
    if(this.state.ans== "YES")
      resultDiv =<p className="text-success">YES</p>
    else if(this.state.ans== "NO")
      resultDiv =<p className="text-danger">NO</p>
    else
      resultDiv =<p className="text-info">{this.state.ans}</p>

    return(
      <div className="container">
        <form onSubmit = {this.clickedSubmit}>
          <fieldset>
            <div className="form-group">
              <label>Type your question here..</label>
              <textarea className="form-control" id="question" rows="3"></textarea>
            </div>
            </fieldset>
            <button type="submit" className="btn btn-primary btn-sm" >Your Answer is!!!</button>
        </form>
        <div>
          <h2>{resultDiv}</h2>
          <style jsx>{`
            div{
              margin: 1rem;
            }
            h2{
              text-align: center!important;
            }
          `}</style>
        </div>
      </div>
    )
  }
}

export default Answer;