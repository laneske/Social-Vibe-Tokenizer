// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SocialVibeNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    
    Counters.Counter private _tokenIdCounter;
    
    struct VibeData {
        string tweetText;
        string sentiment;
        uint256 positiveScore;
        uint256 timestamp;
        string twitterHandle;
        string vibeType;
    }
    
    mapping(uint256 => string) private _tokenURIs;
    mapping(uint256 => VibeData) public vibeData;
    mapping(address => uint256[]) public userTokens;
    mapping(string => bool) public mintedTweetHashes;
    
    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public mintFee = 0.001 ether;
    
    event VibeMinted(address indexed to, uint256 tokenId, string sentiment, string vibeType);
    event VibeShared(uint256 tokenId, address from, address to);
    
    constructor() ERC721("SocialVibe", "SVIBE") {}
    
    function mintVibeNFT(
        address to,
        string memory _tokenURI,
        string memory tweetText,
        string memory sentiment,
        uint256 positiveScore,
        string memory twitterHandle,
        string memory vibeType
    ) public payable returns (uint256) {
        require(_tokenIdCounter.current() < MAX_SUPPLY, "Max supply reached");
        require(msg.value >= mintFee, "Insufficient mint fee");
        
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
        
        vibeData[newTokenId] = VibeData({
            tweetText: tweetText,
            sentiment: sentiment,
            positiveScore: positiveScore,
            timestamp: block.timestamp,
            twitterHandle: twitterHandle,
            vibeType: vibeType
        });
        
        userTokens[to].push(newTokenId);
        
        emit VibeMinted(to, newTokenId, sentiment, vibeType);
        return newTokenId;
    }
    
    function freeMint(
        address to,
        string memory _tokenURI,
        string memory tweetText,
        string memory twitterHandle
    ) public onlyOwner returns (uint256) {
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
        
        vibeData[newTokenId] = VibeData({
            tweetText: tweetText,
            sentiment: "POSITIVE",
            positiveScore: 100,
            timestamp: block.timestamp,
            twitterHandle: twitterHandle,
            vibeType: "BOUNTY_FOUNDER"
        });
        
        userTokens[to].push(newTokenId);
        
        emit VibeMinted(to, newTokenId, "POSITIVE", "BOUNTY_FOUNDER");
        return newTokenId;
    }
    
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }
    
    function getUserTokens(address user) public view returns (uint256[] memory) {
        return userTokens[user];
    }
    
    function getVibeData(uint256 tokenId) public view returns (VibeData memory) {
        require(_exists(tokenId), "Token does not exist");
        return vibeData[tokenId];
    }
    
    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter.current();
    }
    
    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
    
    function _exists(uint256 tokenId) internal view override returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }
}
