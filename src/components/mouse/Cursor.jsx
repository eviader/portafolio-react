import "../mouse/Cursor.css"
import React, {useEffect, useRef} from "react";

function Cursor() {
    const customCursorRef = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        if (customCursorRef.current) {
          customCursorRef.current.style.left = e.clientX + 'px'
          customCursorRef.current.style.top = e.clientY + 'px'
        }
      }
      document.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        }
        }, [])


    return (
      <div ref={customCursorRef} className="custom-cursor"></div>
    )
  }
  
  export default Cursor;
