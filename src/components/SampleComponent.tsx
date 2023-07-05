import {ReactElement} from 'react'

export function SampleComponent({name = "someone"}: {name: string}): ReactElement | null {
    return (
        <div>
            <h1>Sample Component [{name}]</h1>
        </div>
    );
}
