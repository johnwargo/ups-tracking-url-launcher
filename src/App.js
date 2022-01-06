import React from 'react';
import buildInfo from './buildInfo';
import './App.css';

const buildDate = new Date(buildInfo.buildDate);
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trackingNumber: '',
      trackingURL: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    let dashes = '='.repeat(80);
    console.log(dashes);
    console.log('UPS Tracking URL Launcher');
    console.log('Copyright John M. Wargo (john@johnwargo.com)');
    console.log(`Build: ${buildInfo.buildVersion} - ${buildDate.toString()}`);
    console.log('(build information generated using my `react-build-info` package: https://www.npmjs.com/package/react-build-info)');
    console.log(dashes);    
  }

  handleChange(event) {
    this.setState({ trackingNumber: event.target.value });
  }

  handleClick(event) {
    window.open(`https://www.ups.com/track?loc=en_US&requester=QUIC&tracknum=${this.state.trackingNumber}/trackdetails`);
  }

  render() {
    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">UPS Tracking URL Launcher</span>
          </div>
        </nav>
        <div className="container px-5 py-5">
          <label className='font-bold'>
            UPS Tracking Number:&nbsp;
            <input
              className="px-4 py-3 w-80 rounded"
              name="trackingNumber"
              type="text"
              value={this.state.trackingNumber}
              onChange={this.handleChange}
              required />
          </label>
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 border border-blue-700 rounded"
            name="launchButton"
            hidden={this.state.trackingNumber.length === 0}
            onClick={this.handleClick}>
            Launch Tracking URL
          </button>
        </div>
      </div>
    );
  }

}

export default App;
