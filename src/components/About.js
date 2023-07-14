import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <p>第1.0.0編</p>
        <br />
        <p>このアップは覚えたい用事を記録させてもらうアップです。便利ですよね！　ふふふ</p>
        <br />
        <Link to='/'>用事に戻る</Link>
    </div>
  )
}

export default About;