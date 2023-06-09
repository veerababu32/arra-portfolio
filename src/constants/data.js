import InviteImg from "../assets/images/invite-img.png";
import Daniel from "../assets/images/daniel-img.png";
import Cody from "../assets/images/cody-img.png";
import Bitcoin from "../assets/images/Group-284-image.png";
import Republic from "../assets/images/Group-285-image.png";
import ETF from "../assets/images/Group-286-image.png";
import StockMarketArrow from "../assets/images/stock-market-arrow.png";
import CarouselImg from "../assets/images/carousel-img.png";
import mainRoadImg from "../assets/images/main-road.png";
import mallStoreFront from "../assets/images/mall-storefront.png";
import mallPlaza from "../assets/images/mall-plaza.png";
import largeMallEstate from "../assets/images/large-mall-estate.png";
import sideShop from "../assets/images/side-shop.png";
import mallStoreFrontOne from "../assets/images/mall-storefront-one.png";
import mallPlazaOne from "../assets/images/mall-plaza-one.png";
import largeMallEstateOne from "../assets/images/large-mall-state-one.png";

const sideBarData = [
  {
    name: "home",
    tabsData: [
      { id: "s1", name: "All Assets" },
      { id: "s2", name: "Top Stories" },
      { id: "s3", name: "Guides & Tutorials" },
      { id: "s4", name: "Help" },
    ],
  },
  {
    name: "dashboard",
    tabsData: [
      { id: "s5", name: "Portfolio" },
      { id: "s6", name: "Performance" },
      { id: "s7", name: "Import Assets" },
      { id: "s8", name: "For You" },
      { id: "s9", name: "Learn & Earn" },
      { id: "s10", name: "Notifications" },
      { id: "s11", name: "Invite Friends" },
    ],
  },
  {
    name: "leaderboards",
    tabsData: [
      { id: "s12", name: "Virtual Land" },
      { id: "s13", name: "Real Estate NFTS" },
      { id: "s14", name: "Crowdfunding" },
      { id: "s15", name: "Phyrtual-Hybrid" },
    ],
  },
  {
    name: "community",
    tabsData: [
      { id: "s16", name: "News Feed" },
      { id: "s17", name: "Trending" },
      { id: "s18", name: "My Groups" },
      { id: "s19", name: "My Pages" },
      { id: "s20", name: "My Chat" },
      { id: "s21", name: "Support" },
    ],
  },
  {
    name: "tools",
    tabsData: [
      { id: "s22", name: "Compare" },
      { id: "s23", name: "Portfolio Builder" },
    ],
  },
  {
    name: "browse",
    tabsData: [
      { id: "s24", name: "Listings" },
      { id: "s25", name: "My Store" },
    ],
  },
];

const navbarTabs = [
  { tabId: 31, name: "Home", link: "" },
  { tabId: 32, name: "Dashboard", link: "dashboard" },
  { tabId: 33, name: "Leaderboards", link: "leaderboards" },
  { tabId: 34, name: "Community", link: "community" },
  { tabId: 35, name: "Tools", link: "tools" },
  { tabId: 36, name: "Browse", link: "browse" },
];

