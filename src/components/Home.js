import React,{Component} from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render(){
        return(
            <section id="content" className="container">
                <div className="row wbb">
                    <div className="col-md-6 content--news content--news-highlight">
                        <p className="content--category content--category-politics">Politics</p>
                        <figure>
                            <img className="img-responsive" prop="news1" alt="news1" src="challenge_final/imgs/news/thumbs/news_01.jpg" />
                        </figure>
                        <Link className="content--title" to="/news/1/obama-wins-eua-elections">Obama wins EUA elections</Link>
                        <img alt="author-thumb" src="challenge_final/imgs/users/gabriel.jpg" className="img-circle content--author_thumb" />
                        <span className="content--author_name">by Gabriel Arantes</span>
                    </div>
                    <div className="col-md-3 col-sm-6 content--news content--news-seconds">
                        <p className="content--category content--category-politics">Politics</p>
                        <figure>
                            <img className="img-responsive" prop="news2" alt="news2" src="challenge_final/imgs/news/thumbs/news_01.jpg" />
                        </figure>
                        <Link className="content--title" to="/news/1/obama-wins-eua-elections">Obama wins EUA elections</Link>
                        <img src="challenge_final/imgs/users/gabriel.jpg" alt="thumb2" prop="thumb2" className="img-circle content--author_thumb" />
                        <span className="content--author_name">by Gabriel Arantes</span>
                        <p className="content--text">One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 content--news content--news-seconds">
                        <p className="content--category content--category-politics">Politics</p>
                        <figure>
                            <img className="img-responsive" prop="news" alt="props" src="challenge_final/imgs/news/thumbs/news_01.jpg" />
                        </figure>
                        <Link className="content--title" to="/news/1/obama-wins-eua-elections">Obama wins EUA elections</Link>
                        <img src="challenge_final/imgs/users/gabriel.jpg" alt="author3" className="img-circle content--author_thumb" />
                        <span className="content--author_name">by Gabriel Arantes</span>
                        <p className="content--text">One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 content--news content--news-simple">
                        <p className="content--category content--category-sports">Sports</p>
                        <Link className="content--title" to="/news/1/obama-wins-eua-elections">Obama wins EUA elections</Link>
                        <img src="challenge_final/imgs/users/gabriel.jpg" alt="author3" className="img-circle content--author_thumb" />
                        <span className="content--author_name">by Gabriel Arantes</span>
                        <p className="content--text">One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>
                    </div>

                    <div className="col-lg-4 col-sm-6 content--news content--news-simple">
                        <p className="content--category content--category-politics">Politics</p>
                        <Link className="content--title" to="/news/1/obama-wins-eua-elections">Obama wins EUA elections</Link>
                        <img src="challenge_final/imgs/users/gabriel.jpg" alt="author3" className="img-circle content--author_thumb" />
                        <span className="content--author_name">by Gabriel Arantes</span>
                        <p className="content--text">One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>
                    </div>

                    <div className="col-lg-4 col-sm-6 content--news content--news-simple">
                        <p className="content--category content--category-politics">Politics</p>
                        <Link className="content--title" to="/news/1/obama-wins-eua-elections">Obama wins EUA elections</Link>
                        <img src="challenge_final/imgs/users/gabriel.jpg" alt="author3" className="img-circle content--author_thumb" />
                        <span className="content--author_name">by Gabriel Arantes</span>
                        <p className="content--text">One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>
                    </div>

                </div>

            </section>
        )
    };
}