import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={560}
    viewBox="0 0 350 560"
    backgroundColor="#ffffff"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="215" y="197" rx="0" ry="0" width="1" height="0" /> 
    <rect x="60" y="15" rx="0" ry="0" width="200" height="30" /> 
    <circle cx="36" cy="31" r="16" /> 
    <rect x="25" y="60" rx="0" ry="0" width="235" height="447" /> 
    <rect x="159" y="522" rx="0" ry="0" width="100" height="20" /> 
    <rect x="205" y="183" rx="0" ry="0" width="0" height="1" />
  </ContentLoader>
)

export default MyLoader
