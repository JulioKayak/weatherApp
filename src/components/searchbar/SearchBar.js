import React from "react";
import { Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line
    if (this.state.value == "") {
      return null;
    } else {
      let citiesArray = this.state.value.split(" ");
      this.props.newSearchAndDataFetch(citiesArray);
      this.setState({
        value: "",
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormattedMessage id="searchbar.formplaceholder">
          {(placeholder) => (
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder={placeholder}
            />
          )}
        </FormattedMessage>
        <Button type="submit" value="Submit">
          <Search />
        </Button>
      </form>
    );
  }
}

export default SearchBar;
