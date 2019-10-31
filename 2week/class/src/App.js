import React, { Component } from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import Writing from "./Writing"
import Note from "./Note"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [
        { id: 0, title: "title1", content: "default1" },
        { id: 1, title: "title2", content: "default2" },
        { id: 2, title: "title3", content: "default3" },
      ]
    }
  }

  save = (writingState) => {
    const savedNotes = this.state.savedNotes;
    const lastNoteId = savedNotes[savedNotes.length - 1].id

    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    this.setState({
      savedNotes: [
        ...savedNotes,
        { id: lastNoteId + 1, title: writingState.title, content: writingState.content }
      ]
    })
  }

  render() {

    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        <div className="row">
          {this.state.savedNotes.map((note) => (
            <Note
              title={note.title}
              content={note.content}
              key={note.id}
            />
          ))}
        </div>
      </div>
    )
  } ƒ
}



export default App