const homeCardsData = [
  {
    card: "one",
    title: "Physical Assets",
    bgColor: "#c7bcdd",
    name: "Crowsfunded & Tokenization Assets",
    subName: "Recent Transactions",
    tableTitleOne: "Name",
    tableTitleTwo: "Price",
    tableTitleThree: "Chanee",
    tableData: [
      {
        tableId: "1a",
        tableBodyTitle: "SmartCrowd",
        tableBodySubTitle: "SMRTCRWD",
        tableBodyPrice: "2.56",
        tableBodyChanee: "+13.65",
      },
      {
        tableId: "1b",
        tableBodyTitle: "GetStake",
        tableBodySubTitle: "GSTKD",
        tableBodyPrice: "19.43",
        tableBodyChanee: "+11.19",
      },
      {
        tableId: "1c",
        tableBodyTitle: "Aqarchain",
        tableBodySubTitle: "AQAR",
        tableBodyPrice: "8.93",
        tableBodyChanee: "-6.955",
      },
    ],
  },
  {
    card: "two",
    title: "Virtual Digital Assets",
    bgColor: "#ffefbd",
    name: "Metaverse, Web3 & Gaming Platforms",
    subName: "Recent Transactions",
    tableTitleOne: "Name",
    tableTitleTwo: "Price",
    tableTitleThree: "Chanee",
    tableData: [
      {
        tableId: "1d",
        tableBodyTitle: "SmartCrowd",
        tableBodySubTitle: "SMRTCRWD",
        tableBodyPrice: "2.56",
        tableBodyChanee: "+13.65",
      },
      {
        tableId: "1e",
        tableBodyTitle: "GetStake",
        tableBodySubTitle: "GSTKD",
        tableBodyPrice: "19.43",
        tableBodyChanee: "+11.19",
      },
      {
        tableId: "1f",
        tableBodyTitle: "Aqarchain",
        tableBodySubTitle: "AQAR",
        tableBodyPrice: "8.93",
        tableBodyChanee: "-6.955",
      },
    ],
  },
  {
    card: "three",
    title: "Phyrtual-Hybrid Assets",
    name: "Physical to Digital Link",
    subName: "Recent Transactions",
    tableTitleOne: "Name",
    tableTitleTwo: "Price",
    tableTitleThree: "Chanee",
    tableData: [
      {
        tableId: "1g",
        tableBodyTitle: "SmartCrowd",
        tableBodySubTitle: "SMRTCRWD",
        tableBodyPrice: "2.56",
        tableBodyChanee: "+13.65",
      },
      {
        tableId: "1h",
        tableBodyTitle: "GetStake",
        tableBodySubTitle: "GSTKD",
        tableBodyPrice: "19.43",
        tableBodyChanee: "+11.19",
      },
      {
        tableId: "1i",
        tableBodyTitle: "Aqarchain",
        tableBodySubTitle: "AQAR",
        tableBodyPrice: "8.93",
        tableBodyChanee: "-6.955",
      },
    ],
  },
];

const homeTopStoriesData = [
  {
    name: "Top Stories",
    cardData: [
      {
        cardId: "1j",
        subTitle: "News",
        date: "May14",
        title: "Major Increase In Bitcoin Trading Volume",
        img: Bitcoin,
        alt: "bitcoin",
        desc: "A significant amount of bitcoin changed hands on the United States’ most dominant spot exchange, Coinbase, as investors look to buy the dip.",
      },
      {
        cardId: "1k",
        subTitle: "News",
        date: "May11",
        title:
          "‘Unlike Republicans, we recognize that there is real risk’ to stablecoins and crypto, says Senate Banking Committee chairmans",
        img: Republic,
        alt: "republic",
        desc: "",
      },
      {
        cardId: "1l",
        subTitle: "News",
        date: "May4",
        title: "What is an ETF?",
        img: ETF,
        alt: "etf",
        desc: "Exchange-traded funds — better known as an ETFs — are similar in many ways to mutual funds.",
      },
    ],
  },
];

const dashboardYourAssets = [
  {
    name: "Your Assets",
    data: [
      {
        num: "one",
        title: "1.25 BTC",
        subTitle: "$2,4506",
        description: "Physical Real Estate",
        subDes: "+0.34%",
      },
      {
        num: "two",
        title: "0.32 LTC",
        subTitle: "$2,4506",
        description: "Metaverse Lands",
        subDes: "+0.34%",
      },
      {
        num: "three",
        title: "1.25 ETH",
        subTitle: "$2,4506",
        description: "Digital Assets",
        subDes: "+0.34%",
      },
      {
        num: "four",
        title: "6.73 BTC",
        subTitle: "$5,121.17",
        description: "Other Assets",
        subDes: "+0.34%",
      },
    ],
  },
];

