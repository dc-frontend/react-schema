# React Schema.org

Set of helper classes to generate json-ld for a react application.
Recommended to be used in SSR rendered websites or where treeshaking will remove unused code.


## Example Usage

Simple object:

    import { WebSite } from '@davidcraig/react-schema'
    <WebSite
      name='My Website'
      description='Personal website for Me'
    />

With nested properties (using json) (not recommended):

    import { WebSite } from '@davidcraig/react-schema
    <WebSite
      name='Your Name'
      description='Personal website for Your Name'
      about={{
        type: 'Person', name: 'Your Name', url: 'https://dcraig.dev'
      }}
    />

With generated json from nested modules:
Each class exports the Json builder, these methods should also be chainable

    import { WebSite } from '@davidcraig/react-schema
    import { PersonJson } from '@davidcraig/react-schema/dist/Person/Person'
    <WebSite
      name='Your Name'
      description='Personal website for Your Name'
      about={
        PersonJson({
          name: 'Your Name'
        })
      }
    />
