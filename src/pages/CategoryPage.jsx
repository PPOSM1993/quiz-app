import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imgs, questions } from '../data';
import { Question } from '../components/Question';
import { Link } from 'react-router-dom';


const shuffleArray = array => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, 20);
};



export const CategoryPage = () => {

    //functions to shuffle each category and also reduce it t<bro number 5
    const { category } = useParams();

    const [imgCategory] = imgs.filter(img => img === `/src/assets/${category.toLocaleLowerCase()}.png`
    );

    const [questionsFiltered, setQuestionsFiltered] = useState(
        questions.filter(question => question.category === category)
    );

    const [indexQuestion, setIndexQuestion,] = useState(0)
    const [activeQuiz, setActiveQuiz] = useState(false)

    useEffect(() => {

        const newQuestions = shuffleArray(questionsFiltered);
        setQuestionsFiltered(newQuestions);

    }, [])

    return (

        <div className="container text-white uppercase flex flex-col items-center justify-center gap-4 mt-10 py-7"
            style={{ height: 'calc:(100vh -rem)' }}
        >

            {
                activeQuiz ? (
                    <Question
                        filteredQuestion={questionsFiltered[indexQuestion]}
                        setIndexQuestion={setIndexQuestion}
                        indexQuestion={indexQuestion}
                        questionsFiltered={questionsFiltered}
                        setActiveQuiz={setActiveQuiz}
                    />
                ) : (
                    <>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3x-1 text-white-900 text-center font-bold'>Page Category : {category}</h1>
                            <br></br>
                            <div className='flex justify-center items-center'>
                                <img src={imgCategory} alt='{category}' className='w-72' />
                            </div>
                        </div>



                        <div className='space-x-3.5'>
                            <button className='border text-white bg-gray py-2 rounded-lg uppercase font-bold px-5 transition-all duration-500 hover:bg-green-100 hover:text-gray-900 hover:scale-110' onClick={() => setActiveQuiz(true)}>
                                Start Quiz
                            </button>

                            <button className='border text-white bg-gray py-2 rounded-lg uppercase font-bold px-5 transition-all duration-500 hover:bg-yellow-400 hover:text-gray-900 hover:scale-110'>
                                <Link to="/">
                                    <h1 className="text-white text-2x-1 font-bold hover:scale-110 transitional-all duration-500 uppercase">Back Choices</h1>
                                </Link>
                            </button>
                        </div>
                    </>
                )
            }

        </div>
    )
}