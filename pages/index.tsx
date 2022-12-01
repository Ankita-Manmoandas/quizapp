import Head from 'next/head'
import questions from "../questions.json"
import { useState } from 'react';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);


  //previous button function
  const handlePrevious: any = () => {
    const prevQues = currentQuestion - 1;
    return prevQues >= 0 && setCurrentQuestion(prevQues);
  }

  //next function
  const handleNext: any = () => {
    const nextQuestion = currentQuestion + 1;
    return nextQuestion > questions.length &&
      setCurrentQuestion(nextQuestion)
    
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Quiz App</title>
        <link href="/dist/output.css" rel="stylesheet"/>
      </Head>
      <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
      <div className="flex flex-col items-start w-full">
  <h4 className="mt-10 text-xl text-white/60">
    Question {currentQuestion + 1} of {questions.length}
  </h4>
  <div className="mt-4 text-2xl text-white">
    {questions[currentQuestion].question}
  </div>

  </div>
  <div className="flex flex-col w-full">
  {questions[0].answerOptions.map((answer, index) => (
    <div
      key={index}
      className="flex
       items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
    >
      <input type="radio" className="w-6 h-6 bg-black" />
      <p className="ml-6 text-white">{answer.answer}</p>
    </div>
  ))}
</div>
<div className="flex justify-between w-full mt-4 text-white">
  <button className="w-[49%] py-3 bg-indigo-600 rounded-lg" onClick={handlePrevious}>Previous</button>
  <button className="w-[49%] py-3 bg-indigo-600 rounded-lg" onClick={handleNext}>Next</button>
</div>
</div>



    </div>
  )
}