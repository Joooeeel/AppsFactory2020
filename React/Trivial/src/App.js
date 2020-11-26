import { useState } from 'react';
import QuestionsData from './assets/data/questions';
import { Container, Content, QImg, QuestionStyle } from './styled';
import PopUp from './components/pop-up/Pops';

export default () => {

    const [questions, setQuestions] = useState(QuestionsData);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const question = questions[currentQuestion];

    //POPUP
    const [isVisible, setVisible] = useState(false);

    const checkCorrect = (isRight) => {
        if (isRight && currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else if (!isRight && currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        } else if (isRight && currentQuestion == questions.length - 1) {
            setVisible(true);
        }
    }

    return (
        <div>
            <h1>Trivial</h1>
            <Container>
                <h2>{question.question}</h2>
                <Content>
                    <div>
                        {
                            question.answers.map((q) =>

                                <QuestionStyle onClick={() => checkCorrect(q.isRight)}>
                                    <button>X</button>
                                    <p>{q.txt}</p>
                                </QuestionStyle>
                            )
                        }
                    </div>
                    <QImg src={question.img} />
                </Content>
            </Container>
            <PopUp isVisible={isVisible} setVisible={setVisible} />
        </div>
    );
};