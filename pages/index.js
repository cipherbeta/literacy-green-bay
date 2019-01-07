import Layout from '../components/layout';

export default () => {
    return(
        <Layout>
            <section className="hero is-fullheight-with-navbar is-primary is-bold" 
            style={{backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(/static/images/landing/landing.jpg)`}}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img src="/static/images/logo_whitefull.png" style={{marginBottom: '1em'}}/>
                        <h1 className="title">Building a community through language education.</h1>
                        <h2 className="subtitle">We are Literacy Green Bay.</h2>
                    </div>
                </div>
            </section>        
            <section className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-two-thirds">
                            <h1 className="title">Who We Are</h1>
                            <p>
                                Literacy Green Bay's mission is to help adults and families acquire the reading, writing, math, 
                                English language, computer, and workforce skills they need to function effectively as workers 
                                and community members.
                            </p><br/>
                            <p>
                                Literacy Green Bay offers ELL classes, Family Literacy Classes, and Adult Tutoring.  
                                We offer ELL Classes in the mornings and evenings four days a week.  
                                The Children First Family Literacy program is a GED program in collaboration with NWTC 
                                and the Howe Community Resource Center, which provides GED instruction as well as early 
                                childhood learning, parenting, and PACT time.  Students in our Adult Tutoring  program 
                                work one-on-one with volunteer tutors on goals that are specific to their needs 
                                (i.e. improving basic reading skills, speaking better English, studying for GED). 
                            </p>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="is-italic">
                                    "When I came to the United States 10 years ago, I didn't know any English. 
                                    I didn't know how to talk, read, and write. Now I can visit my friends and have conversations with them. 
                                    Little by little I feel more confident speaking in other situations: assisting the teacher in childcare, 
                                    and talking with other people. Actually, I am continuously using English because I need to solve many 
                                    more pieces of the puzzle.”
                                    </p>
                                    
                                </div>
                                <div className="card-footer">
                                <p className="card-footer-item">
                                    Martha (A tutored ELL student)
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </Layout>
    )
}