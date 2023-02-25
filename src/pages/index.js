import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby'

import SimpleGallery from '../components/SimpleGalery';
import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from 'styled-components';


export const query = graphql`
query {


artblocks {
  projects(
    where: {artistName:"Tyler Hobbs"}
  ) {
    name
    id
    projectId
    artistName
    description
    baseUri
    baseIpfsUri
    website
    useIpfs
    pricePerTokenInWei
    tokens {
      id
      tokenId
      invocation
      uri
    }
  }

}

  }
`

const IndexPage = ({ data }) => {

  let allTokens = data.artblocks.projects[1].tokens;
  let tokenIds = allTokens.map(token => token.tokenId);
  const newTokens = tokenIds.splice(0,20);

  const [tokens, setTokens] = useState(newTokens);

  useEffect(() => {

    const handleScroll = event => {      
      // If the sum of scrollY and innerHeight is greater or equal to the scrollHeight, it means we have reached the end of the document, and we need to load more images.
      if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages();
      }
    };

    function loadImages() {
      console.log('load images');
      const newPart = tokenIds.splice(0,20);
      const newTokens = tokens.concat(newPart);
      console.log(tokens);
      console.log(newTokens);
      // setTokens(newTokens);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // const tokens = data.artblocks.projects[1].tokens;
  // 
  // let selectedTokens = tokenIds; // [];
  // for (let i = 0; i < 20; i++) {
  //   const token = tokenIds[Math.floor(Math.random() * tokenIds.length)];
  //   selectedTokens.push(token);
  // }  

  const mediaUrlLarge = "https://media.artblocks.io/";
  const mediaUrl = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_400,q_auto/https://artblocks-mainnet.s3.amazonaws.com/";
  const mediaUrlSmall = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_400,q_auto/https://artblocks-mainnet.s3.amazonaws.com/";

  // const artblockImageUrls = selectedTokens.map((tokenId) => (mediaUrl + tokenId + '.png'));
  // const artblockImageLargeUrls = selectedTokens.map((tokenId) => (mediaUrlLarge + tokenId + '.png'));

  const images = tokens.map((tokenId, i) => {

    let url = mediaUrl;
    let height = 2400;
    let width = 2000;
    // if (i == 0) {
    //   url = mediaUrlSmall;
    //   height = 4800;
    //   width = 4000;
    // }

    return {
      thumbnailURL: url + tokenId + '.png',
      largeURL: mediaUrlLarge + tokenId + '.png',
      height,
      width,
    }
  });
  console.log(images);


  return <Layout>
    <Seo title="Home" />
    <div>
      <SimpleGallery
        galleryID="my-gallery"
        images={images}
      />
    </div>

  </Layout>
}


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

