//30th November 2018
//My Mini notes from my understanding of 'react-redux

/* 
Redux Store !! 
Using mapStateToProps,mapDispatchToProps 'react-redux'.
*/

/* To allow react to have access to the redux store we use provider to
wrap the app and pass store to the provider.
*/

//const store =creatStore(/* Pass reducer to the store */)

/*
<Provider store={store}>

<Provider/>
*/


/*Use connect in other to connect React and Redux
Connect takes two optional parameters (MapStateToProps ,MapDispatchToProps).

MapStateToProps takes in the store as an argument and git gives the react components
assess to the current store.

MapDispatchToProps takes in the dispatch as an argument.

example...
cosnt mapDispatchToProps = (dispatch) = > {
    handleIncrement : ()=> ('Handle Increment has ben triggered' :action);
    next(action)
}

*/

/* 

MiddleWare = > This allows You to perform actions before a dispatched action gets to the reducer.
In other waords, it delays the action from getting to the reducer so that extra checks can be made
const middleware = (store)=>(next)=>(action){
    check can be done here
}

The middleware is then passed to then as an argument to the applymiddle ware which is then
pssed as a second parameter to the store...

This tells the store that " Hey store use the middle ware to check actions "
*/
