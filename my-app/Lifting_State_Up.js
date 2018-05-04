class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature,
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            templerature: '',
            scale: 'C'
        }
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c', temperature
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f', temperature
        })
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scalle === 'c'? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />

                <BoilingVerdict celsius={parseFloat(celsius)} />

            </div>
        )
    }
}
