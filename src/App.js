import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Charlie',
                job: 'janitor'
            },
            {
                name: 'Mac',
                job: 'bouncer'
            },
            {
                name: 'Dee',
                job: 'aspiring actress'
            },
            {
                name: 'Dennis',
                job: 'bartender'
            }
        ]

        return (
            <div className="App">
                <Table charData={characters} />
            </div>
        )
    }
}

export default App