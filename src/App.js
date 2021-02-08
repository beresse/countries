import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import Card from "./composant/Card"
import Search from "./composant/Search"
import Button from "./composant/Button"


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      searchValue: "",
    }
  }

  componentDidMount() {

    this.getCountry("france")
  }

  onSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  onClickSearch = () => {
    this.getCountry(this.state.searchValue)
  }

  getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(res => res.json())
      .then(countries => {
        this.setState({
          name: countries[0].name,
          capital: countries[0].capital,
          flag: countries[0].flag,
          population: countries[0].population,
          region: countries[0].region,
        })
      })
      .catch(error => alert("Pays non reconnu par l'ONU"))
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row search">
          <Search onChange={this.onSearch} onClick={this.onClickSearch}></Search>
          </div>
          <Card img={this.state.flag} pays={this.state.name} capitale={this.state.capital} pop={this.state.population} continent={this.state.region} />
        </header>
      </div>
    );
  }
}

export default App;