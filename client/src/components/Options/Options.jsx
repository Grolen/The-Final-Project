import React from 'react'
import styles from './Options.module.scss'
import PropTypes from 'prop-types'
// import CardSmaller from '../CardSmaller/CardSmaller'

const Options = ({ sizeFirst, sizeSecond, changeCardSize }) => {
  return (
    <div className={styles.containerForSize}>
      <span> view </span>
      <span className={styles.sizeChanger} onClick={changeCardSize}>
        {sizeFirst}
      </span>
      <span className={styles.sizeChanger} onClick={changeCardSize}>
        {sizeSecond}
      </span>
    </div>
  )
}

Options.propTypes = {
  sizeFirst: PropTypes.number.isRequired,
  sizeSecond: PropTypes.number.isRequired,
  changeCardSize: PropTypes.func.isRequired,
}

Options.defaultProps = {
  sizeFirst: 2,
  sizeSecond: 4,
}

export default Options
