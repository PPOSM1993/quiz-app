import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Question = ({
    filteredQuestion,
    questionsFiltered,
    indexQuestion,
    setIndexQuestion,
    setActiveQuiz,
}) => {
    const [score, setScore] = useState(0);
    const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [answersRandom, setAnswersRandom] = useState([]);
    const [activeResults, setActiveResults] = useState(false);

    useEffect(() => {
        const answers = [
            ...filteredQuestion.incorrect_answers,
            filteredQuestion.correct_answer,
        ];

        setAnswersRandom(answers.sort(() => Math.random() - 0.5))
    }, [filteredQuestion]);


    const checkAnswer = (answerText, index) => {
        if (answerText === filteredQuestion.correct_answer) {
            setScore(score + 1)
        }
        setSelectAnswerIndex(index)
        setAnswered(true)
    }

    const onNextQuestion = () => {
        setIndexQuestion(indexQuestion + 1)
        setSelectAnswerIndex(null)
        setAnswered(false)
    }

    const onReset = () => {
        setScore(0);
        setActiveQuiz(false);
        setIndexQuestion(0);
    }

    return (
        <>


            {activeResults ? (
                <div className="flex flex-col justify-center shadow-md shadow-slate-500 w-[400px] 
            h-[400px] p-10 rounded-lg gap-3">
                    <h1 className="text-4xl font-bold text-center">Results Finish:</h1>

                    <div className="flex flex-col gap-5 text-center text-lg font-bold">
                        <span className="font-black bg-gradient-to-r from-yellow-400 to-green-500 rounded-lg bg-clip-text text-transparent text-6xl animate-pulse">
                            {((score / questionsFiltered.length) * 100).toFixed(0)}%
                        </span>
                        From Questions {score} of {questionsFiltered.length}
                    </div>

                    <div className="space-x-3.5 flex text-center items-center justify-center">
                        <button className='border text-white bg-red py-2 rounded-lg uppercase font-bold px-5 transition-all duration-500 hover:bg-red-600 hover:text-gray-900 hover:scale-110' onClick={onReset}>
                            <h1 className="text-white text-2x-1 font-bold hover:scale-110 transitional-all duration-500 uppercase">Reset Game</h1>
                        </button>

                        <button className='border text-white bg-gray py-2 rounded-lg uppercase font-bold px-5 transition-all duration-500 hover:bg-yellow-400 hover:text-gray-900 hover:scale-110'>
                            <Link to="/">
                                <h1 className="text-white text-2x-1 font-bold hover:scale-110 transitional-all duration-500 uppercase">Back Choices</h1>
                            </Link>
                        </button>
                    </div>

                </div>
            ) : (
                <div className="flex flex-col justify-between shadow-md shadow-slate-300 w-[600px]
            h-[600px] p-10 rounded-lg">

                    <div className='flex justify-between'>
                        <span className="text-xl font-bold">
                            {indexQuestion + 1} / {questionsFiltered.length}
                        </span>

                        <div>
                            <span className="font-semibold">Difficult: </span>
                            <span className="font-bold">
                                {filteredQuestion.difficulty}
                            </span>
                        </div>
                    </div>

                    <button className='border px-5 py-2 rounded-lg font-bold uppercase hover:bg-green-900 hover:scale-110 transitional-all duration-500
                hover: text-white-900' onClick={onReset}>
                        Reset
                    </button>

                    <div>
                        <h1 className='font-bold'>{filteredQuestion.question}</h1>
                    </div>

                    <div className='grid grid-cols-2 gap-5'>
                        {/* Mapping Answers correct or incorrect */}
                        {answersRandom.map(((answer, index) => (

                            <button key={answer} onClick={() => checkAnswer(answer, index)}
                            disabled = {answered && selectAnswerIndex !== index}
                                className={`border p-5 rounded-lg flex justify-center items-center hover:scale-110 transitional-all duration-500
                                ${selectAnswerIndex !== null &&
                                        index === selectAnswerIndex
                                        ? answer === filteredQuestion.correct_answer
                                            ? 'bg-green-500'
                                            : 'bg-red-500'
                                        : ''
                                    }
                                }`}>
                                <p className="font-medium text-center text-sm">{answer}</p>
                            </button>
                        )))

                        }
                    </div>

                    <div className="space-x-3.5 flex text-center items-center justify-center">
                        {/* Condicional para mostrar el botón de siguiente pregunta o el de finalizar */}
                        {indexQuestion + 1 === questionsFiltered.length ? (

                            <button
                                className='border-2 uppercase border-green-600 text-green-600 rounded-md px-5 py-2 hover:bg-green-600
    hover:text-black font-bold transition-all uppercase hover:bg-green-600 hover:scale-110 transitional-all duration-500'
                                onClick={() => {
                                    setAnswered(false);
                                    setActiveResults(true);
                                }}
                            >
                                Finish
                            </button>
                        ) : (
                            <button
                                className='border-2 uppercase border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600
                                hover:text-black font-bold transition-all uppercase hover:bg-yellow-600 hover:scale-110 duration-500'
                                onClick={onNextQuestion}
                            >
                                Next Question
                            </button>


                        )}

                        <button
                            className='border-2 uppercase border-red-600 text-red-600 rounded-md px-5 py-2 hover:bg-red-600
                            hover:text-black font-bold transition-all uppercase hover:bg-red-600 hover:scale-110 duration-500'
                        >
                            <Link to="/">
                                <h1 className="text-red text-2x-1 font-bold hover:scale-110 transitional-all duration-500 uppercase">Back Choices</h1>
                            </Link>
                        </button>
                    </div>

                </div>
            )}


        </>
    )
}



