import React from "react";
//class based component
class UserClass extends React.Component{

    constructor (props){
        super(props);

        this.state ={
            userInfo: {
                login: "Dummy",
                location: "Default",
                // avatar_url: "Dummy",
            },
            count: 0,
            count2: 2,
        }

        
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/PranavRai08");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
        
    }

    render(){
        const {login, id, avatar_url} = this.state.userInfo;
        // const {name, from} = this.props;
        return(
            <div className="user">
                {/* <h1>Count {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Count Increase</button>
                <h1>Count {this.state.count2}</h1> */}
                <h1>Name {login}</h1>
                <h1>ID {id}</h1>
                <img src={avatar_url}/>
                {/* <h2>From {from}</h2> */}
            </div>
        )
    }
}

export default UserClass;