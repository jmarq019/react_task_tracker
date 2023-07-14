import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

  return (
        <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && (
        <Button 
        text={showAdd ? "閉じる" : "✏️ 用事を記録"} 
        color={showAdd ? "gray" :"green"} 
        onClick={onAdd}/>
        )}
    </header>
  )
}

Header.defaultProps = {
    title: '今度の用事',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header