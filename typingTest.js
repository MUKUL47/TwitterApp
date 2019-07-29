import React,{Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    paragraph : require('./mockData.json').para,
    currentValue : "",
    paragraphWithColor : new Array(),
    c : 0,
    text : "",
    time : Date.now(),
    end : 0
  }

  componentDidMount(){
    this.updateParagraph()  
  }

  updateParagraph(){
    let newArr = new Array();
   let nP = this.state.paragraph.split(' ')

   nP.forEach((value,index)=>{
    if( this.state.c === index){
      newArr.push({value : value, color : "green"})      
    }else{
      newArr.push({value : value, color : "white"})
    }})
   this.setState({
     paragraphWithColor : newArr,
     currentValue : nP[this.state.c]
   })
  }

  changeText = (e)=>{
    let v = e.target.value    
    this.setState({
      text : v
    })
    if(this.state.c < this.state.paragraphWithColor.length &&  
      v === this.state.paragraphWithColor[this.state.c].value ){
      let newArr = new Array();
      let nP = this.state.paragraph.split(' ')
   
      nP.forEach((value,index)=>{
        if( this.state.c === index-1 ){
          newArr.push({value : value, color : "green"})      
        }else{
          newArr.push({value : value, color : "white"})
        }})
       this.setState({
         paragraphWithColor : newArr,
         c : this.state.c+1,
          text : "",
          currentValue : nP[this.state.c+1]         
       })      
        this.setState({
          time : Date.now()  - this.state.time  
        })
        if(this.state.c === nP.length-1){
          this.setState({
            end :  `You took ${(Date.now()  - this.state.time)/1000} seconds to complete.`
          })
        }
    } 
  }
  render(){
    let div = []     
        this.state.paragraphWithColor.forEach((value)=>{
          const s = {
            backgroundColor: value.color,
            display: "inline"
          };          
          div.push(
            <h2 style = {s}>{value.value}</h2>
          )
          div.push(
            <h2 style = {{
              display: "inline"
            }}>  </h2>
          )
        })  
      div.push(
        <center>
        <h2>{this.state.currentValue}</h2>
        <div>
          <h1>{}</h1>
          <h1> {this.state.c} words / {this.state.paragraphWithColor.length} words</h1>
          <input type="text" value={this.state.text} onChange ={this.changeText}/>  
          <br></br> 
          <h3>{this.state.end}</h3>        
          <br></br>
          <input type="button" value="RESET" onClick ={()=>{
            this.updateParagraph()  
            this.setState({
              currentValue : this.state.paragraphWithColor[0].value,
              c : 0,
              text : "",
              time : Date.now(),
              end : 0
            })            
          }}/>
        </div>  
        </center>    
      )
    return (div);
  }
}

export default App;
