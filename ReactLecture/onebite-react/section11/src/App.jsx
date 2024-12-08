import { createContext, useCallback, useMemo, useReducer } from "react"
import "./App.css"
import Editor from "./components/Editor"
import Header from "./components/Header"
import List from "./components/List"
import { useRef } from "react"

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      )
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId)
    default:
      state
  }
}

export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3) // 다음 생성될 요소의 id값

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    })
  }, [])

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
