import React, { Component } from 'react'
import axios from 'axios'
import ListaItem from '../components/ListaItem'
import paginate from 'paginate-array';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/myStyle.css'

export default class ListPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            size: 5,
            page: 1,
            currPage: null
        }

        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get(`/posts`).then(res => {
            const posts = res.data
            const { page, size } = this.state;

            const currPage = paginate(posts, page, size);
            console.log(posts)
            this.setState({
                ...this.state,
                posts,
                currPage
            });
        }).catch(err => console.log(err));
    }

    previousPage() {
        const { currPage, page, size, posts } = this.state;

        if (page > 1) {
            const newPage = page - 1;
            const newCurrPage = paginate(posts, newPage, size);

            this.setState({
                ...this.state,
                page: newPage,
                currPage: newCurrPage
            });
        }
    }

    nextPage() {
        const { currPage, page, size, posts } = this.state;

        if (page < currPage.totalPages) {
            const newPage = page + 1;
            const newCurrPage = paginate(posts, newPage, size);
            this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
        }
    }

    handleChange(e) {
        const { value } = e.target;
        const { posts, page } = this.state;

        const newSize = +value;
        const newPage = 1;
        const newCurrPage = paginate(posts, newPage, newSize);

        this.setState({
            ...this.state,
            size: newSize,
            page: newPage,
            currPage: newCurrPage
        });
    }

    render() {
        const { page, size, currPage } = this.state;

        return (
            <div>
                <div>page: {page}</div>
                <div>size: {size}</div>
                <div>
                    <label for="size">Size</label>
                    <select name="size" id="size" onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                    </select>
                </div>
                {currPage &&
                    <div style={{ padding: "0 30%" }}>
                        {currPage.data.map((posts, index) => <ListaItem key={index} id={posts.id} title={posts.title} body={posts.body} />)}
                    </div>
                }
                <button onClick={this.previousPage}>Previous Page</button>
                <button onClick={this.nextPage}>Next Page</button>
            </div>
        )
    }
}
