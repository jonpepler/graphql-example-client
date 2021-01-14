import { useQuery, gql } from '@apollo/client'
import Link from './Link'

const LinkList = () => {
  const query = gql`
    {
      feed {
        links {
          id
          url
          description
        }
      }
    }
  `
  const { data } = useQuery(query)

  return (
    <div>
      {data && data.feed.links.map(link => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  )
}

export default LinkList
