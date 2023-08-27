import React from 'react'
import LeftSideBar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagsList = [
        {
            id:1,
            tagName: "Kotlin",
            tagDesc: "kotlin is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation." 
        },{
            id:1,
            tagName: "Python",
            tagDesc: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation." 
        },
        {
            id:2,
            tagName: "C#",
            tagDesc: "C# is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation." 
        },{
            id:3,
            tagName: "JavaScript",
            tagDesc: "JavaScript is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation." 
        },{
            id:4,
            tagName: "Android",
            tagDesc: "Android is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. "
        },{
            id:5,
            tagName: "PHP",
            tagDesc: "PHP is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation." 
        }
    ]

  return (
    <div className="home-container-1">
        <LeftSideBar/>
        <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
        </div>
        </div>
    </div>
  )
}

export default Tags