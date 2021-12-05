import React, { Component } from 'react'

 class ArticleClass extends Component {
    constructor(props){
        super()
        this.state={
            value:"article_002"
        }
    }

    changeArticleNo(){
        this.setState({value:"article_003"})
    }

    render() {
        console.log(this.props.id)
        const{id}=this.props
        const{value}=this.state
        return (
            <div>
                <span>{value}</span><br />
                <span>This is call by class component</span><br/>
                <button  onClick={()=>this.changeArticleNo()}>change Article No</button>
            </div>
        )
    }
}
export default ArticleClass