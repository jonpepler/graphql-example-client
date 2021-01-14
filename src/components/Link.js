import PropTypes from 'prop-types'

const Link = ({ link }) => (
    <div>
      <div>
        {link.description}
      </div>
      <div>
        {link.url}
      </div>
    </div>
)

Link.propTypes = {
  link: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string
  })
}

export default Link
