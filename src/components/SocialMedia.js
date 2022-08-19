import React from 'react';
function SocialMedia(props) {
 return (
  <a href={props.href}>
   <img src={props.imageUrl} alt={props.alt} />
  </a>
 );
}
export default SocialMedia;
