import React from "react"
import Img from "gatsby-image"
import { RichText } from "prismic-reactjs"

const ContentBlock = ({ body, image, alt, ...props }) => {
  console.log(body, props)
  return (
    <div class="portfolio-slice portfolio-slice-content-block mt-4 mb-4">
      <div class="grid-x grid-margin-x align-middle">
        <div class="cell large-6">
          <RichText render={body} />
        </div>
        <div class="cell large-6">
          <Img
            fixed={image.childImageSharp.fixed}
            alt={alt}
            style={{ display: "block" }}
          />
        </div>
      </div>
    </div>
  )
}

export default ContentBlock