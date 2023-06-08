import React from "react";
import PostItem from "./PostItem";

const PostList = ({articles, title}) => {

    return (
        <div>
            <p style={{textAlign: 'center'}}>{title}</p>
                {articles.map((article, index) =>
                <PostItem number={index+1}  post={article} key={article.id}/>  
                )}
        </div>
    )
}

export default PostList;