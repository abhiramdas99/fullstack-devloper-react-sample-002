import React from 'react'

const Articlefunc = ({id}) => {
    const [value, setValue]=React.useState(id)
    function changeArticleNo(){
        setValue('article_003')
    }
    return (
        <div>
            <span>{value}</span><br />
            <span>this is functional component </span> <br />
            <button onClick={()=>changeArticleNo()}>change Article No</button>
        </div>
    )
}

export default Articlefunc
