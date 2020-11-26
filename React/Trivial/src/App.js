import { useState } from 'react';
import QuestionsData from './assets/data/questions';
import { Container, Content, QImg, QuestionStyle } from './styled';
import PopUp from './components/pop-up/Pops';

export default () => {

    const [questions, setQuestions] = useState(QuestionsData);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const question = questions[currentQuestion];

    console.log(answ);

    //POPUP
    const [isVisible, setVisible] = useState(false);

    //RandomizeArray
    const shuffleArray = (array) => {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    const answ = shuffleArray(question.answers);

    const checkCorrect = (isRight) => {
        if (isRight && currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else if (!isRight && currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        } else if (isRight && currentQuestion == questions.length - 1) {
            setVisible(true);
        }
    }

    const reset = param => setCurrentQuestion(param);

    return (
        <div>
            <h1>Trivial con React</h1>
            <Container>
                <h2>{question.question}</h2>
                <Content>
                    <div>
                        {

                            answ.map((q) =>

                                <QuestionStyle>
                                    <button onClick={() => checkCorrect(q.isRight)}>X</button>
                                    <p>{q.txt}</p>
                                </QuestionStyle>
                            )
                        }
                    </div>
                    <QImg src={question.img} />
                </Content>
            </Container>
            <PopUp isVisible={isVisible} setVisible={setVisible} onClose={reset} />
        </div>
    );
};