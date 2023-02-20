import React, {FC, useState, useRef} from 'react'

export const EventsExample: FC = () => {

  const inputRef = useRef<HTMLInputElement> (null)

  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  }

  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  const leaveHandler = (event:React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false)
  }

  const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDrag(true)
  }

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDrag(false)
  }

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} placeholder="Controlled"/>
      <br/>
      <br/>
      <input ref={inputRef} type="text" placeholder="Uncontrolled"/>
      <button onClick={clickHandler}>Button</button>
      <br/>
      <br/>
      <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'aquamarine'}}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'red' : 'aquamarine',
          marginTop: 15,          
        }}>
      </div>
    </div>
  )
}
