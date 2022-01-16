import { Fragment } from "react"
import PropTypes from "prop-types";

const Tag = ({tag}) => {
    return(
        <Fragment>
            <p className="tag-text">{tag}</p>
        </Fragment>
    )
}

Tag.protoTypes = {
    tag: PropTypes.string
}

export default Tag