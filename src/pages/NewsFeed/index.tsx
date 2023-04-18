import React from 'react'
import './styles.css'
import { Button, Form } from 'react-bootstrap'

interface NewsFeedProps {
}

const NewsFeed: React.FC<NewsFeedProps> = () => {
    // useEffect(() => {

    // }, [])
    return (
    <section className="home-blog bg-sand">
        <div className="container">
            {/* <!-- section title --> */}
            <div className="row justify-content-md-center">
                <div className="col-xl-5 col-lg-6 col-md-8">
                    <div className="section-title text-center title-ex1">
                        <h2>Latest News</h2>
                        <p>Read all the latest news from all over the world in whatever category you like.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="section-title text-center title-ex1">
                    {/* onChange={(event: React.SyntheticEvent)=>setInputHandler(event, 'password')} */}
                      <Form.Control placeholder="Search"  />
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-8">
                    <div className="section-title text-center title-ex1">
                      <Form.Control  as={'select'} aria-label="Default select example">
                        <option>Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Control>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-8">
                    <div className="section-title text-center title-ex1">
                      <Form.Control  as={'select'} aria-label="Default select example">
                        <option>Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                      </Form.Control>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-8">
                    <div className="section-title text-center title-ex1">
                    <Button className="" type="submit" onClick={() => console.log('hi')}>
                                Search 
                                {/* {props.loading ? <> &nbsp; <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> </> : null}  */}
                    </Button>
                    </div>
                </div>
            </div>
            {/* <!-- section title ends --> */}
            <div className="row ">
                <div className="col-md-6">
                    <div className="media blog-media">
                      <a href="blog-post-left-sidebar.html"><img className="d-flex" src="https://www.bootdey.com/image/350x380/6495ED/000000" alt="Generic placeholder image" /></a>
                      <div className="circle">
                          <h5 className="day">14</h5>
                          <span className="month">sep</span>
                      </div>
                      <div className="media-body">
                        <a href=""><h5 className="mt-0">Standard Blog Post</h5></a>
                        Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                        <a href="blog-post-left-sidebar.html" className="post-link">Read More</a>
                        <ul>
                            <li>by: Admin</li>
                            <li className="text-right"><a href="blog-post-left-sidebar.html">07 comments</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="media blog-media">
                      <a href="blog-post-left-sidebar.html"><img className="d-flex" src="https://www.bootdey.com/image/350x380/FFB6C1/000000" alt="Generic placeholder image" /></a>
                      <div className="circle">
                            <h5 className="day">12</h5>
                            <span className="month">sep</span>
                        </div>
                      <div className="media-body">
                        <a href=""><h5 className="mt-0">perferendis labore</h5></a>
                        Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                        <a href="blog-post-left-sidebar.html" className="post-link">Read More</a>
                        <ul>
                            <li>by: Admin</li>
                            <li className="text-right"><a href="blog-post-left-sidebar.html">04 comments</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="media blog-media">
                      <a href="blog-post-left-sidebar.html"><img className="d-flex" src="https://www.bootdey.com/image/350x380/FF7F50/000000" alt="Generic placeholder image" /></a>
                      <div className="circle">
                            <h5 className="day">09</h5>
                            <span className="month">sep</span>
                        </div>
                      <div className="media-body">
                        <a href=""><h5 className="mt-0">deleniti incdunt magni</h5></a>
                        Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                        <a href="blog-post-left-sidebar.html" className="post-link">Read More</a>
                        <ul>
                            <li>by: Admin</li>
                            <li className="text-right"><a href="blog-post-left-sidebar.html">10 comments</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="media blog-media">
                      <a href="blog-post-left-sidebar.html"><img className="d-flex" src="https://www.bootdey.com/image/350x380/008B8B/000000" alt="Generic placeholder image" /></a>
                      <div className="circle">
                            <h5 className="day">04</h5>
                            <span className="month">sep</span>
                        </div>
                      <div className="media-body">
                        <a href=""><h5 className="mt-0">Explicabo magnam </h5></a>
                        Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                        <a href="blog-post-left-sidebar.html" className="post-link">Read More</a>
                        <ul>
                            <li>by: Admin</li>
                            <li className="text-right"><a href="blog-post-left-sidebar.html">06 comments</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default NewsFeed