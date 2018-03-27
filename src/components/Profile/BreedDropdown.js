import React, {Component} from 'react'
import Select from 'react-select'
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
        const breeds = [
            {value:'Affenpinscher',label:'Affenpinscher'},
            {value:'Affenpoo', label:'Affenpoo'},
            {value:'Akita', label:'Akita'},
            {value:'Alaskan Klee Kai', label:'Alaskan Klee Kai'},
            {value:'American Bulldog', label:'American Bulldog'},
            {label:'Cavalier King Charles Spaniel',value:'Cavalier King Charles Spaniel'}]
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