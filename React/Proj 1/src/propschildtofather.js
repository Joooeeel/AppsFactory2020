import React, { useState } from 'react';
import Child1 from './components/Props/childtofather/first_child';
import Child2 from './components/Props/childtofather/second_child';

const App = _ => {

    const [result, setResult] = useState(0);

    return (
        <div>
            <Child1 onSomeEvent={(param) => setResult(param)} />
            <Child2 final_result={result} />
        </div>
    );
};

export default App;