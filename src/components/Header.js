import React from 'react'
import PropTypes from 'prop-types'

import '../styles/components/Header.pcss'

const Header = ({ setSchema, schemaURL, setSchemaURL }) => {
  return (
    <header className="Header">
      <div className="headerContent">
        <h1>
          <a href="/">Wir lernen Online</a>
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            localStorage.setItem('schemaURL', schemaURL)
            setSchema(schemaURL)
          }}
        >
          <input
            type="url"
            list="schemas"
            id="schemaURL"
            name="schemaURL"
            placeholder="Schema URL"
            className="inputStyle"
            value={schemaURL}
            onChange={(e) => setSchemaURL(e.target.value)}
          />

          <datalist id="schemas">
            <option value="https://raw.githubusercontent.com/dini-ag-kim/oer-metadata-schemas/master/course.json" />
            <option value="https://raw.githubusercontent.com/dini-ag-kim/oer-metadata-schemas/master/service-card.json" />
          </datalist>

          <input
            type="submit"
            value="Load Schema"
            className="alternativeButton"
          />
        </form>
      </div>

      <div className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 279.24"
          preserveAspectRatio="none">
          <path
            d="M1000 0S331.54-4.18 0 279.24h1000z"
            opacity=".25"
          />
          <path
            d="M1000 279.24s-339.56-44.3-522.95-109.6S132.86 23.76 0 25.15v254.09z"
          />
        </svg>
      </div>

    </header>
  )
}

Header.propTypes = {
  schemaURL: PropTypes.string,
  setSchema: PropTypes.func.isRequired,
  setSchemaURL: PropTypes.func.isRequired
}

export default Header
