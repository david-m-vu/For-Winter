import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            fileType: "gif",
            imagesToSearch: 10,
            start: 1
        }

        this.fileTypeOptions = {
            "Any Image": "any_image",
            ".gif": "gif"
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getFileTypeClass(fileTypeOption) {
        if (this.state.fileType === fileTypeOption) {
            return "active"
        } else {
            return "";
        }
    }

    handleFileTypeChange(fileTypeOption) {
        this.setState({
            fileType: fileTypeOption
        })
        
    }

    //Not an event handler so don't need to bind 'this'
    renderFileTypeOptions() {
        return Object.keys(this.fileTypeOptions).map((fileTypeOption) => {
            let fileType = this.fileTypeOptions[fileTypeOption];
            return <li className={this.getFileTypeClass(fileType)} 
                    key={fileType} 
                    onClick={this.handleFileTypeChange.bind(this, fileType)}>
                {fileTypeOption}</li>
        })
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    handleSearch(event) {
        if (this.state.term !== "" && (event.type === "click" || event.keyCode === 13)) {
            this.props.searchImages(this.state.term, this.state.start, this.state.imagesToSearch, this.state.fileType)
            this.setState({
                start: this.state.start + 10,
                term: ""
            })
        }
    }


    render() {
        return (
            <div className="SearchBar">
                <input className="searchInput" type="text" onKeyDown={this.handleSearch} onChange={this.handleTermChange} value={this.state.term} placeholder="Search Here"/>
                <button className="searchButton" onClick={this.handleSearch}>+</button>
                <div className="options">
                    <ul>
                        {this.renderFileTypeOptions()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchBar
