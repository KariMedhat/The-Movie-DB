import React, { Component } from 'react'
import axios from 'axios'

export default class Tv extends Component {
    state={tv:[]}
    getTrending= async ()=>{
      let {data}= await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=896e8f1d1bbca56d402bb80f5b1bae2c`)
      
      this.setState({tv: data.results})

    }
    componentDidMount(){
        this.getTrending('tv')
    }
            render() {
                return (
                   <>
                     <div className="container my-5">
                            <div className="row">
                               {this.state.tv.map((value , index)=>{
                                   return(
                                    <div key={index} className="col-md-2 my-3">
                                    <div className="item">
                                        <img className='w-100' src={'https://image.tmdb.org/t/p/original'+value.poster_path} alt="" />
                                        <h5 className='pt-2'>{value.name}{value.title}</h5>
                                        <span className='vote'>{value.vote_average}</span>    
                                    </div>
                                </div>
                                   )
                               })}
                             </div>
                          </div>
                          
                   </>
                )
            }
}