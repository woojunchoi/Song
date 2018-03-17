import React ,{Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'


class SongList extends Component {
    constructor() {
        super()
    }

    renderSongs = () =>  {
        return this.props.data.songs.map((song) => {
            return (
                <li key={song.id}>
                    {song.title}
                </li>   
            )
        })
    }

    render() {
        if(this.props.data.loading) {
            return(
                <div>loading..</div>
            )
        }
        return(
            <div>
                {this.renderSongs()}
            </div>
        )
    }
}
const query = gql`{
    songs {
        title
        id
    }
}`

export default graphql(query)(SongList)