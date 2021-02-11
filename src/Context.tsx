import React from 'react'

function Context(json) {
  json['@context'] = 'https://schema.org';

  return json
}

export default Context
