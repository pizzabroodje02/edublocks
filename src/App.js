import {ConnectWallet, useValidDirectListings, useContract, ThirdwebNftMedia } from "@thirdweb-dev/react";
import "./styles/Home.css";

const contractAddress = "0x99A50fCc9a5d00409d900892754502Ea1128a0a1"
export default function Home() {
  const { contract } = useContract(
      contractAddress,
      "marketplace-v3"
  )
  const {data: nfts, isLoading} = useValidDirectListings(contract);
  console.log(nfts, isLoading)
  return (
    <div className="container">
      <main className="main">
        <h1>EduBlocks Catalogue</h1>
        <ConnectWallet/>
        {!isLoading ? (
            <div>
              {nfts && nfts.map((nft) => {
                return (
                    <div key={nft.id}> {nft.asset.name}</div>
                );
              })}
            </div>
        ) : (
            <div>Loading...</div>
        )}






      </main>
    </div>
  );
}
