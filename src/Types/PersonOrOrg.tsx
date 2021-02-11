import { PersonProps } from '../Person/Person'
import { OrgProps } from '../Organization/Organization'

type PersonOrOrganization = PersonProps | OrgProps

export default PersonOrOrganization
