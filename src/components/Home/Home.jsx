import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {   
    
    state={movies:[] , tv:[]}
    getTrending= async (mediaType)=>{
      let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=896e8f1d1bbca56d402bb80f5b1bae2c`)
      
      this.setState({[mediaType]: data.results})

    }
    componentDidMount(){
        this.getTrending('movies')
        this.getTrending('tv')
    }

    render() {
        return (
           <>
             <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item"></div>
                            <div className="brdr w-25"></div>
                            <h1>Trending <br /> movies <br /> to watch now</h1>
                            <p className='secondFontColor'>Most watched Movies By Days</p>
                            <div className="brdr w-100"></div>
                        </div>
                       {this.state.movies.slice(0,10).map((value , index)=>{
                           return(
                            <div key={index} className="col-md-2 my-3">
                            <div className="item">
                                <img className='w-100' src={'https://image.tmdb.org/t/p/original'+value.poster_path} alt="" />
                                <h5 className='pt-2'>{value.name}{value.title}</h5>
                                <span className='vote'>{value.vote_average}</span>
                                <p></p>
                            </div>
                        </div>
                           )

                       })}

                     </div>
                     <div className="row my-2">
                        <div className="col-md-4">
                            <div className="item"></div>
                            <div className="brdr w-25"></div>
                            <h1>Trending <br /> TV <br /> to watch now</h1>
                            <p className='secondFontColor'>Most watched TV By Days</p>
                            <div className="brdr w-100"></div>
                        </div>
                       {this.state.tv.slice(0,10).map((value , index)=>{
                           return(
                            <div key={index} className="col-md-2 my-3">
                            <div className="item">
                                <img className='w-100' src={'https://image.tmdb.org/t/p/original'+value.poster_path} alt="" />
                                <h5 className='pt-2'>{value.name}{value.title}</h5>
                                <span className='vote'>{value.vote_average}</span>
                                <p></p>
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
