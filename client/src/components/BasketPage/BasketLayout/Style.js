const basketLayoutStyle = {
  div: {
    position: 'fixed',
    backgroundColor: '#FFFFFF',
    width: '40%',
    height: '100vh',
    top: 0,
    right: 0,
    zIndex: 100000000,
  },
  div2: {
    overflow: 'hidden',
    margin: '2rem 2rem 10px 2rem',
  },
  div3: {
    overflow: 'hidden',
    border: '1px solid #3F3F3F',
    maxHeight: '61px',
  },
  h4: {
    fontSize: '1.25rem',
    fontStyle: 'Regular',
    textAlign: 'center',
    fonWeight: '700',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursorPointer: 'none',
  },
  p: {
    fontSize: '1.25rem',
    fontStyle: 'Regular',
    textAlign: 'center',
    fonWeight: '400',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursorPointer: 'none',
    '&:hover': {
      color: '#FFFFFF',
    },
  },
}

export default basketLayoutStyle
