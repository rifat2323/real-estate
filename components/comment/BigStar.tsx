import { FaStar } from 'react-icons/fa6'

const BigStar = ({percentage}:{percentage:number}) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '150px', height: '150px' }}>
    {/* Empty Star */}
    <FaStar style={{ color: '#ccc', fontSize: '150px' }} />
    
    {/* Filled Star */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${percentage}%`,
        height: '100%',
        overflow: 'hidden',
        color: 'gold',
      }}
    >
      <FaStar style={{ fontSize: '150px' }} />
    </div>
  </div>
  )
}

export default BigStar