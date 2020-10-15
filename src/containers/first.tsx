import * as React from 'react';
import { Navbar } from '../components/menu'
 const writeJsonFile = require('write-json-file');
 const dataPath = '../data/data.json';
 const data = require('../data/data.json');
 const jsonfile = require('jsonfile')

class First extends React.Component {

   

    constructor(props: React.ReactPropTypes) {
        super(props);
        //this.state
    }

    
    jsonData: any = [];

    showData() {
        this.jsonData = JSON.parse(JSON.stringify(data));

    }

    changeData() { 
        jsonfile.writeFile(dataPath, {last_name: "ON9"}, function (err: any) {
            if (err) console.error(err)
          })
    }
    //{this.jsonData}
    render() {
        this.showData();
        return (
            <div>
                <Navbar />
                <h1 className="text-primary">Hello React as TSX First Item</h1>
                {this.jsonData.map((e: any, i: number) =>
                    <tr key={i}>{e.last_name}</tr>
                )}
                <input type="button" onClick={this.changeData} value="Change!"/>
            </div>
        )
    };
}

export { First }