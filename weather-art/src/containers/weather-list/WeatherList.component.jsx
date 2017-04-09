import React, {Component} from 'react';

import './WeatherList.component.css';

class WeatherList extends Component {
	
	constructor(props) {
		super(props);


	}

	render() {
		return (

			<section>
			  <h1>Fixed Table header</h1>
			  <div className="tbl-header">
			    <table cellPadding="0" cellSpacing="0" border="0">
			      <thead>
			        <tr>
			          <th>Code</th>
			          <th>Company</th>
			          <th>Price</th>
			          <th>Change</th>
			          <th>Change %</th>
			        </tr>
			      </thead>
			    </table>
			  </div>
			  <div className="tbl-content">
			    <table cellPadding="0" cellSpacing="0" border="0">
			      <tbody>
			        <tr>
			          <td>AAC</td>
			          <td>AUSTRALIAN COMPANY </td>
			          <td>$1.38</td>
			          <td>+2.01</td>
			          <td>-0.36%</td>
			        </tr>
			        <tr>
			          <td>AAD</td>
			          <td>AUSENCO</td>
			          <td>$2.38</td>
			          <td>-0.01</td>
			          <td>-1.36%</td>
			        </tr>
			        <tr>
			          <td>AAX</td>
			          <td>ADELAIDE</td>
			          <td>$3.22</td>
			          <td>+0.01</td>
			          <td>+1.36%</td>
			        </tr>
			        <tr>
			          <td>XXD</td>
			          <td>ADITYA BIRLA</td>
			          <td>$1.02</td>
			          <td>-1.01</td>
			          <td>+2.36%</td>
			        </tr>
			        <tr>
			          <td>AAC</td>
			          <td>AUSTRALIAN COMPANY </td>
			          <td>$1.38</td>
			          <td>+2.01</td>
			          <td>-0.36%</td>
			        </tr>
			        <tr>
			          <td>AAD</td>
			          <td>AUSENCO</td>
			          <td>$2.38</td>
			          <td>-0.01</td>
			          <td>-1.36%</td>
			        </tr>
			        <tr>
			          <td>AAX</td>
			          <td>ADELAIDE</td>
			          <td>$3.22</td>
			          <td>+0.01</td>
			          <td>+1.36%</td>
			        </tr>
			        <tr>
			          <td>AAC</td>
			          <td>AUSTRALIAN COMPANY </td>
			          <td>$1.38</td>
			          <td>+2.01</td>
			          <td>-0.36%</td>
			        </tr>
			        <tr>
			          <td>AAD</td>
			          <td>AUSENCO</td>
			          <td>$2.38</td>
			          <td>-0.01</td>
			          <td>-1.36%</td>
			        </tr>
			        <tr>
			          <td>AAX</td>
			          <td>ADELAIDE</td>
			          <td>$3.22</td>
			          <td>+0.01</td>
			          <td>+1.36%</td>
			        </tr>
			        <tr>
			          <td>AAC</td>
			          <td>AUSTRALIAN COMPANY </td>
			          <td>$1.38</td>
			          <td>+2.01</td>
			          <td>-0.36%</td>
			        </tr>
			        <tr>
			          <td>AAD</td>
			          <td>AUSENCO</td>
			          <td>$2.38</td>
			          <td>-0.01</td>
			          <td>-1.36%</td>
			        </tr>
			        <tr>
			          <td>AAX</td>
			          <td>ADELAIDE</td>
			          <td>$3.22</td>
			          <td>+0.01</td>
			          <td>+1.36%</td>
			        </tr>
			        <tr>
			          <td>AAC</td>
			          <td>AUSTRALIAN COMPANY </td>
			          <td>$1.38</td>
			          <td>+2.01</td>
			          <td>-0.36%</td>
			        </tr>
			        <tr>
			          <td>AAD</td>
			          <td>AUSENCO</td>
			          <td>$2.38</td>
			          <td>-0.01</td>
			          <td>-1.36%</td>
			        </tr>
			        <tr>
			          <td>AAX</td>
			          <td>ADELAIDE</td>
			          <td>$3.22</td>
			          <td>+0.01</td>
			          <td>+1.36%</td>
			        </tr>
			        <tr>
			          <td>AAC</td>
			          <td>AUSTRALIAN COMPANY </td>
			          <td>$1.38</td>
			          <td>+2.01</td>
			          <td>-0.36%</td>
			        </tr>
			        <tr>
			          <td>AAD</td>
			          <td>AUSENCO</td>
			          <td>$2.38</td>
			          <td>-0.01</td>
			          <td>-1.36%</td>
			        </tr>
			        <tr>
			          <td>AAX</td>
			          <td>ADELAIDE</td>
			          <td>$3.22</td>
			          <td>+0.01</td>
			          <td>+1.36%</td>
			        </tr>
			        <tr>
			          <td>AAC</td>
			          <td>AUSTRALIAN COMPANY </td>
			          <td>$1.38</td>
			          <td>+2.01</td>
			          <td>-0.36%</td>
			        </tr>
			        <tr>
			          <td>AAD</td>
			          <td>AUSENCO</td>
			          <td>$2.38</td>
			          <td>-0.01</td>
			          <td>-1.36%</td>
			        </tr>
			        <tr>
			          <td>AAX</td>
			          <td>ADELAIDE</td>
			          <td>$3.22</td>
			          <td>+0.01</td>
			          <td>+1.36%</td>
			        </tr>
			        <tr>
			          <td>AAC</td>
			          <td>AUSTRALIAN COMPANY </td>
			          <td>$1.38</td>
			          <td>+2.01</td>
			          <td>-0.36%</td>
			        </tr>
			        <tr>
			          <td>AAD</td>
			          <td>AUSENCO</td>
			          <td>$2.38</td>
			          <td>-0.01</td>
			          <td>-1.36%</td>
			        </tr>
			        <tr>
			          <td>AAX</td>
			          <td>ADELAIDE</td>
			          <td>$3.22</td>
			          <td>+0.01</td>
			          <td>+1.36%</td>
			        </tr>
			        <tr>
			          <td>AAC</td>
			          <td>AUSTRALIAN COMPANY </td>
			          <td>$1.38</td>
			          <td>+2.01</td>
			          <td>-0.36%</td>
			        </tr>
			        <tr>
			          <td>AAD</td>
			          <td>AUSENCO</td>
			          <td>$2.38</td>
			          <td>-0.01</td>
			          <td>-1.36%</td>
			        </tr>
			        <tr>
			          <td>AAX</td>
			          <td>ADELAIDE</td>
			          <td>$3.22</td>
			          <td>+0.01</td>
			          <td>+1.36%</td>
			        </tr>
			      </tbody>
			    </table>
			  </div>
			</section>

		)
	}

}

export default WeatherList;