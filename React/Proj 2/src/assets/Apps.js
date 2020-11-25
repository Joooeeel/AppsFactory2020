import RoutinesData from './data/routines';
import { LeftBtn, RightBtn, Top, Title, Container, ImageMain, Img } from './styled';
import { useState } from 'react';

export default () => {
    const [routines, setAlloutines] = useState(RoutinesData);
    const [currentRoutine, setRoutine] = useState(0);
    const [exCurrent, setEx] = useState(0);

    const routineWorkout = routines[currentRoutine];

    const nextRoutine = _ => {
        if (currentRoutine < routines.length - 1) {
            setRoutine(currentRoutine + 1);
        }
    }

    const prevRoutine = _ => {
        if (currentRoutine > 0) {
            setRoutine(currentRoutine - 1);
        }
    }

    return (
        <div>
            <Top>
                <LeftBtn onClick={prevRoutine} />
                <Title>{routineWorkout.title}</Title>
                <RightBtn onClick={nextRoutine} />
            </Top>
            <Container>
                <ImageMain src={routineWorkout.routine[exCurrent].img} />
                <Container>
                    {
                        routineWorkout.routine.map((ex, i) =>
                            <Img src={ex.img}
                                active={i === exCurrent}
                                onClick={() => setEx(i)}
                            />
                        )
                    }
                </Container>
            </Container>
        </div>
    );
};