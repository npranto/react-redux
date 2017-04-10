import React, {Component} from 'react';
import { 
	Sparklines, 
	SparklinesLine, 
	SparklinesSpots, 
	SparklinesReferenceLine, 
	SparklinesCurve 
} from 'react-sparklines';
import './Chart.component.css';

class Chart extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<Sparklines style={{ background: "white"}} data={this.props.data} limit={this.props.data.length} height={180} min={_.min(this.props.data)} max={_.max(this.props.data)}>
				<SparklinesLine style={{ strokeWidth: 3, stroke: this.props.stroke, fill: this.props.fill }} />
				<SparklinesSpots size={4} style={{ stroke: "#336aff", strokeWidth: 3, fill: "gray" }} />
				<SparklinesReferenceLine type="mean" />
				<SparklinesCurve />
			</Sparklines>
		)
	}
}

export default Chart;