const dashboardPerformanceTable = [
  {
    name: "Performance",
    firstSelector: "24h",
    secondSelector: "Top Gainer",
    tableTitleOne: "Name",
    tableTitleTwo: "Price",
    tableTitleThree: "Chanee",
    tableTitleFour: "Market Cap",
    tableTitleFive: "Watch",
    tableData: [
      {
        id: "one",
        icon: "SmartCrowd",
        iconName: "SmartCrowd",
        iconSubTitle: "SMARTCRWD",
        price: "$2.56",
        chanee: "+13.56%",
        marketCap: "$400.8M",
      },
      {
        id: "two",
        icon: "GetStake",
        iconName: "GetStake",
        iconSubTitle: "GSTKD",
        price: "$10.43",
        chanee: "+11.19%",
        marketCap: "$400.8M",
      },
      {
        id: "three",
        icon: "Aqarchain",
        iconName: "Aqarchain",
        iconSubTitle: "AQAR",
        price: "$8.93",
        chanee: "-6.94%",
        marketCap: "$400.8M",
      },
      {
        id: "four",
        icon: "BsMeta",
        iconName: "Meta",
        iconSubTitle: "META",
        price: "$2.56",
        chanee: "-2.45%",
        marketCap: "$400.8M",
      },
      {
        id: "five",
        icon: "VelChain",
        iconName: "VelChain",
        iconSubTitle: "VET",
        price: "$112.14",
        chanee: "+6.80%",
        marketCap: "$400.8M",
      },
      {
        id: "six",
        icon: "AAVE",
        iconName: "AaVe",
        iconSubTitle: "AAVE",
        price: "$32.18",
        chanee: "+3.76%",
        marketCap: "$400.8M",
      },
    ],
  },
];

const dashboardInviteData = [
  {
    title: "Get $10 in free real estate",
    subTitle: "Give a friend the gift of free real estate",
    description:
      "Invite a friend to araa & you'll both receive in free real estate assets when they buy or sell their first $100 on",
    img: InviteImg,
    subDes: "Only certain users can accept your invitation",
    terms: "View Terms & Conditions",
  },
];

