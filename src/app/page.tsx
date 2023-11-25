'use client'
import { useState } from "react"

export default function Home() {
  const [text, setText] = useState<string>('')

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text)
  };
  return (
    <>
      <main>
        <div>
          <input type="text" value={text} onChange={changeText} />
          <button>追加</button>
        </div>
      </main>
    </>
  );
}