import React, { useRef } from 'react';
import { useState } from 'react';

/*Inside the <> we tell React the type of the props argument*/
// const TextField: React.FC<{text: string}> = () => {
//     return (
//         <div>
//             <input></input>
//         </div>
//     );
// }
//even better is
interface Person {
    firstName: string;
    lastName: string;
} 
interface Props {
    text:string;
    ok?: boolean; // Remember ? -> makes it optional
    i?: number;
    f?: (bob:string) => string;
    person: Person;
}
const TextField: React.FC<Props> = () => {
    /*Whitout explicit types and inserting | null, typescrpt wouldn't accept null*/
    const [count, setCount] = useState<number | null>(5);

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef}></input>
        </div>
    );
}

export default TextField;