const leaderboardsTableData = [
  {
    title: "Virtual Land & Real Estate/NFTS (BsMetaverse/Web3/Gaming)",
    bgColor: "#ffefbd",
    color: "black",
    data: [
      {
        id: 1,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 2,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 3,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 4,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 5,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
    ],
  },
  {
    title: "Crowdfunding Market",
    bgColor: "#c7bcdd",
    color: "black",
    data: [
      {
        id: 1,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 2,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 3,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 4,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
    ],
  },
  {
    title: "Phyrtual-Hybrid Market",
    bgColor: "#c3fcce",
    color: "black",
    data: [
      {
        id: 1,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 2,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 3,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
      {
        id: 4,
        icon: "BsMeta",
        iconName: "Arra",
        iconSubTitle: "+2.54%",
        marketCap: "446,517,68",
        floor: "243",
        "1D vol": 7266,
        "1D%": "-55.2%",
        "7D Vol": "972.9%",
        "7D%": "-52.61",
        owners: "7.1k",
      },
    ],
  },
];

const communityStoriesData = [
  {
    id: 6,
    name: "Your Story",
    img: Daniel,
  },
  {
    id: 7,
    name: "Cody Fisher",
    img: Cody,
  },
  {
    id: 8,
    name: "Your Story",
    img: Daniel,
  },
  {
    id: 9,
    name: "Cody Fisher",
    img: Cody,
  },
  {
    id: 10,
    name: "Your Story",
    img: Daniel,
  },
  {
    id: 11,
    name: "Cody Fisher",
    img: Cody,
  },
  {
    id: 12,
    name: "Your Story",
    img: Daniel,
  },
  {
    id: 13,
    name: "Cody Fisher",
    img: Cody,
  },
  {
    id: 14,
    name: "Your Story",
    img: Daniel,
  },
  {
    id: 15,
    name: "Cody Fisher",
    img: Cody,
  },
];

const communityDanielAccordian = [
  {
    id: 16,
    name: "Daniel Saliba",
    img: Daniel,
    carouselImg: CarouselImg,
    location: "Dubai UAE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const communityDanielInfo = [
  {
    id: 17,
    name: "Daniel Saliba",
    img: Daniel,
    mail: "@danielsaliba",
    location: "Dubai UAE",
    posts: "2.6k",
    following: 1050,
    followers: 2400,
  },
];

const communityTrendingData = [
  {
    id: 18,
    title: "Trending News",
    btn: "View All",
    data: [
      {
        title: "Crypto Big Losses...",
        description: "Read More",
        img: StockMarketArrow,
      },
      {
        title: "Bitcoin Make S&P No. 1",
        description: "Read More",
        img: StockMarketArrow,
      },
      { title: "#Crypto", description: "Ethereum", img: StockMarketArrow },
    ],
  },
  {
    id: 19,
    title: "Trending Groups",
    btn: "View All",
    data: [
      {
        title: "#AraaRealEstate",
        description: "1040 Posts",
        img: StockMarketArrow,
      },
      { title: "#Games", description: "547 Posts", img: StockMarketArrow },
      { title: "#Crypto", description: "Ethereum", img: StockMarketArrow },
    ],
  },
];

const toolsTabsData = [
  {
    tabName: "Compare Platforms",
    tabId: "comparePlatforms",
    toolsTabData: [
      {
        searchName: "Search Any",
        firstBtnName: "Add Platforms",
        secondBtnName: "Add Matrics",
        filterData: [
          {
            labelName: "PRICE PER SQM",
            option: "$0 - $10,000",
          },
          {
            labelName: "IRR COMPARISONS",
            option: "$0 - $10,000",
          },
          {
            labelName: "RETURN CALCULATOR",
            option: "Select Currency",
          },
          {
            labelName: "TRENDING CITIES",
            option: "Select City",
          },
          {
            labelName: "ASSETS CLASS COMPARISONS",
            option: "Select Asset Class",
          },
        ],
        boxDataName: "CRITERIA",
        creteriaData: [
          {
            id: "switchOne",
            check: true,
            name: "checkbox1",
            labelName: "Blockchain",
          },
          {
            id: "switchTwo",
            check: true,
            name: "checkbox2",
            labelName: "NFTS",
          },
          {
            id: "switchThree",
            check: true,
            name: "checkbox3",
            labelName: "Security",
          },
          {
            id: "switchFour",
            check: true,
            name: "checkbox4",
            labelName: "IRR",
          },
          {
            id: "switchFive",
            check: true,
            name: "checkbox5",
            labelName: "Locked Period Between X & Y",
          },
          {
            id: "switchSix",
            check: true,
            name: "checkbox6",
            labelName: "Annual Yield Between X & Y",
          },
        ],
      },
    ],
  },
  {
    tabName: "Compare Virtual Lands",
    tabId: "compareVirtualLands",
    toolsTabData: [
      {
        searchName: "Search Any",
        firstBtnName: "Add Platforms",
        secondBtnName: "Add Matrics",
        filterData: [
          {
            labelName: "PRICE PER SQM",
            option: "$0 - $10,000",
          },
          {
            labelName: "IRR COMPARISONS",
            option: "$0 - $10,000",
          },
          {
            labelName: "RETURN CALCULATOR",
            option: "Select Currency",
          },
          {
            labelName: "TRENDING CITIES",
            option: "Select City",
          },
          {
            labelName: "ASSETS CLASS COMPARISONS",
            option: "Select Asset Class",
          },
        ],
        boxDataName: "CRITERIA",
        creteriaData: [
          {
            id: "switchSeven",
            name: "checkbox7",
            labelName: "Blockchain",
          },
          {
            id: "switchEight",
            name: "checkbox8",
            labelName: "NFTS",
          },
          {
            id: "switchNine",
            name: "checkbox9",
            labelName: "Security",
          },
          {
            id: "switchTen",
            name: "checkbox10",
            labelName: "IRR",
          },
          {
            id: "switchEleven",
            name: "checkbox11",
            labelName: "Locked Period Between X & Y",
          },
          {
            id: "switchTwleve",
            name: "checkbox12",
            labelName: "Annual Yield Between X & Y",
          },
        ],
      },
    ],
  },
  {
    tabName: "Compare Crowd Funded Assets",
    tabId: "compareCrowdFundedAssets",
    toolsTabData: [
      {
        searchName: "Search Any",
        firstBtnName: "Add Platforms",
        secondBtnName: "Add Matrics",
        filterData: [
          {
            labelName: "PRICE PER SQM",
            option: "$0 - $10,000",
          },
          {
            labelName: "IRR COMPARISONS",
            option: "$0 - $10,000",
          },
          {
            labelName: "RETURN CALCULATOR",
            option: "Select Currency",
          },
          {
            labelName: "TRENDING CITIES",
            option: "Select City",
          },
          {
            labelName: "ASSETS CLASS COMPARISONS",
            option: "Select Asset Class",
          },
        ],
        boxDataName: "CRITERIA",
        creteriaData: [
          {
            id: "switchThirteen",
            name: "checkbox13",
            labelName: "Blockchain",
          },
          {
            id: "switchFourteen",
            name: "checkbox14",
            labelName: "NFTS",
          },
          {
            id: "switchFifteen",
            name: "checkbox15",
            labelName: "Security",
          },
          {
            id: "switchSixteen",
            name: "checkbox16",
            labelName: "IRR",
          },
          {
            id: "switchSeventeen",
            name: "checkbox17",
            labelName: "Locked Period Between X & Y",
          },
          {
            id: "switchEighteen",
            name: "checkbox18",
            labelName: "Annual Yield Between X & Y",
          },
        ],
      },
    ],
  },
];

const toolsTableData = [
  {
    colsData: [
      {
        dataId: "pt1",
        name: "Araa",
        subName: "+2.54%",
        annualReturn: "7.54%",
        return3Y: "2.28%",
        classification: "Developed Markets",
        minInvestment: "CAD $1,570.90",
      },
      {
        dataId: "pt2",
        name: "Araa",
        subName: "+2.54%",
        annualReturn: "7.54%",
        return3Y: "2.28%",
        classification: "Developed Markets",
        minInvestment: "CAD $1,570.90",
      },
      {
        dataId: "pt3",
        name: "Araa",
        subName: "+2.54%",
        annualReturn: "7.54%",
        return3Y: "2.28%",
        classification: "Developed Markets",
        minInvestment: "CAD $1,570.90",
      },
      {
        dataId: "pt4",
        name: "Araa",
        subName: "+2.54%",
        annualReturn: "7.54%",
        return3Y: "2.28%",
        classification: "Developed Markets",
        minInvestment: "CAD $1,570.90",
      },
      {
        dataId: "pt5",
        name: "Araa",
        subName: "+2.54%",
        annualReturn: "7.54%",
        return3Y: "2.28%",
        classification: "Developed Markets",
        minInvestment: "CAD $1,570.90",
      },
      {
        dataId: "pt6",
        name: "Araa",
        subName: "+2.54%",
        annualReturn: "7.54%",
        return3Y: "2.28%",
        classification: "Developed Markets",
        minInvestment: "CAD $1,570.90",
      },
    ],
  },
];

const browseData = [
  {
    tabName: "Virtual Land",
    tabId: "virtualLand",
    browseTabData: [
      {
        searchName: "Search Any",
        firstBtnName: "RECENTLY CLOSED",
        secondBtnName: "ON SALE",
        filterData: [
          {
            labelName: "COLLECTION",
            option: "All Collection",
          },
          {
            labelName: "PRICE RANGE",
            option: "$0 - $15,000,000",
          },
          {
            labelName: "LOCATION",
            option: "International",
          },
          {
            labelName: "CURRENCY",
            option: "Ethereum",
          },
          {
            labelName: "CATEGORIES",
            option: "Estates",
          },
        ],
        boxDataName: "RARITY",
        rarityData: [
          {
            name: "Common",
          },
          {
            name: "Uncommon",
          },
          {
            name: "Rare",
          },
          {
            name: "Epic",
          },
          {
            name: "Legendary",
          },
          {
            name: "Mythic",
          },
          { name: "Unique" },
        ],
      },
    ],
    browseCardData: [
      {
        cardId: "card1",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: mainRoadImg,
      },
      {
        cardId: "card2",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFront,
      },
      {
        cardId: "card3",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlaza,
      },
      {
        cardId: "card4",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstate,
      },
      {
        cardId: "card5",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: sideShop,
      },
      {
        cardId: "card6",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFrontOne,
      },
      {
        cardId: "card7",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlazaOne,
      },
      {
        cardId: "card8",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstateOne,
      },
    ],
  },
  {
    tabName: "Crowdfunding",
    tabId: "crowdFunding",
    browseTabData: [
      {
        searchName: "Search Any",
        firstBtnName: "RECENTLY CLOSED",
        secondBtnName: "ON SALE",
        filterData: [
          {
            labelName: "COLLECTION",
            option: "All Collection",
          },
          {
            labelName: "PRICE RANGE",
            option: "$0 - $15,000,000",
          },
          {
            labelName: "LOCATION",
            option: "International",
          },
          {
            labelName: "CURRENCY",
            option: "Ethereum",
          },
          {
            labelName: "CATEGORIES",
            option: "Estates",
          },
        ],
        boxDataName: "RARITY",
        rarityData: [
          {
            name: "Common",
          },
          {
            name: "Uncommon",
          },
          {
            name: "Rare",
          },
          {
            name: "Epic",
          },
          {
            name: "Legendary",
          },
          {
            name: "Mythic",
          },
          { name: "Unique" },
        ],
      },
    ],
    browseCardData: [
      {
        cardId: "card9",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: mainRoadImg,
      },
      {
        cardId: "card10",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFront,
      },
      {
        cardId: "card11",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlaza,
      },
      {
        cardId: "card12",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstate,
      },
      {
        cardId: "card13",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: sideShop,
      },
      {
        cardId: "card14",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFrontOne,
      },
      {
        cardId: "card15",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlazaOne,
      },
      {
        cardId: "card16",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstateOne,
      },
    ],
  },
  {
    tabName: "NFTS",
    tabId: "nfts",
    browseTabData: [
      {
        searchName: "Search Any",
        firstBtnName: "RECENTLY CLOSED",
        secondBtnName: "ON SALE",
        filterData: [
          {
            labelName: "COLLECTION",
            option: "All Collection",
          },
          {
            labelName: "PRICE RANGE",
            option: "$0 - $15,000,000",
          },
          {
            labelName: "LOCATION",
            option: "International",
          },
          {
            labelName: "CURRENCY",
            option: "Ethereum",
          },
          {
            labelName: "CATEGORIES",
            option: "Estates",
          },
        ],
        boxDataName: "RARITY",
        rarityData: [
          {
            name: "Common",
          },
          {
            name: "Uncommon",
          },
          {
            name: "Rare",
          },
          {
            name: "Epic",
          },
          {
            name: "Legendary",
          },
          {
            name: "Mythic",
          },
          { name: "Unique" },
        ],
      },
    ],
    browseCardData: [
      {
        cardId: "card17",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: mainRoadImg,
      },
      {
        cardId: "card18",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFront,
      },
      {
        cardId: "card19",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlaza,
      },
      {
        cardId: "card20",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstate,
      },
      {
        cardId: "card21",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: sideShop,
      },
      {
        cardId: "card22",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFrontOne,
      },
      {
        cardId: "card23",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlazaOne,
      },
      {
        cardId: "card24",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstateOne,
      },
    ],
  },
  {
    tabName: "Tokenization",
    tabId: "tokeniZation",
    browseTabData: [
      {
        searchName: "Search Any",
        firstBtnName: "RECENTLY CLOSED",
        secondBtnName: "ON SALE",
        filterData: [
          {
            labelName: "COLLECTION",
            option: "All Collection",
          },
          {
            labelName: "PRICE RANGE",
            option: "$0 - $15,000,000",
          },
          {
            labelName: "LOCATION",
            option: "International",
          },
          {
            labelName: "CURRENCY",
            option: "Ethereum",
          },
          {
            labelName: "CATEGORIES",
            option: "Estates",
          },
        ],
        boxDataName: "RARITY",
        rarityData: [
          {
            name: "Common",
          },
          {
            name: "Uncommon",
          },
          {
            name: "Rare",
          },
          {
            name: "Epic",
          },
          {
            name: "Legendary",
          },
          {
            name: "Mythic",
          },
          { name: "Unique" },
        ],
      },
    ],
    browseCardData: [
      {
        cardId: "card25",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: mainRoadImg,
      },
      {
        cardId: "card26",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFront,
      },
      {
        cardId: "card27",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlaza,
      },
      {
        cardId: "card28",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstate,
      },
      {
        cardId: "card29",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: sideShop,
      },
      {
        cardId: "card30",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFrontOne,
      },
      {
        cardId: "card31",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlazaOne,
      },
      {
        cardId: "card32",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstateOne,
      },
    ],
  },
  {
    tabName: "Hybrid Link",
    tabId: "hybridLink",
    browseTabData: [
      {
        searchName: "Search Any",
        firstBtnName: "RECENTLY CLOSED",
        secondBtnName: "ON SALE",
        filterData: [
          {
            labelName: "COLLECTION",
            option: "All Collection",
          },
          {
            labelName: "PRICE RANGE",
            option: "$0 - $15,000,000",
          },
          {
            labelName: "LOCATION",
            option: "International",
          },
          {
            labelName: "CURRENCY",
            option: "Ethereum",
          },
          {
            labelName: "CATEGORIES",
            option: "Estates",
          },
        ],
        boxDataName: "RARITY",
        rarityData: [
          {
            name: "Common",
          },
          {
            name: "Uncommon",
          },
          {
            name: "Rare",
          },
          {
            name: "Epic",
          },
          {
            name: "Legendary",
          },
          {
            name: "Mythic",
          },
          { name: "Unique" },
        ],
      },
    ],
    browseCardData: [
      {
        cardId: "card33",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: mainRoadImg,
      },
      {
        cardId: "card34",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFront,
      },
      {
        cardId: "card35",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlaza,
      },
      {
        cardId: "card36",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstate,
      },
      {
        cardId: "card37",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: sideShop,
      },
      {
        cardId: "card38",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFrontOne,
      },
      {
        cardId: "card39",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlazaOne,
      },
      {
        cardId: "card40",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstateOne,
      },
    ],
  },
  {
    tabName: "My Store",
    tabId: "myStore",
    browseTabData: [
      {
        searchName: "Search Any",
        firstBtnName: "RECENTLY CLOSED",
        secondBtnName: "ON SALE",
        filterData: [
          {
            labelName: "COLLECTION",
            option: "All Collection",
          },
          {
            labelName: "PRICE RANGE",
            option: "$0 - $15,000,000",
          },
          {
            labelName: "LOCATION",
            option: "International",
          },
          {
            labelName: "CURRENCY",
            option: "Ethereum",
          },
          {
            labelName: "CATEGORIES",
            option: "Estates",
          },
        ],
        boxDataName: "RARITY",
        rarityData: [
          {
            name: "Common",
          },
          {
            name: "Uncommon",
          },
          {
            name: "Rare",
          },
          {
            name: "Epic",
          },
          {
            name: "Legendary",
          },
          {
            name: "Mythic",
          },
          { name: "Unique" },
        ],
      },
    ],
    browseCardData: [
      {
        cardId: "card41",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: mainRoadImg,
      },
      {
        cardId: "card42",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFront,
      },
      {
        cardId: "card43",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlaza,
      },
      {
        cardId: "card44",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstate,
      },
      {
        cardId: "card45",
        name: "Main Road",
        count: "5,777",
        subName: "Ethereum",
        subCount: "20,141",
        img: sideShop,
      },
      {
        cardId: "card46",
        name: "Mall Storefront",
        count: "10,245",
        subName: "Ethereum",
        subCount: "-146,13",
        img: mallStoreFrontOne,
      },
      {
        cardId: "card47",
        name: "Mall Plaza",
        count: "510,245",
        subName: "Ethereum",
        subCount: "50 LAND",
        img: mallPlazaOne,
      },
      {
        cardId: "card48",
        name: "Large Mall Estate",
        count: "810,123",
        subName: "Ethereum",
        subCount: "55 LAND",
        img: largeMallEstateOne,
      },
    ],
  },
];

export {
  sideBarData,
  navbarTabs,
  homeCardsData,
  homeTopStoriesData,
  leaderboardsTableData,
  dashboardYourAssets,
  dashboardPerformanceTable,
  dashboardInviteData,
  communityStoriesData,
  communityDanielInfo,
  communityTrendingData,
  communityDanielAccordian,
  toolsTabsData,
  toolsTableData,
  browseData,
};
