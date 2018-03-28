import React, {Component} from 'react'
import Select from 'react-select'
import breeds from '../../breed-data'
import 'react-select/dist/react-select.css'


class BreedDropdown extends Component {
    state = {
        selectedValue: ''
    }

    updateValue = (selectedValue) => {
        this.setState({selectedValue})
        this.props.updateBreed(selectedValue)
    }

    render (){
        console.log(breeds)
        return (
            <div className="BreedDropdown">
                <Select
					id="breed-select"
					onBlurResetsInput={false}
					onSelectResetsInput={false}
                    options={breeds}
                    removeSelected={false}
					simpleValue
					name="selected-breed"
					value={this.state.selectedValue}
					onChange={this.updateValue}
				/>
            </div>
        )
    }
}

export default BreedDropdown