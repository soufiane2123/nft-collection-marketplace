import type { NextPage } from "next";
import NextLink from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import { useContract, useNFTs } from "@thirdweb-dev/react";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import NFTGrid from "../components/NFT/NFTGrid";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <Container>
            <br />
            <br />
            <br />
            <br />
            <h1>Buy Cool Men NFTs</h1>
            {/* <p>Browse which NFTs are available from the collection.</p> */}
            <NFTGrid
              data={data}
              isLoading={isLoading}
              emptyText={"Looks like there are no NFTs in this collection."}
            />
          </Container>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
