import  React from "react";
import PropTypes from "prop-types";
import caret_down from '../../assets/logos/caret_down.png'

// using class based component here, for it needs its own state
// and has event handlers
class CollapsingBlock extends React.Component  {

    constructor(props) {
        super(props);

        // Here : ideally, block content passed as prop by parent(s)
        // issue : might be array or string depending on parent -
            // const {blockContent, setBlockContent} = props;
            // setBlockContent(blockContent, this.props.blockContent)
            /*  if ( props.isArray()){ console.log('IS ARRAY')}
            else { console.log('IS STRING')} */
        
        this.state = { blockDisplay: false};
        this.toggle = this.toggle.bind(this); /* binding event to constructor */
        this.blockRef = React.createRef(); /* create anchor to dom element */
    }
    
    toggle(){ 
        this.setState((currentState) => ({ blockDisplay: !currentState.blockDisplay}));
        this.blockRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    
    render() {
        
        return (
            <div ref={this.blockRef} className="collapsBlock collapsBlock-wrapper">
                <div className="collapsBlock__header">
                    <h4>{this.props.blockTitle}</h4>
                    <div className="collapsBlock__header__caret-wrapper">
                        <img className = {this.state.blockDisplay? 'up': null} src={caret_down} alt="caret logo open" onClick={this.toggle}></img>
                    </div>
                </div>

                {this.state.blockDisplay?(
                    <div className="collapsBlock__body--active">
                        { this.props.description ? ( <p>{this.props.description}</p> ):
                        
                        this.props.equipments?(
                            <ul>
                                {this.props.equipments.map((item) => (
                                    <li key={Math.random()} item={item}><p>{item}</p></li> ))}
                            </ul>
                        ):(null) }

                    </div>
                ):( 
                    <div className="collapsBlock__body"></div> // necessary for css transition
                )}
            </div>
        )
    }
}

CollapsingBlock.propTypes = {
    blockContent: PropTypes.string,
    blockTitle: PropTypes.string,

    description: PropTypes.string,
    equipment: PropTypes.array

}

export default CollapsingBlock