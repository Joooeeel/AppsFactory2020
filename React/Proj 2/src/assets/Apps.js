import RoutinesData from './data/routines';
import { LeftBtn, RightBtn, Top, Title, Container, ImageMain } from './styled';
import { useState } from 'react';

export default () => {
    const [routines, setAlloutines] = useState(RoutinesData);
    const [currentRoutine, setRoutine] = useState(0);

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
                <ImageMain src={routineWorkout.routine[currentRoutine].img} />
                <Container>
                    {
                        routineWorkout.routine.map((ex) => {
                            console.log(ex);
                            <img src={ex.img} />
                        })
                    }
                </Container>
            </Container>
        </div>
    );
};