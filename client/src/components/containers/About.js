import CollapsingBlock from '../elements/CollapsingBlock'
import about from '../../data/about.json';

const About = () => {

    return (
        <section className="aboutPage-wrapper page">
            <div className="banner-pic banner-pic__about"></div>
            <div className="about-sections">
                { about.about.map(i => (
                    <CollapsingBlock key={i.title} blockTitle={i.title} description={i.description} />
                ))}
                
            </div>
        </section>
    )
}
export default About
