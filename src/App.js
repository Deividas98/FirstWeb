import React, { Component } from 'react';
//import React, { useState } from 'react';

//import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
//const data = { username: 'example' };


export default class App extends React.Component {



  constructor() {

    super()

   /* this.state = {
      persons: [
        {id: "",//???ar ok???
        name: "",
        Salary: "",
        age: ""}
      ]
      

    }*/
    this.state = {
      id: "",//???ar ok???
      name: "",
      Salary: "",
      age: ""
    }

  }



  UserRegistrationFunction() {
    let data = this.state

    fetch("https://crudcrud.com/api/1f7fbf9697264feebe070faf93319872/whatever"
  /*"http://dummy.restapiexample.com/api/v1/create"*//*'http://192.168.1.205/User_Project/user_registration.php'*/, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"//,
          //"Access-Control-Allow-Origin": "https://crudcrud.com/api/1f7fbf9697264feebe070faf93319872"
        },
        body: JSON.stringify(data)

        /*({
          name: this.state.UserName,
          email: this.state.UserEmail,
          password: this.state.UserPassword
        })*/

      }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        //Alert.alert(responseJson);
        console.log(responseJson);
        //.then(data => {
        // console.log('Success:', data);

      }).catch((error) => {
        console.error(error);
      });

  }



  UpdateData(/*id,name, Salary, age*/) {
    let id=this.state.id;//PAKEISTI LOCATION
    let data=this.state;//PAKEISTI LOCATION
    fetch("https://crudcrud.com/api/1f7fbf9697264feebe070faf93319872/whatever/" + id, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {
      fetch("https://crudcrud.com/api/1f7fbf9697264feebe070faf93319872/whatever")
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson)//,
          /*setStore({
            contacts: result
          });*/

        }).
        catch(error => 
          console.error(error));
        
    });

  }

 
  DeleteRecord(){
    let id=this.state.id;//PAKEISTI LOCATION
    fetch("https://crudcrud.com/api/1f7fbf9697264feebe070faf93319872/whatever/" + id, {
      method: 'DELETE'})
      .then(()=> {
        fetch("https://crudcrud.com/api/1f7fbf9697264feebe070faf93319872/whatever")
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson)//,
          /*setStore({
            contacts: result
          });*/
        }).
        catch(error => 
          console.error(error));
      });
  }



//componentDidMount(){
  GetRecords(){
    //let data = this.state;
    const [books, setBooks] = this.state(null);

    fetch("https://crudcrud.com/api/1fcb66d70d1e42da948585ea6aeb9ef9/whatever/")
        .then(response => response.json())
        //.then(data => {console.log(data);})
        .then(data => setBooks(data))
        return(
          <div>
      {books && books.map((book, index) =>(
        <div>
        <div>{book.name}</div>
        <div>{book.Salary}</div>
        <div>{book.age}</div>
        </div>
      ))}
    </div>
        )
        /*.then(responseJson => this.setState({data}))
        .then(responseJson => {
          console.log(responseJson)//,
          /*setStore({
            contacts: result
          });*/
       /* }).
        catch(error => 
          console.error(error));*/

          /*.then(results => {
            return results.json();
          }).then(data => {
            let name = data.results.map((newd) => {
              return(
                <div key={newd.results}>
                  <div>{newd.name}</div>
                </div>
              )
            })
              this.setState({name: name});
              console.log(this.state.name);
              
            })*/
          }
          
     

    //}
  


  submit(){
      console.log(this.state)
    }

  render() {
      return(
    //ReactDOM.render(
      <div>
    <h1>Hello, world!</h1>
    <input type="text" value={this.state.name} name="name" onChange={(data) => { this.setState({name: data.target.value }) }}></input>
    <input type="text" value={this.state.Salary} name="salary" onChange={(data) => { this.setState({ Salary: data.target.value }) }}></input>
    <input type="text" value={this.state.age} name="age" onChange={(data) => { this.setState({ age: data.target.value }) }}></input>

    <button onClick={() => { this.UserRegistrationFunction() }}>save</button>
    <input type="text" value={this.state.id} name="id" onChange={(data) => { this.setState({ id: data.target.value }) }}></input>
    <button onClick={() => { this.UpdateData() }}>update</button>
    <button onClick={() => { this.DeleteRecord() }}>delete</button>

    <button onClick={() => { this.GetRecords() }}>FETCH DATA</button>

    <div></div>
    <div></div>
    <div></div>
    
    
    <div></div>
    </div >
   // document.getElementById('root')
  //);
    )
    
  }


}
