"use client"
import { useState } from 'react';

import React from 'react'

const TextExpander = ({children}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText= isExpanded ? children : children.split(" ").slice(0,40).join(" ") + "...";

  return (
    <span>
      {displayText}
      <button onClick={() => setIsExpanded(!isExpanded)} className='text-primary-700 border-b border-primary-700 leading-3 pb-1'>{
      isExpanded ? "Show less" : "Show more"
        }</button>
      </span>
  )
}

export default TextExpander
// function TextExpander({ children }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const displayText = isExpanded
//     ? children
//     : children.split(' ').slice(0, 40).join(' ') + '...';

//   return (
//     <span>
//       {displayText}{' '}
//       <button
//         className='text-primary-700 border-b border-primary-700 leading-3 pb-1'
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {isExpanded ? 'Show less' : 'Show more'}
//       </button>
//     </span>
//   );
// }

// export default TextExpander;
