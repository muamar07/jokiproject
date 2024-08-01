import { Outlet, Link, useLocation } from 'react-router-dom'

interface BreadcrumbProps {
  paths: {
    path: string
    name: string
  }[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  const location = useLocation()

  return (
    <div className='text-sm breadcrumbs py-8'>
      <ul>
        {paths.map(({ path, name }, index) => {
          const isLast = index === paths.length - 1
          const to = isLast ? location.pathname : path

          return (
            <li
              key={path}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? name : <Link to={to}>{name}</Link>}
            </li>
          )
        })}
      </ul>
      <Outlet />
    </div>
  )
}

export default Breadcrumb